//import React, { Component } from 'react';
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Authentication/Login/Login';
import { Route, Routes } from 'react-router-dom';
import home from './Components/Main Home/home';
import SignUp from './Components/Authentication/SignUp/SignUp';
import Packages from './Components/Packages/Packages';
import PackageDetail from './Components/Packages/PackageDetail'; // Import the PackageDetail Component
import Trekking from './Components/Trekking/Trekking';
import Footer from './Components/Footer/Footer';
import  About from './Components/About/About'
import Contact from './Components/Contact/Contact'
//import BookNow from  './Components/Book Now/BookNow'

const App = () => {
  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path="/" exact Component={home} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={SignUp} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/package/:id" element={<PackageDetail />} />
        <Route path='/Trekking' element={<Trekking />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
    
      </Routes>
      
      

    </div>
  )
}

export default App;
