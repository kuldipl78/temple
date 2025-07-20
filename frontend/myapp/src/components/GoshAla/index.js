import React from 'react';
import './index.css';
import Navbar from "../Navbar"
import Footer from "../Footer"
import { LanguageContext } from "../../Context/LanguageContext";
import Work from '../work';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";


const GoshAla = () => {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/contactUs');
  };

  return (
    <>
      <Navbar/>
      <div className="service-container fade-in">
        <Work/>
        <h2>{language === 'en' ? 'Gosh Ala (Cow Shelter)' : 'ಗೋಶಾಲೆ (ಹಸುಗಳ ಆಶ್ರಯ)'}</h2>
        <p>
          {language === 'en'
            ? 'A shelter or sanctuary for cows. It is a place where cows, especially old or abandoned ones, are taken care of. Common in India as part of animal welfare and religious practice in Hinduism.'
            : 'ಹಸುಗಳಿಗೆ ಆಶ್ರಯ ನೀಡುವ ಸ್ಥಳ. ವಿಶೇಷವಾಗಿ ಹಳೆಯ ಅಥವಾ ನಿರ್ಜನಗೊಂಡ ಹಸುಗಳ যতೋಚನೆ ಇಲ್ಲಿ ಮಾಡಲಾಗುತ್ತದೆ. ಭಾರತದ ಧಾರ್ಮಿಕ ಆಚರಣೆ ಮತ್ತು ಪ್ರಾಣಿ ಕಲ್ಯಾಣದ ಭಾಗವಾಗಿ ಇದು ಸಾಮಾನ್ಯವಾಗಿದೆ.'}
        </p>
        <div className="goshala-container">
          <header className="goshala-header">
            <h1>🐄 Welcome to Madiwaleshwar Goshala</h1>
            <p>A sacred place dedicated to the care, protection, and welfare of cows.</p>
          </header>

          <section className="intro-section">
            <img
              src="/shala/gay.png"
              alt="Cows at shelter"
              className="intro-image"
            />
            <div className="intro-text">
              <h2>What is a Goshala?</h2>
              <p>
                A Goshala (cow shelter) is a protective shelter for cows in India. These shelters
                provide care for old, abandoned, or injured cows and serve as a spiritual center 
                for promoting cow worship and organic practices like dung compost and milk products.
              </p>
            </div>
          </section>

          <section className="breeds-section">
            <h2>Native Cow Breeds We Protect</h2>
            <div className="breeds">
              <div className="breed-card">
                <img src="/shala/img1.png" alt="Gir Cow" />
                <h3>Gir</h3>
                <p>Known for high-quality A2 milk and strong immunity.</p>
              </div>
              <div className="breed-card">
                <img src="/shala/img2.png" alt="Sahiwal Cow" />
                <h3>Sahiwal</h3>
                <p>One of the best dairy breeds with heat tolerance.</p>
              </div>
              
            </div>
          </section>

          <section className="tips-section">
            <h2>Daily Cow Care Tips</h2>
            <ul>
              <li>🍼 Feed cows with green fodder and Ayurvedic supplements</li>
              <li>💧 Provide clean drinking water 24/7</li>
              <li>🧼 Keep sheds clean and dry to prevent infections</li>
              <li>🐮 Massage cows regularly to keep them calm and healthy</li>
              <li>🌿 Use cow dung and urine in organic fertilizers and medicines</li>
            </ul>
          </section>

          <section className="features-section">
            <h2>Why Support Our Goshala?</h2>
            <div className="features">
              <div className="feature-card">❤️ Save Abandoned Cows</div>
              <div className="feature-card">🌿 Promote Organic Living</div>
              <div className="feature-card">🙏 Spiritual Upliftment</div>
              <div className="feature-card">🤝 Volunteer & Serve</div>
            </div>
          </section>

          <section className="cta-section">
            <h2>Join Our Mission to Protect Cows</h2>
            <button className="cta-button" onClick={handleClick}>
              ContactUs
            </button>
          </section>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default GoshAla;