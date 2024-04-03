// AddEditUser.jsx

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { storage, db } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection, serverTimestamp, updateDoc, doc, getDoc } from 'firebase/firestore';
import Banner2 from '../components/Banner2';

const initialState = {
  name: "",
  email: "",
  collegeName: "",
  location: "",
  description: "",
  brief: "",
  photo: "",
  collegeLogo: ""
};

const buttonStyle = {
  backgroundColor: '#2185d0',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const inputStyle = {
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  marginBottom: '10px',
  width: '100%', // Adjust width to fill the container
};

const errorStyle = {
  color: 'red',
};

const formContainerStyle = {
  border: '2px solid #ccc',
  borderRadius: '8px',
  padding: '20px',
};

const AddEditUser = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const [data, setData] = useState(initialState);
  const { name, email, collegeName, location, description, brief, photo, collegeLogo } = data;
  const [photoFile, setPhotoFile] = useState(null); // Separate state for photo file
  const [collegeLogoFile, setCollegeLogoFile] = useState(null); // Separate state for college logo file
  const [photoProgress, setPhotoProgress] = useState(null); // Separate progress state for photo
  const [collegeLogoProgress, setCollegeLogoProgress] = useState(null); // Separate progress state for college logo
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // If id is provided in the URL, fetch the existing user data
      const fetchData = async () => {
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      };
      fetchData();
    }
  }, [id]);

  useEffect(() => {
    const uploadPhoto = () => {
      const name = new Date().getTime() + photoFile.name;
      const storageRef = ref(storage, photoFile.name);
      const uploadTask = uploadBytesResumable(storageRef, photoFile);

      uploadTask.on("state_changed", (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPhotoProgress(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Photo Upload is Pause");
            break;
          case 'running':
            console.log("Photo Upload is Running");
            break;
          default:
            break;
        }
      }, (error) => {
        console.log(error)
      },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, photo: downloadURL }));
          });
        }
      );
    };

    photoFile && uploadPhoto()
  }, [photoFile]);

  useEffect(() => {
    const uploadCollegeLogo = () => {
      const name = new Date().getTime() + collegeLogoFile.name;
      const storageRef = ref(storage, collegeLogoFile.name);
      const uploadTask = uploadBytesResumable(storageRef, collegeLogoFile);

      uploadTask.on("state_changed", (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setCollegeLogoProgress(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("College Logo Upload is Pause");
            break;
          case 'running':
            console.log("College Logo Upload is Running");
            break;
          default:
            break;
        }
      }, (error) => {
        console.log(error)
      },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, collegeLogo: downloadURL }));
          });
        }
      );
    };

    collegeLogoFile && uploadCollegeLogo()
  }, [collegeLogoFile]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {}
    if (!name) {
      errors.name = "Name is Required"
    }

    if (!email) {
      errors.email = "Email is Required"
    }

    if (!collegeName) {
      errors.collegeName = "College Name is Required"
    }

    if (!location) {
      errors.location = "Location is Required"
    }

    if (!description) {
      errors.description = "Description is Required"
    }

    if (!brief) {
      errors.brief = "Brief is Required"
    }

    return errors;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validate();
    if (Object.keys(errors).length) return setErrors(errors);
    setIsSubmit(true);

    if (id) {
      // If id is provided, update the existing user
      await updateDoc(doc(db, "users", id), {
        ...data,
        timestamp: serverTimestamp()
      });
    } else {
      // If id is not provided, add a new user
      await addDoc(collection(db, "users"), {
        ...data,
        timestamp: serverTimestamp()
      });
    }

    navigate("/");
  };

  return (
    <>
    <Banner2/>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '50%' }}>
        {isSubmit ? <div>Loading...</div> : (
          <>
            <h2>{id ? 'Edit Your Experience' : 'Add Your Experience'}</h2>
            <div style={formContainerStyle}>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  {errors.name && <div style={errorStyle}>{errors.name}</div>}
                </div>
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  {errors.email && <div style={errorStyle}>{errors.email}</div>}
                </div>
                <div>
                  <label>College Name</label>
                  <input
                    type="text"
                    name="collegeName"
                    placeholder="Enter College Name"
                    value={collegeName}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  {errors.collegeName && <div style={errorStyle}>{errors.collegeName}</div>}
                </div>
                <div>
                  <label>Location</label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter Location"
                    value={location}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  {errors.location && <div style={errorStyle}>{errors.location}</div>}
                </div>
                <div>
                  <label>Description</label>
                  <textarea
                    name="description"
                    placeholder="Enter Description"
                    value={description}
                    onChange={handleChange}
                    style={inputStyle}
                  ></textarea>
                  {errors.description && <div style={errorStyle}>{errors.description}</div>}
                </div>
                <div>
                  <label>Brief</label>
                  <textarea
                    name="brief"
                    placeholder="Enter Brief"
                    value={brief}
                    onChange={handleChange}
                    style={inputStyle}
                  ></textarea>
                  {errors.brief && <div style={errorStyle}>{errors.brief}</div>}
                </div>
                <div>
                  <label>Photo</label>
                  <input
                    type="file"
                    onChange={(e) => setPhotoFile(e.target.files[0])}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label>College Logo</label>
                  <input
                    type="file"
                    onChange={(e) => setCollegeLogoFile(e.target.files[0])}
                    style={inputStyle}
                  />
                </div>
                <button
                  type="submit"
                  disabled={(photoProgress !== null && photoProgress < 100) || (collegeLogoProgress !== null && collegeLogoProgress < 100)}
                  style={buttonStyle}
                >
                  Submit
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
    </>
  )
}

export default AddEditUser;
