import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card';
import Subset from './Subset';
import Sidebar from '../sidebar/Sidebar';
import Newsletter from "../components/Newsletter";


const Home = () => {
    const [selectedCategory,setSelectedCategory] = useState(null);
    const [subset, setSubset] = useState([]);
    const [isloading, setIsloading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        setIsloading(true)
        fetch("subset.json").then(res => res.json()).then(data => {
          // console.log(data)
          setSubset(data);
          setIsloading(false)
        })
      }, [])



    // handle input change
    const [query, setQuery] = useState("");
    const handleInputChange = (event) => {
        setQuery(event.target.value)
    }

    // filter course by title
    const filteredItems = subset.filter((subset) => subset.Course.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    // console.log(filteredItems)
    // ---------------Radio Filter-------------------

    const handleChange = (event) =>{
        setSelectedCategory(event.target.value)
      }
      
      // -------------Button Based Filter--------------
      const handleClick = (event) =>{
        setSelectedCategory(event.target.value)
      }

      // calculate the index range 
    const calculatePageRange = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return {startIndex, endIndex};
      }
  
      // function for next page
      const nextPage = () => {
        if(currentPage < Math.ceil(filteredItems.length / itemsPerPage)){
          setCurrentPage(currentPage + 1);
        }
      }
      // function for the previous page
      const prevPage = () => {
        if(currentPage > 1){
          setCurrentPage(currentPage - 1)
        }
      }

      // const getTotalCoursesAvailable = () => {
      //   return filteredData(subset, selectedCategory, query).length;
      // }

      
      // Main function
    const filteredData = (subset, selected, query) => 
    {
        let filteredSubset = subset;
  
        // Filtering input Items
        if(query){
          filteredSubset = filteredItems;
        }
  
        // Catagory Filtering
        if(selected){
          filteredSubset = filteredSubset.filter(({State, City, Duration, Rating,AverageFee,AcceptanceRate}) => (
            
            State.toLowerCase() === selected.toLowerCase() ||
            City.toLowerCase() === selected.toLowerCase() ||
            
            parseInt(Duration) === parseInt(selected) ||
            parseInt(AcceptanceRate) <= parseInt(selected) ||
            parseInt(AverageFee) <= parseInt(selected)
            
          )
          );
          


          console.log(filteredSubset);
        }
        // Slice the data based on current page
        const {startIndex,endIndex} = calculatePageRange();
        filteredSubset = filteredSubset.slice(startIndex, endIndex)
        return filteredSubset.map((data,i) => <Card key={i} data={data}/>)
    
    }

    const result = filteredData(subset, selectedCategory, query);


    // console.log(query)
return (
  <>
    <div>
      <Banner query={query} handleInputChange={handleInputChange}/>

      {/* Main content */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* left side */}
      <div className="bg-white p-4 rounded">
      <Sidebar handleChange={handleChange} handleClick={handleClick}/>
      </div>
      {/* Main Card */}
      <div className="col-span-2 bg-white p-4 rounded-sm">
        {
            isloading ? (<p className="font-medium"> Loading...</p>) : result.length > 0 ? (<Subset result={result}/>) : <>
            <h3 className="text-lg font-bold mb-2">{result.length} Courses Available</h3>
            <p>No data found!</p>
            </>
        }
        
        {/* pagination here */}
        {
  filteredItems.length > 0 ? (
    <div className="flex justify-center mt-4 space-x-8">
      <button 
        onClick={prevPage} 
        disabled={currentPage === 1} 
        style={{
          marginRight: 'auto', // Move the Previous button to the left
          textDecoration: 'none',
          cursor: 'pointer',
          visibility: currentPage === 1 ? 'hidden' : 'visible' // Hide if currentPage is 1
        }}
        className="hover:underline"
      >
        Previous
      </button>
      {/* <span className="mx-2">Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span> */}
      <button 
        onClick={nextPage} 
        disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage) || filteredItems.length <= itemsPerPage} 
        style={{
          marginLeft: 'auto', // Move the Next button to the right
          textDecoration: 'none',
          cursor: 'pointer',
          visibility: currentPage === Math.ceil(filteredItems.length / itemsPerPage) || filteredItems.length <= itemsPerPage ? 'hidden' : 'visible' // Hide if last page or less items than itemsPerPage
        }}
        className="hover:underline"
      >
        Next
      </button>
    </div>
  ) : null
}

            
          
      </div>
      {/* <div className="bg-white p-4 rounded"><Newsletter/></div> */}
      </div>
    
    
    </div>
    </>
  )
}

export default Home