// Packages.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Aos from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import './Package.css'; // Import the specific CSS file for Packages
//Travlling Packges imports
import imgTravlling1 from '../../Assets/Main-Assets/Goa img1.jpg'
import imgTravlling2 from '../../Assets/Main-Assets/Agra img2.jpg'
import imgTravlling3 from '../../Assets/Main-Assets/Manali waterfall img3.jpg'
import imgTravlling4 from '../../Assets/Main-Assets/Shimla img4.jpg'
import imgTravlling5 from '../../Assets/Main-Assets/Sikkim img5.jpg'
import imgTravlling6 from '../../Assets/Main-Assets/Jaisalmer img6.jpeg'
import imgTravlling7 from '../../Assets/Main-Assets/Amritsar img7.jpg'
import imgTravlling8 from '../../Assets/Main-Assets/jaipur jal img8.jpg'

//Rafting Packages imports
import imgRafting9 from '../../Assets/Rafting Assets/Rafting Kullu.jpg'
import imgRafting10 from '../../Assets/Rafting Assets/Rafting ganga.jpg'
import imgRafting11 from '../../Assets/Rafting Assets/Rafting Darjling.jpg'
import imgRafting12 from '../../Assets/Rafting Assets/Rafting Coorg.jpg'
import imgRafting13 from '../../Assets/Rafting Assets/Rafting Maharashtra.jpg'
import imgRafting14 from '../../Assets/Rafting Assets/Rafting Yamuna.jpg'
import imgRafting15 from '../../Assets/Rafting Assets/Rafting spiti.jpg'
import imgRafting16 from '../../Assets/Rafting Assets/Rafting Arunachal Pradesh.jpg'
//Trekking Packages imports
import imgTrekking17 from '../../Assets/Trekking Assets/Treak chadar.jpg'
import imgTrekking18 from '../../Assets/Trekking Assets/Treak kasmir.jpg'
import imgTrekking19 from '../../Assets/Trekking Assets/Treak Everest.jpg'
import imgTrekking20 from '../../Assets/Trekking Assets/treak bhuran.jpg'
import imgTrekking21 from '../../Assets/Trekking Assets/Treak chopata.jpg'
import imgTrekking22 from '../../Assets/Trekking Assets/Treak sandup.jpg'
import imgTrekking23 from '../../Assets/Trekking Assets/Treak Dzongri.jpg'
import imgTrekking24 from '../../Assets/Trekking Assets/Treak rajmachi.jpg'
//Hotels Packages imports
import imgHotels25 from '../../Assets/Hotels Assets/Hotels goa.jpg'
import imgHotels26 from '../../Assets/Hotels Assets/hotels taj mahal.jpg'
import imgHotels27 from '../../Assets/Hotels Assets/Hotels manali.jpeg'
import imgHotels28 from '../../Assets/Hotels Assets/Hotels simla.jpg'
import imgHotels29 from '../../Assets/Hotels Assets/Hotels sikkim.jpg'
import imgHotels30 from '../../Assets/Hotels Assets/Hotels Jaisalmer.jpg'
import imgHotels31 from '../../Assets/Hotels Assets/Hotels Amritsar.jpg'
import imgHotels32 from '../../Assets/Hotels Assets/Hotels jaipur.jpg'
//Bus Packages imports
//import imgTrekking17 from '../../Assets/Packeges Assets/'
//TrainPackages imports
//import imgTrekking17 from '../../Assets/Packeges Assets/'
//FlightPackages imports
//import imgTrekking17 from '../../Assets/Packeges Assets/'
const packagesTravlling = [
  {
    id:1,
    image: imgTravlling1,
    title:'Goa Beach Paradise',
    location:'Goa',
    grade:'BEACH RELAX',
    fees:'₹15,000',
    description:'the new moon, Goas beaches are known the world over. Fringed by swaying palm and coconut trees with cool and comfortable shacks offering a variety of refreshments, Goas 103 km coastline is blessed with the most enchanting beaches lapped by the Arabian Sea.s'
  },
 {
    id:2,
    image:imgTravlling2,
    title:'Taj Mahal',
    location:'Agra',
    grade:'CULTURAL RELAX',
    fees:'₹25,000',
    description:'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.'
    
  },

  {
    id:3,
    image:imgTravlling3,
    title:'Jogni Waterfall Road',
    location:' Manali',
    grade:'CULTURAL RELAX',
    fees:'₹30,000',
    description:'Manali is synonymous streams and birdsong, forests and orchards and grandees of snow-capped mountains. Manali is the real starting point of an ancient trade route which crosses the Rohtang and Baralacha passes, and runs via Lahul and Ladakh to Kashmir while divergent road connects it with Spiti.' ,
    
  },


  {
    id:4,
    image:imgTravlling4,
    title:'Shaily Peak',
    location:'Shimla',
    grade:'CULTURAL RELAX',
    fees:'₹35,237',
    description:'Shimla, city, capital of Himachal Pradesh state, northwestern India. The city lies northeast of Chandigarh on a ridge of the Himalayan foothills, at an elevation of about 7,100 feet (2,200 metres). Shimla was built by the British on land they had retained after the Gurkha War of 1814–16 and was used for resting troops.',
    
  },

  {
    id:5,
    image:imgTravlling5,
    title:'Buddha Park',
    location:'Sikkim',
    grade:'CULTURAL RELAX',
    fees:'₹40,000',
    description:'The Buddha Park of Ravangla, also known as Tathagata Tsal, is situated near Rabong (Ravangla) in South Sikkim district, Sikkim, India. It was constructed between 2006 and 2013 and features a 130-foot (40 m) high statue of the Buddha as its centerpiece.',

    
  },
  {
    id:6,
    image:imgTravlling6,
    title:'Bada Bagh ',
    location:' Jaisalmer',
    grade:'CULTURAL RELAX',
    fees:'₹45,000',
    description:'This is a popular site because it is a garden that has the cenotaphs of all the Maharajas and other prestigious family members of Jaisalmer; all royal Rajputs kings of 6 centuries! Bada Bagh is actually located on a small hillock and the entrance to the cenotaphs is set at the bottom of the hill.',
    
  },


  {
    id:7,
    image:imgTravlling7,
    title:'Golden Temple',
    location:'Amritsar',
    grade:'CULTURAL RELAX',
    fees:'₹50,000',
    description:'Amritsar is the largest and most important city in Punjab and is a major commercial, cultural, and transportation centre. It is also the centre of Sikhism and the site of the Sikhs principal place of worship—the Harmandir Sahib, or Golden Temple.',
    
  },


  {
    id:8,
    image:imgTravlling8,
    title:'Jal Mahal',
    location:'Jaipur',
    grade:'CULTURAL RELAX',
    fees:'₹55,000',
    description:'Jal Mahal is a palace in the middle of the Man Sagar Lake in Jaipur city, the capital of the state of Rajasthan, India. The palace was originally constructed around 1699; the building and the lake around it were later renovated and enlarged in the early 18th century by Maharaja Jai Singh II of Amber',
    
  },
  // Add more packages as needed
];
 const packagesRafting = [
  {
    id: 9,
    title: 'Adventures Rafting in Kullu',
    image: imgRafting9, // Use the imported image
    price: '₹999',
    DifficultyLevel: 'Grade I - Grade IV',
    DistanceCovered: '9 km - 36 km',
    description: 'Explore the depths of rever and experience thrilling adventures.',
  },
  {
    id: 10,
    title: 'River Ganga at Rishikesh',
    image: imgRafting10,
    price: '₹1200',
    DifficultyLevel: 'Grade I - Grade IV',
    DistanceCovered: '9 km - 36 km',
    description: 'Relax and unwind on the sandy beaches with crystal-clear waters.',
  },
  {
    id: 11,
    title: 'Teesta River at Sikkim and Darjeeling',
    image: imgRafting11,
    price: '₹1200',
    DifficultyLevel: 'Grade I - Grade IV',
    DistanceCovered: '9 km - 36 km',
    description: 'Relax and unwind on the sandy beaches with crystal-clear waters.',
  },
  {
    id: 12,
    title: 'Barapole River at Coorg',
    image: imgRafting12,
    price: '₹800',
    DifficultyLevel: 'Grade I - Grade IV',
    DistanceCovered: '9 km - 36 km',
    description: 'Discover the city with our guided bus tour.',
  },
  {
    id: 13,
    title: 'Kundalika River at Kolad, Maharashtra',
    image: imgRafting13 ,
    price: '₹1200',
    DifficultyLevel: 'Grade I - Grade IV',
    DistanceCovered: '9 km - 36 km',
    description: 'Embark on an adventurous mountain expedition by bus.',
  },
  {
    id: 14,
    title: 'Yamuna River - Uttarakhand',
    image: imgRafting14,
    price: '₹1500',
    DifficultyLevel: 'Grade I - Grade IV',
    DistanceCovered: '9 km - 36 km',
    description: 'Experience luxury travel with scenic coastal views.',
  },
  {
    id: 15,
    title: 'Spiti River - Himachal Pradesh',
    image: imgRafting15,
    price: '₹1500',
    DifficultyLevel: 'Grade I - Grade IV',
    DistanceCovered: '9 km - 36 km',
    description: 'Experience luxury travel with scenic coastal views.',
  },
  {
    id: 16,
    title: 'Kameng River - Arunachal Pradeshtreat',
    image: imgRafting16,
    price: '₹1500',
    DifficultyLevel: 'Grade I - Grade IV',
    DistanceCovered: '9 km - 36 km',
    description: 'Experience luxury travel with scenic coastal views.',
  },
  
  // Add more packages as needed
];
const packagesTrekking = [
  {
    id: 17,
    title: ' Chadar Trek',
    image: imgTrekking17, // Use the imported image
    price: '₹999',
    description: 'The Chadar Trek, an unmissable name on the list of the top treks in India, is ideal for those looking forward to experiencing the thrill of challenging treks. The trek is popular with adventurers because it tests their endurance at every step, with temperatures as low as 35° Celsius, and allows them to witness the ice age dream of walking on glossy ice sheets called "Barf ki Chadar".',
  },
  {
    id: 18,
    title: 'Kashmir Great Lakes Trek',
    image: imgTrekking18,
    price: '₹1200',
    description: 'The Kashmir Great Lakes Trek, perched at 13,800 ft above sea level, is one of the best places for trekking in India as it treats you with the best views of snow-clad mountains, countless meadows and rocky barren plains.',
  },
  {
    id: 19,
    title: 'Everest Base Camp Trek',
    image: imgTrekking19,
    price: '₹1200',
    description: 'If you are searching for the best trek in India, it is impossible to not hear about the Everest Base Camp Trek. Located at an altitude of 5,550 metres above sea level, the Everest Base Camp Trek will take you through hidden Gompas, breathtaking mountain views, lush green farmlands, dazzling blue fast-flowing rivers and much more.',
  },
  {
    id: 20,
    title: 'Buran Ghati Trek',
    image: imgTrekking20,
    price: '₹800',
    description: 'Situated at an altitude of 15,000 ft, the Buran Ghati Trek has it all - magnificent flora, dense forests, vast green grasslands, glacial lakes, snow-capped peaks, dreamy campsites, gleaming waterfalls and exhilarating passes.',
  },
  {
    id: 21,
    title: 'Chopta Chandrashila Trek from Delhi',
    image: imgTrekking21,
    price: '₹1200',
    description: 'Ranged at an altitude of 13,000 feet, the Chopta Chandrashila Trek has two routes - from Delhi and Rishikesh. The trek expedition from Delhi is rewarding for high altitude trek lovers as it takes them through lush green forests, snow-capped mountains and the breathtaking views of Nandadevi, Bandarpunch, Trisul, Kedar Peak and Chaukhamba peaks.',
  },
  {
    id: 22,
    title: 'Sandakphu Trek',
    image: imgTrekking22,
    price: '₹1500',
    description: 'Located on the edge of Singalila National Park in West Bengal, the Sandakphu Trek rises to an elevation of 11,930 ft above sea level. It is one of the best places for a trekking trip in Eastern India.',
  },
  {
    id: 23,
    title: 'Dzongri Trek',
    image: imgTrekking23,
    price: '₹1500',
    description: 'An astounding peak that reaches up to 4,000 metres above sea level, the Dzongri Trek is one of the best places for trekking in India for people who do not want to go on long and challenging treks. From lush green forests of Oak, Maple and Rhododendron trees to sparkling streams, this beautiful trek unravels the marvels of nature at every step.',
  },
  {
    id: 24,
    title: 'Rajmachi Trek',
    image: imgTrekking24,
    price: '₹1500',
    description: 'The Rajmachi Trek, which you can do from either Lonavala or Karjat, is an exhilarating trek to the two historic forts of Manaranjan Fort and Shriwardhan Fort. Surrounded by immense natural beauty, this is sure to give you ample time to observe the purest form of natural abundance.',
  },
  
  // Add more packages as needed
];
const packagesHotels = [
  {
    id:25,
    title: 'ITC Grand Goa Resort & Spa',
    location:'Goa',
    image: imgHotels25, // Use the imported image
    duration: '8 Days & 7 Nights',
    price: '₹20,000',
    description: 'Nestled in serene south Goa, amidst 1,82,109 m² of lush landscapes & lagoons, the resort offers direct access to the pristine Arossim beach Indo-Portuguese village style architecture Kaya Kalp - The Royal Spa 6 Exotic dining destinations',
  },
  {
    id: 26,
    title: 'Taj Hotel & Convention Centre',
    location:'Agra',
    image: imgHotels26,
    duration: '17 Days & 15 Nights',
    price: '₹80,000',
    description: 'Taj Hotel & Convention Centre, Agra, epitomizes luxury in the heart of the city known for the iconic Taj Mahal. With elegant accommodations, diverse dining options, and state-of-the-art facilities, the hotel offers a blend of modern comfort and cultural charm, making it an ideal destination for both leisure and business travelers.',
  },
  {
    id: 27,
    title: 'Baragarh Resort & Spa, Manali- IHCL SeleQtions',
    location:'Manali',
    image: imgHotels27,
    duration: '5 Days & 4 Nights',
    price: '₹16,000',
    description: 'Baragarh Resort & Spa, Manali, a distinguished IHCL SeleQtions property, invites guests to experience the epitome of luxury amidst the breathtaking landscapes of Manali. With opulent accommodations, a rejuvenating spa, and personalized service, the resort promises a memorable escape into the tranquility of the Himalayas',
  },
  {
    id: 28,
    title: 'Woodays Resort',
    location:'Shimla',
    image: imgHotels28,
    duration: '6 Days & 5 Nights',
    price: '₹18,000',
    description: ' Woodays Resort is a tranquil retreat nestled in natures embrace, offering a serene getaway. With modern amenities, comfortable accommodations, and lush surroundings, it provides an idyllic escape for those seeking relaxation and rejuvenation.',
  },
  {
    id: 29,
    title: 'Rhenock House (a luxury villa)',
    location:'Sikim',
    image: imgHotels29,
    duration: '4 Days & 3 Nights',
    price: '₹14,000',
    description: 'Discover indulgence at Rhenock House, a luxury villa that harmoniously blends modern comforts with colonial charm. Nestled in serene surroundings, this exquisite retreat offers an exclusive escape with personalized service, creating an unforgettable experience for discerning travelers.',
  },
  {
    id: 30,
    title: 'Suryagarh Jaisalmer',
    location:'Jaisalmer',
    image: imgHotels30,
    duration: '8 Days & 7 Nights',
    price: '₹15,000',
    description: 'ESuryagarh in Jaisalmer is a palatial oasis amidst the Thar Desert, where timeless luxury meets Rajasthani grandeur. Immerse yourself in regal hospitality, experience the magic of the golden sands, and revel in the opulence of this iconic heritage hotel.',
  },
  {
    id: 31,
    title: 'Welcomhotel by ITC Hotels, Raja Sansi, Amritsar',
    location:'Amritsar',
    image: imgHotels31,
    duration: '5 Days & 3 Nights',
    price: '₹10,000',
    description: 'Welcomhotel by ITC Hotels in Raja Sansi, Amritsar, offers a seamless blend of modern elegance and traditional charm. With exquisite accommodations and renowned hospitality, it provides a sophisticated retreat near Amritsars cultural and historical attractions.',
  },
  {
    id: 32,
    title: 'The Leela Palace Jaipur',
    location:'Jaipur',
    image: imgHotels32,
    duration: '3 Days & 2 Nights',
    price: '₹13,500',
    description: 'The Leela Palace Jaipur is a palatial masterpiece in the Pink City, embodying grandeur and Rajasthani opulence. With regal accommodations, exquisite dining, and impeccable service, this luxury palace hotel offers an unparalleled experience of luxury and splendor in the heart of Jaipur.',
  },
  
  // Add more packages as needed
];
const packagesBus = [
  {
    id: 1,
    title: 'Adventures Rafting in Kullu',
    image: '', // Use the imported image
    price: '₹999',
    description: 'Explore the depths of rever and experience thrilling adventures.',
  },
  {
    id: 2,
    title: 'Beach Paradise Getaway',
    image: 'package2.jpg',
    price: '₹1200',
    description: 'Relax and unwind on the sandy beaches with crystal-clear waters.',
  },
  {
    id: 3,
    title: 'Beach Paradise Getaway',
    image: 'package2.jpg',
    price: '₹1200',
    description: 'Relax and unwind on the sandy beaches with crystal-clear waters.',
  },
  {
    id: 4,
    title: 'Bus Tour - City Explorer',
    image: 'bus_package_1.jpg',
    price: '₹800',
    description: 'Discover the city with our guided bus tour.',
  },
  {
    id: 5,
    title: 'Bus Adventure - Mountain Expedition',
    image: 'bus_package_2.jpg',
    price: '₹1200',
    description: 'Embark on an adventurous mountain expedition by bus.',
  },
  {
    id: 6,
    title: 'Luxury Bus Package - Coastal Retreat',
    image: 'bus_package_3.jpg',
    price: '₹1500',
    description: 'Experience luxury travel with scenic coastal views.',
  },
  {
    id: 7,
    title: 'Luxury Bus Package - Coastal Retreat',
    image: 'bus_package_3.jpg',
    price: '₹1500',
    description: 'Experience luxury travel with scenic coastal views.',
  },
  {
    id: 8,
    title: 'Luxury Bus Package - Coastal Retreat',
    image: 'bus_package_3.jpg',
    price: '₹1500',
    description: 'Experience luxury travel with scenic coastal views.',
  },
  
  // Add more packages as needed
];
const packagesTrain = [
  {
    id: 1,
    title: 'Adventures Rafting in Kullu',
    image: '', // Use the imported image
    price: '₹999',
    description: 'Explore the depths of rever and experience thrilling adventures.',
  },
  {
    id: 2,
    title: 'Beach Paradise Getaway',
    image: 'package2.jpg',
    price: '₹1200',
    description: 'Relax and unwind on the sandy beaches with crystal-clear waters.',
  },
  {
    id: 3,
    title: 'Beach Paradise Getaway',
    image: 'package2.jpg',
    price: '₹1200',
    description: 'Relax and unwind on the sandy beaches with crystal-clear waters.',
  },
  {
    id: 4,
    title: 'Bus Tour - City Explorer',
    image: 'bus_package_1.jpg',
    price: '₹800',
    description: 'Discover the city with our guided bus tour.',
  },
  {
    id: 5,
    title: 'Bus Adventure - Mountain Expedition',
    image: 'bus_package_2.jpg',
    price: '₹1200',
    description: 'Embark on an adventurous mountain expedition by bus.',
  },
  {
    id: 6,
    title: 'Luxury Bus Package - Coastal Retreat',
    image: 'bus_package_3.jpg',
    price: '₹1500',
    description: 'Experience luxury travel with scenic coastal views.',
  },
  {
    id: 7,
    title: 'Luxury Bus Package - Coastal Retreat',
    image: 'bus_package_3.jpg',
    price: '₹1500',
    description: 'Experience luxury travel with scenic coastal views.',
  },
  {
    id: 8,
    title: 'Luxury Bus Package - Coastal Retreat',
    image: 'bus_package_3.jpg',
    price: '₹1500',
    description: 'Experience luxury travel with scenic coastal views.',
  },
  
  // Add more packages as needed
];
const packagesFlight = [
  {
    id: 1,
    title: 'Adventures Rafting in Kullu',
    image: '', // Use the imported image
    price: '₹999',
    description: 'Explore the depths of rever and experience thrilling adventures.',
  },
  {
    id: 2,
    title: 'Beach Paradise Getaway',
    image: 'package2.jpg',
    price: '₹1200',
    description: 'Relax and unwind on the sandy beaches with crystal-clear waters.',
  },
  {
    id: 3,
    title: 'Beach Paradise Getaway',
    image: 'package2.jpg',
    price: '₹1200',
    description: 'Relax and unwind on the sandy beaches with crystal-clear waters.',
  },
  {
    id: 4,
    title: 'Bus Tour - City Explorer',
    image: 'bus_package_1.jpg',
    price: '₹800',
    description: 'Discover the city with our guided bus tour.',
  },
  {
    id: 5,
    title: 'Bus Adventure - Mountain Expedition',
    image: 'bus_package_2.jpg',
    price: '₹1200',
    description: 'Embark on an adventurous mountain expedition by bus.',
  },
  {
    id: 6,
    title: 'Luxury Bus Package - Coastal Retreat',
    image: 'bus_package_3.jpg',
    price: '₹1500',
    description: 'Experience luxury travel with scenic coastal views.',
  },
  {
    id: 7,
    title: 'Luxury Bus Package - Coastal Retreat',
    image: 'bus_package_3.jpg',
    price: '₹1500',
    description: 'Experience luxury travel with scenic coastal views.',
  },
  {
    id: 8,
    title: 'Luxury Bus Package - Coastal Retreat',
    image: 'bus_package_3.jpg',
    price: '₹1500',
    description: 'Experience luxury travel with scenic coastal views.',
  },
  
  // Add more packages as needed
];
const PackageTitleAndImages = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='PackageTitle'>
      <h3 data-aos='fade-right' className='title'>
        Travlling with us and  you will experience something special !
      </h3>
      <div className="package-cards-container">
        {packagesTravlling.map((packageItem) => (
          <PackageCard key={packageItem.id} packageItem={packageItem} />
        ))}
      </div>
     
      <h3 data-aos='fade-right' className='title'>
      Best Rafting place in India
      </h3>
      <div className="package-cards-container">
        {packagesRafting.map((packageItem) => (
          <PackageCard key={packageItem.id} packageItem={packageItem} />
        ))}
      </div>

      <h3 data-aos='fade-right' className='title'>
      Trekking  and  Adventures in India
      </h3>
      <div className="package-cards-container">
        {packagesTrekking.map((packageItem) => (
          <PackageCard key={packageItem.id} packageItem={packageItem} />
        ))}
      </div>

      <h3 data-aos='fade-right' className='title'>
      Luxury Hotels with  Affordable price !
      </h3>
      <div className="package-cards-container">
        {packagesHotels.map((packageItem) => (
          <PackageCard key={packageItem.id} packageItem={packageItem} />
        ))}
      </div>
      <h3 data-aos='fade-right' className='title'>
      Bus packages
      </h3>
      <div className="package-cards-container">
        {packagesBus.map((packageItem) => (
          <PackageCard key={packageItem.id} packageItem={packageItem} />
        ))}
      </div>
      <h3 data-aos='fade-right' className='title'>
      Train  packages
      </h3>
      <div className="package-cards-container">
        {packagesTrain.map((packageItem) => (
          <PackageCard key={packageItem.id} packageItem={packageItem} />
        ))}
      </div>
      <h3 data-aos='fade-right' className='title'>
      Flight Packages
      </h3>
      <div className="package-cards-container">
        {packagesFlight.map((packageItem) => (
          <PackageCard key={packageItem.id} packageItem={packageItem} />
        ))}
      </div>



     
    </div>
  );
};

const PackageCard = ({ packageItem }) => {
  return (
    <Link to={`/package/${packageItem.id}`} key={packageItem.id}>
      <div className="package-card">
        <img
          className="package-image"
          src={packageItem.image}
          alt={packageItem.title}
        />
        <div className="package-details">
          <div className="package-title">{packageItem.title}</div>
          <div className="package-location">{packageItem.location}</div>
          <div className="package-price">{packageItem.price}</div>
          <div className="package-duration">{packageItem.duration}</div>
          <div className="package-itinerary">{packageItem.itinerary}</div>
          <div className="package-description">{packageItem.description}</div>
        </div>
      </div>
    </Link>
  );
};

const Packages = () => {
  return (
    <div className="packages-container">
        {/* Render RaftingTitle component */}
        <div className="Package-title-container">

      <PackageTitleAndImages />
      </div>

      
    </div>
    
  );
};

export default Packages;
