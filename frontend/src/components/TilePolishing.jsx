import React from "react";
import "./TilePolishing.css"; // Import the CSS file for styling
import Card from "./Card"; // Import the Card component

// Images for the cards
import cleaningHomeTiles from "../assets/tile_cleaning.jpeg";
import plasterCleaning from "../assets/plaster_cleaning.jpeg";
import tilePolishing from "../assets/tile_polishing.jpeg";
import tileSeal from "../assets/tile_seal.jpeg";
import tileRepairs from "../assets/tile_repairing.jpeg";

const TilePolishing = () => {
  const services = [
    {
      image: cleaningHomeTiles,
      title: "تنظيف البلاط",
      buttonText: "واتساب",
      buttonLink: "https://wa.me/966597272164",
    },
    {
      image: plasterCleaning,
      title: "تنظيف الجص",
      buttonText: "واتساب",
      buttonLink: "https://wa.me/966597272164",
    },
    {
      image: tilePolishing,
      title: "تلميع البلاط",
      buttonText: "واتساب",
      buttonLink: "https://wa.me/966597272164",
    },
    {
      image: tileSeal,
      title: "ختم البلاط",
      buttonText: "واتساب",
      buttonLink: "https://wa.me/966597272164",
    },
    {
      image: tileRepairs,
      title: "إصلاح البلاط",
      buttonText: "واتساب",
      buttonLink: "https://wa.me/966597272164",
    },
  ];

  return (
    <div className="tile-polishing">
      <h1 className="section-title">تلميع البلاط</h1>
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
