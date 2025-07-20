import React from 'react';
import './index.css';
import Navbar from "../Navbar"
import Footer from "../Footer"
import { LanguageContext } from "../../Context/LanguageContext";
import { useContext } from "react";
import Work from '../work';
import { useNavigate } from 'react-router-dom';



const KurshiUdyog = () => {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/donation');
  };
  return (
    <>
      <Navbar/>
      <div className="service-container fade-in">
        <Work/>
        <h2>{language === 'en' ? 'Kurshi Udyog (Agro Industry)' : 'ಕೃಷಿ ಉದ್ಯೋಗ'}</h2>
        
        <p>
          {language === 'en'
            ? 'Refers to industries that use agricultural products as raw materials, such as food processing, dairy, organic fertilizers, etc.'
            : 'ಅನ್ನ ಪ್ರಕ್ರಿಯೆ, ಹಾಲು ಉತ್ಪಾದನೆ, ಸಸ್ಯೋತ್ಪತ್ತಿ ಇತ್ಯಾದಿಗಳಂತಹ ಕೃಷಿ ಉತ್ಪನ್ನಗಳನ್ನು ಆಧಾರವಾಗಿಟ್ಟುಕೊಂಡಿರುವ ಉದ್ಯಮಗಳು.'}
        </p>
          <div className="kurshi-container">
            <header className="kurshi-header">
              <h1>🌾 Welcome to Madiwaleshwar Kurshi Udyog</h1>
              <p>Empowering farmers through innovation, sustainability, and tradition.</p>
            </header>

            <section className="intro-section">
              <img
                src="/krashi/img1.png"
                alt="Farm equipment"
                className="intro-image"
              />
              <div className="intro-text">
                <h2>About Kurshi Udyog</h2>
                <p>
                  Kurshi Udyog is a movement to revolutionize traditional farming with modern
                  agricultural practices, equipment, and sustainable methods. We aim to improve
                  farmer income, reduce environmental impact, and support food security.
                </p>
              </div>
            </section>

            <section className="crop-section">
              <h2>Main Crops We Cultivate</h2>
              <div className="crop-grid">
                <div className="crop-card">
                  <img src="/krashi/img2.png" alt="Rice" />
                  <h3>Rice</h3>
                  <p>High-yield varieties with improved irrigation systems.</p>
                </div>
                <div className="crop-card">
                  <img src="/krashi/img3.png" alt="Chickpeas" />
                  <h3>Chickpeas</h3>
                  <p>Protein-rich pulses grown using organic fertilizers.</p>
                </div>
                <div className="crop-card">
                  <img src="/krashi/img4.png" alt="Mustard" />
                  <h3>Mustard</h3>
                  <p>Used for oil extraction and soil enrichment.</p>
                </div>
              </div>
            </section>

            <section className="tips-section">
              <h2>Daily Farming Tips</h2>
              <ul>
                <li>🚜 Rotate crops to maintain soil health</li>
                <li>💧 Use drip irrigation to save water</li>
                <li>🌿 Apply neem-based bio-pesticides</li>
                <li>📊 Track weather forecasts for better planning</li>
                <li>🌾 Sow seeds at proper depth and spacing</li>
              </ul>
            </section>

            <section className="features-section">
              <h2>Key Highlights</h2>
              <div className="features">
                <div className="feature-card">🌱 Organic Farming</div>
                <div className="feature-card">💼 Farmer Training Camps</div>
                <div className="feature-card">🌾 Farm-to-Consumer Model</div>
                <div className="feature-card">📈 Smart Farming Tech</div>
              </div>
            </section>

            <section className="cta-section">
              <h2>Support Local Agriculture</h2>
              <button className="cta-button" onClick={handleClick}>Join / Contribute Now</button>
            </section>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default KurshiUdyog;