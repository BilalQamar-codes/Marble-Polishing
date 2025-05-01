import React from "react";
import "./footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h1>اتصل بنا</h1>
        <p className="footer-phone">+966 509 512 329</p>
      </div>
      <div className="footer-middle">
        <div className="footer-column">
          <h3>Marble Polishing Riyadh</h3>
          <p>
            جلي بلاط، تلميع رخام، تنظيف سيراميك وبورسلان، خزانات فلل، شقق، حوش
            كامل، درج، تنظيف، تلميع
          </p>
        </div>
        <div className="footer-column">
          <h3>Our Services</h3>
          <p>
            جلي بلاط
            <br />
            جلي رخام
            <br />
            تلميع بورسلان
            <br />
            تلميع سيراميك
          </p>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>+966 509 512 329</p>
          <p>Email: info@riyadhmarblepolishing.com</p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>Copyright © 2025 جلي بلاط تلميع رخام تنظيف سيراميك وبورسلان</p>
      </div>
    </footer>
  );
};

export default Footer;
