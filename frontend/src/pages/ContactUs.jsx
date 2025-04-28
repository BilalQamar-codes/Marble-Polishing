import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/ContactUs.css"; // Import the CSS file for styling

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-us">
        <h1 className="contact-title">تفاصيل الاتصال</h1>
        <div className="contact-container">
          <div className="contact-info">
            <p><strong>العنوان:</strong> الرياض، المملكة العربية السعودية</p>
            <p><strong>رقم الهاتف المحمول:</strong> +960 597 272 164</p>
            <p><strong>البريد الإلكتروني:</strong> info@riyadhmarblepolishing.com</p>
          </div>
          <div className="contact-map">
            <iframe
              title="خريطة جوجل"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.560994234548!2d46.67529531500364!3d24.71355108411764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f038f5c5b6f4f%3A0x3e2f038f5c5b6f4f!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;