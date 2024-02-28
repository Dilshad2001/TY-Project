import React, { useEffect } from 'react'
import Card from '../../Card/Card'
import Aos from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles
//FlightPackages imports
import imgFlightPackage49 from "../../../Assets/Flight Packages Assets/Goa Flight.jpg";
import imgFlightPackage50 from "../../../Assets/Flight Packages Assets/Agra Flight.jpg";
import imgFlightPackage51 from "../../../Assets/Flight Packages Assets/Manali Flight.jpg";
import imgFlightPackage52 from "../../../Assets/Flight Packages Assets/shimla Flight.jpg";
import imgFlightPackage53 from "../../../Assets/Flight Packages Assets/sikkim Flight.jpg";
import imgFlightPackage54 from "../../../Assets/Flight Packages Assets/jaisalmer Flight.jpg";
import imgFlightPackage55 from "../../../Assets/Flight Packages Assets/Amritsar Flight.jpg";
import imgFlightPackage56 from "../../../Assets/Flight Packages Assets/Jaipur Flight.jpg";

const FlightPackage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const packagesFlight = [
    {
      id: 49,
      title: "Mumbai to Goa Vistara-Flights",
      location: "Mumbai - Goa ",
      image: imgFlightPackage49,
      price: "₹15,000 per person",
      grade: "economy-first class.",
      description:
        "Indulge in a seamless and enjoyable journey from the bustling city of Mumbai to the sun-kissed beaches of Goa with our carefully crafted Blissful Getaway Flight Package. Escape the routine, relax on the sandy shores, and immerse yourself in the vibrant culture of Goa.",
    },
    {
      id: 50,
      title: "Mumbai to Agra Indigo-Flights",
      location: "Mumbai-Agra",
      image: imgFlightPackage50,
      price: "₹20,000 per person",
      grade: "economy-first class.",
      description:
        "Embark on a fascinating journey from the bustling city of Mumbai to the historical city of Agra with our specially curated Heritage Flight Expedition package. Immerse yourself in the architectural marvels, witness the iconic Taj Mahal, and experience the rich cultural heritage of Agra.",
    },
    {
      id: 51,
      title: "Mumbai to Manali Air-India Flights",
      location: "Mumbai to Manali",
      image: imgFlightPackage51,
      price: "₹25,000 per person",
      grade: "economy-first class.",
      description:
        " on a thrilling journey from the bustling city of Mumbai to the serene landscapes of Manali with our carefully crafted Alpine Escape Flight Package. Immerse yourself in the pristine beauty of the Himalayas, enjoy adventure activities, and experience the tranquility of Manali..",
    },
    {
      id: 52,
      title: "Gujarat to Shimla SpiceJet-Flights",
      location: "Gujarat to Shimla ",
      image: imgFlightPackage52,
      price: "₹22,000 per person",
      grade: "economy-first class.",
      description:
        " the vibrant state of Gujarat to the captivating landscapes of Shimla with our carefully curated Mountain Escape Flight Package. Immerse yourself in the Himalayan charm, explore colonial architecture, and experience the serene beauty of Shimla.",
    },
    {
      id: 53,
      title: "Mumbai to Sikkim AirAsia-Flights",
      location: "Mumbai to Sikkim",
      image: imgFlightPackage53,
      price: "₹28,000 per person",
      grade: "economy-first class.",
      description:
        "The bustling city of Mumbai to the enchanting landscapes of Sikkim with our carefully crafted Himalayan Expedition Flight Package. Immerse yourself in the tranquility of the Eastern Himalayas, explore monasteries, and witness the mesmerizing beauty of Sikkim.",
    },
    {
      id: 54,
      title: "Uttar Pradesh to Jaisalmer GoAir-Flights ",
      location: "Uttar Pradesh to Jaisalmer",
      image: imgFlightPackage54,
      price: "₹32,000 per person",
      grade: "economy-first class.",
      description:
        "On a magical journey from the historic state of Uttar Pradesh to the golden sands of Jaisalmer with our carefully curated Desert Odyssey Flight Package. Immerse yourself in the royal grandeur of Rajasthan, explore the Thar Desert, and witness the vibrant culture of Jaisalmer.",
    },
    {
      id: 55,
      title: "Mumbai to Amritsar Air India Express-Flights",
      location: "Mumbai - Amritsar",
      image: imgFlightPackage55,
      price: "₹20,000 per person1500",
      grade: "economy-first class.",
      description:
        "The city of Mumbai to the sacred land of Amritsar with our carefully curated Spiritual Journey Flight Package. Immerse yourself in the divine ambiance of the Golden Temple, explore historical landmarks, and experience the rich Sikh culture of Amritsar.",
    },
    {
      id: 56,
      title: "Hyderabad to Jaipur Alliance Air-Flights",
      location: "Hyderabad - Jaipur",
      image: imgFlightPackage56,
      price: "₹45,000 per person",
      grade: "economy-first class.",
      description:
        "The regal charm and cultural richness of Jaipur, the Pink City, with our exclusive Royal Heritage Flight Journey from Hyderabad to Jaipur. Immerse yourself in the grandeur of Rajasthans capital city, explore its majestic forts and palaces, and revel in the vibrant culture and traditions.",
    },
  
    // Add more packages as needed
  ];
  return (
    <div>
      <h3 data-aos="fade-right" className="title">
        Flight Packages
      </h3>
      <div className="package-cards-container">
        {packagesFlight.map((packageItem) => (
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

export default FlightPackage
