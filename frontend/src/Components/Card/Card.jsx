import React from "react";
import "./card.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Button from "../Button/Button";

const Card = ({
    className,
    id,
    img,
    title,
    location,
    price,
    grade,
    description,
    btnText,
    linkTo,
    duration,
    DifficultyLevel,
    DistanceCovered,
}) => {
    return (
        <div
            key={id}
            data-aos="fade-up"
            className={`${className ? className : ""} singleDestination`}
        >
            <div className="card">
                <div className="imageDiv">
                    <img src={img} alt={title} />
                </div>
                <h4 className="destTitle">{title}</h4>
                <div className="location-price">
                    <span className="continent">
                        <HiOutlineLocationMarker className="icon" />
                        <span className="name">{location}</span>
                    </span>
                    <div className="price">
                        <h5>{price}</h5>
                    </div>
                </div>
                {grade ? (
                    <div className="grade">
                        <span>
                            {grade}
                            <small>+1</small>
                        </span>
                    </div>
                ) : ("")
                }
                {duration ? (
                    <div className="duration">
                        <span>{duration}</span>
                    </div>
                ) : ("")
                }
                {duration ? (
                    <div className="duration">
                        <span>{duration}</span>
                    </div>
                ) : ("")
                }
                
                {DifficultyLevel ? (
                    <div className="DifficultyLevel">
                        <span>{DifficultyLevel}</span>
                    </div>
                ) : ("")
                }
                {DistanceCovered ? (
                    <div className="DistanceCovered">
                        <span>{DistanceCovered}</span>
                    </div>
                ) : ("")
                }
                <div className="desc">
                    <p>{description}</p>
                </div>
            </div>
            {btnText ? <Button path={linkTo} btnText={btnText} /> : ""}
        </div>
    );
};

export default Card;
