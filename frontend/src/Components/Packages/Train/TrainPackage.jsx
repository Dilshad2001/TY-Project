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
      description:"The bustling city of Mumbai to the sun-soaked beaches of Goa with our specially curated Train Expedition package. Experience the thrill of traversing the picturesque Western Ghats, witness the changing landscapes, and arrive in Goa ready for a memorable vacation filled with sun, sand, and relaxation.",
      itinerary:
      <div>
      <div style={styles.itineraryContainer}>
        <ul style={styles.itineraryList}>
          <h3>Day 1:</h3>
          <li>Departure from Mumbai</li>
          <li>Board the train at Mumbai's Chhatrapati Shivaji Terminus or Lokmanya Tilak Terminus.</li>
          <li>Enjoy the scenic route as the train departs Mumbai in the evening.</li>
          <li>Dinner on board the train.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 2:</h3>
        <ul style={styles.itineraryList}>
          <li>Journey through the Western Ghats</li>
          <li>Wake up to the breathtaking views of the Western Ghats.</li>
          <li>Breakfast served on the train.</li>
          <li>Relax and enjoy the scenic beauty as the train winds through tunnels and lush greenery.</li>
          <li>Lunch on board with a variety of regional specialties.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 3:</h3>
        <ul style={styles.itineraryList}>
          <li>Arrival in Goa</li>
          <li>Arrive in Goa in the morning.</li>
          <li>Transfer to your beachside hotel or resort for check-in.</li>
          <li>Welcome brunch at the hotel.</li>
          <li>Afternoon at leisure to explore the nearby beaches or relax by the pool.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 4-7:</h3>
        <ul style={styles.itineraryList}>
          <li>Goa Beach Paradise</li>
          <li>Enjoy the sun, sand, and surf on the beautiful beaches of Goa.</li>
          <li>Engage in water sports, beach activities, or simply relax by the shore.</li>
          <li>Explore the vibrant nightlife and local markets in the evenings.</li>
          <li>Optional guided tours to historical sites and spice plantations.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 8:</h3>
        <ul style={styles.itineraryList}>
          <li>Departure from Goa</li>
          <li>Check-out from the hotel.</li>
          <li>Transfer to the train station for your return journey to Mumbai.</li>
          <li>Dinner served on board as you bid farewell to the scenic beauty of Goa.</li>
        </ul>
      </div>
  
      <div style={styles.inclusionsContainer}>
        <h3>Package Inclusions:</h3>
        <ul style={styles.inclusionsList}>
          <li>Round-trip train tickets from Mumbai to Goa.</li>
          <li>Accommodation in a beachside hotel or resort in Goa.</li>
          <li>Daily meals on the train, including breakfast, lunch, and dinner.</li>
          <li>Welcome brunch and farewell dinner in Goa.</li>
          <li>Beach activities and water sports in Goa.</li>
          <li>Optional guided tours in Goa.</li>
        </ul>
      </div>
  
      <div style={styles.priceNoteContainer}>
        <h3>Package Price:</h3>
        <p>Starting from ₹20,000 per person (based on double occupancy).</p>
        <h3>Note:</h3>
        <p>Prices may vary based on the train class, season, and additional customization. The itinerary is subject to change based on train schedules and availability.</p>
      </div>
    </div>

    },
    {
      id: 42,
      title: "Mumbai to Agra Express",
      location: "Mumbai  -  Agra",
      image: imgTrainPackage42,
      price: "₹25,000 per person",
      duration: "7 days & 2 Nights",
      grade: "Second Class-Luxury Classes",
      description:"The bustling city of Mumbai to the historical city of Agra with our specially curated Heritage Train Expedition package. Immerse yourself in the cultural richness, witness architectural marvels, and experience the historical grandeur of Agra, home to the iconic Taj Mahal.",
      itinerary:
      <div>
      <div style={styles.itineraryContainer}>
        <ul style={styles.itineraryList}>
          <h3>Day 1:</h3>
          <li>Departure from Mumbai</li>
          <li>Board the heritage train at Mumbai's Chhatrapati Shivaji Terminus or Lokmanya Tilak Terminus.</li>
          <li>Dinner on board the train as you begin your overnight journey.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 2:</h3>
        <ul style={styles.itineraryList}>
          <li>Scenic Landscapes and Cultural Insight</li>
          <li>Wake up to the picturesque landscapes as the train journeys through diverse terrains.</li>
          <li>Breakfast served on the train.</li>
          <li>Relax and enjoy cultural performances and insights into the history of Agra.</li>
          <li>Lunch on board with a variety of regional specialties.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 3:</h3>
        <ul style={styles.itineraryList}>
          <li>Arrival in Agra</li>
          <li>Arrive in Agra in the morning.</li>
          <li>Transfer to your heritage hotel for check-in.</li>
          <li>Welcome lunch featuring traditional Mughlai cuisine.</li>
          <li>Afternoon visit to the Agra Fort, a UNESCO World Heritage Site.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 4:</h3>
        <ul style={styles.itineraryList}>
          <li>Taj Mahal Sunrise Tour</li>
          <li>Early morning visit to the iconic Taj Mahal to witness the sunrise.</li>
          <li>Guided tour of the Taj Mahal, a symbol of eternal love.</li>
          <li>Breakfast at a local restaurant.</li>
          <li>Afternoon at leisure for personal exploration or optional activities.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 5:</h3>
        <ul style={styles.itineraryList}>
          <li>Fatehpur Sikri Excursion</li>
          <li>Full-day excursion to Fatehpur Sikri, a deserted Mughal city.</li>
          <li>Explore the historic structures and palaces.</li>
          <li>Lunch at a local restaurant in Fatehpur Sikri.</li>
          <li>Return to Agra in the evening.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 6:</h3>
        <ul style={styles.itineraryList}>
          <li>Local Craft and Cuisine Experience</li>
          <li>Visit local craft workshops to witness traditional craftsmanship.</li>
          <li>Lunch featuring local Agra cuisine.</li>
          <li>Afternoon at leisure for shopping or exploring local markets.</li>
          <li>Farewell dinner with a cultural performance.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 7:</h3>
        <ul style={styles.itineraryList}>
          <li>Departure from Agra</li>
          <li>Check-out from the hotel.</li>
          <li>Transfer to the train station for your return journey to Mumbai.</li>
          <li>Dinner served on board as you bid farewell to the historical charm of Agra.</li>
        </ul>
      </div>
  
      <div style={styles.inclusionsContainer}>
        <h3>Package Inclusions:</h3>
        <ul style={styles.inclusionsList}>
          <li>Round-trip heritage train tickets from Mumbai to Agra.</li>
          <li>Accommodation in a heritage hotel in Agra.</li>
          <li>Daily meals on the train, including breakfast, lunch, and dinner.</li>
          <li>Welcome lunch and farewell dinner in Agra.</li>
          <li>Guided tours of Agra Fort, Taj Mahal, and Fatehpur Sikri.</li>
          <li>Craft workshops and cultural performances in Agra.</li>
        </ul>
      </div>
  
      <div style={styles.priceNoteContainer}>
        <h3>Package Price:</h3>
        <p>Starting from ₹25,000 per person (based on double occupancy).</p>
        <h3>Note:</h3>
        <p>Prices may vary based on the train class, season, and additional customization. The itinerary is subject to change based on train schedules and availability.</p>
      </div>
    </div>
    },
    {
      id: 43,
      title: "Mumbai to Manali Express",
      location: "Mumbai-Manali",
      image: imgTrainPackage43,
      price: "₹22,000 per person",
      duration: "8 days & 3 Nights",
      grade: "Second Class-Luxury Classes",
      description:"The train journey from the vibrant city of Mumbai to the picturesque landscapes of Manali with our specially crafted Express Train package. Witness the breathtaking scenery, traverse through mountainous terrains, and arrive in Manali ready to explore the serene beauty of the Himalayas.",
      itinerary:
      <div>
    <div style={styles.itineraryContainer}>
      <ul style={styles.itineraryList}>
        <h3>Day 1:</h3>
        <li>Departure from Mumbai</li>
        <li>Board the express train at Mumbai's Chhatrapati Shivaji Terminus or Lokmanya Tilak Terminus.</li>
        <li>Dinner on board the train as you start your overnight journey.</li>
      </ul>
    </div>

    <div style={styles.itineraryContainer}>
      <h3>Day 2:</h3>
      <ul style={styles.itineraryList}>
        <li>Western Ghats and Enchanting Landscapes</li>
        <li>Wake up to the scenic beauty of the Western Ghats.</li>
        <li>Breakfast served on the train.</li>
        <li>Enjoy panoramic views as the train winds through tunnels and valleys.</li>
        <li>Lunch on board with a variety of regional specialties.</li>
      </ul>
    </div>

    <div style={styles.itineraryContainer}>
      <h3>Day 3:</h3>
      <ul style={styles.itineraryList}>
        <li>Arrival in Chandigarh</li>
        <li>Arrive in Chandigarh in the morning.</li>
        <li>Transfer to a waiting luxury coach for the road journey to Manali.</li>
        <li>Lunch at a local restaurant en route.</li>
        <li>Reach Manali in the evening and check-in to your hotel.</li>
        <li>Welcome dinner featuring Himachali cuisine.</li>
      </ul>
    </div>

    <div style={styles.itineraryContainer}>
      <h3>Day 4-7:</h3>
      <ul style={styles.itineraryList}>
        <li>Manali Himalayan Retreat</li>
        <li>Explore the scenic beauty of Manali and its surrounding areas.</li>
        <li>Engage in adventure activities such as paragliding or trekking (optional).</li>
        <li>Visit Hadimba Devi Temple, Solang Valley, and Rohtang Pass.</li>
        <li>Enjoy local cuisine at traditional eateries.</li>
        <li>Relax by the riverside or take a stroll in the Old Manali.</li>
      </ul>
    </div>

    <div style={styles.itineraryContainer}>
      <h3>Day 8:</h3>
      <ul style={styles.itineraryList}>
        <li>Departure from Manali</li>
        <li>Check-out from the hotel.</li>
        <li>Transfer to the Manali bus station for your return journey to Chandigarh.</li>
        <li>Lunch at a local restaurant in Chandigarh.</li>
        <li>Board the express train for your overnight journey back to Mumbai.</li>
        <li>Dinner on board as you bid farewell to the mountains.</li>
      </ul>
    </div>

    <div style={styles.inclusionsContainer}>
      <h3>Package Inclusions:</h3>
      <ul style={styles.inclusionsList}>
        <li>Round-trip express train tickets from Mumbai to Chandigarh.</li>
        <li>Road journey from Chandigarh to Manali in a luxury coach.</li>
        <li>Accommodation in a hotel or resort in Manali.</li>
        <li>Daily meals on the train, including breakfast, lunch, and dinner.</li>
        <li>Welcome dinner and lunch in Manali.</li>
        <li>Guided tours and adventure activity arrangements in Manali.</li>
      </ul>
    </div>

    <div style={styles.priceNoteContainer}>
      <h3>Package Price:</h3>
      <p>Starting from ₹22,000 per person (based on double occupancy).</p>
      <h3>Note:</h3>
      <p>Prices may vary based on the train class, season, and additional customization. The itinerary is subject to change based on train schedules and availability.</p>
    </div>
  </div>
    },
    {
      id: 44,
      title: "Gujarat to Shimla Express",
      location: "Gujarat to Shimla",
      image: imgTrainPackage44,
      price: "₹20,000 per person",
      duration: "8 days & 2 Nights",
      grade: "Second Class-Luxury Classes",
      description:"The enchanting landscapes of Shimla with our carefully curated Himalayan Explorer Train Tour. Traverse through diverse terrains, witness the beauty of the Western Ghats and the Himalayas, and arrive in Shimla ready to immerse yourself in the serene mountain retreat.",
      itinerary:
      <div>
    <div style={styles.itineraryContainer}>
      <ul style={styles.itineraryList}>
        <h3>Day 1:</h3>
        <li>Departure from Gujarat</li>
        <li>Board the express train at a major station in Gujarat.</li>
        <li>Dinner on board the train as you begin your overnight journey.</li>
      </ul>
    </div>

    <div style={styles.itineraryContainer}>
      <h3>Day 2:</h3>
      <ul style={styles.itineraryList}>
        <li>Scenic Views and Cultural Insight</li>
        <li>Wake up to the changing landscapes as the train passes through the Western Ghats.</li>
        <li>Breakfast served on the train.</li>
        <li>Enjoy cultural performances and insights into the upcoming Himalayan adventure.</li>
        <li>Lunch on board with a variety of regional specialties.</li>
      </ul>
    </div>

    <div style={styles.itineraryContainer}>
      <h3>Day 3:</h3>
      <ul style={styles.itineraryList}>
        <li>Arrival in Chandigarh</li>
        <li>Arrive in Chandigarh in the morning.</li>
        <li>Transfer to a luxury coach for the road journey to Shimla.</li>
        <li>Lunch at a local restaurant en route.</li>
        <li>Reach Shimla in the evening and check-in to your hotel.</li>
        <li>Welcome dinner featuring Himachali specialties.</li>
      </ul>
    </div>

    <div style={styles.itineraryContainer}>
      <h3>Day 4-7:</h3>
      <ul style={styles.itineraryList}>
        <li>Shimla Himalayan Retreat</li>
        <li>Explore the beauty of Shimla and its surroundings.</li>
        <li>Visit the Ridge, Mall Road, and Jakhoo Temple.</li>
        <li>Engage in optional adventure activities like trekking or horse riding.</li>
        <li>Enjoy panoramic views from the Kufri Fun World.</li>
        <li>Relax at the hotel or explore the local markets.</li>
      </ul>
    </div>

    <div style={styles.itineraryContainer}>
      <h3>Day 8:</h3>
      <ul style={styles.itineraryList}>
        <li>Departure from Shimla</li>
        <li>Check-out from the hotel.</li>
        <li>Transfer to the Shimla railway station for your return journey.</li>
        <li>Lunch at a local restaurant in Shimla.</li>
        <li>Board the express train for your overnight journey back to Gujarat.</li>
        <li>Dinner on board as you bid farewell to the Himalayan landscapes.</li>
      </ul>
    </div>

    <div style={styles.inclusionsContainer}>
      <h3>Package Inclusions:</h3>
      <ul style={styles.inclusionsList}>
        <li>Round-trip express train tickets from Gujarat to Chandigarh.</li>
        <li>Road journey from Chandigarh to Shimla in a luxury coach.</li>
        <li>Accommodation in a hotel or resort in Shimla.</li>
        <li>Daily meals on the train, including breakfast, lunch, and dinner.</li>
        <li>Welcome dinner and lunch in Shimla.</li>
        <li>Guided tours and adventure activity arrangements in Shimla.</li>
      </ul>
    </div>

    <div style={styles.priceNoteContainer}>
      <h3>Package Price:</h3>
      <p>Starting from ₹20,000 per person (based on double occupancy).</p>
      <h3>Note:</h3>
      <p>Prices may vary based on the train class, season, and additional customization. The itinerary is subject to change based on train schedules and availability.</p>
    </div>
  </div>
    },
    {
      id: 45,
      title: "Mumbai to Sikkim superFast Express",
      location: "Mumbai to Sikkim ",
      image: imgTrainPackage45,
      price: "₹26,000 per person",
      duration: "5 days & 2 Nights",
      grade: "Second Class-Luxury Classes",
      description:"On an awe-inspiring train journey from the bustling city of Mumbai to the serene landscapes of Sikkim with our meticulously crafted Himalayan Expedition package. Traverse through diverse terrains, witness the beauty of the Eastern Ghats and the Himalayas, and arrive in Sikkim ready to explore the enchanting Himalayan kingdom.",
      itinerary:
      <div>
      <div style={styles.itineraryContainer}>
        <h3>Day 1:</h3>
        <ul style={styles.itineraryList}>
          <li>Departure from Mumbai</li>
          <li>Board the express train at Mumbai's Chhatrapati Shivaji Terminus or Lokmanya Tilak Terminus.</li>
          <li>Dinner on board the train as you start your overnight journey.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 2:</h3>
        <ul style={styles.itineraryList}>
          <li>Eastern Ghats and Cultural Insights</li>
          <li>Wake up to the changing landscapes as the train passes through the Eastern Ghats.</li>
          <li>Breakfast served on the train.</li>
          <li>Enjoy cultural performances and insights into the upcoming Himalayan adventure.</li>
          <li>Lunch on board with a variety of regional specialties.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 3:</h3>
        <ul style={styles.itineraryList}>
          <li>Arrival in Siliguri</li>
          <li>Arrive in Siliguri in the morning.</li>
          <li>Transfer to a waiting luxury coach for the road journey to Gangtok, Sikkim.</li>
          <li>Lunch at a local restaurant en route.</li>
          <li>Reach Gangtok in the evening and check-in to your hotel.</li>
          <li>Welcome dinner featuring local Sikkimese cuisine.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 4-7:</h3>
        <ul style={styles.itineraryList}>
          <li>Sikkim Himalayan Retreat</li>
          <li>Explore the captivating beauty of Sikkim and its surrounding areas.</li>
          <li>Visit the Rumtek Monastery and Hanuman Tok.</li>
          <li>Engage in optional activities like river rafting or paragliding.</li>
          <li>Explore the vibrant markets and cultural sites in Gangtok.</li>
          <li>Relax at the hotel or take a stroll in the serene Himalayan surroundings.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 8:</h3>
        <ul style={styles.itineraryList}>
          <li>Departure from Sikkim</li>
          <li>Check-out from the hotel.</li>
          <li>Transfer to the Gangtok railway station for your return journey.</li>
          <li>Lunch at a local restaurant in Gangtok.</li>
          <li>Board the express train for your overnight journey back to Mumbai.</li>
          <li>Dinner on board as you bid farewell to the Himalayan landscapes.</li>
        </ul>
      </div>
  
      <div style={styles.inclusionsContainer}>
        <h3>Package Inclusions:</h3>
        <ul style={styles.inclusionsList}>
          <li>Round-trip express train tickets from Mumbai to Siliguri.</li>
          <li>Road journey from Siliguri to Gangtok in a luxury coach.</li>
          <li>Accommodation in a hotel or resort in Gangtok.</li>
          <li>Daily meals on the train, including breakfast, lunch, and dinner.</li>
          <li>Welcome dinner and lunch in Gangtok.</li>
          <li>Guided tours and adventure activity arrangements in Sikkim.</li>
        </ul>
      </div>
  
      <div style={styles.priceNoteContainer}>
        <h3>Package Price:</h3>
        <p>Starting from ₹25,000 per person (based on double occupancy).</p>
        <h3>Note:</h3>
        <p>Prices may vary based on the train class, season, and additional customization. The itinerary is subject to change based on train schedules and availability.</p>
      </div>
    </div>
    },
    {
      id: 46,
      title: "Uttar Pradesh to Jaisalmer Desert Odyssey",
      location: "Uttar Pradesh to Jaisalmer",
      image: imgTrainPackage46,
      price: "₹30,000 per person",
      duration: "8 days & 4 Nights",
      grade: "Second Class-Luxury Classes",
      description:"The culturally rich state of Uttar Pradesh to the golden sands of Jaisalmer with our thoughtfully curated Desert Odyssey Train Tour. Traverse through the historical landscapes, witness the cultural tapestry of Rajasthan, and arrive in Jaisalmer ready to immerse yourself in the grandeur of the Thar Desert.",
      itinerary:
      <div>
      <div style={styles.itineraryContainer}>
        <h3>Day 1:</h3>
        <ul style={styles.itineraryList}>
          <li>Departure from Uttar Pradesh</li>
          <li>Board the express train at a major station in Uttar Pradesh.</li>
          <li>Dinner on board the train as you begin your overnight journey.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 2:</h3>
        <ul style={styles.itineraryList}>
          <li>Rajasthan's Rich Heritage</li>
          <li>Wake up to the vibrant landscapes as the train enters Rajasthan.</li>
          <li>Breakfast served on the train.</li>
          <li>Enjoy cultural performances and insights into the upcoming desert adventure.</li>
          <li>Lunch on board with a variety of regional specialties.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 3:</h3>
        <ul style={styles.itineraryList}>
          <li>Arrival in Jaisalmer</li>
          <li>Arrive in Jaisalmer in the morning.</li>
          <li>Transfer to your chosen accommodation for check-in.</li>
          <li>Welcome lunch featuring local Rajasthani cuisine.</li>
          <li>Afternoon visit to the Jaisalmer Fort, a UNESCO World Heritage Site.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 4-7:</h3>
        <ul style={styles.itineraryList}>
          <li>Jaisalmer Desert Experience</li>
          <li>Explore the architectural marvels of Jaisalmer, including Patwon Ki Haveli.</li>
          <li>Engage in a desert safari to experience the beauty of the Thar Desert.</li>
          <li>Visit Kuldhara, a deserted village with a haunting history.</li>
          <li>Enjoy a cultural evening with traditional folk performances.</li>
          <li>Optional activities include camel riding and sand dune trekking.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 8:</h3>
        <ul style={styles.itineraryList}>
          <li>Departure from Jaisalmer</li>
          <li>Check-out from the hotel.</li>
          <li>Transfer to the Jaisalmer railway station for your return journey.</li>
          <li>Lunch at a local restaurant in Jaisalmer.</li>
          <li>Board the express train for your overnight journey back to Uttar Pradesh.</li>
          <li>Dinner on board as you bid farewell to the desert landscapes.</li>
        </ul>
      </div>
  
      <div style={styles.inclusionsContainer}>
        <h3>Package Inclusions:</h3>
        <ul style={styles.inclusionsList}>
          <li>Round-trip express train tickets from Uttar Pradesh to Jaisalmer.</li>
          <li>Accommodation in a hotel or desert camp in Jaisalmer.</li>
          <li>Daily meals on the train, including breakfast, lunch, and dinner.</li>
          <li>Welcome lunch and farewell dinner in Jaisalmer.</li>
          <li>Guided tours of Jaisalmer Fort, Patwon Ki Haveli, and other landmarks.</li>
          <li>Desert safari and cultural performances in Jaisalmer.</li>
        </ul>
      </div>
  
      <div style={styles.priceNoteContainer}>
        <h3>Package Price:</h3>
        <p>Starting from ₹23,000 per person (based on double occupancy).</p>
        <h3>Note:</h3>
        <p>Prices may vary based on the train class, season, and additional customization. The itinerary is subject to change based on train schedules and availability.</p>
      </div>
    </div> 
    },
    {
      id: 47,
      title: "Mumbai to Amritsar superFast Express",
      location: "Mumbai to Amritsar",
      image: imgTrainPackage47,
      price: "₹35,000 per person",
      duration: "8 days & 2 Nights",
      grade: "Second Class-Luxury Classes",
      description:"On a soulful train journey from the bustling city of Mumbai to the spiritual heart of Punjab, Amritsar, with our carefully curated Spiritual Journey by Train package. Experience the cultural richness, witness religious fervor, and arrive in Amritsar ready to immerse yourself in the divine atmosphere.",
      itinerary:
      <div>
      <div style={styles.itineraryContainer}>
        <h3>Day 1:</h3>
        <ul style={styles.itineraryList}>
          <li>Departure from Mumbai</li>
          <li>Board the express train at Mumbai's Chhatrapati Shivaji Terminus or Lokmanya Tilak Terminus.</li>
          <li>Dinner on board the train as you begin your overnight journey.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 2:</h3>
        <ul style={styles.itineraryList}>
          <li>Cultural Insights and Scenic Views</li>
          <li>Wake up to the changing landscapes as the train traverses through diverse terrains.</li>
          <li>Breakfast served on the train.</li>
          <li>Enjoy cultural performances and insights into the spiritual journey ahead.</li>
          <li>Lunch on board with a variety of regional specialties.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 3:</h3>
        <ul style={styles.itineraryList}>
          <li>Arrival in Amritsar</li>
          <li>Arrive in Amritsar in the morning.</li>
          <li>Transfer to your chosen accommodation for check-in.</li>
          <li>Welcome lunch featuring traditional Punjabi cuisine.</li>
          <li>Afternoon visit to the Golden Temple, the holiest shrine in Sikhism.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 4-7:</h3>
        <ul style={styles.itineraryList}>
          <li>Amritsar Spiritual Exploration</li>
          <li>Engage in the spiritual atmosphere of the Golden Temple with morning prayers.</li>
          <li>Explore the historic Jallianwala Bagh and learn about its significance.</li>
          <li>Visit the iconic Wagah Border for the Beating Retreat ceremony.</li>
          <li>Participate in the community service at the langar (free kitchen) of the Golden Temple.</li>
          <li>Optional visit to the serene Durgiana Temple.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 8:</h3>
        <ul style={styles.itineraryList}>
          <li>Departure from Amritsar</li>
          <li>Check-out from the hotel.</li>
          <li>Transfer to the Amritsar railway station for your return journey.</li>
          <li>Lunch at a local restaurant in Amritsar.</li>
          <li>Board the express train for your overnight journey back to Mumbai.</li>
          <li>Dinner on board as you bid farewell to the spiritual city.</li>
        </ul>
      </div>
  
      <div style={styles.inclusionsContainer}>
        <h3>Package Inclusions:</h3>
        <ul style={styles.inclusionsList}>
          <li>Round-trip express train tickets from Mumbai to Amritsar.</li>
          <li>Accommodation in a hotel or guesthouse in Amritsar.</li>
          <li>Daily meals on the train, including breakfast, lunch, and dinner.</li>
          <li>Welcome lunch and farewell dinner in Amritsar.</li>
          <li>Guided tours of the Golden Temple, Jallianwala Bagh, and Wagah Border.</li>
          <li>Participation in the Golden Temple langar.</li>
        </ul>
      </div>
  
      <div style={styles.priceNoteContainer}>
        <h3>Package Price:</h3>
        <p>Starting from ₹18,000 per person (based on double occupancy).</p>
        <h3>Note:</h3>
        <p>Prices may vary based on the train class, season, and additional customization. The itinerary is subject to change based on train schedules and availability.</p>
      </div>
    </div>
    },
    {
      id: 48,
      title: "Hyderabad to Jaipur Royal Heritage Express",
      location: "Hyderabad to Jaipur",
      image: imgTrainPackage48,
      price: "₹40,000 per person",
      duration: "5 days & 3 Nights",
      grade: "Second Class-Luxury Classes",
      description:"The regal charm and cultural richness of Jaipur, the Pink City, with our exclusive Royal Heritage Train Journey from Hyderabad to Jaipur. Immerse yourself in the grandeur of Rajasthans capital city, explore its majestic forts and palaces, and revel in the vibrant culture and traditions.",
      itinerary:
      <div>
      <div style={styles.itineraryContainer}>
        <h3>Day 1:</h3>
        <ul style={styles.itineraryList}>
          <li>Departure from Hyderabad</li>
          <li>Board the luxurious train at Hyderabad Deccan Station.</li>
          <li>Welcome aboard with refreshments and orientation.</li>
          <li>Dinner served in the lavish dining car as the train begins its overnight journey.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 2:</h3>
        <ul style={styles.itineraryList}>
          <li>Enroute to Jaipur</li>
          <li>Breakfast served on board while enjoying the scenic landscapes.</li>
          <li>Lunch with a selection of regional delicacies.</li>
          <li>Afternoon leisure time to relax and socialize in the lounge car.</li>
          <li>Dinner featuring royal Rajasthani cuisine prepared by onboard chefs.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 3:</h3>
        <ul style={styles.itineraryList}>
          <li>Arrival in Jaipur</li>
          <li>Arrive in Jaipur in the morning.</li>
          <li>Transfer to your luxury hotel or palace for check-in.</li>
          <li>Welcome brunch showcasing traditional Rajasthani flavors.</li>
          <li>Afternoon visit to Amber Fort, a magnificent blend of Rajput and Mughal architecture.</li>
          <li>Explore the local markets and indulge in shopping for handicrafts and textiles.</li>
          <li>Return to the hotel for an evening of leisure.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 4:</h3>
        <ul style={styles.itineraryList}>
          <li>Jaipur City Tour</li>
          <li>Breakfast at the hotel followed by a guided city tour.</li>
          <li>Visit City Palace, Jantar Mantar, and Hawa Mahal.</li>
          <li>Lunch at a heritage restaurant serving authentic Rajasthani cuisine.</li>
          <li>Afternoon visit to the Albert Hall Museum to admire its stunning architecture and exhibits.</li>
          <li>Optional evening excursion to Nahargarh Fort for panoramic views of the city.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 5:</h3>
        <ul style={styles.itineraryList}>
          <li>Departure from Jaipur</li>
          <li>Check-out from the hotel after breakfast.</li>
          <li>Transfer to Jaipur railway station for your return journey to Hyderabad.</li>
          <li>Lunch served on board the train as you bid farewell to the Pink City.</li>
          <li>Dinner on board as the train heads back to Hyderabad.</li>
        </ul>
      </div>
  
      <div style={styles.inclusionsContainer}>
        <h3>Package Inclusions:</h3>
        <ul style={styles.inclusionsList}>
          <li>Round-trip luxury train tickets from Hyderabad to Jaipur.</li>
          <li>Accommodation in a luxury hotel or palace in Jaipur.</li>
          <li>Daily meals on the train, including breakfast, lunch, and dinner.</li>
          <li>Welcome brunch and farewell dinner in Jaipur.</li>
          <li>Guided tours of Amber Fort, City Palace, and other landmarks.</li>
          <li>Entrance fees to monuments and attractions.</li>
        </ul>
      </div>
  
      <div style={styles.priceNoteContainer}>
        <h3>Package Price:</h3>
        <p>Starting from ₹45,000 per person (based on double occupancy).</p>
        <h3>Note:</h3>
        <p>Prices may vary based on the train class, season, and additional customization. The itinerary is subject to change based on train schedules and availability.</p>
      </div>
    </div>
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
