import React from "react";
import "./TilePolishing.css"; // Import the CSS file for styling
import Card from "./Card"; // Import the Card component

// Images for the cards
import cleaningHomeTiles from "../assets/landing_page_image.jpg";
import plasterCleaning from "../assets/landing_page_image.jpg";
import tilePolishing from "../assets/landing_page_image.jpg";
import tileSeal from "../assets/landing_page_image.jpg";
import tileRepairs from "../assets/landing_page_image.jpg";

const TilePolishing = () => {
  const services = [
    {
      image: cleaningHomeTiles,
      title: "Marble cleaning",
      buttonText: "WHATSAPP",
      buttonLink: "https://wa.me/966507787108",
    },
    {
      image: plasterCleaning,
      title: "Marble cleaning",
      buttonText: "WHATSAPP",
      buttonLink: "https://wa.me/966507787108",
    },
    {
      image: tilePolishing,
      title: "Marble polishing",
      buttonText: "WHATSAPP",
      buttonLink: "https://wa.me/966507787108",
    },
    {
      image: tileSeal,
      title: "Marble grinding",
      buttonText: "WHATSAPP",
      buttonLink: "https://wa.me/966507787108",
    },
    {
      image: tileRepairs,
      title: "Marble seal",
      buttonText: "WHATSAPP",
      buttonLink: "https://wa.me/966507787108",
    },
  ];

  return (
    <div className="tile-polishing">
      <h1 className="section-title">Marble polishing</h1>
      <div className="card-grid">
        {services.map((service, index) => (
          <Card
            key={index}
            image={service.image}
            title={service.title}
            buttonText={service.buttonText}
            buttonLink={service.buttonLink}
          />
        ))}
      </div>
    </div>
  );
};

export default TilePolishing;