import React, {useEffect} from 'react'
import './Main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import { Link } from 'react-router-dom';

import img from '../../Assets/Main-Assets/Goa img1.jpg'
import img2 from'../../Assets/Main-Assets/Agra img2.jpg'
import img3 from '../../Assets/Main-Assets/Manali waterfall img3.jpg'
import img4 from '../../Assets/Main-Assets/Shimla img4.jpg'
import img5 from '../../Assets/Main-Assets/Sikkim img5.jpg'
import img6 from '../../Assets/Main-Assets/Jaisalmer img6.jpeg'
import img7 from '../../Assets/Main-Assets/Amritsar img7.jpg'
import img8 from '../../Assets/Main-Assets/jaipur jal img8.jpg'
import img9 from '../../Assets/Main-Assets/img9.jpg'
import img10 from '../../Assets/Main-Assets/kerla img10.jpg'

import TripDetail from './TripDetail/TripDetail'

import Aos from 'aos'
import 'aos/dist/aos.css'

  const Data =[
  {
    id:1,
    imgSrc: img,
    destTitle:'Goa Beach Paradise',
    location:'Goa',
    grade:'BEACH RELAX',
    fees:'₹8000',
    description:'the new moon, Goas beaches are known the world over. Fringed by swaying palm and coconut trees with cool and comfortable shacks offering a variety of refreshments, Goas 103 km coastline is blessed with the most enchanting beaches lapped by the Arabian Sea.s'    
  },

 {
    id:2,
    imgSrc:img2,
    destTitle:'Taj Mahal',
    location:'Agra',
    grade:'CULTURAL RELAX',
    fees:'₹25,000',
    description:'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.'
    
  },

  {
    id:3,
    imgSrc:img3,
    destTitle:'Jogni Waterfall Road',
    location:' Manali',
    grade:'CULTURAL RELAX',
    fees:'₹30,000',
    description:'Manali is synonymous streams and birdsong, forests and orchards and grandees of snow-capped mountains. Manali is the real starting point of an ancient trade route which crosses the Rohtang and Baralacha passes, and runs via Lahul and Ladakh to Kashmir while divergent road connects it with Spiti.' ,
    
  },


  {
    id:4,
    imgSrc:img4,
    destTitle:'Shaily Peak',
    location:'Shimla',
    grade:'CULTURAL RELAX',
    fees:'₹35,237',
    description:'Shimla, city, capital of Himachal Pradesh state, northwestern India. The city lies northeast of Chandigarh on a ridge of the Himalayan foothills, at an elevation of about 7,100 feet (2,200 metres). Shimla was built by the British on land they had retained after the Gurkha War of 1814–16 and was used for resting troops.',
    
  },

  {
    id:5,
    imgSrc:img5,
    destTitle:'Buddha Park',
    location:'Sikkim',
    grade:'CULTURAL RELAX',
    fees:'₹40,000',
    description:'The Buddha Park of Ravangla, also known as Tathagata Tsal, is situated near Rabong (Ravangla) in South Sikkim district, Sikkim, India. It was constructed between 2006 and 2013 and features a 130-foot (40 m) high statue of the Buddha as its centerpiece.',

    
  },


  {
    id:6,
    imgSrc:img6,
    destTitle:'Bada Bagh ',
    location:' Jaisalmer',
    grade:'CULTURAL RELAX',
    fees:'₹45,000',
    description:'This is a popular site because it is a garden that has the cenotaphs of all the Maharajas and other prestigious family members of Jaisalmer; all royal Rajputs kings of 6 centuries! Bada Bagh is actually located on a small hillock and the entrance to the cenotaphs is set at the bottom of the hill.',
    
  },


  {
    id:7,
    imgSrc:img7,
    destTitle:'Golden Temple',
    location:'Amritsar',
    grade:'CULTURAL RELAX',
    fees:'₹50,000',
    description:'Amritsar is the largest and most important city in Punjab and is a major commercial, cultural, and transportation centre. It is also the centre of Sikhism and the site of the Sikhs principal place of worship—the Harmandir Sahib, or Golden Temple.',
    
  },


  {
    id:8,
    imgSrc:img8,
    destTitle:'Jal Mahal',
    location:'Jaipur',
    grade:'CULTURAL RELAX',
    fees:'₹55,000',
    description:'Jal Mahal is a palace in the middle of the Man Sagar Lake in Jaipur city, the capital of the state of Rajasthan, India. The palace was originally constructed around 1699; the building and the lake around it were later renovated and enlarged in the early 18th century by Maharaja Jai Singh II of Amber',
    
  },

  {
    id:9,
    imgSrc:img9,
    destTitle:'Ladakh',
    location:'Himachal Pradesh',
    grade:'CULTURAL RELAX',
    fees:'₹70,000',
    description:'A road trip through this enchanted land will have you cruising upon some of the highest motorable passes in the world while basking in the warm tranquility of postcard-pretty Tibetan Buddhist monasteries that cast a shadow upon a landscape that displays only the best that nature ',
    
  },

  {
    id:10,
    imgSrc:img10,
    destTitle:'kumarakom ',
    location:'Kerla',
    grade:'CULTURAL RELAX',
    fees:'₹60,500',
    description:'Kumarakom is an unbelievably beautiful paradise of mangrove forests, emerald green paddy fields and coconut groves interspersed with enchanting waterways and canals adorned with white lilies.',
    
  },

]
const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);


  return (
    <section className='main container section'>
    <div className='secTitle'>
      <h3 data-aos='fade-right' className='title'>
        Most visited destinations
      </h3>
    </div>

    <div className='secContent.grid'>
    
    {
      Data.map(({id ,imgSrc , destTitle, location, grade, fees, description })=>{
        return (

          <div key={id} data-aos='fade-up' className='singleDestination'>
            <div className="imageDiv">
              <img src={imgSrc} alt={destTitle} />
            </div>

            <div className='cardInfo'>
              <h4 className='destTitle'>{destTitle}</h4>
              <span className='continent flex'>
                <HiOutlineLocationMarker className='icon' />
                <span className='name'>{location}</span>
              </span>


              <div className='fees flex'>
              <div className='grade'>
                <span>{grade}<small>+1</small></span>
              </div> 

               <div className='price'>
                <h5>{fees}</h5>
              </div> 
              </div>

              <div className='desc'>
              <p>{description}</p>
            </div>

            <Link to={`/trip/${id}`} className='btn flex'> 
              DETAILS <HiOutlineClipboardCheck className='icon' />
              </Link>
            </div>            
          </div>

        );
      })
    }
    </div>
    </section>
  );
};


    export default Main;
