//PackageData.js

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


export const styles = {
  itineraryContainer: {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  dayContainer: {
    marginBottom: '15px',
  },
  itineraryText: {
    fontSize: '16px',
    lineHeight: '1.5',
  },
  inclusionsContainer: {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginTop: '30px',
  },
  inclusionsList: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    fontSize: '16px',
    lineHeight: '1.5',
  },
  priceNoteContainer: {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginTop: '30px',
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
    description:"the new moon, Goas beaches are known the world over. Fringed by swaying palm and coconut trees with cool and comfortable shacks offering a variety of refreshments, Goas 103 km coastline is blessed with the most enchanting beaches lapped by the Arabian Sea.s",
    Itinerary: 
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
<p>{'Starting from ₹5000 per person (based on double occupancy).'}</p>
<h3>Note:</h3>
<p>{'Prices may vary based on group size, season, and additional customization.'}</p>
</div> 
</div>
  },
  
  {
    id: 2,
    image: imgTravlling2,
    title: "Taj Mahal",
    location: "Agra",
    grade: "HISTORICAL EXPLORATION",
    price: "₹25,000",
    description:"The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.",
    Itinerary:
    <div>
    <div style={styles.itineraryContainer}>
      <ul style={styles.itineraryList}>
        <h3>Day 1:</h3>
        <li>Arrival and City Exploration</li>
        <li>Destination: A Glimpse of Mughal Grandeur</li>
        <li>Arrive at Agra and transfer to your boutique hotel.</li>
        <li>Welcome dinner and orientation.</li>
        <li>Evening visit to the Taj Mahal (exterior) for a mesmerizing view.</li>
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
        <li>Round-trip train tickets (AC chair car or sleeper class) or private transport.</li>
        <li>Guided tours to Taj Mahal, Agra Fort, and Fatehpur Sikri.</li>
        <li>Evening cultural show.</li>
      </ul>
    </div>

    <div style={styles.priceNoteContainer}>
      <h3>Package Price:</h3>
      <p>{'Starting from ₹7500 per person (based on double occupancy).'}</p>
      <h3>Note:</h3>
      <p>{'Prices may vary based on group size, season, and additional customization.'}</p>
    </div>
  </div>
  },

  {
    id: 3,
    image: imgTravlling3,
    title: "Jogni Waterfall Road",
    location: " Manali",
    grade: "ADVENTURE ESCAPE",
    price: "₹30,000",
    description:"Manali is synonymous streams and birdsong, forests and orchards and grandees of snow-capped mountains. Manali is the real starting point of an ancient trade route which crosses the Rohtang and Baralacha passes, and runs via Lahul and Ladakh to Kashmir while divergent road connects it with Spiti.",
    Itinerary:
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
        <li>Choose from exciting adventure activities (sailing, hiking, or mountain biking).</li>
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
        <li>Transportation via comfortable Volvo bus (Delhi to Manali) or private transport.</li>
        <li>Guided tours and activities as per itinerary.</li>
        <li>All entrance fees and permits.</li>
        <li>Experienced adventure guide.</li>
      </ul>
    </div>

    <div style={styles.priceNoteContainer}>
      <h3>Package Price:</h3>
      <p>{'Starting from ₹10,000 per person (based on double occupancy).'}</p>
      <h3>Note:</h3>
      <p>{'Prices may vary based on group size, season, and additional customization.'}</p>
    </div>
  </div>
  },

  {
    id: 4,
    image: imgTravlling4,
    title: "Shaily Peak",
    location: "Shimla",
    grade: "HILL STATION RELAXATION",
    price: "₹35,237",
    description:"Shimla, city, capital of Himachal Pradesh state, northwestern India. The city lies northeast of Chandigarh on a ridge of the Himalayan foothills, at an elevation of about 7,100 feet (2,200 metres). Shimla was built by the British on land they had retained after the Gurkha War of 1814–16 and was used for resting troops.",
    Itinerary:
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
      <p>{'Starting from ₹9,000 per person (based on double occupancy).'}</p>
      <h3>Note:</h3>
      <p>{'Prices may vary based on group size, season, and additional customization.'}</p>
    </div>
  </div>
    
  },

  {
    id: 5,
    image: imgTravlling5,
    title: "Buddha Park",
    location: "Sikkim",
    grade: " MOUNTAIN DISCOVERY",
    price: "₹40,000",
    description:"The Buddha Park of Ravangla, also known as Tathagata Tsal, is situated near Rabong (Ravangla) in South Sikkim district, Sikkim, India. It was constructed between 2006 and 2013 and features a 130-foot (40 m) high statue of the Buddha as its centerpiece.",
    Itinerary:
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
      <p>{'Starting from ₹12,000 per person (based on double occupancy).'}</p>
      <h3>Note:</h3>
      <p>{'Prices may vary based on group size, season, and additional customization. Permit availability for Nathula Pass is subject to government regulations.'}</p>
    </div>
  </div>
  },
  {
    id: 6,
    image: imgTravlling6,
    title: "Bada Bagh ",
    location: " Jaisalmer",
    grade: "DESERT ADVENTURE",
    price: "₹45,000",
    description:"This is a popular site because it is a garden that has the cenotaphs of all the Maharajas and other prestigious family members of Jaisalmer; all royal Rajputs kings of 6 centuries! Bada Bagh is actually located on a small hillock and the entrance to the cenotaphs is set at the bottom of the hill.",
    Itinerary:
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
        <li>Visit Amar Sagar Jain Temple and its beautiful surroundings.</li>
        <li>Explore the abandoned village of Kuldhara.</li>
        <li>Lunch at a heritage restaurant.</li>
        <li>Return to the desert camp for relaxation.</li>
      </ul>
    </div>

    <div style={styles.itineraryContainer}>
      <h3>Day 6:</h3>
      <ul style={styles.itineraryList}>
        <li>Adventure Activities and Local Exploration</li>
        <li>Choose from adventure activities (quad biking, jeep safari).</li>
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
      <p>{'Starting from ₹11,500 per person (based on double occupancy).'}</p>
      <h3>Note:</h3>
      <p>{'Prices may vary based on group size, season, and additional customization. Camel safari duration may be adjusted based on preferences.'}</p>
    </div>
  </div>
  },

  {
    id: 7,
    image: imgTravlling7,
    title: "Golden Temple",
    location: "Amritsar",
    grade: "CULTURAL ENRICHMENT",
    price: "₹50,000",
    description:"Amritsar is the largest and most important city in Punjab and is a major commercial, cultural, and transportation centre. It is also the centre of Sikhism and the site of the Sikhs principal place of worship—the Harmandir Sahib, or Golden Temple.",
    Itinerary:
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
      <p>{'Starting from ₹8,500 per person (based on double occupancy).'}</p>
      <h3>Note:</h3>
      <p>{'Prices may vary based on group size, season, and additional customization. Participation in the langar is subject to timing and availability.'}</p>
    </div>
  </div>
  },

  {
    id: 8,
    image: imgTravlling8,
    title: "Jal Mahal",
    location: "Jaipur",
    grade: "ROYAL INDULGENCE",
    price: "₹55,000",
    description:"Jal Mahal is a palace in the middle of the Man Sagar Lake in Jaipur city, the capital of the state of Rajasthan, India. The palace was originally constructed around 1699; the building and the lake around it were later renovated and enlarged in the early 18th century by Maharaja Jai Singh II of Amber",
    Itinerary:
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
      <p>{'Starting from ₹10,500 per person (based on double occupancy).'}</p>
      <h3>Note:</h3>
      <p>{'Prices may vary based on group size, season, and additional customization. Optional activities like elephant rides are subject to availability.'}</p>
    </div>
  </div>
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
    description:" Indulge in the adrenaline-pumping experience of white water rafting amidst the picturesque landscapes of Kullu.",
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
    description:"On an exhilarating white water rafting adventure along the sacred Ganges River in the beautiful town of Rishikesh.",
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
    description:"On an exciting white water rafting adventure in the beautiful hills of Darjeeling, combining thrilling rapids with the picturesque landscapes of the region.",
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
    description:"Immerse yourself in the lush landscapes of Coorg while enjoying the thrill of white water rafting on the Kauveri River, combining adventure with the natural beauty of the region.",
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
    description:"Experience the thrill of white water rafting in the scenic rivers of Maharashtra, combining adrenaline-pumping rapids with the natural beauty of the region.",
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
    description:"On an exhilarating white water rafting adventure on the Yamuna River, combining the thrill of rapids with the scenic beauty of Northern India.",
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
    description:" Experience the thrill of white water rafting amidst the rugged and breathtaking landscapes of Spiti Valley, where the Spiti River offers an adventurous journey with exhilarating ",
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
    description:"On an unforgettable white water rafting adventure in the pristine rivers of Arunachal Pradesh, surrounded by lush landscapes and untouched natural beauty.",
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
    description:"Nestled in serene south Goa, amidst 1,82,109 m² of lush landscapes & lagoons, the resort offers direct access to the pristine Arossim beach Indo-Portuguese village style architecture Kaya Kalp - The Royal Spa 6 Exotic dining destinations",
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
  },
  {
    id: 38,
    title: "Bada Bagh luxury Bus Tour",
    location: "Kuldhara-Gadisar Lake-Kuldhara",
    image: imgBusPackges38,
    price: "₹25,000 per person",
    grade: " VIP Class",
    description:
      "Immerse yourself in the rich history of Jaisalmer Fort and explore The highlight of the trip is the visit to Bada Bagh, a historical garden complex with intricately designed cenotaphs, offering a serene retreat amidst the desert landscape.It is a perfect blend of cultural exploration and natural beauty, promising an unforgettable experience in the heart of Rajasthan.",
  },
  {
    id: 39,
    title: "Golden Temple & City Tour",
    location: "Wagah border-Akal Takht-Hall Bazaar",
    image: imgBusPackges39,
    price: "₹30,000 per person",
    grade: "Luxury Bus",
    description:
      "On a soulful journey to explore the divine beauty of the Golden Temple in Amritsar with our meticulously curated luxury bus tour package. Experience the spiritual essence, architectural brilliance, and cultural richness of this revered Sikh pilgrimage site. This package is designed for those seeking a blend of spiritual rejuvenation and luxury travel.",
  },
  {
    id: 40,
    title: "Jal Mahal Tour",
    location: "Hawa Mahal-Nahargarh Fort-Jaipur Zoo",
    image: imgBusPackges40,
    price: "₹35,000 per person",
    grade: "V-VIP Class",
    description:
      "Experience the royal charm of Jaipur with our meticulously designed Luxury Bus Package for the Jal Mahal Discovery Tour. Immerse yourself in the architectural splendor and historical significance of Jal Mahal, surrounded by the serene waters of Man Sagar Lake. This tour is tailored for those seeking a regal and opulent exploration of Jaipurs cultural heritage.",
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
export const packagesFlight = [
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
