import './index.css'
import Navbar from "../Navbar"
import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import Footer from "../Footer"
import Work from '../work';
import {useNavigate} from "react-router-dom"

const SocialWork = () =>{
    
    const { language } = useContext(LanguageContext);
    const navigate = useNavigate()
    const englishLanguegetext = ()=> {
        return(
            <>
                <div className='SocialWork-Container'>
                    <Work/>
                    <div>
                        <h1 className='headingLanguageText'>Schools and Colleges are running under Madiwaleswar Math. Madiwaleswar Kalyan Mantapa is run under the Madiwaleswar Math Organization. <br /> Medical Camps:-

                            Medical Camps are arranged in the Math Premises for many diseases. Guidance and checkup is provided to all visitors without any charge.

                            <br/> Show your active participation in supporting us. <br/>

                            Thank You.
                        </h1> 

                        <div className='btn-container'>
                            <button className='support-btn' onClick={()=> navigate("/donation")}>Support Us</button>

                        </div>
                    </div>
                </div>
                
            </>
        )
    }
    const kannadtext = () =>{
        return(
            <>
                <div className='SocialWork-Container'>
                    <h1 className='headingLanguageText'>ಸಮಾಜ ಕಾರ್ಯ
                        ಮಡಿವಾಳೇಶ್ವರ ಮಠದ ಅಡಿಯಲ್ಲಿ ಶಾಲಾ ಕಾಲೇಜುಗಳು ನಡೆಯುತ್ತಿವೆ . ಅಡಿಯಲ್ಲಿ ಮಡಿವಾಳೇಶ್ವರ ಕಲ್ಯಾಣ ಮಂಟಪ ನಡೆಯುತ್ತಿದೆ

                        <br/>ಮಡಿವಾಳೇಶ್ವರ ಮಠದ ಸಂಸ್ಥೆ.

                        <br/>ನಮ್ಮನ್ನು ಬೆಂಬಲಿಸುವಲ್ಲಿ ನಿಮ್ಮ ಸಕ್ರಿಯ ಭಾಗವಹಿಸುವಿಕೆಯನ್ನು ತೋರಿಸಿ. ಧನ್ಯವಾದಗಳು.
                    </h1>
                    <div className='btn-container'>
                        <button className='support-btn' onClick={()=> navigate("/donation")}>Support Us</button>

                    </div>
                </div>
                
            </>
        )
    }

    return(
        <>
            <Navbar/>
            <div className='heading-container fade-in'>
                <h1>{language === 'en' ? 'SocialWork' : 'ಸಮಾಜ ಕಾರ್ಯ'}</h1>
            </div>
            <div className='gallery-image-container fade-in'>
                {language === "en" ? englishLanguegetext() : kannadtext() }
            </div>

            <Footer/>
        </>
    )
}

export default SocialWork


