import React from 'react';

const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.75)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalContentStyle = {
  width: '500px', // Adjust the width as needed
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
};

const modalHeaderStyle = {
  fontSize: '1.5rem',
  marginBottom: '1rem',
};

const imageContainerStyle = {
  height: '150px', // Adjust the maximum height as needed
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '1rem', // Add marginBottom to create space between image and card content
};

const imageStyle = {
  maxHeight: '100%', // Ensure the image fits within the container
  maxWidth: '100%', // Ensure the image fits within the container
  objectFit: 'contain', // Maintain aspect ratio while fitting within container
  borderRadius: '8px', // Adjusted border radius
};




const cardContentStyle = {
  marginTop: '1rem',
  border: '1px solid #ccc', // Add border
  padding: '10px', // Add padding
};

const closeButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#000',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const ModalComp = ({ open, setOpen, user }) => {
  if (!user) {
    return null;
  }

  return (
    <div style={{ ...modalStyle, display: open ? 'flex' : 'none' }}>
      <div style={modalContentStyle}>
        <div style={modalHeaderStyle}>User Details</div>
        <div style={imageContainerStyle}>
          {user.photo && (
            <img src={user.photo} alt="User" style={imageStyle} />
          )}
          {user.collegeLogo && (
            <img src={user.collegeLogo} alt="College Logo" style={imageStyle} />
          )}
        </div>
        <div style={cardContentStyle}>
          <div><strong>Name:</strong> {user.name}</div>
          <div><strong>Email:</strong> {user.email}</div>
          <div><strong>College Name:</strong> {user.collegeName}</div>
          <div><strong>Location:</strong> {user.location}</div>
          <div><strong>Description:</strong> {user.description}</div>
          <div><strong>Brief:</strong> {user.brief}</div> {/* Include the Brief field */}
        </div>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button style={closeButtonStyle} onClick={() => setOpen(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ModalComp;
