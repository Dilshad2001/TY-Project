import React, { useState } from 'react';
import './navbar.css';

import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TiThMenu } from 'react-icons/ti'; 
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState('navBar');
  const isAuthenticated = localStorage.getItem('userInfo');
  const handleLogout = () => {
    // Clear the user's authentication information from localStorage
    localStorage.removeItem('userInfo');
    navigate('/login')
  };

  // function to toggle navbar
  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  // function to remove navbar
  const removeNavbar = () => {
    setActive('navBar');
  };

  return (
    // <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <a href='/' className='logo flex'>
            <h1>
              <MdOutlineTravelExplore className='icon' /> ShaikhTravels.
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className='navLists flex'>
            <li className='navItems'>
              <a href='/' className='navLink'>
                Home
              </a>
            </li>

            {/* Rest of is navigation items */}
            <li className="navItems">
              <a href="/packages" className="navLink">Packages</a>
            </li>

            <li className="navItems">
              <a href="/Trekking " className="navLink">Trekking </a>
            </li>

            <li className="navItems">
              <a href="/about" className="navLink">About</a>
            </li>
            
            <li className="navItems">
              <a href="/contact" className="navLink">Contact</a>
            </li>

            {isAuthenticated ? (
              <button className='btn' onClick={handleLogout}>
                <Link to='/logout' className='logout'>
                  Logout
                </Link>
              </button>
            ) : (
              <button className='btn'>
                <Link to='/login' className='login'>
                  Login
                </Link>
              </button>
            )}

            <button className='btn'>
              <a href='/book' className='Book Now'>
                Book Now
              </a>
            </button>

            <button className='btn'>
              <a href='/register' className='Register'>
                Register
              </a>
            </button>
          </ul>

          <div onClick={removeNavbar} className='closeNavbar'>
            <AiFillCloseCircle className='icon' />
          </div>
        </div>

        <div onClick={showNav} className='toggleNavbar'>
          <TiThMenu className='icon' /> 
        </div>
      </header>
    // </section>
  );
};

export default Navbar;
