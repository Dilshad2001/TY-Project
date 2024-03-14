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
import  About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import BookNow from  './Components/Book Now/BookNow'
import BusPackage from './Components/Packages/Bus/BusPackage';
import TrainPackage from './Components/Packages/Train/TrainPackage';
import FlightPackage from './Components/Packages/Flight/FlightPackage';
import PaymentGateway from './Components/PaymentGateway/PaymentGateway';
import PaymentConfirmation from './Components/PaymentGateway/PaymentConfirmation';

const App = () => {
  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path="/" exact Component={home} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={SignUp} />
        <Route path="/book-now" Component={BookNow} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/bus" element={<BusPackage />} />
        <Route path="/packages/train" element={<TrainPackage />} />
        <Route path="/packages/flight" element={<FlightPackage />} />
        <Route path="/package/:id" element={<PackageDetail />} />
        <Route path='/Trekking' element={<Trekking />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path="/payment" component={PaymentGateway} />
        <Route path="/confirmation" component={PaymentConfirmation} />
    
      </Routes>
      
      

    </div>
  )
}

export default App;
