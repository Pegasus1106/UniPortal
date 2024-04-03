import React from 'react';
import Banner4 from '../components/Banner4';

const AboutPage = () => {
  return (
    <>
      <div className="frame-container">
        <Banner4 />
        <div className="container mx-auto px-4 py-8">
          <p className="text-lg mb-6">
            UniPortal is an exclusive platform tailored for accessing comprehensive information on Indian colleges. It offers a user-friendly interface with specialized features catering to the needs of prospective students.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-blue">Features</h2>
          <ul className="list-disc ml-6 mb-6">
            <li><strong>Search by Course and Location:</strong> <p>Users can efficiently search for colleges based on specific courses and desired locations, enhancing the precision of their college exploration.</p></li>
            <li><strong>Advanced Filters:</strong> <p>The platform provides filters for location, duration, and average fees, enabling users to refine their search results according to their preferences and constraints.</p></li>
            <li><strong>Detailed College Listings:</strong> <p>UniPortal furnishes detailed information about various colleges, including their courses, facilities, faculty, and more. Users can easily navigate through these listings to find relevant details.</p></li>
            <li><strong>Seamless Redirect:</strong> <p>Upon selecting a specific college from the list, users are seamlessly redirected to the official page of that college for further exploration and detailed insights.</p></li>
            <li><strong>Student Experience Sharing:</strong> <p>UniPortal facilitates a platform for students to share their experiences, opinions, and insights about different colleges. Users can add, edit, or delete their own experiences and also peruse through the experiences shared by other students.</p></li>
            <li><strong>Secure Authentication:</strong> <p>The platform ensures secure access through a robust login/logout feature, accommodating both email and Google authentication methods. This feature enhances user privacy and data security.</p></li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-blue">Technologies Used</h2>
          <p className="text-lg mb-6">
            <strong>UniPortal is built using the following technologies:</strong>
          </p>

          <ul className="list-disc ml-6 mb-6">
            <li>React (Vite)</li>
            <li>Node.js</li>
            <li>Firebase</li>
            <li>Tailwind CSS</li>
            <li>Google Authentication</li>
          </ul>
          <p className="text-lg mb-6">
            UniPortal emerges as a comprehensive solution for students seeking accurate and insightful information about Indian colleges. With its intuitive interface and diverse functionalities, it streamlines the college selection process and empowers users to make informed decisions about their academic pursuits.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
