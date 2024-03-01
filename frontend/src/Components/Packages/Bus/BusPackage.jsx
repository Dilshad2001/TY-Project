import React, { useEffect } from "react";
import Card from "../../Card/Card";
import Aos from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles
//Bus Packages imports
import imgBusPackges33 from "../../../Assets/Bus Tour Assets/Goa Bus Tour.jpg";
import imgBusPackges34 from "../../../Assets/Bus Tour Assets/Agra Bus Tour.jpg";
import imgBusPackges35 from "../../../Assets/Bus Tour Assets/Jogni Bus Tour.jpg";
import imgBusPackges36 from "../../../Assets/Bus Tour Assets/Shaily Peak Bus Tour.jpg";
import imgBusPackges37 from "../../../Assets/Bus Tour Assets/Buddha Bus Tour.jpg";
import imgBusPackges38 from "../../../Assets/Bus Tour Assets/bada bagh Bus Tour.jpg";
import imgBusPackges39 from "../../../Assets/Bus Tour Assets/Golden Temple Bus Tour.jpg";
import imgBusPackges40 from "../../../Assets/Bus Tour Assets/Jal Mahal Bus Tour.jpg";

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

const BusPackage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const packagesBus = [
    {
      id: 33,
      title: "Goa Discovery: Bus Tour",
      location: "Goa-Calangute Beach-Baga Beach-Dona Paula",
      image: imgBusPackges33,
      price: "5000 per person",
      grade: "Economy Class",
      description:
        "On a captivating journey with our Goa Discovery bus tour package. Immerse yourself in the rich cultural tapestry of Goa as you explore ancient churches vibrant markets and lush spice plantations. Indulge in the breathtaking beauty of sun-kissed beaches and savor the flavors of authentic Goan cuisine.",
      Itinerary: (
        <div>
          <div style={styles.itineraryContainer}>
            <ul style={styles.itineraryList}>
              <h3>Day 1:</h3>
              <li>Arrival and Welcome to Goa</li>
              <li>Arrive in Goa and transfer to your hotel.</li>
              <li>Welcome dinner and orientation.</li>
              <li>Evening city tour to explore key landmarks.</li>
            </ul>
          </div>

          <div style={styles.itineraryContainer}>
            <h3>Day 2:</h3>
            <ul style={styles.itineraryList}>
              <li>Scenic Coastal Drive</li>
              <li>Depart for a breathtaking coastal drive.</li>
              <li>Stop at scenic points for photos.</li>
              <li>Lunch in a coastal village.</li>
              <li>Panoramic views at another scenic point.</li>
              <li>Arrive at a seaside resort for dinner and overnight stay.</li>
            </ul>
          </div>

          <div style={styles.itineraryContainer}>
            <h3>Day 3:</h3>
            <ul style={styles.itineraryList}>
              <li>Coastal National Park Exploration</li>
              <li>Explore a coastal national park with guided nature walks.</li>
              <li>Picnic lunch amidst nature.</li>
              <li>
                Optional activities like kayaking or bird watching in the
                afternoon.
              </li>
              <li>Return to the resort for a relaxing evening.</li>
            </ul>
          </div>

          <div style={styles.itineraryContainer}>
            <h3>Day 4:</h3>
            <ul style={styles.itineraryList}>
              <li>Quaint Coastal Town Visit</li>
              <li>Visit the charming town for a guided walking tour.</li>
              <li>Explore historic sites and local markets.</li>
              <li>Lunch at a seaside cafe.</li>
              <li>Leisure time for shopping and exploring.</li>
              <li>Return to the resort for dinner.</li>
            </ul>
          </div>

          <div style={styles.itineraryContainer}>
            <h3>Day 5:</h3>
            <ul style={styles.itineraryList}>
              <li>Coastal Cuisine and Cultural Experience</li>
              <li>Cooking class featuring local coastal cuisine.</li>
              <li>Enjoy the fruits of your labor for lunch.</li>
              <li>Afternoon cultural performance.</li>
              <li>Evening beach bonfire and seafood barbecue.</li>
            </ul>
          </div>

          <div style={styles.itineraryContainer}>
            <h3>Day 6:</h3>
            <ul style={styles.itineraryList}>
              <li>Coastal Adventure Activities</li>
              <li>
                Choose from exciting coastal adventure activities (surfing,
                sailing, or hiking).
              </li>
              <li>Lunch at an adventure hub.</li>
              <li>Free time to explore the surroundings.</li>
              <li>Farewell dinner with a view of the sunset.</li>
            </ul>
          </div>

          <div style={styles.itineraryContainer}>
            <h3>Day 7:</h3>
            <ul style={styles.itineraryList}>
              <li>Departure</li>
              <li>Check-out from the resort.</li>
              <li>Transfer to the city for departure.</li>
            </ul>
          </div>

          <div style={styles.inclusionsContainer}>
            <h3>Package Inclusions:</h3>
            <ul style={styles.inclusionsList}>
              <li>Accommodation in 4-star hotels and resorts.</li>
              <li>Daily breakfast, lunch, and dinner.</li>
              <li>Transportation via comfortable air-conditioned bus.</li>
              <li>Guided tours and activities as per the itinerary.</li>
              <li>All entrance fees and permits.</li>
              <li>Experienced tour guide.</li>
            </ul>
          </div>

          <div style={styles.priceNoteContainer}>
            <h3>Package Price:</h3>
            <p>Starting from ₹5000 per person (based on double occupancy).</p>
            <h3>Note:</h3>
            <p>
              Prices may vary based on group size, season, and additional
              customization. The itinerary is subject to change based on local
              conditions and availability.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 34,
      title: "Agra Heritage Delight",
      location: "Taj Mahal-Agra Fort-Sheesh Mahal-Akbar Tomb",
      image: imgBusPackges34,
      price: "8000 per person",
      grade: "Business Class",
      description:
        "Come with our Agra Heritage Delight package,Witness the ethereal charm of the Taj Mahal at sunrise, delve into the rich history of Agra Fort, and stroll through the vibrant local markets Agra Heritage Delight promises an unforgettable blend of history, architecture, and the warm embrace of Agras enchanting heritage.",
      Itinerary: (
        <div>
          <div style={styles.itineraryContainer}>
            <ul style={styles.itineraryList}>
              <h3>Day 1:</h3>
              <li>Arrival in Agra</li>
              <li>Arrive in Agra and transfer to your hotel.</li>
              <li>Welcome dinner and orientation.</li>
              <li>
                Evening visit to the local markets for a cultural experience.
              </li>
            </ul>
          </div>

          <div style={styles.itineraryContainer}>
            <h3>Day 2:</h3>
            <ul style={styles.itineraryList}>
              <li>Taj Mahal Sunrise Tour</li>
              <li>
                Early morning visit to the Taj Mahal to witness the sunrise.
              </li>
              <li>
                Guided tour of the Taj Mahal, a UNESCO World Heritage Site.
              </li>
              <li>Breakfast at a local restaurant.</li>
              <li>Visit the Agra Fort, another architectural gem.</li>
            </ul>
          </div>

          <div style={styles.itineraryContainer}>
            <h3>Day 3:</h3>
            <ul style={styles.itineraryList}>
              <li>Agra Heritage Walk</li>
              <li>Morning heritage walk in the old city of Agra.</li>
              <li>
                Explore local markets, ancient temples, and historical
                landmarks.
              </li>
              <li>
                Afternoon visit to Itmad-ud-Daulah's Tomb, known as the "Baby
                Taj."
              </li>
              <li>Evening at leisure for personal exploration.</li>
            </ul>
          </div>

          <div style={styles.itineraryContainer}>
            <h3>Day 4:</h3>
            <ul style={styles.itineraryList}>
              <li>Fatehpur Sikri Excursion</li>
              <li>
                Full-day excursion to Fatehpur Sikri, a UNESCO World Heritage
                Site.
              </li>
              <li>Explore the historic structures within the city.</li>
              <li>Lunch at a local restaurant.</li>
              <li>Return to Agra in the evening.</li>
            </ul>
          </div>

          <div style={styles.itineraryContainer}>
            <h3>Day 5:</h3>
            <ul style={styles.itineraryList}>
              <li>Local Craft and Cuisine Experience</li>
              <li>
                Visit local craft workshops to witness traditional
                craftsmanship.
              </li>
              <li>Lunch featuring local Agra cuisine.</li>
              <li>
                Afternoon at leisure for shopping or personal exploration.
              </li>
              <li>Farewell dinner at a cultural restaurant.</li>
            </ul>
          </div>

          <div style={styles.itineraryContainer}>
            <h3>Day 6:</h3>
            <ul style={styles.itineraryList}>
              <li>Departure</li>
              <li>Check-out from the hotel.</li>
              <li>Transfer to the bus station or airport for departure.</li>
            </ul>
          </div>

          <div style={styles.inclusionsContainer}>
            <h3>Package Inclusions:</h3>
            <ul style={styles.inclusionsList}>
              <li>Accommodation in a heritage hotel.</li>
              <li>Daily breakfast, lunch, and dinner.</li>
              <li>Transportation via a comfortable air-conditioned bus.</li>
              <li>Guided tours and activities as per the itinerary.</li>
              <li>All entrance fees and permits.</li>
              <li>Experienced tour guide.</li>
            </ul>
          </div>

          <div style={styles.priceNoteContainer}>
            <h3>Package Price:</h3>
            <p>Starting from ₹8000 per person (based on double occupancy).</p>
            <h3>Note:</h3>
            <p>
              Prices may vary based on group size, season, and additional
              customization. The itinerary is subject to change based on local
              conditions and availability.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 35,
      title: "Jogni Waterfall Tour",
      location: "Solang Valley-Manikaran-Bhrigu Lake",
      image: imgBusPackges35,
      price: "10000 per person",
      grade: "Premium Class",
      description:
        " On a thrilling  Jogni Waterfall Adventure Tour, immersing yourself in the natural beauty of the serene Jogni Waterfall Road. Experience the joy of a guided trek to the mesmerizing waterfall,and unwind in comfortable accommodations. This curated package promises a perfect blend of exploration and relaxation in the heart of nature.",
      Itinerary: (
        <div>
          <div style={styles.itineraryContainer}>
            <ul style={styles.itineraryList}>
              <h3>Day 1:</h3>
              <li>Arrival in Manali</li>
              <li>Arrive in Manali and transfer to your hotel.</li>
              <li>Welcome dinner and tour briefing.</li>
              <li>Relax and acclimatize to the mountain atmosphere.</li>
            </ul>
          </div>

          <div style={styles.itineraryContainer}>
            <h3>Day 2:</h3>
            <ul style={styles.itineraryList}>
              <li>Jogini Waterfall Trek</li>
              <li>Early morning breakfast at the hotel.</li>
              <li>Depart for the Jogini Waterfall trek.</li>
              <li>Guided trek through lush greenery and scenic landscapes.</li>
              <li>Arrival at Jogini Waterfalls for a refreshing experience.</li>
              <li>Picnic lunch amidst nature.</li>
              <li>Return trek to Manali in the afternoon.</li>
            </ul>
          </div>

          <div style={styles.itineraryContainer}>
            <h3>Day 3:</h3>
            <ul style={styles.itineraryList}>
              <li>Adventure Activities</li>
              <li>Full day of adventure activities.</li>
              <li>
                Choose from options like river rafting, paragliding, or
                zip-lining.
              </li>
              <li>Lunch at an adventure hub.</li>
              <li>Free time to explore the surroundings.</li>
              <li>Evening bonfire and cultural activities.</li>
            </ul>
          </div>

          <div style={styles.itineraryContainer}>
            <h3>Day 4:</h3>
            <ul style={styles.itineraryList}>
              <li>Solang Valley Excursion</li>
              <li>
                Day trip to Solang Valley, known for its adventure sports.
              </li>
              <li>
                Engage in activities like zorbing, skiing, or cable car rides.
              </li>
              <li>Lunch at a local restaurant.</li>
              <li>Return to Manali in the evening.</li>
            </ul>
          </div>

          <div style={styles.itineraryContainer}>
            <h3>Day 5:</h3>
            <ul style={styles.itineraryList}>
              <li>Manali Exploration</li>
              <li>Morning visit to Hadimba Devi Temple and Manu Temple.</li>
              <li>Free time for shopping and exploring local markets.</li>
              <li>
                Optional activities like hot springs visit or local crafts
                workshops.
              </li>
              <li>Farewell dinner in Manali.</li>
            </ul>
          </div>

          <div style={styles.itineraryContainer}>
            <h3>Day 6:</h3>
            <ul style={styles.itineraryList}>
              <li>Departure</li>
              <li>Check-out from the hotel.</li>
              <li>Transfer to the bus station for departure.</li>
            </ul>
          </div>

          <div style={styles.inclusionsContainer}>
            <h3>Package Inclusions:</h3>
            <ul style={styles.inclusionsList}>
              <li>Accommodation in a hotel or resort.</li>
              <li>Daily breakfast, picnic lunch, and dinner.</li>
              <li>Transportation via a comfortable air-conditioned bus.</li>
              <li>Guided trek to Jogini Waterfalls.</li>
              <li>Adventure activity arrangements.</li>
              <li>All necessary permits and equipment.</li>
            </ul>
          </div>

          <div style={styles.priceNoteContainer}>
            <h3>Package Price:</h3>
            <p>Starting from ₹10,000 per person (based on double occupancy).</p>
            <h3>Note:</h3>
            <p>
              Prices may vary based on group size, season, and additional
              customization. The itinerary is subject to change based on weather
              conditions and availability.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 36,
      title: "Shaily Peak Tour",
      location: "Chail-Kali Bari Temple-Kufri",
      image: imgBusPackges36,
      price: "12000 per person",
      grade: "Sleeper Bus",
      description:
        "On a mesmerizing journey to Shaily Peak, Shimla, with our exclusive bus tour packages. Enjoy a day excursion filled with panoramic views, guided tours, and a delightful packed lunch. For a weekend retreat, experience two days of exploration, evening bonfires, and cultural activities, staying at a cozy hotel near Shaily Peak.",
      Itinerary: (
        <div>
          <div style={styles.itineraryContainer}>
            <ul style={styles.itineraryList}>
              <h3>Day 1:</h3>
              <li>Arrival in Shimla</li>
              <li>Arrive in Shimla and transfer to your hotel.</li>
              <li>Welcome dinner and tour briefing.</li>
              <li>Relax and acclimate to the charming atmosphere of Shimla.</li>
            </ul>
          </div>

          <div style={styles.itineraryContainer}>
            <h3>Day 2:</h3>
            <ul style={styles.itineraryList}>
              <li>Shaily Peak Exploration</li>
              <li>Early morning breakfast at the hotel.</li>
              <li>
                Depart for Shaily Peak by a comfortable air-conditioned bus.
              </li>
              <li>Scenic drive through the hills and forests.</li>
              <li>Arrival at Shaily Peak and commence the trek.</li>
              <li>Guided trek to the summit with panoramic views.</li>
              <li>Picnic lunch amidst the natural beauty.</li>
              <li>Return trek to the base and transfer back to Shimla.</li>
            </ul>
          </div>

          <div style={styles.itineraryContainer}>
            <h3>Day 3:</h3>
            <ul style={styles.itineraryList}>
              <li>Nature Walk and Local Exploration</li>
              <li>Morning nature walk in the lush surroundings.</li>
              <li>Explore the local markets and cultural sites in Shimla.</li>
              <li>Lunch at a traditional Himachali restaurant.</li>
              <li>Optional visit to the Mall Road or Jakhu Temple.</li>
              <li>Evening at leisure for personal exploration.</li>
            </ul>
          </div>

          <div style={styles.itineraryContainer}>
            <h3>Day 4:</h3>
            <ul style={styles.itineraryList}>
              <li>Adventure Activities in Kufri</li>
              <li>
                Full day excursion to Kufri, a charming hill station near
                Shimla.
              </li>
              <li>
                Engage in adventure activities like horse riding or tobogganing.
              </li>
              <li>Lunch at a local restaurant.</li>
              <li>Return to Shimla in the evening.</li>
            </ul>
          </div>

          <div style={styles.itineraryContainer}>
            <h3>Day 5:</h3>
            <ul style={styles.itineraryList}>
              <li>Shimla Heritage Tour</li>
              <li>
                Visit historic landmarks like Christ Church and Gaiety Theatre.
              </li>
              <li>Lunch at a colonial-style restaurant.</li>
              <li>Explore the Viceregal Lodge and botanical gardens.</li>
              <li>Farewell dinner in Shimla.</li>
            </ul>
          </div>

          <div style={styles.itineraryContainer}>
            <h3>Day 6:</h3>
            <ul style={styles.itineraryList}>
              <li>Departure</li>
              <li>Check-out from the hotel.</li>
              <li>Transfer to the bus station for departure.</li>
            </ul>
          </div>

          <div style={styles.inclusionsContainer}>
            <h3>Package Inclusions:</h3>
            <ul style={styles.inclusionsList}>
              <li>Accommodation in a hotel or resort.</li>
              <li>Daily breakfast, picnic lunch, and dinner.</li>
              <li>Transportation via a comfortable air-conditioned bus.</li>
              <li>Guided trek to Shaily Peak.</li>
              <li>Adventure activity arrangements.</li>
              <li>All necessary permits and equipment.</li>
            </ul>
          </div>

          <div style={styles.priceNoteContainer}>
            <h3>Package Price:</h3>
            <p>Starting from ₹12,000 per person (based on double occupancy).</p>
            <h3>Note:</h3>
            <p>
              Prices may vary based on group size, season, and additional
              customization. The itinerary is subject to change based on weather
              conditions and availability.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 37,
      title: "Buddha Park Tour",
      location: "Gangtok-Himalayan Zoological Park-Pelling",
      image: imgBusPackges37,
      price: "15000 per person",
      grade: "Double Decker Bus",
      description:
        'On a soul-stirring journey with our "Enchanting Buddha Park Discovery Tour." Witness the awe-inspiring 130-foot Buddha statue amidst the tranquil surroundings of Sikkim. Immerse yourself in spirituality as you explore the beautiful gardens and nearby Rumtek Monastery, creating memories that resonate with peace and serenity.',
      Itinerary: (
        <div>
          <div style={styles.itineraryContainer}>
            <ul style={styles.itineraryList}>
              <h3>Day 1:</h3>
              <li>Arrival in Sikkim</li>
              <li>Arrive in Sikkim and transfer to your hotel.</li>
              <li>Welcome dinner and orientation.</li>
              <li>Relax and acclimate to the serene atmosphere.</li>
            </ul>
          </div>

          <div style={styles.itineraryContainer}>
            <h3>Day 2:</h3>
            <ul style={styles.itineraryList}>
              <li>Buddha Park Exploration</li>
              <li>Early morning breakfast at the hotel.</li>
              <li>
                Depart for Buddha Park by a comfortable air-conditioned bus.
              </li>
              <li>
                Guided tour of Buddha Park with explanations of the sculptures'
                significance.
              </li>
              <li>Meditation session in the park's tranquil surroundings.</li>
              <li>Picnic lunch amidst the peaceful ambiance.</li>
              <li>Return to the hotel in the afternoon.</li>
            </ul>
          </div>

          <div style={styles.itineraryContainer}>
            <h3>Day 3:</h3>
            <ul style={styles.itineraryList}>
              <li>Rumtek Monastery Visit</li>
              <li>
                Morning visit to Rumtek Monastery, a significant Tibetan
                Buddhist monastery.
              </li>
              <li>
                Explore the monastery's architecture and religious artifacts.
              </li>
              <li>Lunch at a local restaurant.</li>
              <li>
                Return to the hotel for relaxation or optional activities.
              </li>
            </ul>
          </div>

          <div style={styles.itineraryContainer}>
            <h3>Day 4:</h3>
            <ul style={styles.itineraryList}>
              <li>Gangtok Sightseeing</li>
              <li>
                Full day exploration of Gangtok, the capital city of Sikkim.
              </li>
              <li>
                Visit Namgyal Institute of Tibetology and Do Drul Chorten.
              </li>
              <li>Lunch at a local eatery.</li>
              <li>
                Explore the vibrant MG Marg for shopping and cultural
                experiences.
              </li>
              <li>Return to the hotel in the evening.</li>
            </ul>
          </div>

          <div style={styles.itineraryContainer}>
            <h3>Day 5:</h3>
            <ul style={styles.itineraryList}>
              <li>Tashi Viewpoint and Local Markets</li>
              <li>
                Morning visit to Tashi Viewpoint for panoramic views of the
                Himalayas.
              </li>
              <li>Explore local markets for handicrafts and souvenirs.</li>
              <li>Lunch at a traditional Sikkimese restaurant.</li>
              <li>Optional visit to Hanuman Tok or Ganesh Tok.</li>
              <li>Farewell dinner in Gangtok.</li>
            </ul>
          </div>

          <div style={styles.itineraryContainer}>
            <h3>Day 6:</h3>
            <ul style={styles.itineraryList}>
              <li>Departure</li>
              <li>Check-out from the hotel.</li>
              <li>Transfer to the bus station or airport for departure.</li>
            </ul>
          </div>

          <div style={styles.inclusionsContainer}>
            <h3>Package Inclusions:</h3>
            <ul style={styles.inclusionsList}>
              <li>Accommodation in a hotel or resort.</li>
              <li>Daily breakfast, picnic lunch, and dinner.</li>
              <li>Transportation via a comfortable air-conditioned bus.</li>
              <li>Guided tours of Buddha Park and Rumtek Monastery.</li>
              <li>Meditation session arrangements.</li>
              <li>All necessary permits and entry fees.</li>
            </ul>
          </div>

          <div style={styles.priceNoteContainer}>
            <h3>Package Price:</h3>
            <p>Starting from ₹15,000 per person (based on double occupancy).</p>
            <h3>Note:</h3>
            <p>
              Prices may vary based on group size, season, and additional
              customization. The itinerary is subject to change based on local
              conditions and availability.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 38,
      title: "Bada Bagh luxury Bus Tour",
      location: "Kuldhara-Gadisar Lake-Kuldhara",
      image: imgBusPackges38,
      price: "25000 per person",
      grade: " VIP Class",
      description:"Immerse yourself in the rich history of Jaisalmer Fort and explore The highlight of the trip is the visit to Bada Bagh, a historical garden complex with intricately designed cenotaphs, offering a serene retreat amidst the desert landscape.It is a perfect blend of cultural exploration and natural beauty, promising an unforgettable experience in the heart of Rajasthan.",
      Itinerary:
      <div>
    <div style={styles.itineraryContainer}>
      <ul style={styles.itineraryList}>
        <h3>Day 1:</h3>
        <li>Arrival in Jaisalmer</li>
        <li>Grand welcome upon arrival in Jaisalmer.</li>
        <li>Transfer to your luxurious hotel for check-in.</li>
        <li>Welcome dinner with traditional Rajasthani cuisine.</li>
        <li>Evening at leisure to relax in the royal ambiance.</li>
      </ul>
    </div>

    <div style={styles.itineraryContainer}>
      <h3>Day 2:</h3>
      <ul style={styles.itineraryList}>
        <li>Bada Bagh Exploration</li>
        <li>Early morning breakfast at the hotel.</li>
        <li>Depart for Bada Bagh by a deluxe air-conditioned bus.</li>
        <li>Guided tour of Bada Bagh and its historic cenotaphs.</li>
        <li>Cultural performance in the serene surroundings.</li>
        <li>Picnic lunch with royal Rajasthani flavors.</li>
        <li>Return to the hotel in the afternoon for relaxation.</li>
      </ul>
    </div>

    <div style={styles.itineraryContainer}>
      <h3>Day 3:</h3>
      <ul style={styles.itineraryList}>
        <li>Jaisalmer Fort and Patwon Ki Haveli</li>
        <li>Morning visit to the majestic Jaisalmer Fort.</li>
        <li>Explore the intricate architecture and cultural significance.</li>
        <li>Lunch at a rooftop restaurant with panoramic views.</li>
        <li>Afternoon visit to Patwon Ki Haveli, a cluster of historic mansions.</li>
        <li>Optional camel ride in the desert (seasonal activity).</li>
      </ul>
    </div>

    <div style={styles.itineraryContainer}>
      <h3>Day 4:</h3>
      <ul style={styles.itineraryList}>
        <li>Sam Sand Dunes Excursion</li>
        <li>Full-day excursion to the Sam Sand Dunes.</li>
        <li>Enjoy a luxury desert safari with camel rides.</li>
        <li>Sunset at the dunes with cultural performances.</li>
        <li>Dinner at a royal desert camp.</li>
      </ul>
    </div>

    <div style={styles.itineraryContainer}>
      <h3>Day 5:</h3>
      <ul style={styles.itineraryList}>
        <li>Gadisar Lake and Local Markets</li>
        <li>Morning visit to Gadisar Lake for a peaceful boat ride.</li>
        <li>Explore the vibrant local markets for handicrafts.</li>
        <li>Lunch at a heritage restaurant.</li>
        <li>Optional visit to Salim Singh Ki Haveli.</li>
        <li>Farewell dinner in a royal setting.</li>
      </ul>
    </div>

    <div style={styles.itineraryContainer}>
      <h3>Day 6:</h3>
      <ul style={styles.itineraryList}>
        <li>Departure in Luxury</li>
        <li>Check-out from the hotel.</li>
        <li>Transfer to the bus station or airport in a luxury coach.</li>
      </ul>
    </div>

    <div style={styles.inclusionsContainer}>
      <h3>Package Inclusions:</h3>
      <ul style={styles.inclusionsList}>
        <li>Accommodation in a luxurious heritage hotel.</li>
        <li>Daily breakfast, picnic lunch, and dinner.</li>
        <li>Transportation via a deluxe air-conditioned bus.</li>
        <li>Guided tours of Bada Bagh, Jaisalmer Fort, and other landmarks.</li>
        <li>Luxury desert safari with cultural performances.</li>
        <li>All necessary permits and entry fees.</li>
      </ul>
    </div>

    <div style={styles.priceNoteContainer}>
      <h3>Package Price:</h3>
      <p>Starting from ₹25,000 per person (based on double occupancy).</p>
      <h3>Note:</h3>
      <p>Prices may vary based on group size, season, and additional customization. The itinerary is subject to change based on local conditions and availability.</p>
    </div>
  </div>
    },
    {
      id: 39,
      title: "Golden Temple & City Tour",
      location: "Wagah border-Akal Takht-Hall Bazaar",
      image: imgBusPackges39,
      price: "30000 per person",
      grade: "Luxury Bus",
      description:"On a soulful journey to explore the divine beauty of the Golden Temple in Amritsar with our meticulously curated luxury bus tour package. Experience the spiritual essence, architectural brilliance, and cultural richness of this revered Sikh pilgrimage site. This package is designed for those seeking a blend of spiritual rejuvenation and luxury travel.",
    Itinerary:
    <div>
    <div style={styles.itineraryContainer}>
      <ul style={styles.itineraryList}>
        <h3>Day 1:</h3>
        <li>Arrival in Amritsar</li>
        <li>Royal welcome upon arrival in Amritsar.</li>
        <li>Transfer to your luxurious accommodation for check-in.</li>
        <li>Welcome dinner featuring traditional Punjabi cuisine.</li>
        <li>Evening at leisure to soak in the serene atmosphere.</li>
      </ul>
    </div>

    <div style={styles.itineraryContainer}>
      <h3>Day 2:</h3>
      <ul style={styles.itineraryList}>
        <li>Golden Temple Morning Prayer</li>
        <li>Early morning departure to witness the morning prayers at the Golden Temple.</li>
        <li>Guided tour of the Golden Temple and its spiritual significance.</li>
        <li>Breakfast at the langar, a communal kitchen serving free meals.</li>
        <li>Relax in the tranquility of the temple surroundings.</li>
        <li>Return to the hotel for a luxurious afternoon.</li>
      </ul>
    </div>

    <div style={styles.itineraryContainer}>
      <h3>Day 3:</h3>
      <ul style={styles.itineraryList}>
        <li>Jallianwala Bagh and Wagah Border</li>
        <li>Morning visit to Jallianwala Bagh, a historic memorial.</li>
        <li>Explore the stories of the Jallianwala Bagh massacre.</li>
        <li>Lunch at a local restaurant with traditional flavors.</li>
        <li>Afternoon excursion to the Wagah Border for the Beating Retreat ceremony.</li>
        <li>Return to the hotel for an evening of leisure.</li>
      </ul>
    </div>

    <div style={styles.itineraryContainer}>
      <h3>Day 4:</h3>
      <ul style={styles.itineraryList}>
        <li>Maharaja Ranjit Singh Museum and Akal Takht</li>
        <li>Visit the Maharaja Ranjit Singh Museum to learn about Sikh history.</li>
        <li>Explore the artifacts and exhibits showcasing the life of Maharaja Ranjit Singh.</li>
        <li>Lunch at a heritage restaurant with a royal ambiance.</li>
        <li>Afternoon visit to Akal Takht, one of the five Takhts in Sikhism.</li>
        <li>Optional visit to the historic Ram Bagh Gardens.</li>
      </ul>
    </div>

    <div style={styles.itineraryContainer}>
      <h3>Day 5:</h3>
      <ul style={styles.itineraryList}>
        <li>Amritsar City Tour</li>
        <li>Full-day city tour featuring local landmarks and cultural sites.</li>
        <li>Explore the local markets for handicrafts and souvenirs.</li>
        <li>Lunch at a luxury restaurant with regional specialties.</li>
        <li>Visit the Durgiana Temple and other significant sites.</li>
        <li>Farewell dinner with a cultural performance.</li>
      </ul>
    </div>

    <div style={styles.itineraryContainer}>
      <h3>Day 6:</h3>
      <ul style={styles.itineraryList}>
        <li>Departure in Luxury</li>
        <li>Check-out from the hotel.</li>
        <li>Transfer to the bus station or airport in a deluxe coach.</li>
      </ul>
    </div>

    <div style={styles.inclusionsContainer}>
      <h3>Package Inclusions:</h3>
      <ul style={styles.inclusionsList}>
        <li>Accommodation in a luxurious hotel or resort.</li>
        <li>Daily breakfast, langar experience, and gourmet dinners.</li>
        <li>Transportation via a deluxe air-conditioned bus.</li>
        <li>Guided tours of the Golden Temple, Jallianwala Bagh, and other landmarks.</li>
        <li>VIP seating at the Wagah Border ceremony.</li>
        <li>All necessary permits and entry fees.</li>
      </ul>
    </div>

    <div style={styles.priceNoteContainer}>
      <h3>Package Price:</h3>
      <p>Starting from ₹30,000 per person (based on double occupancy).</p>
      <h3>Note:</h3>
      <p>Prices may vary based on group size, season, and additional customization. The itinerary is subject to change based on local conditions and availability.</p>
    </div>
  </div> 
    },
    {
      id: 40,
      title: "Jal Mahal Tour",
      location: "Hawa Mahal-Nahargarh Fort-Jaipur Zoo",
      image: imgBusPackges40,
      price: "35000 per person",
      grade: "V-VIP Class",
      description:"Experience the royal charm of Jaipur with our meticulously designed Luxury Bus Package for the Jal Mahal Discovery Tour. Immerse yourself in the architectural splendor and historical significance of Jal Mahal, surrounded by the serene waters of Man Sagar Lake. This tour is tailored for those seeking a regal and opulent exploration of Jaipurs cultural heritage.",
      Itinerary:
      <div>
      <div style={styles.itineraryContainer}>
        <ul style={styles.itineraryList}>
          <h3>Day 1:</h3>
          <li>Arrival in Jaipur</li>
          <li>Royal welcome upon arrival in Jaipur.</li>
          <li>Transfer to your luxurious accommodation for check-in.</li>
          <li>Welcome dinner featuring Rajasthani delicacies.</li>
          <li>Evening at leisure to enjoy the regal ambiance.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 2:</h3>
        <ul style={styles.itineraryList}>
          <li>Jal Mahal Morning Excursion</li>
          <li>Early morning departure for Jal Mahal by a deluxe air-conditioned bus.</li>
          <li>Guided tour of Jal Mahal, an architectural gem in the middle of Man Sagar Lake.</li>
          <li>Breakfast with a view of the tranquil surroundings.</li>
          <li>Relax by the lakeside and capture picturesque moments.</li>
          <li>Return to the hotel for a luxurious afternoon.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 3:</h3>
        <ul style={styles.itineraryList}>
          <li>Amer Fort and Hawa Mahal</li>
          <li>Morning visit to Amer Fort, a majestic hilltop fortress.</li>
          <li>Explore the intricate architecture and historical significance.</li>
          <li>Lunch at a rooftop restaurant with panoramic views.</li>
          <li>Afternoon visit to Hawa Mahal, the iconic Palace of Winds.</li>
          <li>Optional shopping in the vibrant local markets.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 4:</h3>
        <ul style={styles.itineraryList}>
          <li>City Palace and Jantar Mantar</li>
          <li>Explore the City Palace, a grand residence of the Jaipur royal family.</li>
          <li>Visit Jantar Mantar, an astronomical observatory.</li>
          <li>Lunch at a heritage restaurant with royal Rajasthani flavors.</li>
          <li>Afternoon at leisure for spa or relaxation.</li>
          <li>Evening cultural performance at the hotel.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 5:</h3>
        <ul style={styles.itineraryList}>
          <li>Albert Hall Museum and Nahargarh Fort</li>
          <li>Morning visit to the Albert Hall Museum for art and history enthusiasts.</li>
          <li>Lunch at a boutique restaurant featuring local cuisine.</li>
          <li>Afternoon excursion to Nahargarh Fort for panoramic views.</li>
          <li>Farewell dinner at an exquisite dining venue.</li>
        </ul>
      </div>
  
      <div style={styles.itineraryContainer}>
        <h3>Day 6:</h3>
        <ul style={styles.itineraryList}>
          <li>Departure in Luxury</li>
          <li>Check-out from the hotel.</li>
          <li>Transfer to the bus station or airport in a deluxe coach.</li>
        </ul>
      </div>
  
      <div style={styles.inclusionsContainer}>
        <h3>Package Inclusions:</h3>
        <ul style={styles.inclusionsList}>
          <li>Accommodation in a luxurious heritage hotel or resort.</li>
          <li>Daily breakfast, rooftop meals, and gourmet dinners.</li>
          <li>Transportation via a deluxe air-conditioned bus.</li>
          <li>Guided tours of Jal Mahal, Amer Fort, and other landmarks.</li>
          <li>Cultural performances and spa relaxation.</li>
          <li>All necessary permits and entry fees.</li>
        </ul>
      </div>
  
      <div style={styles.priceNoteContainer}>
        <h3>Package Price:</h3>
        <p>Starting from ₹35,000 per person (based on double occupancy).</p>
        <h3>Note:</h3>
        <p>Prices may vary based on group size, season, and additional customization. The itinerary is subject to change based on local conditions and availability.</p>
      </div>
    </div>
    },

    // Add more packages as needed
  ];
  return (
    <div>
      <h3 data-aos="fade-right" className="title">
        Bus packages
      </h3>
      <div className="package-cards-container">
        {packagesBus.map((packageItem) => (
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
  );
};

export default BusPackage;
