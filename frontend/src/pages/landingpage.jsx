import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import React, { useState } from "react";
import "../styles/landingpage.css";
import vedio1 from "../assets/vedio1.mp4";
import vedio2 from "../assets/vedio2.mp4";
import vedio3 from "../assets/vedio3.mp4";
import TilePolishing from "../components/TilePolishing.jsx";
import MarblePolishing from "../components/MarblePolishing.jsx";
import PorcelainPolishing from "../components/ProclainPolishing.jsx";
import CeramicPolishing from "../components/CeramicPolishing.jsx";
import whatsappIcon from "../assets/icons8-whatsapp-32.png"; // Replace with your WhatsApp icon path

export default function LandingPage() {
  const videos = [vedio1, vedio2, vedio3];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handlePrev = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <Navbar pageName="" />
      <div className="middle">
        <div className="description">
          <h1>جلي بلاط تلميع الرخام تنظيف سراميك بورسلان ریاض</h1>
          <p>
            نحن في “تلميع الرخام بالرياض” نُقدّم خدمات متخصصة وعالية الجودة في
            مجال تلميع وتنظيف الرخام. نتميز بخبرتنا الواسعة وفريق عمل محترف
            يستخدم أحدث التقنيات والمعدات لضمان تقديم أفضل النتائج لعملائنا.
            تشمل خدماتنا تلميع الرخام، إزالة البقع، إعادة تأهيل الأسطح، والعناية
            بالرخام لضمان الحفاظ على جماله ولمعانه لأطول فترة ممكنة. نحن ملتزمون
            بتقديم خدمات متميزة تلبي احتياجات وتوقعات عملائنا في الرياض والمناطق
            المجاورة.
          </p>
        </div>
        <div className="videos-section">
          <div className="video-carousel">
            <button className="arrow left-arrow" onClick={handlePrev}>
              &#8249;
            </button>
            <video
              width="560"
              height="315"
              controls
              src={videos[currentVideoIndex]}
              className="video-player"
            ></video>
            <button className="arrow right-arrow" onClick={handleNext}>
              &#8250;
            </button>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="services-header">
          <h1>خدمات الجودة لدينا</h1>
        </div>
        <div className="services-list">
          <TilePolishing />
          <MarblePolishing />
          <CeramicPolishing />
          <PorcelainPolishing />
        </div>
      </div>
      <Footer />
      <a
        href="https://wa.me/966509512329" // Replace with your WhatsApp number
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src= {whatsappIcon}// Replace with your WhatsApp icon path
          alt="WhatsApp"
        />
      </a>
    </div>
  );
}
