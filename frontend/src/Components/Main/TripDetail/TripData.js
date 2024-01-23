// Main.js or a separate data file

import img from '../../../Assets/Main-Assets/Goa img1.jpg'
//import img2 from'../../Assets/Main Assets/Agra img2.jpg'
//import img3 from '../../Assets/Main Assets/Manali waterfall img3.jpg'
//import img4 from '../../Assets/Main Assets/Shimla img4.jpg'
//import img5 from '../../Assets/Main Assets/Sikkim img5.jpg'
//import img6 from '../../Assets/Main Assets/Jaisalmer img6.jpeg'
//import img7 from '../../Assets/Main Assets/Amritsar img7.jpg'
//import img8 from '../../Assets/Main Assets/jaipur jal img8.jpg'
//import img9 from '../../Assets/Main Assets/img9.jpg'
//import img10 from '../../Assets/Main Assets/kerla img10.jpg'

 const Data = [
    // ... (previous data)
  
    {
      id: 11,
      imgSrc: img, // Update with the actual image path
      destTitle: 'Goa Beach Paradise',
      location: 'Goa',
      grade: 'BEACH RELAX',
      fees: '₹8000',
      description:
        'Goa, the beach paradise, is renowned for its stunning beaches, vibrant nightlife, and Portuguese-influenced architecture. It is the smallest state in India but has a diverse landscape that includes beaches, forests, and hills.',
      details: {
        geographyAndLocation: [
          'Goa is a state located on the west coast of India, known for its stunning beaches, vibrant nightlife, and Portuguese-influenced architecture.',
          'It is the smallest state in India but has a diverse landscape that includes beaches, forests, and hills.',
        ],
        bestTimeToVisit: [
          'The peak tourist season in Goa is from November to February when the weather is pleasant, and numerous events and festivals take place.',
          'Monsoon season (June to September) is also an option for those who enjoy lush greenery and discounted rates, but some attractions may be closed.',
        ],
        beaches: [
          'Goa is famous for its beautiful beaches. Popular ones include Baga Beach, Calangute Beach, Anjuna Beach, and Palolem Beach.',
          'Each beach has its own unique vibe, offering a range of water sports, beach parties, and relaxation.',
        ],
        waterSports: [
          'Goa is a hub for water activities such as parasailing, jet skiing, windsurfing, and banana boat rides.',
          'Beaches like Calangute and Baga offer a variety of water sports facilities.',
        ],
        nightlife: [
          'The nightlife in Goa is legendary, with numerous beach clubs, shacks, and nightclubs offering a vibrant atmosphere.',
          'Tito\'s Lane in Baga and Club Cubana are famous for their lively parties.',
        ],
        cuisine: [
          'Goan cuisine is a delightful mix of Indian and Portuguese flavors. Seafood is a highlight, and dishes like fish curry rice, prawn balchão, and bebinca (a traditional Goan dessert) are must-tries.',
          'Local beach shacks offer fresh seafood and traditional Goan fare.',
        ],
        culturalAndHistoricalSites: [
          'Explore the rich history of Goa by visiting churches such as Basilica of Bom Jesus and Se Cathedral, both UNESCO World Heritage Sites.',
          'Fort Aguada and Chapora Fort offer panoramic views of the coastline.',
        ],
        festivals: [
          'If possible, plan your visit during festivals like Carnival (February) or Shigmo (March), which showcase Goa\'s vibrant culture through parades, music, and dance.',
        ],
        shopping: [
          'Visit the local markets like Anjuna Flea Market and Mapusa Market for unique handicrafts, jewelry, and souvenirs.',
          'Goa\'s markets are also great for buying spices, cashew nuts, and local beverages.',
        ],
        transportation: [
          'Renting a scooter or a car is a convenient way to explore the different parts of Goa.',
          'Taxis and auto-rickshaws are also available, but negotiate fares beforehand.',
        ],
        responsibleTourism: [
          'Respect the local culture and environment. Many beaches have guidelines to protect the natural beauty and cleanliness.',
          'Be aware of the impact of tourism on the local community and strive to be a responsible traveler.',
        ],
      },
    },
    // ... (other destinations)
  ];

  export default Data;