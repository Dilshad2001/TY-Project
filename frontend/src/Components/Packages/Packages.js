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
import imgBusPackges33 from '../../Assets/Bus Tour Assets/Goa Bus Tour.jpg'
import imgBusPackges34 from '../../Assets/Bus Tour Assets/Agra Bus Tour.jpg'
import imgBusPackges35 from '../../Assets/Bus Tour Assets/Jogni Bus Tour.jpg'
import imgBusPackges36 from '../../Assets/Bus Tour Assets/Shaily Peak Bus Tour.jpg'
import imgBusPackges37 from '../../Assets/Bus Tour Assets/Buddha Bus Tour.jpg'
import imgBusPackges38 from '../../Assets/Bus Tour Assets/bada bagh Bus Tour.jpg'
import imgBusPackges39 from '../../Assets/Bus Tour Assets/Golden Temple Bus Tour.jpg'
import imgBusPackges40 from '../../Assets/Bus Tour Assets/Jal Mahal Bus Tour.jpg'

//TrainPackages imports
import imgTrainPackage41 from '../../Assets/Train packages Assets/Mumbai-Goa Train.jpg'
import imgTrainPackage42 from '../../Assets/Train packages Assets/Mumbai-Agra Train.jpg'
import imgTrainPackage43 from '../../Assets/Train packages Assets/Mumbai- manali Train.jpg'
import imgTrainPackage44 from '../../Assets/Train packages Assets/Mumbai-shimla Trains.jpg'
import imgTrainPackage45 from '../../Assets/Train packages Assets/Mumbai-Sikkim Train.jpg'
import imgTrainPackage46 from '../../Assets/Train packages Assets/UP-jaisalmer trains.jpg'
import imgTrainPackage47 from '../../Assets/Train packages Assets/Mumbai-Amritsar Train.png'
import imgTrainPackage48 from '../../Assets/Train packages Assets/Hyderabad-jaipur Train.jpg'
//FlightPackages imports
import imgFlightPackage49 from '../../Assets/Flight Packages Assets/Goa Flight.jpg'
import imgFlightPackage50 from '../../Assets/Flight Packages Assets/Agra Flight.jpg'
import imgFlightPackage51 from '../../Assets/Flight Packages Assets/Manali Flight.jpg'
import imgFlightPackage52 from '../../Assets/Flight Packages Assets/shimla Flight.jpg'
import imgFlightPackage53 from '../../Assets/Flight Packages Assets/sikkim Flight.jpg'
import imgFlightPackage54 from '../../Assets/Flight Packages Assets/jaisalmer Flight.jpg'
import imgFlightPackage55 from '../../Assets/Flight Packages Assets/Amritsar Flight.jpg'
import imgFlightPackage56 from '../../Assets/Flight Packages Assets/Jaipur Flight.jpg'

const packagesTravelling = [
  {
    id:1,
    image: imgTravlling1,
    title:'Goa Beach Paradise',
    location:'Goa',
    grade:'BEACH RELAX',
    price:'₹15,000',
    description:'the new moon, Goas beaches are known the world over. Fringed by swaying palm and coconut trees with cool and comfortable shacks offering a variety of refreshments, Goas 103 km coastline is blessed with the most enchanting beaches lapped by the Arabian Sea.s'
  },
 {
    id:2,
    image:imgTravlling2,
    title:'Taj Mahal',
    location:'Agra',
    grade:'CULTURAL RELAX',
    price:'₹25,000',
    description:'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.'
    
  },

  {
    id:3,
    image:imgTravlling3,
    title:'Jogni Waterfall Road',
    location:' Manali',
    grade:'CULTURAL RELAX',
    price:'₹30,000',
    description:'Manali is synonymous streams and birdsong, forests and orchards and grandees of snow-capped mountains. Manali is the real starting point of an ancient trade route which crosses the Rohtang and Baralacha passes, and runs via Lahul and Ladakh to Kashmir while divergent road connects it with Spiti.' ,
    
  },


  {
    id:4,
    image:imgTravlling4,
    title:'Shaily Peak',
    location:'Shimla',
    grade:'CULTURAL RELAX',
    price:'₹35,237',
    description:'Shimla, city, capital of Himachal Pradesh state, northwestern India. The city lies northeast of Chandigarh on a ridge of the Himalayan foothills, at an elevation of about 7,100 feet (2,200 metres). Shimla was built by the British on land they had retained after the Gurkha War of 1814–16 and was used for resting troops.',
    
  },

  {
    id:5,
    image:imgTravlling5,
    title:'Buddha Park',
    location:'Sikkim',
    grade:'CULTURAL RELAX',
    price:'₹40,000',
    description:'The Buddha Park of Ravangla, also known as Tathagata Tsal, is situated near Rabong (Ravangla) in South Sikkim district, Sikkim, India. It was constructed between 2006 and 2013 and features a 130-foot (40 m) high statue of the Buddha as its centerpiece.',

    
  },
  {
    id:6,
    image:imgTravlling6,
    title:'Bada Bagh ',
    location:' Jaisalmer',
    grade:'CULTURAL RELAX',
    price:'₹45,000',
    description:'This is a popular site because it is a garden that has the cenotaphs of all the Maharajas and other prestigious family members of Jaisalmer; all royal Rajputs kings of 6 centuries! Bada Bagh is actually located on a small hillock and the entrance to the cenotaphs is set at the bottom of the hill.',
    
  },


  {
    id:7,
    image:imgTravlling7,
    title:'Golden Temple',
    location:'Amritsar',
    grade:'CULTURAL RELAX',
    price:'₹50,000',
    description:'Amritsar is the largest and most important city in Punjab and is a major commercial, cultural, and transportation centre. It is also the centre of Sikhism and the site of the Sikhs principal place of worship—the Harmandir Sahib, or Golden Temple.',
    
  },


  {
    id:8,
    image:imgTravlling8,
    title:'Jal Mahal',
    location:'Jaipur',
    grade:'CULTURAL RELAX',
    price:'₹55,000',
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
    id: 33,
    title: 'Goa Discovery: Bus Tour Package',
    image: imgBusPackges33, 
    price: '₹20,000',
    description: 'Embark on a captivating journey with our Goa Discovery bus tour package. Immerse yourself in the rich cultural tapestry of Goa as you explore ancient churches vibrant markets and lush spice plantations. Indulge in the breathtaking beauty of sun-kissed beaches and savor the flavors of authentic Goan cuisine. This adventure promises a perfect blend of relaxation and cultural exploration ensuring an unforgettable experience in the Pearl of the Orient.',
  },
  {
    id: 34,
    title: 'Agra Heritage Delight',
    image:  imgBusPackges34  ,
    price: '₹30,000',
    description: 'Embark on a captivating journey with our Agra Heritage Delight package, a 2-day extravaganza that unveils the timeless beauty of Agra. Witness the ethereal charm of the Taj Mahal at sunrise, delve into the rich history of Agra Fort, and stroll through the vibrant local markets. Immerse yourself in the citys cultural tapestry, complemented by comfortable accommodations and delectable local cuisine. Agra Heritage Delight promises an unforgettable blend of history, architecture, and the warm embrace of Agras enchanting heritage.',
  },
  {
    id: 35,
    title: 'Jogni Waterfall Adventure Tour',
    image: imgBusPackges35,
    price: '₹35,000',
    description: ' On a thrilling  Jogni Waterfall Adventure Tour, immersing yourself in the natural beauty of the serene Jogni Waterfall Road. Experience the joy of a guided trek to the mesmerizing waterfall, indulge in a picnic lunch amidst lush surroundings, and unwind in comfortable accommodations. This curated package promises a perfect blend of exploration and relaxation in the heart of nature.',
  },
  {
    id: 36,
    title: 'Experience the Majestic Beauty of Shaily Peak, Shimla with Our Exclusive Bus Tour Packages!',
    image: imgBusPackges36,
    price: '₹40,000',
    description: 'On a mesmerizing journey to Shaily Peak, Shimla, with our exclusive bus tour packages. Enjoy a day excursion filled with panoramic views, guided tours, and a delightful packed lunch. For a weekend retreat, experience two days of exploration, evening bonfires, and cultural activities, staying at a cozy hotel near Shaily Peak. Adventure enthusiasts can opt for our adrenaline-packed package, including trekking, camping, and thrilling outdoor activities. Whether its a family-friendly tour or an adventure-filled escape, our Shaily Peak bus tour packages promise an unforgettable experience.',
  },
  {
    id: 37,
    title: 'Enchanting Buddha Park Discovery Bus Tour',
    image: imgBusPackges37,
    price: '₹45,000',
    description: 'Embark on a soul-stirring journey with our "Enchanting Buddha Park Discovery Tour." Witness the awe-inspiring 130-foot Buddha statue amidst the tranquil surroundings of Sikkim. Immerse yourself in spirituality as you explore the beautiful gardens and nearby Rumtek Monastery, creating memories that resonate with peace and serenity.',
  },
  {
    id: 38,
    title: 'Bada Bagh luxury Bus Tour',
    image: imgBusPackges38,
    price: '₹50,000',
    description: 'On a captivating bus tour to Bada Bagh in Jaisalmer. Immerse yourself in the rich history of Jaisalmer Fort, witness the mesmerizing sunset at Gadisar Lake, and explore the ornate architecture of Patwon Ki Haveli. The highlight of the trip is the visit to Bada Bagh, a historical garden complex with intricately designed cenotaphs, offering a serene retreat amidst the desert landscape. This enchanting journey is a perfect blend of cultural exploration and natural beauty, promising an unforgettable experience in the heart of Rajasthan.',
  },
  {
    id: 39,
    title: 'Luxury Bus Package Golden Temple Discovery Tour',
    image: imgBusPackges39,
    price: '₹55,000',
    description: 'Embark on an opulent journey to explore the spiritual and architectural marvel, the Golden Temple, in Amritsar. Our Luxury Bus Package ensures a seamless and enriching experience, combining comfort, culture, and divine tranquility.',
  },
  {
    id: 40,
    title: 'Luxury Bus Package Jal Mahal Discovery Tour',
    image: imgBusPackges40,
    price: '₹60,000',
    description: 'Your day begins with the serenity of the Man Sagar Lake as you approach the magical Jal Mahal, a water palace that appears to float on the shimmering waters. Marvel at the architectural finesse and historical significance of this iconic landmark as you explore its intricacies.',
  },
  
  // Add more packages as needed
];
const packagesTrain = [
  {
    id: 41,
    title: 'Mumbai to Goa Train Expedition',
    image: imgTrainPackage41, 
    price: ' ₹20,000',
    duration:'8 days & 2 Nights',
    description: 'The bustling city of Mumbai to the sun-soaked beaches of Goa with our specially curated Train Expedition package. Experience the thrill of traversing the picturesque Western Ghats, witness the changing landscapes, and arrive in Goa ready for a memorable vacation filled with sun, sand, and relaxation.',
  },
  {
    id: 42,
    title: 'Mumbai to Agra Heritage Train Expedition',
    image: imgTrainPackage42,
    price: '₹25,000',
    duration:'7 days & 2 Nights',
    description: 'The bustling city of Mumbai to the historical city of Agra with our specially curated Heritage Train Expedition package. Immerse yourself in the cultural richness, witness architectural marvels, and experience the historical grandeur of Agra, home to the iconic Taj Mahal.',
  },
  {
    id: 43,
    title: 'Mumbai to Manali Express: Scenic Train Journey',
    image: imgTrainPackage43,
    price: '₹22,000',
    duration:'8 days & 3 Nights',
    description: 'The train journey from the vibrant city of Mumbai to the picturesque landscapes of Manali with our specially crafted Express Train package. Witness the breathtaking scenery, traverse through mountainous terrains, and arrive in Manali ready to explore the serene beauty of the Himalayas.',
  },
  {
    id: 44,
    title: 'Gujarat to Shimla Himalayan Explorer Train Tour',
    image: imgTrainPackage44,
    price: '₹20,000',
    duration:'8 days & 2 Nights',
    description: 'The enchanting landscapes of Shimla with our carefully curated Himalayan Explorer Train Tour. Traverse through diverse terrains, witness the beauty of the Western Ghats and the Himalayas, and arrive in Shimla ready to immerse yourself in the serene mountain retreat.',
  },
  {
    id: 45,
    title: 'Mumbai to Sikkim Himalayan Expedition',
    image: imgTrainPackage45,
    price: '₹26,000',
    duration:'5 days & 2 Nights',
    description: 'On an awe-inspiring train journey from the bustling city of Mumbai to the serene landscapes of Sikkim with our meticulously crafted Himalayan Expedition package. Traverse through diverse terrains, witness the beauty of the Eastern Ghats and the Himalayas, and arrive in Sikkim ready to explore the enchanting Himalayan kingdom.',
  },
  {
    id: 46,
    title: 'Uttar Pradesh to Jaisalmer Desert Odyssey Train Tour',
    image: imgTrainPackage46,
    price: '₹30,000',
    duration:'8 days & 4 Nights',
    description: 'The culturally rich state of Uttar Pradesh to the golden sands of Jaisalmer with our thoughtfully curated Desert Odyssey Train Tour. Traverse through the historical landscapes, witness the cultural tapestry of Rajasthan, and arrive in Jaisalmer ready to immerse yourself in the grandeur of the Thar Desert.',
  },
  {
    id: 47,
    title: 'Mumbai to Amritsar Spiritual Journey by Train ',
    image: imgTrainPackage47,
    price: '₹35,000',
    duration:'4 days & 2 Nights',
    description: 'On a soulful train journey from the bustling city of Mumbai to the spiritual heart of Punjab, Amritsar, with our carefully curated Spiritual Journey by Train package. Experience the cultural richness, witness religious fervor, and arrive in Amritsar ready to immerse yourself in the divine atmosphere.',
  },
  {
    id: 48,
    title: 'Hyderabad to Jaipur Royal Heritage Train Journey',
    image: imgTrainPackage48,
    price: '₹40,000',
    duration:'8 days & 3 Nights',
    description: 'The regal charm and cultural richness of Jaipur, the Pink City, with our exclusive Royal Heritage Train Journey from Hyderabad to Jaipur. Immerse yourself in the grandeur of Rajasthans capital city, explore its majestic forts and palaces, and revel in the vibrant culture and traditions.',
  },
  
  // Add more packages as needed
];
const packagesFlight = [
  {
    id: 49,
    title: 'Mumbai to Goa Blissful Getaway - Flights',
    image: imgFlightPackage49 ,
    price: '₹15,000 per person',
    description: 'Indulge in a seamless and enjoyable journey from the bustling city of Mumbai to the sun-kissed beaches of Goa with our carefully crafted Blissful Getaway Flight Package. Escape the routine, relax on the sandy shores, and immerse yourself in the vibrant culture of Goa.',
    Note:'Prices may vary based on the airline, season, and additional customization. The itinerary is subject to change based on flight schedules and availability.',
  },
  {
    id: 50,
    title: 'Mumbai to Agra Heritage Flight Expedition',
    image: imgFlightPackage50,
    price: '₹20,000 per person',
    description: 'Embark on a fascinating journey from the bustling city of Mumbai to the historical city of Agra with our specially curated Heritage Flight Expedition package. Immerse yourself in the architectural marvels, witness the iconic Taj Mahal, and experience the rich cultural heritage of Agra.',
    Note:'',
  },
  {
    id: 51,
    title: 'Mumbai to Manali Alpine Escape',
    image: imgFlightPackage51,
    price: '₹25,000 per person',
    description: ' on a thrilling journey from the bustling city of Mumbai to the serene landscapes of Manali with our carefully crafted Alpine Escape Flight Package. Immerse yourself in the pristine beauty of the Himalayas, enjoy adventure activities, and experience the tranquility of Manali..',
    Note:'',
  },
  {
    id: 52,
    title: 'Gujarat to Shimla Mountain Escape',
    image: imgFlightPackage52,
    price: '₹22,000 per person',
    description: ' the vibrant state of Gujarat to the captivating landscapes of Shimla with our carefully curated Mountain Escape Flight Package. Immerse yourself in the Himalayan charm, explore colonial architecture, and experience the serene beauty of Shimla.',
    Note:'',
  },
  {
    id: 53,
    title: 'Mumbai to Sikkim Himalayan Expedition',
    image: imgFlightPackage53,
    price: '₹28,000 per person',
    description: 'The bustling city of Mumbai to the enchanting landscapes of Sikkim with our carefully crafted Himalayan Expedition Flight Package. Immerse yourself in the tranquility of the Eastern Himalayas, explore monasteries, and witness the mesmerizing beauty of Sikkim.',
    Note:'',
  },
  {
    id: 54,
    title: 'Uttar Pradesh to Jaisalmer Desert Odyssey',
    image: imgFlightPackage54,
    price: '₹32,000 per person',
    description: 'On a magical journey from the historic state of Uttar Pradesh to the golden sands of Jaisalmer with our carefully curated Desert Odyssey Flight Package. Immerse yourself in the royal grandeur of Rajasthan, explore the Thar Desert, and witness the vibrant culture of Jaisalmer.',
    Note:'',
  },
  {
    id: 55,
    title: 'Mumbai to Amritsar Spiritual Journey',
    image: imgFlightPackage55,
    price: '₹20,000 per person1500',
    description: 'The city of Mumbai to the sacred land of Amritsar with our carefully curated Spiritual Journey Flight Package. Immerse yourself in the divine ambiance of the Golden Temple, explore historical landmarks, and experience the rich Sikh culture of Amritsar.',
    Note:'',
  },
  {
    id: 56,
    title: 'Hyderabad to Jaipur Royal Heritage Flight Journey',
    image: imgFlightPackage56,
    price: '₹45,000 per person',
    description: 'The regal charm and cultural richness of Jaipur, the Pink City, with our exclusive Royal Heritage Flight Journey from Hyderabad to Jaipur. Immerse yourself in the grandeur of Rajasthans capital city, explore its majestic forts and palaces, and revel in the vibrant culture and traditions.',
    Note:'',
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
        Travelling with us and  you will experience something special !
      </h3>
      <div className="package-cards-container">
        {packagesTravelling.map((packageItem) => (
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
