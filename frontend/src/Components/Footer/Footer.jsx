import React, {useEffect} from 'react'
import './Footer.css'
import video2 from '../../Assets/Main Assets/video2.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {BiTrip} from 'react-icons/bi'
import {FiChevronRight} from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {
  //lets create a react hook to add a scroll animation..
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])



  return (
  <section className='footer'>
    <div className='videoDiv'>
     <video src={video2} loop autoPlay muted type='video/mp4'></video>
    </div>

    <div className='secContent container'>
      <div className='contactDiv flex'>
        <div  data-aos='fade-up' className='text'>
          <small>Keep in Touch</small>
          <h2>Travel with shaikh.</h2>
        </div>


        <div className='inputDiv flex'>
          <input  data-aos='fade-up' type='text' placeholder='Enter Email Address'></input>
          <button  data-aos='fade-up' className='btn flex' type='submit'>
             SEND <FiSend className='icon'></FiSend>
          </button>
        </div>
      </div>


      <div className='footerCard flex'>
      <div className='footerIntro flex'>
        <div className='logoDiv'>
          <a href='#' className='logo flex'>
            <MdOutlineTravelExplore className='icon'/>ShaikhTravel.
          </a>
        </div>

        <div  data-aos='fade-up' className='footerParagraph'>
        "Embark on a journey of discovery and wanderlust with 
         Our mission is to inspire and facilitate your exploration of the world's most captivating destinations. 
         From the pristine beaches of remote islands to the bustling streets of iconic cities, we curate exceptional travel experiences that leave lasting memories.
         With a commitment to exceptional service, curated itineraries, 
         and immersive cultural encounters, we invite you to join us in unlocking the beauty and diversity our planet has to offer. 
         Let us be your guide to creating unforgettable moments and shaping stories that will be cherished for a lifetime."
        </div>

        <div  data-aos='fade-up' className='footerSocials'>
          <AiOutlineTwitter className='icon'/>
          <AiFillYoutube className='icon'/>
          <AiFillInstagram className='icon'/>
          <BiTrip className='icon'/>
        </div>
      </div>
       
      <div className='footerLinks grid'>

      {/*Group one*/}
        <div  data-aos='fade-up'  data-aos-duration='3000' className='linkGroup'>
          <span className='groupTitle'>
            OUR AGENCY
          </span>
          <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            Services
          </li>

          <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            Agency
          </li>

          <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            Insurance
          </li>

          <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            Tourism
          </li>

          <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            Payment
          </li>
        </div>

            {/*Group two*/}
            <div data-aos='fade-up'  data-aos-duration='4000' className='linkGroup'>
          <span className='groupTitle'>
            PARTENERS
          </span>
          <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            Bookings
          </li>

          <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            Rentcars
          </li>

          <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            HostelWorld
          </li>

          <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            Trivago
          </li>

          <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            TripAdvisor
          </li>
        </div>
           
                   {/*Group three*/}
                   <div data-aos='fade-up' data-aos-duration='5000' className='linkGroup'>
          <span className='groupTitle'>
            LAST MINUTE
          </span>
          <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            London
          </li>

          <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            Egypt
          </li>

          <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            Dubai
          </li>

          <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            India
          </li>

          <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            Maldives Island
          </li>
          
        </div>



    


      </div>

      <div className='footerDiv flex'>
      <small>BEST TRAVELER WEBSITE</small>
      <small>COPYRIGHTS RESERVED - SHAIKH 2023</small>

      </div>

      </div>
    </div>
  </section>
  )
}

export default Footer
