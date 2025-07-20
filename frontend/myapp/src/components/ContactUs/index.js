import './index.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { LanguageContext } from "../../Context/LanguageContext";
import { useContext } from "react";

const ContactUs = () => {
    const { language } = useContext(LanguageContext);

    return (
        <>
            <Navbar />
            <div className='heading-container fade-in'>
                <h1>{language === 'en' ? 'Contact Us' : 'ಸಂಪರ್ಕಿಸಿ'}</h1>
            </div>

            <div className='contact-details-container fade-in'>
                <p className='contact-text'>
                    {language === 'en'
                        ? 'For any inquiries, donations, or event-related information, feel free to contact us at the numbers below or visit our location.'
                        : 'ಯಾವುದೇ ವಿಚಾರಣೆಗಳು, ದೇಣಿಗೆಗಳು ಅಥವಾ ಈವೆಂಟ್ ಸಂಬಂಧಿತ ಮಾಹಿತಿಗೆ, ಕೆಳಗಿನ ಸಂಖ್ಯೆಗಳ ಮೂಲಕ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ ಅಥವಾ ನಮ್ಮ ಸ್ಥಳಕ್ಕೆ ಭೇಟಿ ನೀಡಿ.'}
                </p>

                <div className='phone-numbers'>
                    <p><strong>Mob:</strong> 9980792717</p>
                    <p><strong>Mob:</strong> 9590732345</p>
                </div>

                <div className='location-link'>
                    <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Kadkol,%20Karnataka%20585325,%20India"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        📍 Get Directions Madiwaleswar Temple(Karnatka) 585325
                    </a>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ContactUs;
