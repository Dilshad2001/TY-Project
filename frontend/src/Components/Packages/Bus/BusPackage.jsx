import React, { useEffect } from 'react'
import Card from '../../Card/Card';
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
    )
}

export default BusPackage
