import React from "react";
import "./TilePolishing.css"; // Import the CSS file for styling
import Card from "./Card"; // Import the Card component

// Images for the cards
import cleaningHomeTiles from "../assets/marble.jpeg";
import plasterCleaning from "../assets/marble_polishing.jpeg";
import tilePolishing from "../assets/marble_grinding.jpeg";
import tileSeal from "../assets/marble_seal.jpeg";
import tileRepairs from "../assets/marble_repairing.jpeg";

const MarblePolishing = () => {
  const services = [
    {
      image: cleaningHomeTiles,
      title: "تنظيف الرخام",
      buttonText: "واتساب",
      buttonLink: "https://wa.me/960597272164",
    },
    {
      image: plasterCleaning,
      title: "تلميع الرخام",
      buttonText: "واتساب",
      buttonLink: "https://wa.me/960597272164",
    },
    {
      image: tilePolishing,
      title: "جلي الرخام",
      buttonText: "واتساب",
      buttonLink: "https://wa.me/960597272164",
    },
    {
      image: tileSeal,
      title: "ختم الرخام",
      buttonText: "واتساب",
      buttonLink: "https://wa.me/960597272164",
    },
    {
      image: tileRepairs,
      title: "إصلاح الرخام",
      buttonText: "واتساب",
      buttonLink: "https://wa.me/960597272164",
    },
  ];

  return (
    <div className="tile-polishing">
      <h1 className="section-title">تلميع الرخام</h1>
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

export default MarblePolishing;