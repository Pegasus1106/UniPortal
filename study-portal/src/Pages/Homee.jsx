import React, { useEffect, useState } from 'react';
import { db } from "../firebase";
import { collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import ModalComp from '../components/ModalComp';
import '../Home.css';
import Banner1 from '../components/Banner1';

const Homee = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setUsers(list);
      setLoading(false);
    }, (error) => {
      console.log(error);
    });
    return () => {
      unsub();
    }
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      const updatedUsers = users.filter(user => user.id !== id);
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  const handleView = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  return (
  <>
  <Banner1/>
    <div className="container">
      {loading ? (
        <div>Loading...</div>
      ) : users.length === 0 ? (
        <div>No records found.</div>
      ) : (
        <div className="grid">
          {users.map((item) => (
            <div key={item.id} className="card">
              <div className="card-images">
                <img
                  src={item.photo}
                  alt="user"
                  className="user-image"
                />
                <img
                  src={item.collegeLogo} // Displaying College Logo field
                  alt="college logo"
                  className="college-logo"
                />
              </div>
              <div className="card-content">
                <h3 className="card-header">{item.name}</h3>
                <p className="card-meta">College: {item.collegeName}</p>
                <p className="card-meta">Location: {item.location}</p>
                <p className="card-description">{item.description}</p>
              </div>
              <div className="card-actions">
                <Link to={`/edit/${item.id}`}>
                  <button className="btn primary">Edit</button>
                </Link>
                <button className="btn green" onClick={() => handleView(item)}>View</button>
                <button className="btn red" onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <ModalComp open={open} setOpen={setOpen} user={selectedUser} handleDelete={handleDelete} />
    </div>
    </>
  );
}

export default Homee;
