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

const styles = {
  itineraryContainer: {
    margin: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  dayContainer: {
    marginBottom: "15px",
  },
  itineraryText: {
    fontSize: "16px",
    lineHeight: "1.5",
  },
  inclusionsContainer: {
    margin: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    marginTop: "30px",
  },
  inclusionsList: {
    listStyleType: "disc",
    paddingLeft: "20px",
    fontSize: "16px",
    lineHeight: "1.5",
  },
  priceNoteContainer: {
    margin: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    marginTop: "30px",
  },
};

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
      price: "15000 per person",
      grade: "economy-first class.",
      description:"Indulge in a seamless and enjoyable journey from the bustling city of Mumbai to the sun-kissed beaches of Goa with our carefully crafted Blissful Getaway Flight Package. Escape the routine, relax on the sandy shores, and immerse yourself in the vibrant culture of Goa.",
      Itinerary:
      <div>
    <div style={styles.itineraryContainer}>
      <h3>Day 1: Mumbai to Goa Flight</h3>
      <ul style={styles.itineraryList}>
        <li>Board a direct flight from Chhatrapati Shivaji Maharaj International Airport in Mumbai to Dabolim Airport in Goa.</li>
        <li>Arrive in Goa and transfer to your chosen beachside resort or hotel.</li>
        <li>Check-in and unwind with a welcome drink.</li>
        <li>Evening at leisure to explore the nearby beach or relax by the pool.</li>
      </ul>
    </div>

    <div style={styles.itineraryContainer}>
      <h3>Day 2-4: Goa Beach Paradise</h3>
      <ul style={styles.itineraryList}>
        <li>Enjoy leisurely days exploring the pristine beaches of Goa.</li>
        <li>Engage in water sports, beach activities, or simply bask in the sun.</li>
        <li>Optional guided tours to historic sites or spice plantations.</li>
        <li>Discover the vibrant nightlife, visit beach shacks, and try local Goan cuisine.</li>
      </ul>
    </div>

    <div style={styles.itineraryContainer}>
      <h3>Day 5: Departure from Goa</h3>
      <ul style={styles.itineraryList}>
        <li>Check-out from the resort.</li>
        <li>Transfer to Dabolim Airport for your return flight to Mumbai.</li>
        <li>Bid farewell to the beaches of Goa with fond memories.</li>
      </ul>
    </div>

    <div style={styles.inclusionsContainer}>
      <h3>Package Inclusions:</h3>
      <ul style={styles.inclusionsList}>
        <li>Round-trip direct flights from Mumbai to Goa.</li>
        <li>Accommodation in a beachside resort or hotel in Goa.</li>
        <li>Daily breakfast at the resort.</li>
        <li>Airport transfers in Goa.</li>
        <li>Welcome drink upon arrival.</li>
        <li>Assistance from a local representative.</li>
      </ul>
    </div>

    <div style={styles.priceNoteContainer}>
      <h3>Package Price:</h3>
      <p>Starting from ₹15,000 per person (based on double occupancy).</p>
      <h3>Note:</h3>
      <p>Prices may vary based on the airline, season, and additional customization. The itinerary is subject to change based on flight schedules and availability.</p>
    </div>
  </div>
    },
    {
      id: 50,
      title: "Mumbai to Agra Indigo-Flights",
      location: "Mumbai-Agra",
      image: imgFlightPackage50,
      price: "20000 per person",
      grade: "economy-first class.",
      description:"Embark on a fascinating journey from the bustling city of Mumbai to the historical city of Agra with our specially curated Heritage Flight Expedition package. Immerse yourself in the architectural marvels, witness the iconic Taj Mahal, and experience the rich cultural heritage of Agra.",
      Itinerary:
      <div>
      <div style={styles.itineraryContainer}>
        <h3>Day 1: Mumbai to Agra Flight</h3>
        <ul style={styles.itineraryList}>
          <li>Board a direct flight from Chhatrapati Shivaji Maharaj International Airport in Mumbai to Indira Gandhi International Airport in Delhi.</li>
          <li>Transfer to a connecting flight to Agra.</li>
          <li>Arrive in Agra and transfer to your chosen heritage hotel.</li>
          <li>Check-in and enjoy a welcome refreshment.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 2: Taj Mahal Sunrise Tour</h3>
        <ul style={styles.itineraryList}>
          <li>Early morning visit to the Taj Mahal to witness the breathtaking sunrise.</li>
          <li>Guided tour of the Taj Mahal, a symbol of eternal love.</li>
          <li>Return to the hotel for a leisurely breakfast.</li>
          <li>Explore Agra Fort, a UNESCO World Heritage Site, in the afternoon.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 3: Fatehpur Sikri Excursion</h3>
        <ul style={styles.itineraryList}>
          <li>Full-day excursion to Fatehpur Sikri, a deserted Mughal city.</li>
          <li>Explore the historical structures and palaces.</li>
          <li>Lunch at a local restaurant in Fatehpur Sikri.</li>
          <li>Return to Agra in the evening for relaxation.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 4: Departure from Agra</h3>
        <ul style={styles.itineraryList}>
          <li>Check-out from the hotel.</li>
          <li>Visit the Itmad-ud-Daulah's Tomb, also known as the Baby Taj.</li>
          <li>Transfer to Kheria Airport for your return flight to Mumbai.</li>
          <li>Bid farewell to the city of Agra with cherished memories.</li>
        </ul>
      </div>
  
      <div style={styles.inclusionsContainer}>
        <h3>Package Inclusions:</h3>
        <ul style={styles.inclusionsList}>
          <li>Round-trip direct flights from Mumbai to Agra.</li>
          <li>Accommodation in a heritage hotel in Agra.</li>
          <li>Daily breakfast at the hotel.</li>
          <li>Airport transfers in Agra.</li>
          <li>Guided tours of Taj Mahal, Agra Fort, Fatehpur Sikri, and Itmad-ud-Daulah's Tomb.</li>
          <li>Entrance fees to monuments and attractions.</li>
        </ul>
      </div>
  
      <div style={styles.priceNoteContainer}>
        <h3>Package Price:</h3>
        <p>Starting from ₹20,000 per person (based on double occupancy).</p>
        <h3>Note:</h3>
        <p>Prices may vary based on the airline, season, and additional customization. The itinerary is subject to change based on flight schedules and availability.</p>
      </div>
    </div>
    },
    {
      id: 51,
      title: "Mumbai to Manali Air-India Flights",
      location: "Mumbai to Manali",
      image: imgFlightPackage51,
      price: "25000 per person",
      grade: "economy-first class.",
      description:" on a thrilling journey from the bustling city of Mumbai to the serene landscapes of Manali with our carefully crafted Alpine Escape Flight Package. Immerse yourself in the pristine beauty of the Himalayas, enjoy adventure activities, and experience the tranquility of Manali..",
      Itinerary:
      <div>
      <div style={styles.itineraryContainer}>
        <h3>Day 1: Mumbai to Kullu Flight</h3>
        <ul style={styles.itineraryList}>
          <li>Board a direct flight from Chhatrapati Shivaji Maharaj International Airport in Mumbai to Kullu-Manali Airport.</li>
          <li>Arrive in Kullu and transfer to a waiting luxury vehicle for the road journey to Manali.</li>
          <li>Check-in at your chosen mountain resort and enjoy a welcome drink.</li>
          <li>Evening at leisure to acclimatize and explore the local surroundings.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 2-5: Manali Himalayan Retreat</h3>
        <ul style={styles.itineraryList}>
          <li>Engage in thrilling adventure activities like paragliding, river rafting, or trekking.</li>
          <li>Explore Solang Valley and Rohtang Pass for breathtaking views of the Himalayas.</li>
          <li>Visit Hadimba Devi Temple, a peaceful and picturesque temple in the midst of cedar forests.</li>
          <li>Stroll along the Mall Road, shop for local handicrafts, and try Himachali cuisine.</li>
          <li>Relax at the resort or spa, enjoying the scenic beauty of Manali.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 6: Departure from Manali</h3>
        <ul style={styles.itineraryList}>
          <li>Check-out from the resort.</li>
          <li>Transfer to Kullu-Manali Airport for your return flight to Mumbai.</li>
          <li>Bid farewell to the Himalayan landscapes with cherished memories.</li>
        </ul>
      </div>
  
      <div style={styles.inclusionsContainer}>
        <h3>Package Inclusions:</h3>
        <ul style={styles.inclusionsList}>
          <li>Round-trip direct flights from Mumbai to Kullu.</li>
          <li>Accommodation in a mountain resort or hotel in Manali.</li>
          <li>Daily breakfast at the resort.</li>
          <li>Airport transfers in Kullu and local transfers in Manali.</li>
          <li>Adventure activity arrangements and guided tours.</li>
          <li>Welcome drink upon arrival.</li>
        </ul>
      </div>
  
      <div style={styles.priceNoteContainer}>
        <h3>Package Price:</h3>
        <p>Starting from ₹25,000 per person (based on double occupancy).</p>
        <h3>Note:</h3>
        <p>Prices may vary based on the airline, season, and additional customization. The itinerary is subject to change based on flight schedules and availability.</p>
      </div>
    </div>
    },
    {
      id: 52,
      title: "Gujarat to Shimla SpiceJet-Flights",
      location: "Gujarat to Shimla ",
      image: imgFlightPackage52,
      price: "22000 per person",
      grade: "economy-first class.",
      description:" the vibrant state of Gujarat to the captivating landscapes of Shimla with our carefully curated Mountain Escape Flight Package. Immerse yourself in the Himalayan charm, explore colonial architecture, and experience the serene beauty of Shimla.",
      Itinerary:
      <div>
      <div style={styles.itineraryContainer}>
        <h3>Day 1: Gujarat to Chandigarh Flight</h3>
        <ul style={styles.itineraryList}>
          <li>Board a direct flight from Sardar Vallabhbhai Patel International Airport in Gujarat to Chandigarh International Airport.</li>
          <li>Arrive in Chandigarh and transfer to a waiting luxury coach for the road journey to Shimla.</li>
          <li>Check-in at your chosen mountain resort in Shimla and enjoy a welcome drink.</li>
          <li>Evening at leisure to explore the Mall Road or relax at the resort.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 2-5: Shimla Himalayan Retreat</h3>
        <ul style={styles.itineraryList}>
          <li>Explore the Ridge, Mall Road, and Jakhu Temple for panoramic views of Shimla.</li>
          <li>Engage in optional activities like trekking, horse riding, or shopping at local markets.</li>
          <li>Visit Kufri Fun World for adventure activities and scenic landscapes.</li>
          <li>Take a stroll through the scenic Glen Forest and Annandale.</li>
          <li>Enjoy the colonial architecture and cultural richness of Shimla.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 6: Departure from Shimla</h3>
        <ul style={styles.itineraryList}>
          <li>Check-out from the resort.</li>
          <li>Transfer to Shimla Airport for your return flight to Gujarat.</li>
          <li>Bid farewell to the Himalayan landscapes with cherished memories.</li>
        </ul>
      </div>
  
      <div style={styles.inclusionsContainer}>
        <h3>Package Inclusions:</h3>
        <ul style={styles.inclusionsList}>
          <li>Round-trip direct flights from Gujarat to Chandigarh.</li>
          <li>Road journey from Chandigarh to Shimla in a luxury coach.</li>
          <li>Accommodation in a mountain resort or hotel in Shimla.</li>
          <li>Daily breakfast at the resort.</li>
          <li>Airport transfers in Chandigarh and local transfers in Shimla.</li>
          <li>Welcome drink upon arrival.</li>
        </ul>
      </div>
  
      <div style={styles.priceNoteContainer}>
        <h3>Package Price:</h3>
        <p>Starting from ₹22,000 per person (based on double occupancy).</p>
        <h3>Note:</h3>
        <p>Prices may vary based on the airline, season, and additional customization. The itinerary is subject to change based on flight schedules and availability.</p>
      </div>
    </div>
    },
    {
      id: 53,
      title: "Mumbai to Sikkim AirAsia-Flights",
      location: "Mumbai to Sikkim",
      image: imgFlightPackage53,
      price: "28000 per person",
      grade: "economy-first class.",
      description:"The bustling city of Mumbai to the enchanting landscapes of Sikkim with our carefully crafted Himalayan Expedition Flight Package. Immerse yourself in the tranquility of the Eastern Himalayas, explore monasteries, and witness the mesmerizing beauty of Sikkim.",
      Itinerary:
      <div>
    <div style={styles.itineraryContainer}>
      <h3>Day 1: Mumbai to Bagdogra Flight</h3>
      <ul style={styles.itineraryList}>
        <li>Board a direct flight from Chhatrapati Shivaji Maharaj International Airport in Mumbai to Bagdogra Airport.</li>
        <li>Arrive in Bagdogra and transfer to Gangtok, the capital of Sikkim, via a scenic road journey.</li>
        <li>Check-in at your chosen hotel in Gangtok and enjoy a welcome drink.</li>
        <li>Evening at leisure to explore MG Marg or relax at the hotel.</li>
      </ul>
    </div>

    <div style={styles.itineraryContainer}>
      <h3>Day 2-5: Sikkim Himalayan Retreat</h3>
      <ul style={styles.itineraryList}>
        <li>Visit Rumtek Monastery, one of the largest and most significant monasteries in Sikkim.</li>
        <li>Explore Hanuman Tok and Tashi Viewpoint for breathtaking panoramic views.</li>
        <li>Optional excursion to Tsomgo Lake and Nathula Pass, weather permitting.</li>
        <li>Stroll through the vibrant markets and immerse in the local culture of Gangtok.</li>
        <li>Enjoy the serene ambiance of Sikkim and optional spa treatments.</li>
      </ul>
    </div>

    <div style={styles.itineraryContainer}>
      <h3>Day 6: Departure from Sikkim</h3>
      <ul style={styles.itineraryList}>
        <li>Check-out from the hotel.</li>
        <li>Transfer to Bagdogra Airport for your return flight to Mumbai.</li>
        <li>Bid farewell to the Himalayan landscapes with cherished memories.</li>
      </ul>
    </div>

    <div style={styles.inclusionsContainer}>
      <h3>Package Inclusions:</h3>
      <ul style={styles.inclusionsList}>
        <li>Round-trip direct flights from Mumbai to Bagdogra.</li>
        <li>Road journey from Bagdogra to Gangtok in a luxury vehicle.</li>
        <li>Accommodation in a hotel in Gangtok.</li>
        <li>Daily breakfast at the hotel.</li>
        <li>Airport transfers in Bagdogra and local transfers in Gangtok.</li>
        <li>Welcome drink upon arrival.</li>
      </ul>
    </div>

    <div style={styles.priceNoteContainer}>
      <h3>Package Price:</h3>
      <p>Starting from ₹28,000 per person (based on double occupancy).</p>
      <h3>Note:</h3>
      <p>Prices may vary based on the airline, season, and additional customization. The itinerary is subject to change based on flight schedules and availability.</p>
    </div>
  </div>
    },
    {
      id: 54,
      title: "Uttar Pradesh to Jaisalmer GoAir-Flights ",
      location: "Uttar Pradesh to Jaisalmer",
      image: imgFlightPackage54,
      price: "32000 per person",
      grade: "economy-first class.",
      description:"On a magical journey from the historic state of Uttar Pradesh to the golden sands of Jaisalmer with our carefully curated Desert Odyssey Flight Package. Immerse yourself in the royal grandeur of Rajasthan, explore the Thar Desert, and witness the vibrant culture of Jaisalmer.",
      Itinerary:
      <div>
    <div style={styles.itineraryContainer}>
      <h3>Day 1: Uttar Pradesh to Jodhpur Flight</h3>
      <ul style={styles.itineraryList}>
        <li>Board a direct flight from a major airport in Uttar Pradesh to Jodhpur Airport.</li>
        <li>Arrive in Jodhpur and transfer to Jaisalmer via a scenic road journey.</li>
        <li>Check-in at your chosen heritage hotel in Jaisalmer and enjoy a welcome drink.</li>
        <li>Evening at leisure to explore the local markets or relax at the hotel.</li>
      </ul>
    </div>

    <div style={styles.itineraryContainer}>
      <h3>Day 2-5: Jaisalmer Desert Experience</h3>
      <ul style={styles.itineraryList}>
        <li>Explore the majestic Jaisalmer Fort, a UNESCO World Heritage Site.</li>
        <li>Engage in a thrilling desert safari to Sam Sand Dunes for sunset views.</li>
        <li>Visit Patwon Ki Haveli and Nathmal Ki Haveli for architectural marvels.</li>
        <li>Enjoy a cultural evening with traditional folk performances.</li>
        <li>Optional activities include camel riding and exploring the desert villages.</li>
      </ul>
    </div>

    <div style={styles.itineraryContainer}>
      <h3>Day 6: Departure from Jaisalmer</h3>
      <ul style={styles.itineraryList}>
        <li>Check-out from the hotel.</li>
        <li>Transfer to Jaisalmer Airport for your return flight to Uttar Pradesh.</li>
        <li>Bid farewell to the golden landscapes of Jaisalmer with cherished memories.</li>
      </ul>
    </div>

    <div style={styles.inclusionsContainer}>
      <h3>Package Inclusions:</h3>
      <ul style={styles.inclusionsList}>
        <li>Round-trip direct flights from Uttar Pradesh to Jodhpur.</li>
        <li>Road journey from Jodhpur to Jaisalmer in a luxury vehicle.</li>
        <li>Accommodation in a heritage hotel in Jaisalmer.</li>
        <li>Daily breakfast at the hotel.</li>
        <li>Airport transfers in Jodhpur and Jaisalmer.</li>
        <li>Welcome drink upon arrival.</li>
      </ul>
    </div>

    <div style={styles.priceNoteContainer}>
      <h3>Package Price:</h3>
      <p>Starting from ₹32,000 per person (based on double occupancy).</p>
      <h3>Note:</h3>
      <p>Prices may vary based on the airline, season, and additional customization. The itinerary is subject to change based on flight schedules and availability.</p>
    </div>
  </div>
    },
    {
      id: 55,
      title: "Mumbai to Amritsar Air India Express-Flights",
      location: "Mumbai - Amritsar",
      image: imgFlightPackage55,
      price: "20000 per person1500",
      grade: "economy-first class.",
      description:"The city of Mumbai to the sacred land of Amritsar with our carefully curated Spiritual Journey Flight Package. Immerse yourself in the divine ambiance of the Golden Temple, explore historical landmarks, and experience the rich Sikh culture of Amritsar.",
      Itinerary:
      <div>
      <div style={styles.itineraryContainer}>
        <h3>Day 1: Mumbai to Amritsar Flight</h3>
        <ul style={styles.itineraryList}>
          <li>Board a direct flight from Chhatrapati Shivaji Maharaj International Airport in Mumbai to Sri Guru Ram Dass Jee International Airport in Amritsar.</li>
          <li>Arrive in Amritsar and transfer to your chosen hotel near the Golden Temple.</li>
          <li>Check-in and refresh before heading to the Golden Temple complex.</li>
          <li>Witness the evening Palki Sahib ceremony at the Golden Temple.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 2-3: Amritsar Spiritual Exploration</h3>
        <ul style={styles.itineraryList}>
          <li>Participate in the spiritual ambiance of the Golden Temple with morning prayers.</li>
          <li>Explore the historical Jallianwala Bagh and pay homage to the martyrs.</li>
          <li>Visit the serene Durgiana Temple, known as the Silver Temple.</li>
          <li>Engage in community service at the langar (free kitchen) of the Golden Temple.</li>
          <li>Experience the patriotic fervor at the Wagah Border ceremony.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 4: Departure from Amritsar</h3>
        <ul style={styles.itineraryList}>
          <li>Check-out from the hotel.</li>
          <li>Visit the iconic Maharaja Ranjit Singh Museum to learn about Sikh history.</li>
          <li>Transfer to Sri Guru Ram Dass Jee International Airport for your return flight to Mumbai.</li>
          <li>Bid farewell to the spiritual city of Amritsar with cherished memories.</li>
        </ul>
      </div>
  
      <div style={styles.inclusionsContainer}>
        <h3>Package Inclusions:</h3>
        <ul style={styles.inclusionsList}>
          <li>Round-trip direct flights from Mumbai to Amritsar.</li>
          <li>Accommodation in a hotel near the Golden Temple in Amritsar.</li>
          <li>Daily breakfast at the hotel.</li>
          <li>Airport transfers in Amritsar.</li>
          <li>Guided tours of the Golden Temple, Jallianwala Bagh, and other landmarks.</li>
          <li>Participation in the Golden Temple langar.</li>
        </ul>
      </div>
  
      <div style={styles.priceNoteContainer}>
        <h3>Package Price:</h3>
        <p>Starting from ₹20,000 per person (based on double occupancy).</p>
        <h3>Note:</h3>
        <p>Prices may vary based on the airline, season, and additional customization. The itinerary is subject to change based on flight schedules and availability.</p>
      </div>
    </div>
    },
    {
      id: 56,
      title: "Hyderabad to Jaipur Alliance Air-Flights",
      location: "Hyderabad - Jaipur",
      image: imgFlightPackage56,
      price: "45000 per person",
      grade: "economy-first class.",
      description:"The regal charm and cultural richness of Jaipur, the Pink City, with our exclusive Royal Heritage Flight Journey from Hyderabad to Jaipur. Immerse yourself in the grandeur of Rajasthans capital city, explore its majestic forts and palaces, and revel in the vibrant culture and traditions.",
      Itinerary:
      <div>
    <div style={styles.itineraryContainer}>
      <h3>Day 1: Hyderabad to Jaipur Flight</h3>
      <ul style={styles.itineraryList}>
        <li>Board a direct flight from Rajiv Gandhi International Airport in Hyderabad to Jaipur International Airport.</li>
        <li>Arrive in Jaipur and transfer to your chosen luxury hotel or palace.</li>
        <li>Check-in and enjoy a welcome refreshment.</li>
        <li>Evening at leisure to explore the local surroundings or relax at the hotel.</li>
      </ul>
    </div>

    <div style={styles.itineraryContainer}>
      <h3>Day 2-4: Jaipur City Exploration</h3>
      <ul style={styles.itineraryList}>
        <li>Engage in a guided city tour of Jaipur, visiting City Palace, Jantar Mantar, and Hawa Mahal.</li>
        <li>Explore the magnificent Amber Fort and enjoy an elephant or jeep ride to the fort.</li>
        <li>Visit the Albert Hall Museum to admire its stunning architecture and exhibits.</li>
        <li>Stroll through the colorful markets and shop for traditional Rajasthani handicrafts.</li>
        <li>Optional visit to Nahargarh Fort for panoramic views of the city.</li>
      </ul>
    </div>

    <div style={styles.itineraryContainer}>
      <h3>Day 5: Departure from Jaipur</h3>
      <ul style={styles.itineraryList}>
        <li>Check-out from the hotel after breakfast.</li>
        <li>Transfer to Jaipur International Airport for your return flight to Hyderabad.</li>
        <li>Bid farewell to the Pink City with cherished memories.</li>
      </ul>
    </div>

    <div style={styles.inclusionsContainer}>
      <h3>Package Inclusions:</h3>
      <ul style={styles.inclusionsList}>
        <li>Round-trip direct flights from Hyderabad to Jaipur.</li>
        <li>Accommodation in a luxury hotel or palace in Jaipur.</li>
        <li>Daily meals, including breakfast, lunch, and dinner.</li>
        <li>Airport transfers in Jaipur.</li>
        <li>Guided tours of Jaipur's major attractions.</li>
        <li>Entrance fees to monuments and attractions.</li>
      </ul>
    </div>

    <div style={styles.priceNoteContainer}>
      <h3>Package Price:</h3>
      <p>Starting from ₹45,000 per person (based on double occupancy).</p>
      <h3>Note:</h3>
      <p>Prices may vary based on the airline, season, and additional customization. The itinerary is subject to change based on flight schedules and availability.</p>
    </div>
  </div>
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
