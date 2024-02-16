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



const App = () =>  {
  return (
    <div className='App'>
      <Navbar/>

    <Routes>
      <Route path="/" exact Component={home} />
      <Route path="/login" Component={Login} />
      <Route path="/register" Component={SignUp} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/package/:id" element={<PackageDetail />} />
      <Route path='/Trekking' element={<Trekking/>}/>
      
      

    </Routes>

    </div>
  )
}

export default App;
