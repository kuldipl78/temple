import React from 'react';
import './index.css';
import Navbar from "../Navbar"
import Footer from "../Footer"
import { LanguageContext } from "../../Context/LanguageContext";
import Work from '../work';

import { useContext } from "react";


const MassMarriage = () => {
const { language } = useContext(LanguageContext);

  return (
    <>
      <Navbar/>
      <div className="service-container fade-in">
        <Work/>
        <h2>{language === 'en' ? 'Mass Marriage' : 'ಸಾಮೂಹಿಕ ವಿವಾಹ'}</h2>
        
        <p>
          {language === 'en'
            ? 'A wedding ceremony in which many couples get married at the same time. Often organized by charitable trusts or communities to help reduce the financial burden on underprivileged families.'
            : 'ಒಂದೇ ಸಮಯದಲ್ಲಿ ಅನೇಕ ದಂಪತಿಗಳು ಮದುವೆಯಾದರು. ಈ ರೀತಿಯ ಕಾರ್ಯಕ್ರಮಗಳು ಸಾಮಾನ್ಯವಾಗಿ ದಾನಶೀಲ ಸಂಸ್ಥೆಗಳು ಅಥವಾ ಸಮುದಾಯಗಳ ಮೂಲಕ ಆಯೋಜಿಸಲಾಗುತ್ತವೆ, ಇಲ್ಲದ ಕುಟುಂಬಗಳ ಆರ್ಥಿಕ ಭಾರವನ್ನು ಕಡಿಮೆ ಮಾಡುವುದು ಇದರ ಉದ್ದೇಶ.'}
        </p>
        <div className="marriage-container">
          <header className="marriage-header">
            <h1>💍 Madiwaleshwar Mass Marriage Ceremony</h1>
            <p>Uniting hearts, celebrating togetherness — the tradition of simple and sacred marriages.</p>
          </header>

          <section className="marriage-intro">
            <img
              src="/marrage/img1.png"
              alt="Mass Marriage Ceremony"
            />
            <div className="intro-text">
              <h2>What is Mass Marriage?</h2>
              <p>
                Mass marriages are organized by Madiwaleshwar Temple to support families with limited means.
                Dozens of couples are joined in sacred union in a single event, with full rituals, blessings,
                and community support — all free of cost.
              </p>
            </div>
          </section>

          <section className="eligibility-section">
            <h2>👥 Eligibility Criteria</h2>
            <ul>
              <li>Both bride and groom must be above legal marriage age (18 for bride, 21 for groom)</li>
              <li>Documents: Aadhaar Card, Birth Certificate, Passport Photo</li>
              <li>One family member must be present for both bride and groom</li>
              <li>Marriage is open to all communities and castes</li>
            </ul>
          </section>

          <section className="benefits-section">
            <h2>🎁 Benefits Provided</h2>
            <div className="benefits-grid">
              <div className="benefit-card">💒 Free Mandap & Rituals</div>
              <div className="benefit-card">👗 Wedding Attire for Couple</div>
              <div className="benefit-card">🍛 Community Feast</div>
              <div className="benefit-card">🎁 Gifts & Essentials Kit</div>
            </div>
          </section>

          
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default MassMarriage;