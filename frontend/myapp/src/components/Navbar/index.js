import { useState, useContext } from "react";
import "./index.css";
import { LanguageContext } from "../../Context/LanguageContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { switchLanguage, language } = useContext(LanguageContext);
   const navEnglishNavLinks = () =>{
    return(
      <>
      <nav className={`navbar-links ${isOpen ? "open" : ""}`}>
          <a className="anchore-element" href="/">Home</a>
          <a className="anchore-element" href="/aboutUs">About Us</a>
          <a className="anchore-element" href="/gallery">Gallery</a>
          <a className="anchore-element" href="/news">News & Meadia</a>
          <a className="anchore-element" href="/socialwork">Social Work</a>
          <a className="anchore-element" href="/events">Events</a>
          <a className="anchore-element" href="/donation">Donation</a>
          <a className="anchore-element" href="/contactUs">Contact Us</a>

        </nav>
    </>
    )
  }
    const navkannadNavLInks = ()=>{
    return(
      <>
        <nav className={`navbar-links ${isOpen ? "open" : ""}`}>
          <a className="anchore-element" href="/">ಮನೆ</a>
          <a className="anchore-element" href="/aboutUs">ನಮ್ಮ ಬಗ್ಗೆ</a>
          <a className="anchore-element" href="/gallery">ಗ್ಯಾಲರಿ</a>
          <a className="anchore-element" href="/news">ಸುದ್ದಿ ಮತ್ತು ಮಾಧ್ಯಮ</a>
          <a className="anchore-element" href="/socialwork">ಸಮಾಜ ಕಾರ್ಯ</a>
          <a className="anchore-element" href="/events">ಘಟನೆಗಳು</a>
          <a className="anchore-element" href="/donation">ದಾನ</a>
          <a className="anchore-element" href="/contactUs">ಸಂಪರ್ಕಿಸಿ</a>

        </nav>
      </>
    )
  }

  return (
    <header className="navbar fade-in">
      
      <div className="navbar-container">
        
        <div className="navbar-logo-title">
          <img
            src="/images/logo.png"
            alt="logo"
            className="logo"
          />
          <div className="buttons-language">
            <button className="language-btn" onClick={() => switchLanguage("en")}>English</button>
            <button className="language-btn" onClick={() => switchLanguage("kn")}>ಕನ್ನಡ</button>
          </div>
          <h1 className="title">SHREE MADIWALESHWAR MAHAMATH</h1>
        </div>

        {/* Toggle Button */}
        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* Nav Links */}
        {language === "en"? navEnglishNavLinks(): navkannadNavLInks()}
      </div>
    </header>
  );
}

export default Navbar;
