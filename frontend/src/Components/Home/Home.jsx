import React, { useState, useEffect} from 'react'
import './Home.css'
import './Home.scss'
import './Home.css.map'
import video from '../../Assets/Main Assets/splash_-_23011 (1080p).mp4'
import {GrLocation} from 'react-icons/gr'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BiTrip} from 'react-icons/bi'
import {HiFilter} from 'react-icons/hi'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  /*===========================================================*/
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

   /*===========================================================*/
  useEffect(()=>{
    Aos.init({duration:2000})

  },[])
   /*===========================================================*/
   const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    // Mock data for destinations
    const destinations = [
      'dubai',
      'New York',
      'manali',
      'London',
      'Sydney',
      // ... add more destinations as needed
    ];

    // Filter destinations based on the search input
    const filteredResults = destinations.filter((destination) =>
      destination.toLowerCase().includes(searchInput.toLowerCase())
    );

    // Update state with the filtered results
    setSearchResults(filteredResults);
  };

    /*===========================================================*/


  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className='homeContent container'>
        <div className='textDiv'>

          <span data-aos='fade-up' className='smalltext'>
            Our Packages
          </span>
          <h1 data-aos='fade-up' className='homeTitle'>
            Search your Holiday!
          </h1>


        </div>

        <div  data-aos='fade-up' className='cardDiv grid'>
          <div className='destinationInput'>
            <label htmlFor='city'>Search your destination:</label>
            <div className='input flex'>
              <input type='text' placeholder='Enter name here....'
                /*===========================================================*/
                     value={searchInput}
                    onChange={handleSearchInputChange}
                 /*===========================================================*/
               />

              <GrLocation className='icon' />


            </div>
            {/*===========================================================*/}
            <button onClick={handleSearch}>Search</button>
            

          </div>
             {/* Display search results */}
      <div>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
      {/*===========================================================*/}
          <div className='dateInput'>
            <label htmlFor='date'>Select your date:</label>
            <div className='input flex'>
              <input type='date' />

            </div>
          </div>


          <div className='PriceInput'>
            <div className='label_total flex'>
              <label htmlFor='price'>max price:</label>
              <h3 className='total'>₹5000</h3>
            </div>
            <div className='input flex'>
              <input type='range' max='5000' min='1000'></input>
            </div>
          </div>


          <div className="searchOptions flex">
            <HiFilter className="icon"/>
            <span>MORE FILTERS</span>
          </div>
        </div>

        <div  data-aos='fade-up' className='homeFooterIcons flex'>
          <div className='rightIcons'>
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <BiTrip className="icon" />

          </div>
          <div className='leftIcons'>
          <BsListTask className="icon" />
          <TbApps className="icon" />

          </div>
        </div>
      </div>



    </section>
  )
}

export default Home
