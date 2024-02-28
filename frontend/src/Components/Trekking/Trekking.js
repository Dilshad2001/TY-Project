import React, { useEffect } from "react";
import "./Trekking.css"; // Check the correctness of this line
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import video from "../../Assets/Trekking Assets/Trekking video.mp4";

//Trekking Packages imports
import imgTrekking17 from "../../Assets/Trekking Assets/Treak chadar.jpg";
import imgTrekking18 from "../../Assets/Trekking Assets/Treak kasmir.jpg";
import imgTrekking19 from "../../Assets/Trekking Assets/Treak Everest.jpg";
import imgTrekking20 from "../../Assets/Trekking Assets/treak bhuran.jpg";
import imgTrekking21 from "../../Assets/Trekking Assets/Treak chopata.jpg";
import imgTrekking22 from "../../Assets/Trekking Assets/Treak sandup.jpg";
import imgTrekking23 from "../../Assets/Trekking Assets/Treak Dzongri.jpg";
import imgTrekking24 from "../../Assets/Trekking Assets/Treak rajmachi.jpg";

const packagesTrekking = [
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

const Trekking = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="trekking-banner-video">
        <video src={video} muted autoPlay loop type="video/mp4"></video>
      </div>
      <section className="Trekking-section container">
        <div className="overlay"></div>
        <div className="Trekking secTitle">
          <h3 data-aos="fade-right" className="title">
            Most visited Trekking destinations !
          </h3>
        </div>

        <div className="Trekking-grid container">
          {packagesTrekking.map((data) => (
            <Card
              className={"Trekking-card"}
              id={data.id}
              img={data.image}
              title={data.destTitle}
              location={data.location}
              grade={data.grade}
              price={data.fees}
              description={data.description}
              linkTo={`package/${data.id}`}
              btnText="Details"
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Trekking;

//return (
//<div>
//<h2>Welcome to ShaikhTrekkings !</h2>
//{TrekkingData.map((trek) => (
// <div key={trek.id}>
// <img src={trek.imgSrc} alt={trek.destTitle} />
//<h3>{trek.destTitle}</h3>
//<p>{trek.description}</p>
//<p>Duration: {trek.duration}</p>
//<Link to={`/trek/${trek.id}`}>View Details</Link>
//<Link to={`/trek/${trek.id}/videos`}>Watch Video</Link>
//</div>
//))}
//</div>
//);
