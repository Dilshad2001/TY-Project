import React, { useState } from 'react';
import './SignUp.scss'; // Create a SignUp.scss file for styling
import { Link } from 'react-router-dom';

import SignUpPic from '../../../Assets/Main Assets/Loginpic.jpg';
import SignUpLogo from '../../../Assets/Main Assets/LoginLogo.png';
import { FaUser } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { useNavigate } from "react-router";
import { useToast } from "@chakra-ui/toast";
import axios from 'axios'

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();

  const toast = useToast();

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    if (password !== confirmpassword) {
      toast({
        title: "Passwords Do Not Match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    console.log(name, email, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user",
        {
          name,
          email,
          password,
        },
        config
      );
      console.log(data);
      toast({
        title: "Registration Successful",
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
    <div className="SignUpPage flex">
      <div className="container flex">

        <div className='singleDestination'>
          <div className="imageDiv">
           <img src={SignUpPic} alt='SignUpPic image' />
          </div>

          <div className='textDiv'>
            <h2 className='title'>Join Shaikh Travelers Today!</h2>
            <p>Discover amazing destinations!</p>
          </div>

          <div className='footerDiv flex'>
            <span className='text'>Already have an account? </span>
            <Link to='/login'>
              <button className='btn'>Login</button>
            </Link>
          </div>
        </div>

        <div className='formDiv flex'>
          <div className='headerDiv'>
            <img src={SignUpLogo} alt='SignUpLogo image' />
            <h3>Create Your Account</h3>
          </div>

          <form action='' className='form grid'>
            {/* Sign-up status will go here */}

            <div className='inputDiv'>
              <label htmlFor='fullName'>Full Name</label>
              <div className='input flex'>
                <FaUser className='icon' />
                <input type='text' id='fullName' placeholder='Enter Full Name' onChange={(e) => setName(e.target.value)}/>
              </div>
            </div>

            <div className='inputDiv'>
              <label htmlFor='email'>Email</label>
              <div className='input flex'>
                <FaUser className='icon' />
                <input type='email' id='email' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}/>
              </div>
            </div>

            <div className='inputDiv'>
              <label htmlFor='password'>Password</label>
              <div className='input flex'>
                <BsFillShieldLockFill className='icon' />
                <input type='password' id='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}/>
              </div>
            </div>

            <div className='inputDiv'>
              <label htmlFor='password'>Confirm Password</label>
              <div className='input flex'>
                <BsFillShieldLockFill className='icon' />
                <input type='password' id='confirm-password' placeholder='Confirm Password' onChange={(e) => setConfirmpassword(e.target.value)} />
              </div>
            </div>

            <button type='submit' className='btn flex' onClick={submitHandler}>
              <span>Sign Up</span>
              <AiOutlineSwapRight className='icon' />
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default SignUp;
