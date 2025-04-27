import React from "react";
import "./TilePolishing.css"; // Import the CSS file for styling
import Card from "./Card"; // Import the Card component

// Images for the cards
import cleaningHomeTiles from "../assets/landing_page_image.jpg";
import plasterCleaning from "../assets/landing_page_image.jpg";
import tilePolishing from "../assets/landing_page_image.jpg";
import tileSeal from "../assets/landing_page_image.jpg";
import tileRepairs from "../assets/landing_page_image.jpg";

const ProcelainPolishing = () => {
  const services = [
    {
      image: cleaningHomeTiles,
      title: "تحضير سطح البورسلين",
      buttonText: "واتساب",
      buttonLink: "https://wa.me/966507787108",
    },
    {
      image: plasterCleaning,
      title: "تنظيف البورسلين",
      buttonText: "واتساب",
      buttonLink: "https://wa.me/966507787108",
    },
    {
      image: tilePolishing,
      title: "تلميع البورسلين",
      buttonText: "واتساب",
      buttonLink: "https://wa.me/966507787108",
    },
    {
      image: tileSeal,
      title: "ختم البورسلين",
      buttonText: "واتساب",
      buttonLink: "https://wa.me/966507787108",
    },
    {
      image: tileRepairs,
      title: "فحص نهائي للبورسلين",
      buttonText: "واتساب",
      buttonLink: "https://wa.me/966507787108",
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