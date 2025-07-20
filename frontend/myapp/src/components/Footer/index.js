
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { LanguageContext } from "../../Context/LanguageContext";
import { useContext } from "react";

import './index.css'
const Footer = () => {
    const { language } = useContext(LanguageContext);

    const FooterEnglishContainer = () => {
        return(
            <>
                <div className="footer-container">
                    <div className="address-container">
                        <h1 className="footer-heading"> Address</h1>
                        <p className="footer-para">Madiwaleswar Math,</p>
                        <p className="footer-para">Tal. Yedrami, Dist.Kalaburagi- 585325,</p>
                        <p className="footer-para">Karnataka,India.  </p>

                    </div>
                    <div className="address-container">
                        <h1 className="footer-heading">Pooja Time</h1>
                        <p className="footer-para">Mon - Fri: 8am - 6pm</p>
                        <p className="footer-para">Saturday: 8am - 6pm</p>
                        <p className="footer-para">Sunday: 8am - 6pm</p>

                    </div>
                    <div className="address-container">
                        <p className="footer-para">Privacy Policy</p>
                        <p className="footer-para">Accessibility Statement</p>
                        <p className="footer-para">Terms & Conditions</p>

                    </div>
                </div>
                <h1 className="company-developed">
                    ©2024 Website Developed by Guru Software Solution, Pune.
                </h1>
            </>
        )
    }

    const FooterTelgueContainer = () => {
        return(
            <>
                <div className="footer-container">
                    <div className="address-container">
                        <h1 className="footer-heading"> ವಿಳಾಸ</h1>
                        <p className="footer-para">ಮಡಿವಾಳೇಶ್ವರ ಮಠ,</p>
                        <p className="footer-para">ತಾಲ್. ಯಡ್ರಾಮಿ, ಜಿಲ್ಲೆ.ಕಲಬುರಗಿ- 585325,</p>
                        <p className="footer-para">ಕರ್ನಾಟಕ, ಭಾರತ. </p>

                    </div>
                    <div className="address-container">
                        <h1 className="footer-heading">ತೆರೆಯುವ ಸಮಯ</h1>
                        <p className="footer-para">ಸೋಮ - ಶುಕ್ರ: 7am - 10pm</p>
                        <p className="footer-para">ಶನಿವಾರ: 8am - 10pm</p>
                        <p className="footer-para">ಭಾನುವಾರ: 10am - 9pm</p>

                    </div>
                    <div className="address-container">
                        <p className="footer-para">ಗೌಪ್ಯತೆ ನೀತಿ</p>
                        <p className="footer-para">ಪ್ರವೇಶಿಸುವಿಕೆ ಹೇಳಿಕೆ</p>
                        <p className="footer-para">ನಿಯಮಗಳು ಮತ್ತು</p>
                        <p className="footer-para">ಷರತ್ತುಗಳು</p>


                    </div>
                </div>
                <h1 className="company-developed">
                    ©2024 ವೆಬ್‌ಸೈಟ್ ಅನ್ನು ಪುಣೆಯ ಗುರು ಸಾಫ್ಟ್‌ವೇರ್ ಪರಿಹಾರದಿಂದ ಅಭಿವೃದ್ಧಿಪಡಿಸಲಾಗಿದೆ.
                </h1>
            </>
        )
    }

    return(
        <>
        <footer className="footer-page fade-in">
            <div className="link-social-meadia">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"> <FaFacebookSquare size={38} color="rgb(67, 134, 198)" /> </a>
                <a href="https://www.youtube.com/channel/UCIp-_-vAXW5fWxz11-If-bg"
                    target="_blank"
                    rel="noopener noreferrer">
                    <IoLogoYoutube size={38} color="red"  />
                </a>
            
            </div>
                {language === "en"? <FooterEnglishContainer/>: <FooterTelgueContainer/>}
            
        
        </footer>
    </>
    )
}

export default Footer