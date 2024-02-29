//PackageData.js

//Travlling Packges imports
import imgTravlling1 from "../../Assets/Main-Assets/Goa img1.jpg";
import imgTravlling2 from "../../Assets/Main-Assets/Agra img2.jpg";
import imgTravlling3 from "../../Assets/Main-Assets/Manali waterfall img3.jpg";
import imgTravlling4 from "../../Assets/Main-Assets/Shimla img4.jpg";
import imgTravlling5 from "../../Assets/Main-Assets/Sikkim img5.jpg";
import imgTravlling6 from "../../Assets/Main-Assets/Jaisalmer img6.jpeg";
import imgTravlling7 from "../../Assets/Main-Assets/Amritsar img7.jpg";
import imgTravlling8 from "../../Assets/Main-Assets/jaipur jal img8.jpg";
//Rafting Packages imports
import imgRafting9 from "../../Assets/Rafting Assets/Rafting Kullu.jpg";
import imgRafting10 from "../../Assets/Rafting Assets/Rafting ganga.jpg";
import imgRafting11 from "../../Assets/Rafting Assets/Rafting Darjling.jpg";
import imgRafting12 from "../../Assets/Rafting Assets/Rafting Coorg.jpg";
import imgRafting13 from "../../Assets/Rafting Assets/Rafting Maharashtra.jpg";
import imgRafting14 from "../../Assets/Rafting Assets/Rafting Yamuna.jpg";
import imgRafting15 from "../../Assets/Rafting Assets/Rafting spiti.jpg";
import imgRafting16 from "../../Assets/Rafting Assets/Rafting Arunachal Pradesh.jpg";
//Trekking Packages imports
import imgTrekking17 from "../../Assets/Trekking Assets/Treak chadar.jpg";
import imgTrekking18 from "../../Assets/Trekking Assets/Treak kasmir.jpg";
import imgTrekking19 from "../../Assets/Trekking Assets/Treak Everest.jpg";
import imgTrekking20 from "../../Assets/Trekking Assets/treak bhuran.jpg";
import imgTrekking21 from "../../Assets/Trekking Assets/Treak chopata.jpg";
import imgTrekking22 from "../../Assets/Trekking Assets/Treak sandup.jpg";
import imgTrekking23 from "../../Assets/Trekking Assets/Treak Dzongri.jpg";
import imgTrekking24 from "../../Assets/Trekking Assets/Treak rajmachi.jpg";
//Hotels Packages imports
import imgHotels25 from "../../Assets/Hotels Assets/Hotels goa.jpg";
import imgHotels26 from "../../Assets/Hotels Assets/hotels taj mahal.jpg";
import imgHotels27 from "../../Assets/Hotels Assets/Hotels manali.jpeg";
import imgHotels28 from "../../Assets/Hotels Assets/Hotels simla.jpg";
import imgHotels29 from "../../Assets/Hotels Assets/Hotels sikkim.jpg";
import imgHotels30 from "../../Assets/Hotels Assets/Hotels Jaisalmer.jpg";
import imgHotels31 from "../../Assets/Hotels Assets/Hotels Amritsar.jpg";
import imgHotels32 from "../../Assets/Hotels Assets/Hotels jaipur.jpg";
//Bus Packages imports
import imgBusPackges33 from "../../Assets/Bus Tour Assets/Goa Bus Tour.jpg";
import imgBusPackges34 from "../../Assets/Bus Tour Assets/Agra Bus Tour.jpg";
import imgBusPackges35 from "../../Assets/Bus Tour Assets/Jogni Bus Tour.jpg";
import imgBusPackges36 from "../../Assets/Bus Tour Assets/Shaily Peak Bus Tour.jpg";
import imgBusPackges37 from "../../Assets/Bus Tour Assets/Buddha Bus Tour.jpg";
import imgBusPackges38 from "../../Assets/Bus Tour Assets/bada bagh Bus Tour.jpg";
import imgBusPackges39 from "../../Assets/Bus Tour Assets/Golden Temple Bus Tour.jpg";
import imgBusPackges40 from "../../Assets/Bus Tour Assets/Jal Mahal Bus Tour.jpg";
//TrainPackages imports
import imgTrainPackage41 from "../../Assets/Train packages Assets/Mumbai-Goa Train.jpg";
import imgTrainPackage42 from "../../Assets/Train packages Assets/Mumbai-Agra Train.jpg";
import imgTrainPackage43 from "../../Assets/Train packages Assets/Mumbai- manali Train.jpg";
import imgTrainPackage44 from "../../Assets/Train packages Assets/Mumbai-shimla Trains.jpg";
import imgTrainPackage45 from "../../Assets/Train packages Assets/Mumbai-Sikkim Train.jpg";
import imgTrainPackage46 from "../../Assets/Train packages Assets/UP-jaisalmer trains.jpg";
import imgTrainPackage47 from "../../Assets/Train packages Assets/Mumbai-Amritsar Train.png";
import imgTrainPackage48 from "../../Assets/Train packages Assets/Hyderabad-jaipur Train.jpg";
//FlightPackages imports
import imgFlightPackage49 from "../../Assets/Flight Packages Assets/Goa Flight.jpg";
import imgFlightPackage50 from "../../Assets/Flight Packages Assets/Agra Flight.jpg";
import imgFlightPackage51 from "../../Assets/Flight Packages Assets/Manali Flight.jpg";
import imgFlightPackage52 from "../../Assets/Flight Packages Assets/shimla Flight.jpg";
import imgFlightPackage53 from "../../Assets/Flight Packages Assets/sikkim Flight.jpg";
import imgFlightPackage54 from "../../Assets/Flight Packages Assets/jaisalmer Flight.jpg";
import imgFlightPackage55 from "../../Assets/Flight Packages Assets/Amritsar Flight.jpg";
import imgFlightPackage56 from "../../Assets/Flight Packages Assets/Jaipur Flight.jpg";

export const styles = {
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
export const packagesTravelling = [
  {
    id: 1,
    image: imgTravlling1,
    title: "Goa Beach Paradise",
    location: "Goa",
    grade: "BEACH RELAX",
    price: "₹15,000",
    description:
      "the new moon, Goas beaches are known the world over. Fringed by swaying palm and coconut trees with cool and comfortable shacks offering a variety of refreshments, Goas 103 km coastline is blessed with the most enchanting beaches lapped by the Arabian Sea.s",
    Itinerary: (
      <div>
        <div style={styles.itineraryContainer}>
          <ul style={styles.itineraryList}>
            <h3>Day 1:</h3>
            <li> - Arrival and City Exploration</li>
            <li> - Destination Enchanting Coastal Adventure.</li>
            <li> - Arrive at Goa and transfer to your hotel.</li>
            <li> - Welcome dinner and orientation.</li>
            <li> - Evening city tour to explore key landmarks.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 2:</h3>
          <ul style={styles.itineraryList}>
            <li>- Scenic Coastal Drive.</li>
            <li>- Depart for a breathtaking coastal drive.</li>
            <li>- Stop at [Aguada Fort] for photos.</li>
            <li>- Lunch in a coastal village.</li>
            <li>- Continue to [Basilica of Bom Jesus] for panoramic views.</li>
            <li>- Arrive at a seaside resort for dinner and overnight stay.</li>
          </ul>
        </div>
        <div style={styles.itineraryContainer}>
          <h3>Day 3:</h3>
          <ul style={styles.itineraryList}>
            <li>- Coastal National Park Exploration</li>
            <li>- Explore [National Park] with guided nature walks.</li>
            <li>- Picnic lunch amidst nature.</li>
            <li>- Afternoon optional activities (kayaking, bird watching).</li>
            <li>- Return to the resort for a relaxing evening.</li>
          </ul>
        </div>

        <div style={styles.inclusionsContainer}>
          <h3>Package Inclusions:</h3>
          <ul style={styles.inclusionsList}>
            <li>Accommodation in 4-star hotels and resorts.</li>
            <li>Daily breakfast, lunch, and dinner.</li>
            <li>Transportation via comfortable air-conditioned bus.</li>
            <li>Guided tours and activities as per itinerary.</li>
            <li>All entrance fees and permits.</li>
            <li>Experienced tour guide.</li>
          </ul>
        </div>
        <div style={styles.priceNoteContainer}>
          <h3>Package Price:</h3>
          <p>{"Starting from ₹5000 per person (based on double occupancy)."}</p>
          <h3>Note:</h3>
          <p>
            {
              "Prices may vary based on group size, season, and additional customization."
            }
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 2,
    image: imgTravlling2,
    title: "Taj Mahal",
    location: "Agra",
    grade: "HISTORICAL EXPLORATION",
    price: "₹25,000",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.",
    Itinerary: (
      <div>
        <div style={styles.itineraryContainer}>
          <ul style={styles.itineraryList}>
            <h3>Day 1:</h3>
            <li>Arrival and City Exploration</li>
            <li>Destination: A Glimpse of Mughal Grandeur</li>
            <li>Arrive at Agra and transfer to your boutique hotel.</li>
            <li>Welcome dinner and orientation.</li>
            <li>
              Evening visit to the Taj Mahal (exterior) for a mesmerizing view.
            </li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 2:</h3>
          <ul style={styles.itineraryList}>
            <li>Taj Mahal and Agra Fort</li>
            <li>Visit the Taj Mahal at sunrise with a knowledgeable guide.</li>
            <li>Breakfast at the hotel.</li>
            <li>Explore Agra Fort and its fascinating history.</li>
            <li>Evening at leisure or optional visit to Mehtab Bagh.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 3:</h3>
          <ul style={styles.itineraryList}>
            <li>Historical Walk and Cultural Show</li>
            <li>Morning historical walk through the streets of Agra.</li>
            <li>Visit local markets and historic sites.</li>
            <li>Lunch at a traditional Indian restaurant.</li>
            <li>Evening cultural show (dance or music performance).</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 4:</h3>
          <ul style={styles.itineraryList}>
            <li>Fatehpur Sikri Excursion</li>
            <li>Full-day excursion to Fatehpur Sikri.</li>
            <li>Explore the UNESCO World Heritage Site.</li>
            <li>Lunch at a local restaurant.</li>
            <li>Return to Agra for a relaxing evening.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 5:</h3>
          <ul style={styles.itineraryList}>
            <li>Departure</li>
            <li>Check-out from the boutique hotel.</li>
            <li>Transfer to the station/airport for departure.</li>
          </ul>
        </div>

        <div style={styles.inclusionsContainer}>
          <h3>Package Inclusions:</h3>
          <ul style={styles.inclusionsList}>
            <li>Accommodation in a boutique hotel (double occupancy).</li>
            <li>Daily breakfast.</li>
            <li>
              Round-trip train tickets (AC chair car or sleeper class) or
              private transport.
            </li>
            <li>Guided tours to Taj Mahal, Agra Fort, and Fatehpur Sikri.</li>
            <li>Evening cultural show.</li>
          </ul>
        </div>

        <div style={styles.priceNoteContainer}>
          <h3>Package Price:</h3>
          <p>{"Starting from ₹7500 per person (based on double occupancy)."}</p>
          <h3>Note:</h3>
          <p>
            {
              "Prices may vary based on group size, season, and additional customization."
            }
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 3,
    image: imgTravlling3,
    title: "Jogni Waterfall Road",
    location: " Manali",
    grade: "ADVENTURE ESCAPE",
    price: "₹30,000",
    description:
      "Manali is synonymous streams and birdsong, forests and orchards and grandees of snow-capped mountains. Manali is the real starting point of an ancient trade route which crosses the Rohtang and Baralacha passes, and runs via Lahul and Ladakh to Kashmir while divergent road connects it with Spiti.",
    Itinerary: (
      <div>
        <div style={styles.itineraryContainer}>
          <ul style={styles.itineraryList}>
            <h3>Day 1:</h3>
            <li>Arrival and Acclimatization</li>
            <li>Destination: Gateway to the Himalayas</li>
            <li>Arrive at Manali and transfer to your mountain resort.</li>
            <li>Welcome dinner and orientation.</li>
            <li>Evening at leisure for acclimatization.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 2:</h3>
          <ul style={styles.itineraryList}>
            <li>Rohtang Pass Excursion</li>
            <li>Full-day excursion to Rohtang Pass.</li>
            <li>Enjoy snow activities and panoramic views.</li>
            <li>Lunch at a mountain cafe.</li>
            <li>Return to the resort for dinner and relaxation.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 3:</h3>
          <ul style={styles.itineraryList}>
            <li>Solang Valley Adventure</li>
            <li>Visit Solang Valley for adventure activities.</li>
            <li>Options include paragliding, zorbing, and ATV rides.</li>
            <li>Lunch at an adventure hub.</li>
            <li>Evening at leisure or optional spa session.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 4:</h3>
          <ul style={styles.itineraryList}>
            <li>Local Sightseeing</li>
            <li>Explore local attractions in Manali.</li>
            <li>Visit Hadimba Devi Temple and Manu Temple.</li>
            <li>Lunch at a traditional Himachali restaurant.</li>
            <li>Free time for shopping in the Mall Road area.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 5:</h3>
          <ul style={styles.itineraryList}>
            <li>Waterfall Trek</li>
            <li>Trek to a scenic waterfall in the surrounding hills.</li>
            <li>Picnic lunch amidst nature.</li>
            <li>Afternoon at leisure by the waterfall.</li>
            <li>Return to the resort for dinner.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 6:</h3>
          <ul style={styles.itineraryList}>
            <li>Adventure Day</li>
            <li>
              Choose from exciting adventure activities (sailing, hiking, or
              mountain biking).
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
            <li>Check-out from the mountain resort.</li>
            <li>Transfer to the bus station/airport for departure.</li>
          </ul>
        </div>

        <div style={styles.inclusionsContainer}>
          <h3>Package Inclusions:</h3>
          <ul style={styles.inclusionsList}>
            <li>Accommodation in a mountain resort (double occupancy).</li>
            <li>Daily breakfast and dinner.</li>
            <li>
              Transportation via comfortable Volvo bus (Delhi to Manali) or
              private transport.
            </li>
            <li>Guided tours and activities as per itinerary.</li>
            <li>All entrance fees and permits.</li>
            <li>Experienced adventure guide.</li>
          </ul>
        </div>

        <div style={styles.priceNoteContainer}>
          <h3>Package Price:</h3>
          <p>
            {"Starting from ₹10,000 per person (based on double occupancy)."}
          </p>
          <h3>Note:</h3>
          <p>
            {
              "Prices may vary based on group size, season, and additional customization."
            }
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 4,
    image: imgTravlling4,
    title: "Shaily Peak",
    location: "Shimla",
    grade: "HILL STATION RELAXATION",
    price: "₹35,237",
    description:
      "Shimla, city, capital of Himachal Pradesh state, northwestern India. The city lies northeast of Chandigarh on a ridge of the Himalayan foothills, at an elevation of about 7,100 feet (2,200 metres). Shimla was built by the British on land they had retained after the Gurkha War of 1814–16 and was used for resting troops.",
    Itinerary: (
      <div>
        <div style={styles.itineraryContainer}>
          <ul style={styles.itineraryList}>
            <h3>Day 1:</h3>
            <li>Arrival and City Exploration</li>
            <li>Destination: Colonial Delight</li>
            <li>Arrive at Shimla and transfer to your colonial-style hotel.</li>
            <li>Welcome dinner and orientation.</li>
            <li>Evening stroll on the historic Ridge Road.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 2:</h3>
          <ul style={styles.itineraryList}>
            <li>Kufri Excursion</li>
            <li>Full-day excursion to Kufri.</li>
            <li>Enjoy horse riding and panoramic views.</li>
            <li>Lunch at a local restaurant.</li>
            <li>Visit the Himalayan Nature Park.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 3:</h3>
          <ul style={styles.itineraryList}>
            <li>Mall Road Shopping</li>
            <li>Explore Shimla's famous Mall Road.</li>
            <li>Visit Christ Church and Scandal Point.</li>
            <li>Lunch at a traditional Himachali eatery.</li>
            <li>Free time for shopping and leisure.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 4:</h3>
          <ul style={styles.itineraryList}>
            <li>Chail Day Trip</li>
            <li>Day trip to Chail, known for its cricket ground and palace.</li>
            <li>Explore Chail Palace and the surrounding cedar forests.</li>
            <li>Lunch at a hillside cafe.</li>
            <li>Return to Shimla for a relaxing evening.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 5:</h3>
          <ul style={styles.itineraryList}>
            <li>Jakhu Temple and Local Markets</li>
            <li>Visit Jakhu Temple, dedicated to Lord Hanuman.</li>
            <li>Trek to the hilltop for panoramic views.</li>
            <li>Lunch at a local market eatery.</li>
            <li>Afternoon at leisure for shopping.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 6:</h3>
          <ul style={styles.itineraryList}>
            <li>Nature Walk and Heritage Sites</li>
            <li>Morning nature walk through Shimla's wooded trails.</li>
            <li>Visit heritage sites like Viceregal Lodge.</li>
            <li>Lunch at a colonial-style restaurant.</li>
            <li>Farewell dinner at the hotel.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 7:</h3>
          <ul style={styles.itineraryList}>
            <li>Departure</li>
            <li>Check-out from the colonial-style hotel.</li>
            <li>Transfer to the bus station/airport for departure.</li>
          </ul>
        </div>

        <div style={styles.inclusionsContainer}>
          <h3>Package Inclusions:</h3>
          <ul style={styles.inclusionsList}>
            <li>Accommodation in a colonial-style hotel (double occupancy).</li>
            <li>Daily breakfast and dinner.</li>
            <li>Private transport from Manali to Shimla.</li>
            <li>Guided tours and activities as per itinerary.</li>
            <li>All entrance fees and permits.</li>
            <li>Experienced local guide.</li>
          </ul>
        </div>

        <div style={styles.priceNoteContainer}>
          <h3>Package Price:</h3>
          <p>
            {"Starting from ₹9,000 per person (based on double occupancy)."}
          </p>
          <h3>Note:</h3>
          <p>
            {
              "Prices may vary based on group size, season, and additional customization."
            }
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 5,
    image: imgTravlling5,
    title: "Buddha Park",
    location: "Sikkim",
    grade: " MOUNTAIN DISCOVERY",
    price: "₹40,000",
    description:
      "The Buddha Park of Ravangla, also known as Tathagata Tsal, is situated near Rabong (Ravangla) in South Sikkim district, Sikkim, India. It was constructed between 2006 and 2013 and features a 130-foot (40 m) high statue of the Buddha as its centerpiece.",
    Itinerary: (
      <div>
        <div style={styles.itineraryContainer}>
          <ul style={styles.itineraryList}>
            <h3>Day 1:</h3>
            <li>Arrival in Gangtok</li>
            <li>Destination: Gateway to the Himalayas</li>
            <li>Arrive at Bagdogra Airport and transfer to Gangtok.</li>
            <li>Welcome dinner and orientation.</li>
            <li>Evening stroll on M.G. Marg.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 2:</h3>
          <ul style={styles.itineraryList}>
            <li>Gangtok Exploration</li>
            <li>Explore Gangtok's monasteries - Rumtek or Enchey.</li>
            <li>Visit the Namgyal Institute of Tibetology.</li>
            <li>Lunch at a local Tibetan restaurant.</li>
            <li>Evening at leisure or optional visit to Banjhakri Falls.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 3:</h3>
          <ul style={styles.itineraryList}>
            <li>Tsomgo Lake and Baba Mandir</li>
            <li>Full-day excursion to Tsomgo Lake and Baba Mandir.</li>
            <li>Enjoy the breathtaking views of the Himalayas.</li>
            <li>Lunch at a lakeside eatery.</li>
            <li>Return to Gangtok for the evening.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 4:</h3>
          <ul style={styles.itineraryList}>
            <li>Nathula Pass Adventure</li>
            <li>Explore Nathula Pass (subject to permit availability).</li>
            <li>Visit the border between India and China.</li>
            <li>Lunch at a high-altitude cafe.</li>
            <li>Return to Gangtok for a cultural performance.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 5:</h3>
          <ul style={styles.itineraryList}>
            <li>Pelling Exploration</li>
            <li>Transfer to Pelling with scenic views en route.</li>
            <li>Visit Pemayangtse Monastery and Rabdentse Ruins.</li>
            <li>Lunch at a hillside restaurant.</li>
            <li>Evening at leisure to explore Pelling.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 6:</h3>
          <ul style={styles.itineraryList}>
            <li>Yuksom and Khecheopalri Lake</li>
            <li>Day trip to Yuksom, the historical town of Sikkim.</li>
            <li>Visit Khecheopalri Lake and Dubdi Monastery.</li>
            <li>Lunch at a local eatery.</li>
            <li>Return to Pelling for a relaxing evening.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 7:</h3>
          <ul style={styles.itineraryList}>
            <li>Departure</li>
            <li>Check-out from the hotel in Pelling.</li>
            <li>Transfer to Bagdogra Airport for departure.</li>
          </ul>
        </div>

        <div style={styles.inclusionsContainer}>
          <h3>Package Inclusions:</h3>
          <ul style={styles.inclusionsList}>
            <li>Accommodation in boutique guesthouses (double occupancy).</li>
            <li>Daily breakfast and dinner.</li>
            <li>Round-trip flight to Bagdogra (nearest airport).</li>
            <li>Guided tours and activities as per itinerary.</li>
            <li>All entrance fees and permits.</li>
            <li>Experienced local guide.</li>
          </ul>
        </div>

        <div style={styles.priceNoteContainer}>
          <h3>Package Price:</h3>
          <p>
            {"Starting from ₹12,000 per person (based on double occupancy)."}
          </p>
          <h3>Note:</h3>
          <p>
            {
              "Prices may vary based on group size, season, and additional customization. Permit availability for Nathula Pass is subject to government regulations."
            }
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    image: imgTravlling6,
    title: "Bada Bagh ",
    location: " Jaisalmer",
    grade: "DESERT ADVENTURE",
    price: "₹45,000",
    description:
      "This is a popular site because it is a garden that has the cenotaphs of all the Maharajas and other prestigious family members of Jaisalmer; all royal Rajputs kings of 6 centuries! Bada Bagh is actually located on a small hillock and the entrance to the cenotaphs is set at the bottom of the hill.",
    Itinerary: (
      <div>
        <div style={styles.itineraryContainer}>
          <ul style={styles.itineraryList}>
            <h3>Day 1:</h3>
            <li>Arrival in Jaisalmer</li>
            <li>Destination: Golden City Welcome</li>
            <li>Arrive at Jaisalmer and transfer to your desert camp.</li>
            <li>Welcome dinner and orientation.</li>
            <li>Evening at leisure or optional camel ride.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 2:</h3>
          <ul style={styles.itineraryList}>
            <li>Jaisalmer Fort and Haveli Tour</li>
            <li>Explore the Jaisalmer Fort, a UNESCO World Heritage Site.</li>
            <li>Visit Patwon Ki Haveli and Salim Singh Ki Haveli.</li>
            <li>Lunch at a rooftop restaurant overlooking the fort.</li>
            <li>Evening at leisure for shopping in the local markets.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 3:</h3>
          <ul style={styles.itineraryList}>
            <li>Sam Sand Dunes Safari</li>
            <li>Full-day excursion to Sam Sand Dunes.</li>
            <li>Enjoy a thrilling desert safari on camelback.</li>
            <li>Lunch at a traditional desert camp.</li>
            <li>Witness a mesmerizing sunset over the dunes.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 4:</h3>
          <ul style={styles.itineraryList}>
            <li>Desert Cultural Experience</li>
            <li>Participate in a traditional Rajasthani cooking class.</li>
            <li>Enjoy a cultural performance during dinner.</li>
            <li>Stargazing and bonfire in the desert.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 5:</h3>
          <ul style={styles.itineraryList}>
            <li>Amar Sagar Jain Temple and Kuldhara Village</li>
            <li>
              Visit Amar Sagar Jain Temple and its beautiful surroundings.
            </li>
            <li>Explore the abandoned village of Kuldhara.</li>
            <li>Lunch at a heritage restaurant.</li>
            <li>Return to the desert camp for relaxation.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 6:</h3>
          <ul style={styles.itineraryList}>
            <li>Adventure Activities and Local Exploration</li>
            <li>
              Choose from adventure activities (quad biking, jeep safari).
            </li>
            <li>Lunch at an adventure hub.</li>
            <li>Explore local markets and handicraft stores.</li>
            <li>Farewell dinner with folk music and dance.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 7:</h3>
          <ul style={styles.itineraryList}>
            <li>Departure</li>
            <li>Check-out from the desert camp.</li>
            <li>Transfer to Jaisalmer Airport/Train Station for departure.</li>
          </ul>
        </div>

        <div style={styles.inclusionsContainer}>
          <h3>Package Inclusions:</h3>
          <ul style={styles.inclusionsList}>
            <li>Accommodation in a desert camp (double occupancy).</li>
            <li>Daily breakfast, lunch, and dinner.</li>
            <li>Round-trip flight/train to Jaisalmer.</li>
            <li>Guided tours and activities as per itinerary.</li>
            <li>All entrance fees and permits.</li>
            <li>Experienced local guide.</li>
          </ul>
        </div>

        <div style={styles.priceNoteContainer}>
          <h3>Package Price:</h3>
          <p>
            {"Starting from ₹11,500 per person (based on double occupancy)."}
          </p>
          <h3>Note:</h3>
          <p>
            {
              "Prices may vary based on group size, season, and additional customization. Camel safari duration may be adjusted based on preferences."
            }
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 7,
    image: imgTravlling7,
    title: "Golden Temple",
    location: "Amritsar",
    grade: "CULTURAL ENRICHMENT",
    price: "₹50,000",
    description:
      "Amritsar is the largest and most important city in Punjab and is a major commercial, cultural, and transportation centre. It is also the centre of Sikhism and the site of the Sikhs principal place of worship—the Harmandir Sahib, or Golden Temple.",
    Itinerary: (
      <div>
        <div style={styles.itineraryContainer}>
          <ul style={styles.itineraryList}>
            <h3>Day 1:</h3>
            <li>Arrival in Amritsar</li>
            <li>Destination: Spiritual Haven</li>
            <li>Arrive at Amritsar and transfer to your heritage hotel.</li>
            <li>Welcome dinner and orientation.</li>
            <li>Evening visit to the Golden Temple for a serene experience.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 2:</h3>
          <ul style={styles.itineraryList}>
            <li>Golden Temple and Jallianwala Bagh</li>
            <li>Visit the Golden Temple at sunrise.</li>
            <li>Participate in the morning prayer ceremony.</li>
            <li>Explore the historic Jallianwala Bagh.</li>
            <li>Lunch at the langar (community kitchen).</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 3:</h3>
          <ul style={styles.itineraryList}>
            <li>Wagah Border Ceremony</li>
            <li>Attend the Wagah Border ceremony in the evening.</li>
            <li>Experience the patriotic fervor and flag-lowering ritual.</li>
            <li>Dinner at a local Punjabi restaurant.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 4:</h3>
          <ul style={styles.itineraryList}>
            <li>Local Market Exploration</li>
            <li>Explore the bustling local markets.</li>
            <li>Visit Durgiana Temple and Ram Bagh Gardens.</li>
            <li>Lunch at a traditional Amritsari dhaba.</li>
            <li>Free time for shopping and leisure.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 5:</h3>
          <ul style={styles.itineraryList}>
            <li>Akal Takht and Maharaja Ranjit Singh Museum</li>
            <li>Visit Akal Takht, the highest seat of Sikh authority.</li>
            <li>Explore the Maharaja Ranjit Singh Museum.</li>
            <li>Lunch at a heritage restaurant.</li>
            <li>Evening at leisure for personal exploration.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 6:</h3>
          <ul style={styles.itineraryList}>
            <li>Amritsari Cuisine and Cultural Evening</li>
            <li>Attend a cooking class featuring Amritsari cuisine.</li>
            <li>Enjoy the prepared dishes for lunch.</li>
            <li>Evening cultural performance showcasing Punjabi traditions.</li>
            <li>Farewell dinner at the hotel.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 7:</h3>
          <ul style={styles.itineraryList}>
            <li>Departure</li>
            <li>Check-out from the heritage hotel.</li>
            <li>Transfer to the airport/train station for departure.</li>
          </ul>
        </div>

        <div style={styles.inclusionsContainer}>
          <h3>Package Inclusions:</h3>
          <ul style={styles.inclusionsList}>
            <li>Accommodation in a heritage hotel (double occupancy).</li>
            <li>Daily breakfast and dinner.</li>
            <li>Round-trip flight/train to Amritsar.</li>
            <li>Guided tours and activities as per itinerary.</li>
            <li>All entrance fees and permits.</li>
            <li>Experienced local guide.</li>
          </ul>
        </div>

        <div style={styles.priceNoteContainer}>
          <h3>Package Price:</h3>
          <p>
            {"Starting from ₹8,500 per person (based on double occupancy)."}
          </p>
          <h3>Note:</h3>
          <p>
            {
              "Prices may vary based on group size, season, and additional customization. Participation in the langar is subject to timing and availability."
            }
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 8,
    image: imgTravlling8,
    title: "Jal Mahal",
    location: "Jaipur",
    grade: "ROYAL INDULGENCE",
    price: "₹55,000",
    description:
      "Jal Mahal is a palace in the middle of the Man Sagar Lake in Jaipur city, the capital of the state of Rajasthan, India. The palace was originally constructed around 1699; the building and the lake around it were later renovated and enlarged in the early 18th century by Maharaja Jai Singh II of Amber",
    Itinerary: (
      <div>
        <div style={styles.itineraryContainer}>
          <ul style={styles.itineraryList}>
            <h3>Day 1:</h3>
            <li>Arrival in Jaipur</li>
            <li>Destination: Pink City Welcome</li>
            <li>Arrive at Jaipur and transfer to your palace hotel.</li>
            <li>Welcome dinner and orientation.</li>
            <li>Evening stroll through the vibrant Johari Bazaar.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 2:</h3>
          <ul style={styles.itineraryList}>
            <li>Amber Fort and Jaigarh Fort</li>
            <li>Explore the magnificent Amber Fort.</li>
            <li>Visit the adjoining Jaigarh Fort with panoramic views.</li>
            <li>Lunch at a courtyard restaurant in Amer.</li>
            <li>Afternoon at leisure or optional elephant ride.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 3:</h3>
          <ul style={styles.itineraryList}>
            <li>City Palace and Jantar Mantar</li>
            <li>Visit the City Palace and its royal museums.</li>
            <li>Explore the Jantar Mantar, an astronomical observatory.</li>
            <li>Lunch at a rooftop restaurant with a view of Hawa Mahal.</li>
            <li>Free time for shopping in the local markets.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 4:</h3>
          <ul style={styles.itineraryList}>
            <li>Hawa Mahal and Albert Hall Museum</li>
            <li>Admire the iconic Hawa Mahal (Palace of Winds).</li>
            <li>Explore the Albert Hall Museum's art and artifacts.</li>
            <li>Lunch at a traditional Rajasthani restaurant.</li>
            <li>Afternoon at leisure or optional guided walking tour.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 5:</h3>
          <ul style={styles.itineraryList}>
            <li>Nahargarh Fort Excursion</li>
            <li>Full-day excursion to Nahargarh Fort.</li>
            <li>Visit the Madhavendra Palace and step wells.</li>
            <li>Lunch at a hilltop restaurant overlooking Jaipur.</li>
            <li>Return to the palace hotel for relaxation.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 6:</h3>
          <ul style={styles.itineraryList}>
            <li>Jal Mahal and Local Market</li>
            <li>Visit Jal Mahal, the Water Palace.</li>
            <li>Explore the nearby Man Sagar Lake.</li>
            <li>Lunch at a lakeside cafe.</li>
            <li>Free time for shopping in Johari Bazaar.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 7:</h3>
          <ul style={styles.itineraryList}>
            <li>Departure</li>
            <li>Check-out from the palace hotel.</li>
            <li>Transfer to the airport/bus station for departure.</li>
          </ul>
        </div>

        <div style={styles.inclusionsContainer}>
          <h3>Package Inclusions:</h3>
          <ul style={styles.inclusionsList}>
            <li>Accommodation in a palace hotel (double occupancy).</li>
            <li>Daily breakfast and dinner.</li>
            <li>Private transport from Amritsar to Jaipur.</li>
            <li>Guided tours and activities as per itinerary.</li>
            <li>All entrance fees and permits.</li>
            <li>Experienced local guide.</li>
          </ul>
        </div>

        <div style={styles.priceNoteContainer}>
          <h3>Package Price:</h3>
          <p>
            {"Starting from ₹10,500 per person (based on double occupancy)."}
          </p>
          <h3>Note:</h3>
          <p>
            {
              "Prices may vary based on group size, season, and additional customization. Optional activities like elephant rides are subject to availability."
            }
          </p>
        </div>
      </div>
    ),
  },
  // Add more packages as needed
];
export const packagesRafting = [
  {
    id: 9,
    title: "Kullu White Water Adventure",
    location: "Kullu",
    image: imgRafting9, // Use the imported image
    price: "₹9,999",
    grade: "RIVER RAFTING THRILL",
    DifficultyLevel: "High",
    DistanceCovered: "9 km - 36 km",
    description:
      " Indulge in the adrenaline-pumping experience of white water rafting amidst the picturesque landscapes of Kullu.",
    Itinerary: (
      <div>
        <div style={styles.itineraryContainer}>
          <h3>Day 1:</h3>
          <ul style={styles.itineraryList}>
            <li>Arrival in Kullu</li>
            <li>Destination: Riverside Base Camp</li>
            <li>
              Arrive at Kullu and transfer to your riverside adventure camp.
            </li>
            <li>
              Welcome dinner and orientation about the rafting expedition.
            </li>
            <li>Evening at leisure by the campfire.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 2:</h3>
          <ul style={styles.itineraryList}>
            <li>Rafting Orientation and Practice</li>
            <li>Morning briefing on rafting techniques and safety measures.</li>
            <li>Practice session on the river with experienced guides.</li>
            <li>Lunch at the campsite with scenic views.</li>
            <li>Evening relaxation at the camp with river views.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 3:</h3>
          <ul style={styles.itineraryList}>
            <li>White Water Rafting Excursion</li>
            <li>Full-day white water rafting on the Beas River.</li>
            <li>Negotiate thrilling rapids with experienced rafters.</li>
            <li>Riverside picnic lunch during the expedition.</li>
            <li>Return to the camp for dinner and campfire stories.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 4:</h3>
          <ul style={styles.itineraryList}>
            <li>Manikaran Hot Springs Visit</li>
            <li>Visit the famous hot springs at Manikaran.</li>
            <li>Explore the Gurudwara and Ram Temple in Manikaran.</li>
            <li>Lunch at a local eatery in Manikaran.</li>
            <li>Return to the camp for an evening of relaxation.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 5:</h3>
          <ul style={styles.itineraryList}>
            <li>Adventure Activities and Free Time</li>
            <li>Choose from adventure activities (paragliding, zip-lining).</li>
            <li>Lunch at an adventure hub.</li>
            <li>Afternoon at leisure for personal exploration.</li>
            <li>Farewell dinner at the camp.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 6:</h3>
          <ul style={styles.itineraryList}>
            <li>Departure</li>
            <li>Check-out from the adventure camp.</li>
            <li>Transfer to Kullu Airport/Bus Station for departure.</li>
          </ul>
        </div>

        <div style={styles.inclusionsContainer}>
          <h3>Package Inclusions:</h3>
          <ul style={styles.inclusionsList}>
            <li>
              Accommodation in riverside adventure camp (tented accommodation).
            </li>
            <li>Daily breakfast, lunch, and dinner.</li>
            <li>
              Full-day white water rafting expedition with experienced guides.
            </li>
            <li>Visit to Manikaran hot springs.</li>
            <li>Optional adventure activities.</li>
            <li>All necessary equipment for rafting.</li>
          </ul>
        </div>

        <div style={styles.priceNoteContainer}>
          <h3>Package Price:</h3>
          <p>
            {"Starting from ₹9,500 per person (based on double occupancy)."}
          </p>
          <h3>Note:</h3>
          <p>
            {
              "Prices may vary based on group size, season, and additional customization. Rafting routes may be adjusted based on river conditions. Optional activities subject to availability."
            }
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    title: "Ganga Rapids Expedition",
    location: "Rishikesh, Uttarakhand",
    image: imgRafting10,
    price: "₹15,000",
    grade: "THRILLING GANGES RAFTING",
    DifficultyLevel: "Low",
    DistanceCovered: "8 km - 16 km",
    description:
      "On an exhilarating white water rafting adventure along the sacred Ganges River in the beautiful town of Rishikesh.",
    Itinerary: (
      <div>
        <div style={styles.itineraryContainer}>
          <h3>Day 1:</h3>
          <ul style={styles.itineraryList}>
            <li>Arrival in Rishikesh</li>
            <li>Destination: Riverside Camp Arrival</li>
            <li>
              Arrive in Rishikesh and transfer to your riverside adventure camp.
            </li>
            <li>
              Welcome dinner and orientation about the rafting expedition.
            </li>
            <li>Evening at leisure by the campfire.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 2:</h3>
          <ul style={styles.itineraryList}>
            <li>Rafting Basics and Practice</li>
            <li>
              Morning briefing on rafting techniques and safety protocols.
            </li>
            <li>Practice session on the Ganges with experienced guides.</li>
            <li>Lunch at the campsite overlooking the river.</li>
            <li>Relax at the camp with scenic views.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 3:</h3>
          <ul style={styles.itineraryList}>
            <li>Ganges White Water Rafting</li>
            <li>Full-day white water rafting on the Ganges River.</li>
            <li>Navigate through exciting rapids with professional guides.</li>
            <li>Riverside picnic lunch during the rafting adventure.</li>
            <li>Return to the camp for dinner and riverside relaxation.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 4:</h3>
          <ul style={styles.itineraryList}>
            <li>Shivpuri Jungle Trek</li>
            <li>Morning trek to Shivpuri, a scenic jungle area.</li>
            <li>Experience the beauty of the Himalayan foothills.</li>
            <li>Lunch at a riverside cafe in Shivpuri.</li>
            <li>Afternoon relaxation at the camp.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 5:</h3>
          <ul style={styles.itineraryList}>
            <li>Cliff Jumping and Beach Games</li>
            <li>Engage in cliff jumping into the Ganges.</li>
            <li>Participate in beach games and activities.</li>
            <li>Lunch at the campsite with fellow adventurers.</li>
            <li>Farewell dinner with a cultural performance.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 6:</h3>
          <ul style={styles.itineraryList}>
            <li>Departure</li>
            <li>Check-out from the riverside adventure camp.</li>
            <li>
              Transfer to the Rishikesh Railway Station or Airport for
              departure.
            </li>
          </ul>
        </div>

        <div style={styles.inclusionsContainer}>
          <h3>Package Inclusions:</h3>
          <ul style={styles.inclusionsList}>
            <li>
              Accommodation in a riverside adventure camp (tented
              accommodation).
            </li>
            <li>Daily breakfast, lunch, and dinner.</li>
            <li>
              Full-day white water rafting expedition with professional guides.
            </li>
            <li>Shivpuri jungle trek and beach activities.</li>
            <li>All necessary equipment for rafting and trekking.</li>
          </ul>
        </div>

        <div style={styles.priceNoteContainer}>
          <h3>Package Price:</h3>
          <p>
            {"Starting from ₹11,000 per person (based on double occupancy)."}
          </p>
          <h3>Note:</h3>
          <p>
            {
              "Prices may vary based on group size, season, and additional customization. Rafting routes are subject to weather and river conditions. Optional activities subject to availability."
            }
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 11,
    title: "Darjeeling Teesta River",
    location: "Darjeeling",
    image: imgRafting11,
    price: "₹12,000",
    grade: "WHITE WATER THRILLS",
    DifficultyLevel: "Medium",
    DistanceCovered: "15 km - 60 km",
    description:
      "On an exciting white water rafting adventure in the beautiful hills of Darjeeling, combining thrilling rapids with the picturesque landscapes of the region.",
    Itinerary: (
      <div>
        <div style={styles.itineraryContainer}>
          <h3>Day 1:</h3>
          <ul style={styles.itineraryList}>
            <li>Arrival in Darjeeling</li>
            <li>Destination: Scenic Hill Arrival</li>
            <li>Arrive in Darjeeling and transfer to your hotel.</li>
            <li>Welcome dinner and briefing about the rafting expedition.</li>
            <li>Evening at leisure to explore the local markets.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 2:</h3>
          <ul style={styles.itineraryList}>
            <li>River Rafting Basics and Practice</li>
            <li>Morning briefing on white water rafting techniques.</li>
            <li>Practice session on the river with certified guides.</li>
            <li>Lunch at a riverside cafe with panoramic views.</li>
            <li>Relax at the hotel or optional local exploration.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 3:</h3>
          <ul style={styles.itineraryList}>
            <li>Teesta River Rafting</li>
            <li>Full-day white water rafting on the Teesta River.</li>
            <li>Navigate through thrilling rapids with experienced guides.</li>
            <li>Riverside picnic lunch during the rafting adventure.</li>
            <li>Return to the hotel for dinner and relaxation.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 4:</h3>
          <ul style={styles.itineraryList}>
            <li>Darjeeling Tea Estate Visit</li>
            <li>Morning visit to a renowned tea estate in Darjeeling.</li>
            <li>Learn about the tea-making process and enjoy a tea tasting.</li>
            <li>Lunch at the tea estate's colonial-style restaurant.</li>
            <li>Afternoon free for personal exploration.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 5:</h3>
          <ul style={styles.itineraryList}>
            <li>Mirik Lake Excursion</li>
            <li>Day trip to the picturesque Mirik Lake.</li>
            <li>Enjoy boating on the serene lake.</li>
            <li>Lunch at a lakeside cafe.</li>
            <li>Return to Darjeeling for a cultural evening.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 6:</h3>
          <ul style={styles.itineraryList}>
            <li>Departure</li>
            <li>Check-out from the hotel.</li>
            <li>Transfer to the airport or railway station for departure.</li>
          </ul>
        </div>

        <div style={styles.inclusionsContainer}>
          <h3>Package Inclusions:</h3>
          <ul style={styles.inclusionsList}>
            <li>
              Accommodation in a hotel with mountain views (double occupancy).
            </li>
            <li>Daily breakfast and dinner.</li>
            <li>Full-day white water rafting on the Teesta River.</li>
            <li>Certified rafting guides and necessary equipment.</li>
            <li>Tea estate visit with tea tasting experience.</li>
          </ul>
        </div>

        <div style={styles.priceNoteContainer}>
          <h3>Package Price:</h3>
          <p>
            {"Starting from ₹8,000 per person (based on double occupancy)."}
          </p>
          <h3>Note:</h3>
          <p>
            {
              "Prices may vary based on group size, season, and additional customization. Rafting routes are subject to weather and river conditions. Optional activities are available for personal exploration."
            }
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 12,
    title: "Coorg Rapids Expedition",
    location: "Karnataka",
    image: imgRafting12,
    price: "₹10,000",
    grade: "ADVENTURE ON THE KAUVERI",
    DifficultyLevel: "High",
    DistanceCovered: "19 km - 42 km",
    description:
      "Immerse yourself in the lush landscapes of Coorg while enjoying the thrill of white water rafting on the Kauveri River, combining adventure with the natural beauty of the region.",
    Itinerary: (
      <div>
        <div style={styles.itineraryContainer}>
          <h3>Day 1:</h3>
          <ul style={styles.itineraryList}>
            <li>Arrival in Coorg</li>
            <li>Destination: Serene Hill Retreat</li>
            <li>
              Arrive in Coorg and transfer to your nature-inspired resort.
            </li>
            <li>Welcome dinner and briefing about the rafting adventure.</li>
            <li>Evening at leisure to enjoy the tranquility of Coorg.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 2:</h3>
          <ul style={styles.itineraryList}>
            <li>Rafting Orientation and Practice</li>
            <li>Morning briefing on white water rafting techniques.</li>
            <li>
              Practice session on the Kauveri River with certified guides.
            </li>
            <li>Lunch at the resort amidst nature.</li>
            <li>Relaxation or optional local exploration in the afternoon.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 3:</h3>
          <ul style={styles.itineraryList}>
            <li>Kauveri River Rafting</li>
            <li>Full-day white water rafting on the Kauveri River.</li>
            <li>Navigate through thrilling rapids with experienced guides.</li>
            <li>Riverside picnic lunch during the rafting adventure.</li>
            <li>Return to the resort for dinner and relaxation.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 4:</h3>
          <ul style={styles.itineraryList}>
            <li>Abbey Falls and Madikeri Exploration</li>
            <li>Visit the scenic Abbey Falls in the morning.</li>
            <li>Explore the charming town of Madikeri.</li>
            <li>Lunch at a local Coorgi restaurant.</li>
            <li>Afternoon free for personal exploration.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 5:</h3>
          <ul style={styles.itineraryList}>
            <li>Dubare Elephant Camp Visit</li>
            <li>Day trip to Dubare Elephant Camp.</li>
            <li>Enjoy interactions with elephants and river activities.</li>
            <li>Lunch at the camp overlooking the river.</li>
            <li>Return to the resort for a cultural evening.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 6:</h3>
          <ul style={styles.itineraryList}>
            <li>Departure</li>
            <li>Check-out from the resort.</li>
            <li>
              Transfer to the nearest airport or railway station for departure.
            </li>
          </ul>
        </div>

        <div style={styles.inclusionsContainer}>
          <h3>Package Inclusions:</h3>
          <ul style={styles.inclusionsList}>
            <li>
              Accommodation in a nature-inspired resort (double occupancy).
            </li>
            <li>Daily breakfast and dinner.</li>
            <li>Full-day white water rafting on the Kauveri River.</li>
            <li>Certified rafting guides and necessary equipment.</li>
            <li>Visits to Abbey Falls and Dubare Elephant Camp.</li>
          </ul>
        </div>

        <div style={styles.priceNoteContainer}>
          <h3>Package Price:</h3>
          <p>
            {"Starting from ₹9,500 per person (based on double occupancy)."}
          </p>
          <h3>Note:</h3>
          <p>
            {
              "Prices may vary based on group size, season, and additional customization. Rafting routes are subject to weather and river conditions. Optional activities are available for personal exploration."
            }
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 13,
    title: "Maharashtra Kundalika River",
    location: "Maharashtra",
    image: imgRafting13,
    price: "₹18,999",
    grade: "THRILLING WATERS",
    DifficultyLevel: "High",
    DistanceCovered: "7 km - 26 km",
    description:
      "Experience the thrill of white water rafting in the scenic rivers of Maharashtra, combining adrenaline-pumping rapids with the natural beauty of the region.",
    Itinerary: (
      <div>
        <div style={styles.itineraryContainer}>
          <h3>Day 1:</h3>
          <ul style={styles.itineraryList}>
            <li>Arrival in Maharashtra</li>
            <li>Destination: Riverside Base Camp</li>
            <li>
              Arrive in Maharashtra and transfer to your riverside adventure
              camp.
            </li>
            <li>Welcome dinner and briefing about the rafting expedition.</li>
            <li>Evening at leisure by the campfire.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 2:</h3>
          <ul style={styles.itineraryList}>
            <li>Rafting Basics and Practice</li>
            <li>Morning briefing on white water rafting techniques.</li>
            <li>Practice session on the river with certified guides.</li>
            <li>Lunch at the campsite with scenic views.</li>
            <li>Relax at the camp or optional local exploration.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 3:</h3>
          <ul style={styles.itineraryList}>
            <li>Full-Day Rafting Adventure</li>
            <li>Full-day white water rafting on the selected river.</li>
            <li>Navigate through thrilling rapids with experienced guides.</li>
            <li>Riverside picnic lunch during the rafting expedition.</li>
            <li>Return to the camp for dinner and campfire stories.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 4:</h3>
          <ul style={styles.itineraryList}>
            <li>Nature Walk and Waterfall Visit</li>
            <li>Morning nature walk in the surrounding landscapes.</li>
            <li>Visit a nearby waterfall for a refreshing experience.</li>
            <li>Lunch at a riverside eatery.</li>
            <li>Afternoon at leisure for personal exploration.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 5:</h3>
          <ul style={styles.itineraryList}>
            <li>Adventure Activities and Free Time</li>
            <li>
              Choose from adventure activities (ziplining, rock climbing).
            </li>
            <li>Lunch at an adventure hub.</li>
            <li>Afternoon at leisure for personal exploration.</li>
            <li>Farewell dinner at the camp.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 6:</h3>
          <ul style={styles.itineraryList}>
            <li>Departure</li>
            <li>Check-out from the riverside adventure camp.</li>
            <li>
              Transfer to the nearest airport or railway station for departure.
            </li>
          </ul>
        </div>

        <div style={styles.inclusionsContainer}>
          <h3>Package Inclusions:</h3>
          <ul style={styles.inclusionsList}>
            <li>
              Accommodation in a riverside adventure camp (tented
              accommodation).
            </li>
            <li>Daily breakfast, lunch, and dinner.</li>
            <li>
              Full-day white water rafting expedition with certified guides.
            </li>
            <li>
              Nature walk, waterfall visit, and optional adventure activities.
            </li>
          </ul>
        </div>

        <div style={styles.priceNoteContainer}>
          <h3>Package Price:</h3>
          <p>
            {"Starting from ₹8,500 per person (based on double occupancy)."}
          </p>
          <h3>Note:</h3>
          <p>
            {
              "Prices may vary based on group size, season, and additional customization. Rafting routes are subject to weather and river conditions. Optional activities are available for personal exploration."
            }
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 14,
    title: "Yamuna Rapids Expedition ",
    location: "Uttarakhand , Northern India",
    image: imgRafting14,
    price: "₹15,999",
    grade: "ADVENTURE ON THE YAMUNA",
    DifficultyLevel: "High",
    DistanceCovered: "4 km - 32 km",
    description:
      "On an exhilarating white water rafting adventure on the Yamuna River, combining the thrill of rapids with the scenic beauty of Northern India.",
    Itinerary: (
      <div>
        <div style={styles.itineraryContainer}>
          <h3>Day 1:</h3>
          <ul style={styles.itineraryList}>
            <li>Arrival in Northern India</li>
            <li>Destination: Riverside Base Camp</li>
            <li>
              Arrive in Northern India and transfer to your riverside adventure
              camp along the Yamuna River.
            </li>
            <li>
              Welcome dinner and briefing about the upcoming rafting expedition.
            </li>
            <li>Evening at leisure by the campfire.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 2:</h3>
          <ul style={styles.itineraryList}>
            <li>Rafting Basics and Practice</li>
            <li>Morning briefing on white water rafting techniques.</li>
            <li>Practice session on the Yamuna with certified guides.</li>
            <li>Lunch at the campsite with panoramic views.</li>
            <li>Relax at the camp or optional local exploration.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 3:</h3>
          <ul style={styles.itineraryList}>
            <li>Full-Day Rafting Adventure</li>
            <li>Full-day white water rafting on the Yamuna River.</li>
            <li>Navigate through thrilling rapids with experienced guides.</li>
            <li>Riverside picnic lunch during the rafting expedition.</li>
            <li>Return to the camp for dinner and campfire stories.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 4:</h3>
          <ul style={styles.itineraryList}>
            <li>Nature Walk and Riverside Relaxation</li>
            <li>Morning nature walk in the picturesque surroundings.</li>
            <li>Leisure time by the riverside for relaxation.</li>
            <li>Lunch at a riverside eatery.</li>
            <li>Afternoon at leisure for personal exploration.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 5:</h3>
          <ul style={styles.itineraryList}>
            <li>Adventure Activities and Free Time</li>
            <li>Choose from adventure activities (trekking, fishing).</li>
            <li>Lunch at an adventure hub.</li>
            <li>Afternoon at leisure for personal exploration.</li>
            <li>Farewell dinner at the camp.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 6:</h3>
          <ul style={styles.itineraryList}>
            <li>Departure</li>
            <li>Check-out from the riverside adventure camp.</li>
            <li>
              Transfer to the nearest airport or railway station for departure.
            </li>
          </ul>
        </div>

        <div style={styles.inclusionsContainer}>
          <h3>Package Inclusions:</h3>
          <ul style={styles.inclusionsList}>
            <li>
              Accommodation in a riverside adventure camp (tented
              accommodation).
            </li>
            <li>Daily breakfast, lunch, and dinner.</li>
            <li>
              Full-day white water rafting expedition with certified guides.
            </li>
            <li>
              Nature walk, riverside relaxation, and optional adventure
              activities.
            </li>
          </ul>
        </div>

        <div style={styles.priceNoteContainer}>
          <h3>Package Price:</h3>
          <p>
            {"Starting from ₹9,000 per person (based on double occupancy)."}
          </p>
          <h3>Note:</h3>
          <p>
            {
              "Prices may vary based on group size, season, and additional customization. Rafting routes are subject to weather and river conditions. Optional activities are available for personal exploration."
            }
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 15,
    title: "Spiti River",
    location: "Spiti Valley, Himachal Pradesh",
    image: imgRafting15,
    price: "₹25,999",
    grade: "WILD SPITI WATERS",
    DifficultyLevel: "Medium",
    DistanceCovered: "2 km - 19 km",
    description:
      " Experience the thrill of white water rafting amidst the rugged and breathtaking landscapes of Spiti Valley, where the Spiti River offers an adventurous journey with exhilarating ",
    Itinerary: (
      <div>
        <div style={styles.itineraryContainer}>
          <h3>Day 1:</h3>
          <ul style={styles.itineraryList}>
            <li>Arrival in Spiti Valley</li>
            <li>Destination: Mountain Retreat Arrival</li>
            <li>
              Arrive in Spiti Valley and transfer to your mountain retreat.
            </li>
            <li>
              Welcome dinner and briefing about the upcoming rafting adventure.
            </li>
            <li>
              Evening at leisure to acclimate to the high-altitude surroundings.
            </li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 2:</h3>
          <ul style={styles.itineraryList}>
            <li>Rafting Basics and Practice</li>
            <li>Morning briefing on white water rafting techniques.</li>
            <li>Practice session on the Spiti River with certified guides.</li>
            <li>Lunch at the retreat with panoramic mountain views.</li>
            <li>Relax at the retreat or optional local exploration.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 3:</h3>
          <ul style={styles.itineraryList}>
            <li>Full-Day Rafting Expedition</li>
            <li>Full-day white water rafting on the Spiti River.</li>
            <li>Navigate through thrilling rapids with experienced guides.</li>
            <li>Riverside picnic lunch during the rafting adventure.</li>
            <li>Return to the retreat for dinner and stargazing.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 4:</h3>
          <ul style={styles.itineraryList}>
            <li>Ki Monastery Visit</li>
            <li>Morning visit to the iconic Ki Monastery.</li>
            <li>Explore the monastery and enjoy panoramic views.</li>
            <li>Lunch at a local eatery near Ki Village.</li>
            <li>Afternoon free for personal exploration.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 5:</h3>
          <ul style={styles.itineraryList}>
            <li>Adventure Activities and Free Time</li>
            <li>Choose from adventure activities (hiking, mountain biking).</li>
            <li>Lunch at a scenic spot in the valley.</li>
            <li>Afternoon at leisure for personal exploration.</li>
            <li>Farewell dinner at the retreat.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 6:</h3>
          <ul style={styles.itineraryList}>
            <li>Departure</li>
            <li>Check-out from the mountain retreat.</li>
            <li>
              Transfer to the nearest airport or bus station for departure.
            </li>
          </ul>
        </div>

        <div style={styles.inclusionsContainer}>
          <h3>Package Inclusions:</h3>
          <ul style={styles.inclusionsList}>
            <li>Accommodation in a mountain retreat (double occupancy).</li>
            <li>Daily breakfast, lunch, and dinner.</li>
            <li>
              Full-day white water rafting expedition with certified guides.
            </li>
            <li>Visit to Ki Monastery and optional adventure activities.</li>
          </ul>
        </div>

        <div style={styles.priceNoteContainer}>
          <h3>Package Price:</h3>
          <p>
            {"Starting from ₹10,500 per person (based on double occupancy)."}
          </p>
          <h3>Note:</h3>
          <p>
            {
              "Prices may vary based on group size, season, and additional customization. Rafting routes are subject to weather and river conditions. Optional activities are available for personal exploration."
            }
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 16,
    title: "Kameng River",
    location: "Arunachal Pradesh",
    image: imgRafting16,
    price: "₹23,000",
    grade: "THRILLING ARUNACHAL WATERS",
    DifficultyLevel: "Low",
    DistanceCovered: "5 km - 13 km",
    description:
      "On an unforgettable white water rafting adventure in the pristine rivers of Arunachal Pradesh, surrounded by lush landscapes and untouched natural beauty.",
    Itinerary: (
      <div>
        <div style={styles.itineraryContainer}>
          <h3>Day 1:</h3>
          <ul style={styles.itineraryList}>
            <li>Arrival in Arunachal Pradesh</li>
            <li>Destination: Wilderness Retreat Arrival</li>
            <li>
              Arrive in Arunachal Pradesh and transfer to your wilderness
              retreat.
            </li>
            <li>
              Welcome dinner and briefing about the upcoming rafting adventure.
            </li>
            <li>Evening at leisure amidst the serene surroundings.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 2:</h3>
          <ul style={styles.itineraryList}>
            <li>Rafting Basics and Practice</li>
            <li>Morning briefing on white water rafting techniques.</li>
            <li>
              Practice session on the selected river with certified guides.
            </li>
            <li>Lunch at the retreat with panoramic views of the hills.</li>
            <li>Relax at the retreat or optional local exploration.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 3:</h3>
          <ul style={styles.itineraryList}>
            <li>Full-Day Rafting Expedition</li>
            <li>Full-day white water rafting on the chosen river.</li>
            <li>
              Navigate through thrilling rapids surrounded by pristine
              landscapes.
            </li>
            <li>Riverside picnic lunch during the rafting adventure.</li>
            <li>Return to the retreat for dinner and stargazing.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 4:</h3>
          <ul style={styles.itineraryList}>
            <li>Monastery Visit and Local Culture</li>
            <li>Visit a local monastery to experience the rich culture.</li>
            <li>
              Interact with the local community and learn about their
              traditions.
            </li>
            <li>Lunch with a local family to savor traditional cuisine.</li>
            <li>Afternoon free for personal exploration.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 5:</h3>
          <ul style={styles.itineraryList}>
            <li>Adventure Activities and Free Time</li>
            <li>Choose from adventure activities (trekking, bird watching).</li>
            <li>Lunch at a scenic spot in the lush hills.</li>
            <li>Afternoon at leisure for personal exploration.</li>
            <li>Farewell dinner at the retreat.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 6:</h3>
          <ul style={styles.itineraryList}>
            <li>Departure</li>
            <li>Check-out from the wilderness retreat.</li>
            <li>
              Transfer to the nearest airport or bus station for departure.
            </li>
          </ul>
        </div>

        <div style={styles.inclusionsContainer}>
          <h3>Package Inclusions:</h3>
          <ul style={styles.inclusionsList}>
            <li>Accommodation in a wilderness retreat (double occupancy).</li>
            <li>Daily breakfast, lunch, and dinner.</li>
            <li>
              Full-day white water rafting expedition with certified guides.
            </li>
            <li>
              Visit to a local monastery and optional adventure activities.
            </li>
          </ul>
        </div>

        <div style={styles.priceNoteContainer}>
          <h3>Package Price:</h3>
          <p>
            {"Starting from ₹12,000 per person (based on double occupancy)."}
          </p>
          <h3>Note:</h3>
          <p>
            {
              "Prices may vary based on group size, season, and additional customization. Rafting routes are subject to weather and river conditions. Optional activities are available for personal exploration."
            }
          </p>
        </div>
      </div>
    ),
  },

  // Add more packages as needed
];
export const packagesTrekking = [
  {
    id: 17,
    title: " Chadar Trek",
    location: "Ladakh, India",
    grade: "EXTREME WINTER TREKKING",
    image: imgTrekking17, // Use the imported image
    price: "₹19,999",
    description:
      'The Chadar Trek, an unmissable name on the list of the top treks in India, is ideal for those looking forward to experiencing the thrill of challenging treks. The trek is popular with adventurers because it tests their endurance at every step, with temperatures as low as 35° Celsius, and allows them to witness the ice age dream of walking on glossy ice sheets called "Barf ki Chadar".',
    Itinerary: (
      <div>
        <div style={styles.itineraryContainer}>
          <h3>Day 1:</h3>
          <ul style={styles.itineraryList}>
            <li>Arrival in Leh</li>
            <li>Destination: High-altitude Acclimatization</li>
            <li>Arrive in Leh and transfer to your guesthouse.</li>
            <li>Welcome dinner and briefing about the Chadar Trek.</li>
            <li>Rest and acclimatization to the high-altitude environment.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 2:</h3>
          <ul style={styles.itineraryList}>
            <li>Leh Sightseeing and Preparation</li>
            <li>Visit Shey Monastery and Thiksey Monastery in the morning.</li>
            <li>Afternoon at leisure for final trek preparations.</li>
            <li>Attend a pre-trek briefing and equipment check.</li>
            <li>Evening relaxation at the guesthouse.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 3:</h3>
          <ul style={styles.itineraryList}>
            <li>Drive to Chilling and Trek to Tilad Do</li>
            <li>
              Morning drive to Chilling, the starting point of the Chadar Trek.
            </li>
            <li>
              Begin the trek to Tilad Do, the first campsite on the frozen
              river.
            </li>
            <li>Campfire dinner and overnight stay in tents.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 4-9:</h3>
          <ul style={styles.itineraryList}>
            <li>Chadar Trek</li>
            <li>Trek along the frozen Zanskar River to various campsites.</li>
            <li>
              Experience the breathtaking beauty of frozen waterfalls and
              landscapes.
            </li>
            <li>
              Encounter local culture and traditions of the Zanskari people.
            </li>
            <li>Overnight stays in tents on the riverbank.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 10:</h3>
          <ul style={styles.itineraryList}>
            <li>Return to Leh</li>
            <li>Trek back to Chilling and drive back to Leh.</li>
            <li>Arrival in Leh and check-in at the guesthouse.</li>
            <li>Rest and relaxation after the challenging trek.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 11:</h3>
          <ul style={styles.itineraryList}>
            <li>Leisure Day in Leh</li>
            <li>Free day to explore Leh at your own pace.</li>
            <li>Visit local markets, monasteries, or enjoy a leisurely day.</li>
            <li>Farewell dinner in Leh.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 12:</h3>
          <ul style={styles.itineraryList}>
            <li>Departure</li>
            <li>Check-out from the guesthouse.</li>
            <li>Transfer to the airport for departure.</li>
          </ul>
        </div>

        <div style={styles.inclusionsContainer}>
          <h3>Package Inclusions:</h3>
          <ul style={styles.inclusionsList}>
            <li>
              Accommodation in guesthouses during Leh stay and tents during the
              trek.
            </li>
            <li>All meals during the trek (breakfast, lunch, and dinner).</li>
            <li>Experienced trekking guides and support staff.</li>
            <li>Trekking permits and entry fees.</li>
            <li>Transportation as per the itinerary.</li>
          </ul>
        </div>

        <div style={styles.priceNoteContainer}>
          <h3>Package Price:</h3>
          <p>{"Starting from ₹15,000 per person."}</p>
          <h3>Note:</h3>
          <p>
            {
              "Prices may vary based on group size, season, and additional customization. The Chadar Trek is subject to weather conditions, and the itinerary may be adjusted accordingly for safety reasons."
            }
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 18,
    title: "Kashmir Alpine Trek",
    location: "Kashmir, India",
    grade: "MODERATE TO CHALLENGING",
    image: imgTrekking18,
    price: "₹12,000",
    description:
      "The Kashmir Great Lakes Trek, perched at 13,800 ft above sea level, is one of the best places for trekking in India as it treats you with the best views of snow-clad mountains, countless meadows and rocky barren plains.",
    Itinerary: (
      <div>
        <div style={styles.itineraryContainer}>
          <h3>Day 1:</h3>
          <ul style={styles.itineraryList}>
            <li>Arrival in Srinagar</li>
            <li>Destination: Lakeside Arrival</li>
            <li>
              Arrive in Srinagar and transfer to your lakeside accommodation.
            </li>
            <li>Welcome dinner and briefing about the upcoming trek.</li>
            <li>Evening stroll by Dal Lake for acclimatization.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 2:</h3>
          <ul style={styles.itineraryList}>
            <li>Srinagar to Sonamarg</li>
            <li>Morning drive to Sonamarg, the base for the trek.</li>
            <li>Lunch in Sonamarg followed by a trek briefing.</li>
            <li>Short acclimatization walk around Sonamarg.</li>
            <li>Overnight stay in a guesthouse in Sonamarg.</li>
          </ul>
        </div>

        {/* Continue the pattern for each day... */}

        <div style={styles.itineraryContainer}>
          <h3>Day 3:</h3>
          <ul style={styles.itineraryList}>
            <li>Departure from Srinagar</li>
            <li>Check-out from the guesthouse in Sonamarg.</li>
            <li>Drive back to Srinagar for departure.</li>
          </ul>
        </div>

        <div style={styles.inclusionsContainer}>
          <h3>Package Inclusions:</h3>
          <ul style={styles.inclusionsList}>
            <li>Accommodation in guesthouses and camping tents.</li>
            <li>All meals during the trek (breakfast, lunch, and dinner).</li>
            <li>Experienced trekking guides and support staff.</li>
            <li>Transportation as per the itinerary.</li>
          </ul>
        </div>

        <div style={styles.priceNoteContainer}>
          <h3>Package Price:</h3>
          <p>{"Starting from ₹12,500 per person."}</p>
          <h3>Note:</h3>
          <p>
            {
              "Prices may vary based on group size, season, and additional customization. Trekking routes are subject to weather conditions, and the itinerary may be adjusted accordingly for safety reasons."
            }
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 19,
    title: "Everest Base Camp Trek",
    location: "Khumbu Region, Nepal",
    grade: "MODERATE TO CHALLENGING",
    image: imgTrekking19,
    price: "₹17,000",
    description:
      "The Everest Base Camp Trek. Located at an altitude of 5,550 metres above sea level, the Everest Base Camp Trek will take you through hidden Gompas, breathtaking mountain views, lush green farmlands, dazzling blue fast-flowing rivers and much more.",
    Itinerary: (
      <div>
        <div style={styles.itineraryContainer}>
          <h3>Day 1:</h3>
          <ul style={styles.itineraryList}>
            <li>Arrival in Kathmandu</li>
            <li>Destination: Cultural Capital Arrival</li>
            <li>Arrive in Kathmandu and transfer to your hotel.</li>
            <li>Welcome dinner and briefing about the trek.</li>
            <li>Evening exploration of Kathmandu's vibrant streets.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 2:</h3>
          <ul style={styles.itineraryList}>
            <li>Kathmandu Sightseeing and Preparation</li>
            <li>Visit UNESCO World Heritage Sites in Kathmandu.</li>
            <li>Afternoon at leisure for final trek preparations.</li>
            <li>Attend a pre-trek briefing and equipment check.</li>
            <li>Evening relaxation at the hotel.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 3:</h3>
          <ul style={styles.itineraryList}>
            <li>Flight to Lukla and Trek to Phakding</li>
            <li>Morning flight to Lukla, the gateway to the Khumbu region.</li>
            <li>Trek to Phakding through picturesque landscapes.</li>
            <li>Overnight stay in a teahouse in Phakding.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 4:</h3>
          <ul style={styles.itineraryList}>
            <li>Phakding to Namche Bazaar</li>
            <li>Trek to Namche Bazaar, the vibrant Sherpa town.</li>
            <li>
              Ascend through beautiful forests and cross suspension bridges.
            </li>
            <li>Overnight stay in a teahouse in Namche Bazaar.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 5:</h3>
          <ul style={styles.itineraryList}>
            <li>Acclimatization Day in Namche Bazaar</li>
            <li>Acclimatization hike to Everest View Hotel..</li>
            <li>Explore Namche Bazaar and its cultural attractions.</li>
            <li>Evening relaxation at the teahouse.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 6:</h3>
          <ul style={styles.itineraryList}>
            <li> Namche Bazaar to Tengboche</li>
            <li>Trek to Tengboche, home to the famous Tengboche Monastery.</li>
            <li>Enjoy panoramic views of Everest, Lhotse, and Ama Dablam.</li>
            <li>Overnight stay in a teahouse in Tengboche.</li>
          </ul>
        </div>
        <div style={styles.itineraryContainer}>
          <h3>Day 7:</h3>
          <ul style={styles.itineraryList}>
            <li> Flight to Kathmandu</li>
            <li>Morning flight from Lukla to Kathmandu.</li>
            <li>Free day in Kathmandu for relaxation or exploration.</li>
            <li>Farewell dinner in Kathmandu..</li>
          </ul>
        </div>
        <div style={styles.itineraryContainer}>
          <h3>Day 8:</h3>
          <ul style={styles.itineraryList}>
            <li>Departure</li>
            <li>Check-out from the hotel.</li>
            <li>Transfer to the airport for departure.</li>
          </ul>
        </div>
        <div style={styles.inclusionsContainer}>
          <h3>Package Inclusions:</h3>
          <ul style={styles.inclusionsList}>
            <li>
              Accommodation in teahouses during the trek and hotels in
              Kathmandu.
            </li>
            <li>All meals during the trek (breakfast, lunch, and dinner).</li>
            <li>Experienced trekking guides and support staff.</li>
            <li>Domestic flights to and from Lukla.</li>
            <li>Trekking permits and entry fees.</li>
          </ul>
        </div>

        <div style={styles.priceNoteContainer}>
          <h3>Package Price:</h3>
          <p>{"Starting from ₹25,000 per person."}</p>
          <h3>Note:</h3>
          <p>
            {
              "Prices may vary based on group size, season, and additional customization. Trekking routes are subject to weather conditions, and the itinerary may be adjusted accordingly for safety reasons."
            }
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 20,
    title: "Buran Ghati Trek",
    location: "Himachal Pradesh, India",
    grade: "CHALLENGING ALPINE TREK",
    image: imgTrekking20,
    price: "₹19,000",
    description:
      "Situated at an altitude of 15,000 ft, the Buran Ghati Trek has it all - magnificent flora, dense forests, vast green grasslands, glacial lakes, snow-capped peaks, dreamy campsites, gleaming waterfalls and exhilarating passes.",
    Itinerary: (
      <div>
        <div style={styles.itineraryContainer}>
          <h3>Day 1:</h3>
          <ul style={styles.itineraryList}>
            <li>Arrival in Shimla</li>
            <li>Destination: Queen of Hills Arrival</li>
            <li>Arrive in Shimla and transfer to your hotel.</li>
            <li>Welcome dinner and briefing about the Buran Ghati Trek.</li>
            <li>Evening exploration of Shimla's iconic Mall Road.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 2:</h3>
          <ul style={styles.itineraryList}>
            <li>Drive to Janglik</li>
            <li>Morning drive to Janglik, the starting point of the trek.</li>
            <li>Lunch in a local village en route.</li>
            <li>Begin the trek to Janglik and camp overnight.</li>
          </ul>
        </div>
        <div style={styles.itineraryContainer}>
          <h3>Other Days:</h3>
          <ul style={styles.itineraryList}>
            <li>There is Surprise</li>
          </ul>
        </div>
        <div style={styles.inclusionsContainer}>
          <h3>Package Inclusions:</h3>
          <ul style={styles.inclusionsList}>
            <li>Accommodation in hotels, camps, and guesthouses.</li>
            <li>All meals during the trek (breakfast, lunch, and dinner).</li>
            <li>Experienced trekking guides and support staff.</li>
            <li>Transportation as per the itinerary.</li>
            <li>Trekking permits and entry fees.</li>
          </ul>
        </div>

        <div style={styles.priceNoteContainer}>
          <h3>Package Price:</h3>
          <p>{"Starting from ₹18,000 per person."}</p>
          <h3>Note:</h3>
          <p>
            {
              "Prices may vary based on group size, season, and additional customization. Trekking routes are subject to weather conditions, and the itinerary may be adjusted accordingly for safety reasons."
            }
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 21,
    title: "Chopata Chandrashila Trek",
    location: "Uttarakhand, India",
    grade: "MODERATE ALPINE TREK",
    image: imgTrekking21,
    price: "₹22,999",
    description:
      "Ranged at an altitude of 13,000 feet, the Chopta Chandrashila Trek has two routes - from Delhi and Rishikesh. The trek expedition from Delhi is rewarding for high altitude trek lovers as it takes them through lush green forests, snow-capped mountains and the breathtaking views of Nandadevi, Bandarpunch, Trisul, Kedar Peak and Chaukhamba peaks.",
    Itinerary: (
      <div>
        <div style={styles.itineraryContainer}>
          <h3>Day 1:</h3>
          <ul style={styles.itineraryList}>
            <li>Departure from Delhi to Haridwar</li>
            <li>Destination: Gateway to the Himalayas</li>
            <li>Depart from Delhi and drive to Haridwar.</li>
            <li>Check-in at the hotel and evening at leisure.</li>
            <li>Briefing about the trek and preparation.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 2:</h3>
          <ul style={styles.itineraryList}>
            <li>Drive to Sari Village and Trek to Deoria Tal</li>
            <li>Morning drive to Sari village.</li>
            <li>Begin the trek to Deoria Tal, a picturesque alpine lake.</li>
            <li>Camp overnight by the lake.</li>
          </ul>
        </div>
        <div style={styles.itineraryContainer}>
          <h3>Other Days:</h3>
          <ul style={styles.itineraryList}>
            <li>There is Surprise</li>
          </ul>
        </div>

        <div style={styles.inclusionsContainer}>
          <h3>Package Inclusions:</h3>
          <ul style={styles.inclusionsList}>
            <li>Accommodation in hotels and camping tents.</li>
            <li>All meals during the trek (breakfast, lunch, and dinner).</li>
            <li>Experienced trekking guides and support staff.</li>
            <li>
              Transportation from Delhi to Haridwar and within Uttarakhand.
            </li>
            <li>Trekking permits and entry fees.</li>
          </ul>
        </div>

        <div style={styles.priceNoteContainer}>
          <h3>Package Price:</h3>
          <p>{"Starting from ₹10,000 per person."}</p>
          <h3>Note:</h3>
          <p>
            {
              "Prices may vary based on group size, season, and additional customization. Trekking routes are subject to weather conditions, and the itinerary may be adjusted accordingly for safety reasons."
            }
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 22,
    title: "Sandakphu Trek",
    location: "Darjeeling, West Bengal, India",
    grade: "MODERATE ALPINE TREK",
    image: imgTrekking22,
    price: "₹25,500",
    description:
      "Located on the edge of Singalila National Park in West Bengal, the Sandakphu Trek rises to an elevation of 11,930 ft above sea level. It is one of the best places for a trekking trip in Eastern India.",
    Itinerary: (
      <div>
        <div style={styles.itineraryContainer}>
          <h3>Day 1:</h3>
          <ul style={styles.itineraryList}>
            <li>Arrival in Darjeeling</li>
            <li>Destination: Queen of the Hills Arrival</li>
            <li>Arrive in Darjeeling and transfer to your hotel.</li>
            <li>Welcome dinner and briefing about the Sandakphu Trek.</li>
            <li>Evening exploration of Darjeeling's charm.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 2:</h3>
          <ul style={styles.itineraryList}>
            <li>Drive to Maneybhanjyang and Trek to Tonglu</li>
            <li>Morning drive to Maneybhanjyang, the trek starting point.</li>
            <li>Begin the trek to Tonglu through rhododendron forests.</li>
            <li>Overnight camping at Tonglu with panoramic views.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Other Days:</h3>
          <ul style={styles.itineraryList}>
            <li>There is Surprise</li>
          </ul>
        </div>

        <div style={styles.inclusionsContainer}>
          <h3>Package Inclusions:</h3>
          <ul style={styles.inclusionsList}>
            <li>Accommodation in hotels and camping tents.</li>
            <li>All meals during the trek (breakfast, lunch, and dinner).</li>
            <li>Experienced trekking guides and support staff.</li>
            <li>Transportation as per the itinerary.</li>
            <li>Trekking permits and entry fees.</li>
          </ul>
        </div>

        <div style={styles.priceNoteContainer}>
          <h3>Package Price:</h3>
          <p>{"Starting from ₹12,000 per person."}</p>
          <h3>Note:</h3>
          <p>
            {
              "Prices may vary based on group size, season, and additional customization. Trekking routes are subject to weather conditions, and the itinerary may be adjusted accordingly for safety reasons."
            }
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 23,
    title: "Dzongri Trek",
    location: "Sikkim, India",
    grade: "MODERATE TO CHALLENGING ALPINE TREK",
    image: imgTrekking23,
    price: "₹20,000",
    description:
      "An astounding peak that reaches up to 4,000 metres above sea level, the Dzongri Trek is one of the best places for trekking in India for people who do not want to go on long and challenging treks. From lush green forests of Oak, Maple and Rhododendron trees to sparkling streams, this beautiful trek unravels the marvels of nature at every step.",
    Itinerary: (
      <div>
        <div style={styles.itineraryContainer}>
          <h3>Day 1:</h3>
          <ul style={styles.itineraryList}>
            <li>Arrival in Yuksom</li>
            <li>Destination: Gateway to Dzongri Arrival</li>
            <li>Arrive in Yuksom, the trek starting point.</li>
            <li>Check-in at the hotel and welcome dinner.</li>
            <li>Briefing about the Dzongri Trek.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 2:</h3>
          <ul style={styles.itineraryList}>
            <li>Trek to Tshoka</li>
            <li>Trek to Tshoka through dense rhododendron forests.</li>
            <li>Enjoy the scenic beauty and acclimate to the altitude.</li>
            <li>Overnight camping at Tshoka.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Other Days:</h3>
          <ul style={styles.itineraryList}>
            <li>There is Surprise</li>
          </ul>
        </div>

        <div style={styles.inclusionsContainer}>
          <h3>Package Inclusions:</h3>
          <ul style={styles.inclusionsList}>
            <li>Accommodation in hotels and camping tents.</li>
            <li>All meals during the trek (breakfast, lunch, and dinner).</li>
            <li>Experienced trekking guides and support staff.</li>
            <li>Transportation as per the itinerary.</li>
            <li>Trekking permits and entry fees.</li>
          </ul>
        </div>

        <div style={styles.priceNoteContainer}>
          <h3>Package Price:</h3>
          <p>{"Starting from ₹14,000 per person."}</p>
          <h3>Note:</h3>
          <p>
            {
              "Prices may vary based on group size, season, and additional customization. Trekking routes are subject to weather conditions, and the itinerary may be adjusted accordingly for safety reasons."
            }
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 24,
    title: "Rajmachi Trek",
    location: "Maharashtra, India",
    grade: "EASY TO MODERATE",
    image: imgTrekking24,
    price: "₹1500",
    description:
      "The Rajmachi Trek, which you can do from either Lonavala or Karjat, is an exhilarating trek to the two historic forts of Manaranjan Fort and Shriwardhan Fort. Surrounded by immense natural beauty, this is sure to give you ample time to observe the purest form of natural abundance.",
    Itinerary: (
      <div>
        <div style={styles.itineraryContainer}>
          <h3>Day 1:</h3>
          <ul style={styles.itineraryList}>
            <li>Arrival in Lonavala</li>
            <li>Destination: Gateway to Rajmachi Arrival</li>
            <li>Arrive in Lonavala, the base for the trek.</li>
            <li>Check-in at the hotel and welcome dinner.</li>
            <li>Briefing about the Rajmachi Trek.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 2:</h3>
          <ul style={styles.itineraryList}>
            <li>Trek to Rajmachi</li>
            <li>Trek to Rajmachi through picturesque landscapes.</li>
            <li>Explore the ancient forts and ruins.</li>
            <li>Overnight camping at Rajmachi.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Other Days:</h3>
          <ul style={styles.itineraryList}>
            <li>There is Surprise</li>
          </ul>
        </div>

        <div style={styles.inclusionsContainer}>
          <h3>Package Inclusions:</h3>
          <ul style={styles.inclusionsList}>
            <li>Accommodation in hotels and camping tents.</li>
            <li>All meals during the trek (breakfast, lunch, and dinner).</li>
            <li>Experienced trekking guides and support staff.</li>
            <li>Transportation as per the itinerary.</li>
            <li>Trekking permits and entry fees.</li>
          </ul>
        </div>

        <div style={styles.priceNoteContainer}>
          <h3>Package Price:</h3>
          <p>{"Starting from ₹7,000 per person."}</p>
          <h3>Note:</h3>
          <p>
            {
              "Prices may vary based on group size, season, and additional customization. Trekking routes are subject to weather conditions, and the itinerary may be adjusted accordingly for safety reasons."
            }
          </p>
        </div>
      </div>
    ),
  },

  // Add more packages as needed
];
export const packagesHotels = [
  {
    id: 25,
    title: "ITC Grand Goa Resort & Spa",
    location: "Arossim Beach,South Goa, India",
    image: imgHotels25, // Use the imported image
    duration: "8 Days & 7 Nights",
    price: "₹15,000 per Night",
    grade: "Rating: 5-star Deluxe",
    description:
      "Nestled in serene south Goa, amidst 1,82,109 m² of lush landscapes & lagoons, the resort offers direct access to the pristine Arossim beach Indo-Portuguese village style architecture Kaya Kalp - The Royal Spa 6 Exotic dining destinations",
    Itinerary: (
      <div>
        <div style={styles.roomDetailsContainer}>
          <h3>
            <strong>Executive Room:</strong>
          </h3>
          <p>
            Spacious rooms with a private balcony overlooking the lush gardens
            or pool.
          </p>
        </div>

        <div style={styles.roomDetailsContainer}>
          <h3>
            <strong>Deluxe Suite:</strong>
          </h3>
          <p>
            Luxurious suites featuring a separate living area and a private
            balcony with scenic views.
          </p>
        </div>

        <div style={styles.roomDetailsContainer}>
          <h3>
            <strong>Presidential Suite:</strong>
          </h3>
          <p>
            The epitome of opulence, these suites offer a grand living space, a
            private terrace, and personalized services.
          </p>
        </div>

        <div style={styles.diningDetailsContainer}>
          <h3>
            <strong>Dining:</strong>
          </h3>
          <p>
            Indulge in a culinary journey with the hotel's diverse dining
            options.
          </p>

          <ul style={styles.diningOptionsList}>
            <li>
              <strong>Kebabs & Kurries:</strong> Savor a selection of succulent
              kebabs and rich Indian curries in a fine dining ambiance.
            </li>
            <li>
              Otto Infinito: An Italian specialty restaurant offering a
              delectable range of pizzas, pastas, and Italian delicacies.
            </li>
            <li>
              Far East Asian Grill: Experience the flavors of the Far East with
              a menu featuring dishes from various Asian cuisines.
            </li>
          </ul>
        </div>

        <div style={styles.recreationWellnessContainer}>
          <h3>
            <strong>Recreation and Wellness:</strong>
          </h3>
          <p>Unwind and rejuvenate with the hotel's recreational facilities.</p>

          <ul style={styles.facilitiesList}>
            <li>
              <strong>Swimming Pool:</strong> Relax by the pristine pool
              surrounded by tropical greenery.
            </li>
            <li>
              Kaya Kalp - The Royal Spa: Pamper yourself with a range of
              holistic spa treatments and therapies.
            </li>
            <li>
              Fitness Center: Stay fit with state-of-the-art fitness equipment
              and personalized training sessions.
            </li>
          </ul>
        </div>

        <div style={styles.eventsConferencesContainer}>
          <h3>
            <strong>Events and Conferences:</strong>
          </h3>
          <p>
            ITC Grand Goa Resort & Spa is an ideal venue for hosting grand
            events, conferences, and weddings. The hotel offers spacious banquet
            halls and outdoor venues with professional event planning services.
          </p>
        </div>

        <div style={styles.additionalServicesContainer}>
          <h3>
            <strong>Additional Services:</strong>
          </h3>
          <ul style={styles.servicesList}>
            <li>24-hour room service</li>
            <li>Concierge services</li>
            <li>Wi-Fi connectivity</li>
            <li>Airport transfers</li>
            <li>Valet parking</li>
          </ul>
        </div>

        <p style={styles.note}>
          Note: Prices may vary based on room type, season, and availability.
          It's advisable to check the hotel's official website or contact them
          directly for the most accurate and updated information.
        </p>
      </div>
    ),
  },
  {
    id: 26,
    title: "Taj Hotel & Convention Centre",
    location: "Taj East Gate Road, Agra, India",
    image: imgHotels26,
    duration: "17 Days & 15 Nights",
    price: "₹10,000 per Night",
    grade: "Rating: 5-star Deluxe",
    description:
      "Taj Hotel & Convention Centre, Agra, epitomizes luxury in the heart of the city known for the iconic Taj Mahal. With elegant accommodations, diverse dining options, and state-of-the-art facilities, the hotel offers a blend of modern comfort and cultural charm, making it an ideal destination for both leisure and business travelers.",
    Itinerary: (
      <div>
        <div style={styles.roomDetailsContainer}>
          <h3>
            <strong>Superior Room:</strong>
          </h3>
          <p>
            Elegant rooms with modern amenities and comfortable furnishings.
          </p>
        </div>

        <div style={styles.roomDetailsContainer}>
          <h3>
            <strong>Deluxe Suite:</strong>
          </h3>
          <p>
            Spacious suites featuring a separate living area, plush interiors,
            and panoramic city views.
          </p>
        </div>

        <div style={styles.roomDetailsContainer}>
          <h3>
            <strong>Taj Club Room:</strong>
          </h3>
          <p>
            Access to the exclusive Taj Club Lounge, personalized services, and
            additional privileges.
          </p>
        </div>

        <div style={styles.diningDetailsContainer}>
          <h3>
            <strong>Dining:</strong>
          </h3>
          <p>
            Embark on a gastronomic journey with the hotel's exquisite dining
            options.
          </p>

          <ul style={styles.diningOptionsList}>
            <li>
              <strong>Daawat-e-Nawab:</strong> Indulge in authentic Indian
              cuisine, showcasing the rich flavors of Mughlai and Awadhi
              delicacies.
            </li>
            <li>
              <strong>Palato - All Day Dining:</strong> A global dining
              experience with an extensive menu featuring international and
              regional dishes.
            </li>
            <li>
              <strong>The Exchange:</strong> Unwind at the trendy bar with a
              selection of fine wines, spirits, and innovative cocktails.
            </li>
          </ul>
        </div>

        <div style={styles.recreationWellnessContainer}>
          <h3>
            <strong>Recreation and Wellness:</strong>
          </h3>
          <p>
            Relax and rejuvenate with the hotel's world-class recreational
            facilities.
          </p>

          <ul style={styles.facilitiesList}>
            <li>
              <strong>Jiva Spa:</strong> Experience holistic wellness with
              traditional Indian spa therapies and rejuvenating treatments.
            </li>
            <li>
              <strong>Swimming Pool:</strong> Take a refreshing dip in the
              outdoor pool surrounded by lush greenery.
            </li>
            <li>
              <strong>Fitness Center:</strong> Stay active with state-of-the-art
              fitness equipment and expert trainers.
            </li>
          </ul>
        </div>

        <div style={styles.eventsConferencesContainer}>
          <h3>
            <strong>Events and Conferences:</strong>
          </h3>
          <p>
            Taj Hotel & Convention Centre is an ideal venue for hosting grand
            events, conferences, and weddings. The hotel boasts spacious banquet
            halls, meeting rooms, and outdoor venues equipped with modern
            technology and expert event planning services.
          </p>
        </div>

        <div style={styles.additionalServicesContainer}>
          <h3>
            <strong>Additional Services:</strong>
          </h3>
          <ul style={styles.servicesList}>
            <li>24-hour room service</li>
            <li>Concierge services</li>
            <li>Wi-Fi connectivity</li>
            <li>Airport transfers</li>
            <li>Valet parking</li>
          </ul>
        </div>

        <p style={styles.note}>
          Note: Prices may vary based on room type, season, and availability.
          For the most accurate and updated information, it's recommended to
          check the hotel's official website or contact them directly.
        </p>
      </div>
    ),
  },
  {
    id: 27,
    title: "Baragarh Resort & Spa",
    location: "Himachal Pradesh,Manali,India",
    image: imgHotels27,
    duration: "5 Days & 4 Nights",
    price: "₹12,000 per night",
    grade: "Rating: 5-star Luxury",
    description:
      "Baragarh Resort & Spa, Manali, a distinguished IHCL SeleQtions property, invites guests to experience the epitome of luxury amidst the breathtaking landscapes of Manali. With opulent accommodations, a rejuvenating spa, and personalized service, the resort promises a memorable escape into the tranquility of the Himalayas",
    Itinerary: (
      <div>
        <div style={styles.roomDetailsContainer}>
          <h3>
            <strong>Deluxe Mountain View Room:</strong>
          </h3>
          <p>
            Elegant rooms with a balcony offering panoramic views of the
            surrounding mountains.
          </p>
        </div>

        <div style={styles.roomDetailsContainer}>
          <h3>
            <strong>Premium River View Suite:</strong>
          </h3>
          <p>
            Spacious suites featuring a separate living area, river-facing
            balcony, and luxurious amenities.
          </p>
        </div>

        <div style={styles.roomDetailsContainer}>
          <h3>
            <strong>Presidential Suite:</strong>
          </h3>
          <p>
            The epitome of opulence, offering a grand living space, a private
            terrace, and personalized services.
          </p>
        </div>

        <div style={styles.diningDetailsContainer}>
          <h3>
            <strong>Dining:</strong>
          </h3>
          <p>
            Embark on a culinary journey with the resort's exquisite dining
            options.
          </p>

          <ul style={styles.diningOptionsList}>
            <li>
              <strong>The Cedar Deck:</strong> Enjoy a selection of
              international and local cuisines in a picturesque outdoor setting.
            </li>
            <li>
              <strong>The Orchard:</strong> Indulge in a farm-to-table dining
              experience with fresh, locally sourced ingredients.
            </li>
            <li>
              <strong>The Lounge:</strong> Unwind with a variety of beverages,
              cocktails, and light bites in a cozy ambiance.
            </li>
          </ul>
        </div>

        <div style={styles.recreationWellnessContainer}>
          <h3>
            <strong>Recreation and Wellness:</strong>
          </h3>
          <p>
            Experience relaxation and rejuvenation with the resort's
            recreational facilities.
          </p>

          <ul style={styles.facilitiesList}>
            <li>
              <strong>Spa at Baragarh:</strong> Pamper yourself with a range of
              holistic spa treatments and wellness therapies.
            </li>
            <li>
              <strong>Indoor Heated Pool:</strong> Take a dip in the indoor pool
              with stunning views of the surrounding mountains.
            </li>
            <li>
              <strong>Fitness Center:</strong> Stay active with state-of-the-art
              fitness equipment and wellness programs.
            </li>
          </ul>
        </div>

        <div style={styles.eventsConferencesContainer}>
          <h3>
            <strong>Events and Conferences:</strong>
          </h3>
          <p>
            Baragarh Resort & Spa is an ideal venue for hosting events,
            weddings, and conferences. The resort offers well-equipped banquet
            halls, outdoor venues, and expert event planning services.
          </p>
        </div>

        <div style={styles.additionalServicesContainer}>
          <h3>
            <strong>Additional Services:</strong>
          </h3>
          <ul style={styles.servicesList}>
            <li>24-hour room service</li>
            <li>Concierge services</li>
            <li>Wi-Fi connectivity</li>
            <li>Airport transfers</li>
            <li>Valet parking</li>
          </ul>
        </div>

        <p style={styles.note}>
          Note: Prices may vary based on room type, season, and availability.
          For the most accurate and updated information, it's recommended to
          check the resort's official website or contact them directly.
        </p>
      </div>
    ),
  },
  {
    id: 28,
    title: "Woodays Resort",
    location: "Shimla, Himachal Pradesh, India",
    image: imgHotels28,
    duration: "6 Days & 5 Nights",
    price: " ₹8,000 per night",
    grade: "Rating: 4-star",
    description:
      " Woodays Resort is a tranquil retreat nestled in natures embrace, offering a serene getaway. With modern amenities, comfortable accommodations, and lush surroundings, it provides an idyllic escape for those seeking relaxation and rejuvenation.",
    Itinerary: (
      <div>
        <div style={styles.roomDetailsContainer}>
          <h3>
            <strong>Standard Room:</strong>
          </h3>
          <p>
            Comfortable rooms with modern amenities, perfect for a relaxing
            stay.
          </p>
        </div>

        <div style={styles.roomDetailsContainer}>
          <h3>
            <strong>Deluxe Mountain View Room:</strong>
          </h3>
          <p>
            Rooms with a balcony offering breathtaking views of the surrounding
            mountains.
          </p>
        </div>

        <div style={styles.roomDetailsContainer}>
          <h3>
            <strong>Woodays Suite:</strong>
          </h3>
          <p>
            Spacious suites featuring a separate living area, plush interiors,
            and personalized services.
          </p>
        </div>

        <div style={styles.diningDetailsContainer}>
          <h3>
            <strong>Dining:</strong>
          </h3>
          <p>Savor delicious meals at the resort's dining venues.</p>

          <ul style={styles.diningOptionsList}>
            <li>
              <strong>The Pine Cafe:</strong> Enjoy a variety of local and
              international cuisines in a warm and inviting ambiance.
            </li>
            <li>
              <strong>Alpine Bistro:</strong> A cozy bistro offering snacks,
              beverages, and light bites throughout the day.
            </li>
          </ul>
        </div>

        <div style={styles.recreationWellnessContainer}>
          <h3>
            <strong>Recreation and Wellness:</strong>
          </h3>
          <p>Relax and unwind with the resort's recreational facilities.</p>

          <ul style={styles.facilitiesList}>
            <li>
              <strong>Bonfire Area:</strong> Gather around the bonfire in the
              evening for a cozy and memorable experience.
            </li>
            <li>
              <strong>Indoor Games:</strong> Engage in a variety of indoor games
              for entertainment.
            </li>
            <li>
              <strong>Nature Walks:</strong> Explore the scenic surroundings
              with guided nature walks.
            </li>
          </ul>
        </div>

        <div style={styles.eventsConferencesContainer}>
          <h3>
            <strong>Events and Conferences:</strong>
          </h3>
          <p>
            Woodays Resort provides a peaceful setting for small events and
            conferences. The resort offers a well-equipped conference room and
            outdoor spaces for gatherings.
          </p>
        </div>

        <div style={styles.additionalServicesContainer}>
          <h3>
            <strong>Additional Services:</strong>
          </h3>
          <ul style={styles.servicesList}>
            <li>24-hour room service</li>
            <li>Concierge services</li>
            <li>Wi-Fi connectivity</li>
            <li>Airport transfers (on request)</li>
            <li>Parking facilities</li>
          </ul>
        </div>

        <p style={styles.note}>
          Note: Prices may vary based on room type, season, and availability.
          For the most accurate and updated information, it's recommended to
          check the resort's official website or contact them directly.
        </p>
      </div>
    ),
  },
  {
    id: 29,
    title: "Rhenock House(luxury villa)",
    location: "Rhenock, East Sikkim, India",
    image: imgHotels29,
    duration: "4 Days & 3 Nights",
    price: "₹9,000 per night",
    grade: "Rating: Boutique Luxury",
    description:
      "Discover indulgence at Rhenock House, a luxury villa that harmoniously blends modern comforts with colonial charm. Nestled in serene surroundings, this exquisite retreat offers an exclusive escape with personalized service, creating an unforgettable experience for discerning travelers.",
    Itinerary: (
      <div>
        <div style={styles.roomDetailsContainer}>
          <h3>
            <strong>Luxury Room:</strong>
          </h3>
          <p>
            Stylishly designed rooms with modern amenities and picturesque
            views.
          </p>
        </div>

        <div style={styles.roomDetailsContainer}>
          <h3>
            <strong>Mountain View Suite:</strong>
          </h3>
          <p>
            Spacious suites featuring a private balcony with breathtaking views
            of the surrounding mountains.
          </p>
        </div>

        <div style={styles.roomDetailsContainer}>
          <h3>
            <strong>Rhenock House Villa:</strong>
          </h3>
          <p>
            An exclusive villa experience with multiple bedrooms, a private
            living area, and personalized services.
          </p>
        </div>

        <div style={styles.diningDetailsContainer}>
          <h3>
            <strong>Dining:</strong>
          </h3>
          <p>Indulge in delightful culinary experiences at the villa.</p>

          <ul style={styles.diningOptionsList}>
            <li>
              <strong>The Garden Terrace:</strong> Enjoy meals in the open-air
              terrace surrounded by the beauty of the garden.
            </li>
            <li>
              <strong>Local Flavors Dining:</strong> Relish authentic Sikkimese
              cuisine prepared with locally sourced ingredients.
            </li>
          </ul>
        </div>

        <div style={styles.recreationWellnessContainer}>
          <h3>
            <strong>Recreation and Wellness:</strong>
          </h3>
          <p>Relax and rejuvenate with the villa's recreational facilities.</p>

          <ul style={styles.facilitiesList}>
            <li>
              <strong>Landscaped Gardens:</strong> Stroll through beautifully
              landscaped gardens for a peaceful retreat.
            </li>
            <li>
              <strong>Cultural Experiences:</strong> Immerse yourself in the
              local culture with curated experiences arranged by the villa.
            </li>
            <li>
              <strong>Spa Services (on request):</strong> Pamper yourself with
              spa treatments in the comfort of the villa.
            </li>
          </ul>
        </div>

        <div style={styles.eventsRetreatsContainer}>
          <h3>
            <strong>Events and Retreats:</strong>
          </h3>
          <p>
            Rhenock House is an ideal venue for intimate events, retreats, and
            special celebrations. The villa offers exclusive spaces and
            personalized event planning services.
          </p>
        </div>

        <div style={styles.additionalServicesContainer}>
          <h3>
            <strong>Additional Services:</strong>
          </h3>
          <ul style={styles.servicesList}>
            <li>24-hour concierge service</li>
            <li>In-room dining</li>
            <li>Wi-Fi connectivity</li>
            <li>Airport transfers (on request)</li>
            <li>Private parking facilities</li>
          </ul>
        </div>

        <p style={styles.note}>
          Note: Prices may vary based on room type, season, and availability.
          For the most accurate and updated information, it's recommended to
          check the villa's official website or contact them directly. Rhenock
          House in Sikkim promises a luxurious escape surrounded by the
          tranquility of nature.
        </p>
      </div>
    ),
  },
  {
    id: 30,
    title: "Suryagarh Jaisalmer",
    location: "Kahala Phata,Jaisalmer,India",
    image: imgHotels30,
    duration: "8 Days & 7 Nights",
    price: " ₹18,000 per night",
    grade: "Rating: 5-star Luxury",
    description:
      "ESuryagarh in Jaisalmer is a palatial oasis amidst the Thar Desert, where timeless luxury meets Rajasthani grandeur. Immerse yourself in regal hospitality, experience the magic of the golden sands, and revel in the opulence of this iconic heritage hotel.",
    Itinerary: (
      <div>
        <div style={styles.roomDetailsContainer}>
          <h3>
            <strong>Palace Room:</strong>
          </h3>
          <p>
            Opulent rooms with intricate Rajasthani design, luxurious amenities,
            and a regal ambiance.
          </p>
        </div>

        <div style={styles.roomDetailsContainer}>
          <h3>
            <strong>Signature Suite:</strong>
          </h3>
          <p>
            Spacious suites featuring a separate living area, private balcony,
            and panoramic views of the desert.
          </p>
        </div>

        <div style={styles.roomDetailsContainer}>
          <h3>
            <strong>Suryagarh Suite:</strong>
          </h3>
          <p>
            The epitome of luxury, offering a grand living space, a private
            terrace, and personalized services.
          </p>
        </div>

        <div style={styles.diningDetailsContainer}>
          <h3>
            <strong>Dining:</strong>
          </h3>
          <p>
            Embark on a culinary journey with the hotel's exquisite dining
            options.
          </p>

          <ul style={styles.diningOptionsList}>
            <li>
              <strong>Nosh:</strong> A vibrant all-day dining restaurant
              offering a diverse menu of global and regional cuisines.
            </li>
            <li>
              <strong>Draksh:</strong> Experience fine dining with an array of
              delectable Indian and international dishes.
            </li>
            <li>
              <strong>Legend of Marwar:</strong> An authentic dining experience
              featuring traditional Rajasthani cuisine in a mesmerizing setting.
            </li>
          </ul>
        </div>

        <div style={styles.recreationWellnessContainer}>
          <h3>
            <strong>Recreation and Wellness:</strong>
          </h3>
          <p>Indulge in relaxation and rejuvenation at Suryagarh.</p>

          <ul style={styles.facilitiesList}>
            <li>
              <strong>Lakshmi Nivas:</strong> A serene spa offering holistic
              treatments and wellness therapies.
            </li>
            <li>
              <strong>Lagoon Pool:</strong> Relax by the tranquil pool
              surrounded by lush gardens and the desert landscape.
            </li>
            <li>
              <strong>Cultural Experiences:</strong> Engage in curated
              experiences showcasing the rich heritage and traditions of
              Rajasthan.
            </li>
          </ul>
        </div>

        <div style={styles.eventsCelebrationsContainer}>
          <h3>
            <strong>Events and Celebrations:</strong>
          </h3>
          <p>
            Suryagarh is an ideal venue for grand events, weddings, and
            celebrations. The hotel offers majestic banquet halls, outdoor
            venues, and expert event planning services.
          </p>
        </div>

        <div style={styles.additionalServicesContainer}>
          <h3>
            <strong>Additional Services:</strong>
          </h3>
          <ul style={styles.servicesList}>
            <li>24-hour butler service</li>
            <li>Concierge services</li>
            <li>Wi-Fi connectivity</li>
            <li>Camel safaris and desert excursions</li>
            <li>Airport transfers</li>
            <li>Valet parking</li>
          </ul>
        </div>

        <p style={styles.note}>
          Note: Prices may vary based on room type, season, and availability.
          For the most accurate and updated information, it's recommended to
          check the hotel's official website or contact them directly. Suryagarh
          in Jaisalmer promises an unforgettable experience of luxury and
          heritage in the heart of the Thar Desert.
        </p>
      </div>
    ),
  },
  {
    id: 31,
    title: "Welcomhotel by ITC Hotels",
    location: "Raja Sansi, Amritsar, Punjab, India",
    image: imgHotels31,
    duration: "5 Days & 3 Nights",
    price: " ₹11,000 per night",
    grade: "Rating: 5-star Deluxe",
    description:
      "Welcomhotel by ITC Hotels in Raja Sansi, Amritsar, offers a seamless blend of modern elegance and traditional charm. With exquisite accommodations and renowned hospitality, it provides a sophisticated retreat near Amritsars cultural and historical attractions.",
    Itinerary: (
      <div>
        <div style={styles.roomDetailsContainer}>
          <h3>
            <strong>Executive Room:</strong>
          </h3>
          <p>Comfortable rooms with modern amenities and stylish decor.</p>
        </div>

        <div style={styles.roomDetailsContainer}>
          <h3>
            <strong>Deluxe Suite:</strong>
          </h3>
          <p>
            Spacious suites featuring a separate living area, plush interiors,
            and personalized services.
          </p>
        </div>

        <div style={styles.roomDetailsContainer}>
          <h3>
            <strong>ITC One Room:</strong>
          </h3>
          <p>
            The epitome of luxury, offering exclusive services and a
            sophisticated ambiance.
          </p>
        </div>

        <div style={styles.diningDetailsContainer}>
          <h3>
            <strong>Dining:</strong>
          </h3>
          <p>
            Indulge in a culinary journey with the hotel's diverse dining
            options.
          </p>

          <ul style={styles.diningOptionsList}>
            <li>
              <strong>Pavilion 75:</strong> An all-day dining restaurant
              offering a variety of global and local cuisines.
            </li>
            <li>
              <strong>Dakshin:</strong> Experience the rich flavors of South
              Indian cuisine in a refined setting.
            </li>
            <li>
              <strong>Kebab & Kurries:</strong> Savor succulent kebabs and rich
              Indian curries in a fine dining ambiance.
            </li>
          </ul>
        </div>

        <div style={styles.recreationWellnessContainer}>
          <h3>
            <strong>Recreation and Wellness:</strong>
          </h3>
          <p>Relax and rejuvenate with the hotel's recreational facilities.</p>

          <ul style={styles.facilitiesList}>
            <li>
              <strong>Swimming Pool:</strong> Take a refreshing dip in the
              outdoor pool surrounded by lush greenery.
            </li>
            <li>
              <strong>Kaya Kalp - The Royal Spa:</strong> Pamper yourself with a
              range of holistic spa treatments and therapies.
            </li>
            <li>
              <strong>Fitness Center:</strong> Stay active with state-of-the-art
              fitness equipment and wellness programs.
            </li>
          </ul>
        </div>

        <div style={styles.eventsConferencesContainer}>
          <h3>
            <strong>Events and Conferences:</strong>
          </h3>
          <p>
            Welcomhotel by ITC Hotels is an ideal venue for hosting events,
            conferences, and weddings. The hotel offers spacious banquet halls,
            meeting rooms, and outdoor venues with professional event planning
            services.
          </p>
        </div>

        <div style={styles.additionalServicesContainer}>
          <h3>
            <strong>Additional Services:</strong>
          </h3>
          <ul style={styles.servicesList}>
            <li>24-hour room service</li>
            <li>Concierge services</li>
            <li>Wi-Fi connectivity</li>
            <li>Airport transfers</li>
            <li>Valet parking</li>
          </ul>
        </div>

        <p style={styles.note}>
          Note: Prices may vary based on room type, season, and availability.
          For the most accurate and updated information, it's recommended to
          check the hotel's official website or contact them directly.
          Welcomhotel by ITC Hotels in Amritsar provides a serene retreat near
          the iconic Golden Temple.
        </p>
      </div>
    ),
  },
  {
    id: 32,
    title: "The Leela Palace Jaipur",
    location: "Delhi Jaipur,Rajasthan, India",
    image: imgHotels32,
    duration: "3 Days & 2 Nights",
    price: " ₹22,000 per night",
    grade: "Rating: 5-star Deluxe",
    description:
      "The Leela Palace Jaipur is a palatial masterpiece in the Pink City, embodying grandeur and Rajasthani opulence. With regal accommodations, exquisite dining, and impeccable service, this luxury palace hotel offers an unparalleled experience of luxury and splendor in the heart of Jaipur.",
    Itinerary: (
      <div>
        <div style={styles.roomDetailsContainer}>
          <h3>
            <strong>Grand Heritage Room:</strong>
          </h3>
          <p>
            Luxuriously appointed rooms with a perfect blend of traditional
            Rajasthani decor and modern amenities.
          </p>
        </div>

        <div style={styles.roomDetailsContainer}>
          <h3>
            <strong>Royal Suite:</strong>
          </h3>
          <p>
            Spacious suites offering a separate living area, personalized
            services, and panoramic views of the Aravalli hills.
          </p>
        </div>

        <div style={styles.roomDetailsContainer}>
          <h3>
            <strong>Presidential Suite:</strong>
          </h3>
          <p>
            The epitome of opulence, featuring grand living spaces, a private
            terrace, and dedicated concierge services.
          </p>
        </div>

        <div style={styles.diningDetailsContainer}>
          <h3>
            <strong>Dining:</strong>
          </h3>
          <p>
            Embark on a gastronomic journey with the hotel's exquisite dining
            options.
          </p>

          <ul style={styles.diningOptionsList}>
            <li>
              <strong>The Suvarna Mahal:</strong> An award-winning fine-dining
              restaurant offering authentic Indian cuisine in a regal setting.
            </li>
            <li>
              <strong>Jamavar:</strong> Indulge in the rich flavors of the
              Indian subcontinent with a diverse menu and elegant ambiance.
            </li>
            <li>
              <strong>Le Cirque:</strong> An iconic restaurant serving French
              and Italian culinary masterpieces in a sophisticated setting.
            </li>
          </ul>
        </div>

        <div style={styles.recreationWellnessContainer}>
          <h3>
            <strong>Recreation and Wellness:</strong>
          </h3>
          <p>
            Experience rejuvenation and relaxation at The Leela Palace Jaipur.
          </p>

          <ul style={styles.facilitiesList}>
            <li>
              <strong>Outdoor Pool:</strong> Lounge by the expansive pool
              surrounded by lush gardens and enjoy the serene atmosphere.
            </li>
            <li>
              <strong>The Spa by ESPA:</strong> Pamper yourself with a range of
              holistic spa treatments and therapies.
            </li>
            <li>
              <strong>Fitness Center:</strong> Stay active with state-of-the-art
              fitness equipment and wellness programs.
            </li>
          </ul>
        </div>

        <div style={styles.eventsConferencesContainer}>
          <h3>
            <strong>Events and Celebrations:</strong>
          </h3>
          <p>
            The Leela Palace Jaipur provides a majestic setting for grand
            events, weddings, and celebrations. The hotel offers opulent banquet
            halls, outdoor venues, and expert event planning services.
          </p>
        </div>

        <div style={styles.additionalServicesContainer}>
          <h3>
            <strong>Additional Services:</strong>
          </h3>
          <ul style={styles.servicesList}>
            <li>24-hour butler service</li>
            <li>Concierge services</li>
            <li>Wi-Fi connectivity</li>
            <li>Airport transfers</li>
            <li>Valet parking</li>
          </ul>
        </div>

        <p style={styles.note}>
          Note: Prices may vary based on room type, season, and availability.
          For the most accurate and updated information, it's recommended to
          check the hotel's official website or contact them directly. The Leela
          Palace Jaipur promises a royal experience in the heart of the Pink
          City.
        </p>
      </div>
    ),
  },

  // Add more packages as needed
];
export const packagesBus = [
  {
    id: 33,
    title: "Goa Discovery: Bus Tour",
    location: "Goa-Calangute Beach-Baga Beach-Dona Paula",
    image: imgBusPackges33,
    price: "₹5000 per person",
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
    price: "₹8000 per person",
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
            <li>Guided tour of the Taj Mahal, a UNESCO World Heritage Site.</li>
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
              Explore local markets, ancient temples, and historical landmarks.
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
              Visit local craft workshops to witness traditional craftsmanship.
            </li>
            <li>Lunch featuring local Agra cuisine.</li>
            <li>Afternoon at leisure for shopping or personal exploration.</li>
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
    price: "₹10,000 per person",
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
            <li>Day trip to Solang Valley, known for its adventure sports.</li>
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
    price: "₹12,000 per person",
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
              Full day excursion to Kufri, a charming hill station near Shimla.
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
    price: "₹15,000 per person",
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
              Morning visit to Rumtek Monastery, a significant Tibetan Buddhist
              monastery.
            </li>
            <li>
              Explore the monastery's architecture and religious artifacts.
            </li>
            <li>Lunch at a local restaurant.</li>
            <li>Return to the hotel for relaxation or optional activities.</li>
          </ul>
        </div>

        <div style={styles.itineraryContainer}>
          <h3>Day 4:</h3>
          <ul style={styles.itineraryList}>
            <li>Gangtok Sightseeing</li>
            <li>
              Full day exploration of Gangtok, the capital city of Sikkim.
            </li>
            <li>Visit Namgyal Institute of Tibetology and Do Drul Chorten.</li>
            <li>Lunch at a local eatery.</li>
            <li>
              Explore the vibrant MG Marg for shopping and cultural experiences.
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
    price: "₹25,000 per person",
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
    price: "₹30,000 per person",
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
    price: "₹35,000 per person",
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
export const packagesTrain = [
  {
    id: 41,
    title: "Mumbai to Goa Express",
    location: "Mumbai - Goa ",
    image: imgTrainPackage41,
    price: "₹20,000 per person",
    duration: "8 days & 2 Nights",
    grade: "Second Class-Luxury Classes",
    description:"The bustling city of Mumbai to the sun-soaked beaches of Goa with our specially curated Train Expedition package. Experience the thrill of traversing the picturesque Western Ghats, witness the changing landscapes, and arrive in Goa ready for a memorable vacation filled with sun, sand, and relaxation.",
    Itinerary:
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
    Itinerary:
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
    Itinerary:
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
    Itinerary:
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
    Itinerary:
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
    Itinerary:
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
    Itinerary:
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
    Itinerary:
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
export const packagesFlight = [
  {
    id: 49,
    title: "Mumbai to Goa Vistara-Flights",
    location: "Mumbai - Goa ",
    image: imgFlightPackage49,
    price: "₹15,000 per person",
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
    price: "₹20,000 per person",
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
    price: "₹25,000 per person",
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
    price: "₹22,000 per person",
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
    price: "₹28,000 per person",
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
    price: "₹32,000 per person",
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
    price: "₹20,000 per person1500",
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
    price: "₹45,000 per person",
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
