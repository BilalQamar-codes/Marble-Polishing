import React from "react";
import "./TilePolishing.css"; // Import the CSS file for styling
import Card from "./Card"; // Import the Card component

// Images for the cards
import cleaningHomeTiles from "../assets/porcelain_surface_preration.jpeg";
import plasterCleaning from "../assets/porcelain_cleaning.jpeg";
import tilePolishing from "../assets/porcelain_polishing.jpeg";
import tileSeal from "../assets/porcelain_seal.jpeg";
import tileRepairs from "../assets/porcelain_final_inspection.jpeg";

const ProcelainPolishing = () => {
  const services = [
    {
      image: cleaningHomeTiles,
      title: "تحضير سطح البورسلين",
      buttonText: "واتساب",
      buttonLink: "https://wa.me/966597272164",
    },
    {
      image: plasterCleaning,
      title: "تنظيف البورسلين",
      buttonText: "واتساب",
      buttonLink: "https://wa.me/966597272164",
    },
    {
      image: tilePolishing,
      title: "تلميع البورسلين",
      buttonText: "واتساب",
      buttonLink: "https://wa.me/966597272164",
    },
    {
      image: tileSeal,
      title: "ختم البورسلين",
      buttonText: "واتساب",
      buttonLink: "https://wa.me/966597272164",
    },
    {
      image: tileRepairs,
      title: "فحص نهائي للبورسلين",
      buttonText: "واتساب",
      buttonLink: "https://wa.me/966597272164",
    },
  ];

  return (
    <div className="tile-polishing">
      <h1 className="section-title">تلميع البورسلين</h1>
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

export default ProcelainPolishing;