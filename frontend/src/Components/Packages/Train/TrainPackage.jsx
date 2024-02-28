import React, { useEffect } from 'react'
import Card from '../../Card/Card'
import Aos from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles
//TrainPackages imports
import imgTrainPackage41 from "../../../Assets/Train packages Assets/Mumbai-Goa Train.jpg";
import imgTrainPackage42 from "../../../Assets/Train packages Assets/Mumbai-Agra Train.jpg";
import imgTrainPackage43 from "../../../Assets/Train packages Assets/Mumbai- manali Train.jpg";
import imgTrainPackage44 from "../../../Assets/Train packages Assets/Mumbai-shimla Trains.jpg";
import imgTrainPackage45 from "../../../Assets/Train packages Assets/Mumbai-Sikkim Train.jpg";
import imgTrainPackage46 from "../../../Assets/Train packages Assets/UP-jaisalmer trains.jpg";
import imgTrainPackage47 from "../../../Assets/Train packages Assets/Mumbai-Amritsar Train.png";
import imgTrainPackage48 from "../../../Assets/Train packages Assets/Hyderabad-jaipur Train.jpg";

const TrainPackage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const packagesTrain = [
    {
      id: 41,
      title: "Mumbai to Goa Express",
      location: "Mumbai - Goa ",
      image: imgTrainPackage41,
      price: "₹20,000 per person",
      duration: "8 days & 2 Nights",
      grade: "Second Class-Luxury Classes",
      description:
        "The bustling city of Mumbai to the sun-soaked beaches of Goa with our specially curated Train Expedition package. Experience the thrill of traversing the picturesque Western Ghats, witness the changing landscapes, and arrive in Goa ready for a memorable vacation filled with sun, sand, and relaxation.",
    },
    {
      id: 42,
      title: "Mumbai to Agra Express",
      location: "Mumbai  -  Agra",
      image: imgTrainPackage42,
      price: "₹25,000 per person",
      duration: "7 days & 2 Nights",
      grade: "Second Class-Luxury Classes",
      description:
        "The bustling city of Mumbai to the historical city of Agra with our specially curated Heritage Train Expedition package. Immerse yourself in the cultural richness, witness architectural marvels, and experience the historical grandeur of Agra, home to the iconic Taj Mahal.",
    },
    {
      id: 43,
      title: "Mumbai to Manali Express",
      location: "Mumbai-Manali",
      image: imgTrainPackage43,
      price: "₹22,000 per person",
      duration: "8 days & 3 Nights",
      grade: "Second Class-Luxury Classes",
      description:
        "The train journey from the vibrant city of Mumbai to the picturesque landscapes of Manali with our specially crafted Express Train package. Witness the breathtaking scenery, traverse through mountainous terrains, and arrive in Manali ready to explore the serene beauty of the Himalayas.",
    },
    {
      id: 44,
      title: "Gujarat to Shimla Express",
      location: "Gujarat to Shimla",
      image: imgTrainPackage44,
      price: "₹20,000 per person",
      duration: "8 days & 2 Nights",
      grade: "Second Class-Luxury Classes",
      description:
        "The enchanting landscapes of Shimla with our carefully curated Himalayan Explorer Train Tour. Traverse through diverse terrains, witness the beauty of the Western Ghats and the Himalayas, and arrive in Shimla ready to immerse yourself in the serene mountain retreat.",
    },
    {
      id: 45,
      title: "Mumbai to Sikkim superFast Express",
      location: "Mumbai to Sikkim ",
      image: imgTrainPackage45,
      price: "₹26,000 per person",
      duration: "5 days & 2 Nights",
      grade: "Second Class-Luxury Classes",
      description:
        "On an awe-inspiring train journey from the bustling city of Mumbai to the serene landscapes of Sikkim with our meticulously crafted Himalayan Expedition package. Traverse through diverse terrains, witness the beauty of the Eastern Ghats and the Himalayas, and arrive in Sikkim ready to explore the enchanting Himalayan kingdom.",
    },
    {
      id: 46,
      title: "Uttar Pradesh to Jaisalmer Desert Odyssey",
      location: "Uttar Pradesh to Jaisalmer",
      image: imgTrainPackage46,
      price: "₹30,000 per person",
      duration: "8 days & 4 Nights",
      grade: "Second Class-Luxury Classes",
      description:
        "The culturally rich state of Uttar Pradesh to the golden sands of Jaisalmer with our thoughtfully curated Desert Odyssey Train Tour. Traverse through the historical landscapes, witness the cultural tapestry of Rajasthan, and arrive in Jaisalmer ready to immerse yourself in the grandeur of the Thar Desert.",
    },
    {
      id: 47,
      title: "Mumbai to Amritsar superFast Express",
      location: "Mumbai to Amritsar",
      image: imgTrainPackage47,
      price: "₹35,000 per person",
      duration: "4 days & 2 Nights",
      grade: "Second Class-Luxury Classes",
      description:
        "On a soulful train journey from the bustling city of Mumbai to the spiritual heart of Punjab, Amritsar, with our carefully curated Spiritual Journey by Train package. Experience the cultural richness, witness religious fervor, and arrive in Amritsar ready to immerse yourself in the divine atmosphere.",
    },
    {
      id: 48,
      title: "Hyderabad to Jaipur Royal Heritage Express",
      location: "Hyderabad to Jaipur",
      image: imgTrainPackage48,
      price: "₹40,000 per person",
      duration: "8 days & 3 Nights",
      grade: "Second Class-Luxury Classes",
      description:
        "The regal charm and cultural richness of Jaipur, the Pink City, with our exclusive Royal Heritage Train Journey from Hyderabad to Jaipur. Immerse yourself in the grandeur of Rajasthans capital city, explore its majestic forts and palaces, and revel in the vibrant culture and traditions.",
    },
  
    // Add more packages as needed
  ];
  return (
    <div>
      <h3 data-aos="fade-right" className="title">
        Train packages
      </h3>
      <div className="package-cards-container">
        {packagesTrain.map((packageItem) => (
          <Card
            className={"package-card"}
            key={packageItem.id}
            id={packageItem.id}
            img={packageItem.image}
            title={packageItem.title}
            location={packageItem.location}
            grade={packageItem.grade}
            price={packageItem.price}
            description={packageItem.description}
            // linkTo={`packages/${data.id}`}
            // btnText='Details'
          />
        ))}
      </div>
    </div>
  )
}

export default TrainPackage
