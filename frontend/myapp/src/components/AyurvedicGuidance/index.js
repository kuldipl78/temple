import React from 'react';
import './index.css';
import Navbar from "../Navbar"
import Footer from "../Footer"
import { LanguageContext } from "../../Context/LanguageContext";
import Work from '../work';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";

const AyurvedicGuidance = () => {
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
      <h2>{language === 'en' ? 'Ayurvedic Guidance' : 'ಆಯುರ್ವೇದ ಮಾರ್ಗದರ್ಶನ'}</h2>
      <p>
        {language === 'en'
          ? 'Health advice based on Ayurveda (ancient Indian system of medicine), including natural treatments, diet, lifestyle, and herbal remedies to maintain health or treat diseases.'
          : 'ಆಯುರ್ವೇದದ ಆಧಾರದ ಮೇಲೆ ಆರೋಗ್ಯ ಸಲಹೆಗಳು — ಇದರಲ್ಲಿ ನೈಸರ್ಗಿಕ ಚಿಕಿತ್ಸೆ, ಆಹಾರ ಕ್ರಮ, ಜೀವನಶೈಲಿ ಮತ್ತು ಔಷಧೀಯ ಗಿಡಗಳ ಉಪಯೋಗ ಸೇರಿವೆ, ಆರೋಗ್ಯ ಕಾಪಾಡಲು ಅಥವಾ ರೋಗಗಳನ್ನು ಚಿಕಿತ್ಸೆ ನೀಡಲು ಸಹಾಯವಾಗುತ್ತದೆ.'}
      </p>
      <div className="ayurveda-container">
        <header className="ayurveda-header">
          <h1>🌿 Ayurvedic Guidance for Holistic Living</h1>
          <p>Discover the power of Ayurveda to balance your mind, body, and soul.</p>
        </header>

        <section className="intro-section">
          <img
            src="/images/nature.png"
            alt="Ayurvedic herbs"
            className="intro-image"
          />
          <div className="intro-text">
            <h2>What is Ayurveda?</h2>
            <p>
              Ayurveda is a 5,000-year-old system of natural healing that originated in India.
              It emphasizes balance in bodily systems using diet, herbal treatment, and yogic breathing.
            </p>
          </div>
        </section>

        <section className="doshas-section">
          <h2>Know Your Dosha</h2>
          <div className="doshas">
            <div className="dosha-card">
              <img src="/images/yoga.png" alt="Vata" />
              <h3>Vata</h3>
              <p>Energy of movement – associated with air and space. Imbalanced Vata leads to anxiety, dry skin, etc.</p>
            </div>
            <div className="dosha-card">
              <img src="/images/energy.png" alt="energy" />
              <h3>Pitta</h3>
              <p>Energy of digestion – associated with fire and water. Imbalanced Pitta may cause anger, ulcers, etc.</p>
            </div>
            <div className="dosha-card">
              <img src="/images/earth.png" alt="earth" />
              <h3>Kapha</h3>
              <p>Energy of lubrication – associated with earth and water. Imbalance leads to weight gain, congestion, etc.</p>
            </div>
          </div>
        </section>

        <section className="tips-section">
          <h2>Daily Ayurvedic Tips</h2>
          <ul>
            <li>🌞 Start your day with warm lemon water</li>
            <li>🧘 Practice 15 mins of meditation or yoga</li>
            <li>🥗 Eat freshly cooked, seasonal meals</li>
            <li>🛁 Use oil massage (Abhyanga) before shower</li>
            <li>🌿 Include turmeric, ginger, and cumin in diet</li>
          </ul>
        </section>

        <section className="features-section">
          <h2>Why Follow Ayurvedic Lifestyle?</h2>
          <div className="features">
            <div className="feature-card">✅ Boosts Immunity</div>
            <div className="feature-card">✅ Reduces Stress</div>
            <div className="feature-card">✅ Natural Detox</div>
            <div className="feature-card">✅ Improves Digestion</div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Book a Personalized Ayurvedic Consultation</h2>
          <button className="cta-button" onClick={handleClick}>Get Guidance Now</button>
        </section>
      </div>
    
      
      </div>
    <Footer/>
    </>
  )
}

    

export default AyurvedicGuidance;