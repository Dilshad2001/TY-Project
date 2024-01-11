import React, { useState } from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom'; // Removed unnecessary NavLink imports

import Loginbackgroundimg from '../../../Assets/Main Assets/Loginbackgroungimg.jpg'
import LoginLogo  from '../../../Assets/Main Assets/LoginLogo.png'; // Fixed the import statement

import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { useToast } from '@chakra-ui/toast';
import axios from 'axios';

const Login = () => {

  const toast = useToast();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  console.log(email, password)

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );
      console.log(data, email, password)

      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };


  return (
    <div className="LoginPage flex">
      <div className="container flex">

        <div className='singleDestination'>
          <div className="imageDiv">
            {/* You can add an image here */}
            <img src={Loginbackgroundimg} alt='Loginbackgroungimg image'/>
          </div>

          <div className='textDiv'>
            <h2 className='title'>Let's start your journey with Shaikh Travelers</h2>
            <p>Enjoy the peace of Nature!</p>
          </div>

          <div className='footerDiv flex'>
            <span className='text'>Don't have an account? </span>
            <Link to='/register'>
              <button className='btn'>Sign Up</button>
            </Link>
          </div>
        </div>

        <div className='formDiv flex'>
          <div className='headerDiv'>
            <img src={LoginLogo} alt='LoginLogo image' />
            <h3>Welcome Back User!</h3>
          </div>

          <form action='' className='form grid'>
            <span>Login here</span>

            <div className='inputDiv'>
              <label htmlFor='username'>Email</label>
              <div className='input flex'>
                <FaUserShield className='icon' />
                <input type='text' id='username' placeholder='Enter Username' onChange={(e) => setEmail(e.target.value)}/>
              </div>
            </div>

            <div className='inputDiv'>
              <label htmlFor='password'>Password</label>
              <div className='input flex'>
                <BsFillShieldLockFill className='icon' />
                <input type='password' id='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}/>
              </div>
            </div>

            <button type='submit' className='btn flex' onClick={submitHandler}>
              <span>Login</span>
              <AiOutlineSwapRight className='icon' />
            </button>

            <span className='forgetPassword'>
              Forgot your password? <a href='/forget-password'>Click Here</a>
            </span>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Login;
