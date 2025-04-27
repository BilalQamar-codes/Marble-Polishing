import React from "react";
import "./Card.css"; // Import the CSS file for styling

const Card = ({ image, title, buttonText, buttonLink }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="card-button">
        {buttonText}
      </a>
    </div>
  );
};

export default Card;