import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Search() {
  const [subset, setSubset] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [queryCourse, setQueryCourse] = useState('');
  const [queryCity, setQueryCity] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch("subset.json")
      .then(res => res.json())
      .then(data => {
        setSubset(data);
        setSearchResults(data); // Initialize searchResults with all data
        setIsLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleCourseChange = (event) => {
    setQueryCourse(event.target.value);
  }

  const handleCityChange = (event) => {
    setQueryCity(event.target.value);
  }

  const handleSearch = () => {
    const filteredResults = subset.filter(item => {
      const courseMatch = queryCourse ? item.Course.toLowerCase().includes(queryCourse.toLowerCase()) : true;
      const cityMatch = queryCity ? item.City.toLowerCase().includes(queryCity.toLowerCase()) : true;
      return courseMatch && cityMatch;
    });
    setSearchResults(filteredResults);
    setCurrentPage(1); // Reset current page to 1 after search
  }

  const redirectToWebsite = (link) => {
    window.open(link, "_blank");
  }

  const handleClear = () => {
    setQueryCourse('');
    setQueryCity('');
    setSearchResults(subset);
    setCurrentPage(1); // Reset current page to 1 after clearing
  }

  // Logic for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14'>
      <h1 className='text-5xl font-bold text-primary mb-3'>Colleges at Your Fingertips:  <span className='text-blue'>Search Now!!</span> </h1>
      <p className='text-lg text-black/70 mb-8 '>Easily Find Colleges by Course and City! </p>
      <div className='flex justify-start md:flex-row flex-col md:gap-0 gap-4 '>
        <input className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within: focus-within:ring-indigo-600 md:w-1/2 w-full '  type="text" placeholder=" Search by course" value={queryCourse} onChange={handleCourseChange} />
        <input className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within: focus-within:ring-indigo-600 md:w-1/2 w-full ' type="text" placeholder=" Search by city" value={queryCity} onChange={handleCityChange} />
        <button className='bg-blue py-2 px-8 text-white md:rounded-none rounded' onClick={handleSearch}>Search</button>
        <button className='bg-gray-200 py-2 px-8 text-gray-700 md:rounded-none rounded' onClick={handleClear}>Clear</button>
      </div>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : currentItems.length === 0 ? (
          <div className="text-left mt-4">No result found!!</div>
        ) : (
          <>
            <table className="data-table">
              <thead>
                <tr>
                  <th>College</th>
                  <th>Rating</th>
                  <th>Course</th>
                  <th>Duration</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Country</th>
                  <th>Average Fee</th>
                  <th>Acceptance Rate</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map(item => (
                  <tr key={item.id} onClick={() => redirectToWebsite(item.Link)} style={{ cursor: 'pointer' }}>
                    <td>{item.College}</td>
                    <td>{item.Rating}</td>
                    <td>{item.Course}</td>
                    <td>{item.Duration}</td>
                    <td>{item.City}</td>
                    <td>{item.State}</td>
                    <td>{item.Country}</td>
                    <td>{item.AverageFee}</td>
                    <td>{item.AcceptanceRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
              <button style={{ padding: '8px 16px', border: 'none', backgroundColor: 'transparent', color: '#333', cursor: 'pointer', textDecoration: 'underline', visibility: currentPage === 1 ? 'hidden' : 'visible' }} onClick={() => paginate(currentPage - 1)}>Previous</button>
              <button style={{ padding: '8px 16px', border: 'none', backgroundColor: 'transparent', color: '#333', cursor: 'pointer', textDecoration: 'underline', visibility: indexOfLastItem >= searchResults.length ? 'hidden' : 'visible' }} onClick={() => paginate(currentPage + 1)}>Next</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Search;
