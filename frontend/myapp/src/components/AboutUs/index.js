import './index.css'
import Navbar from "../Navbar";
import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import Footer from "../Footer"

const AboutUs = () => {
    const { language } = useContext(LanguageContext);
    const AboutUseEnglishContainer = () => {
        return(
            <>
                <div className='main-containerAbout'>
                    <div className='main-container-language'>
                        <div className='images-container'>
                            <img className='img-god-image' alt='god' src='/images/img1.png' />
                        </div>
                        <div className='temple-discription'>
                            <h1 className='temple-name'>Shree Kadakol Madiwaleshwara</h1>
                            <p className='para-desription'>Sri Madiwaleswara Mahamath Sukshetra Kadakola</p>
                            <p>
                                Full Name: <span className='span-text'>Kadakolada Madiwaleswar</span>
                            </p>
                            <p>Pen Name(Vachana Signature):Nirupama Niraala Matprabhu Mahantayogi.
                                Madiwaleswar (17th century, post-Basava age) is well-known as Kadakolada Madiwaleswar. The birth place is Bidnur village located in Afzalpur Taluka of Gulbarga district. Madiwaleswar worked in Kadakol and later on took the Samadhi alive in Kadakol. <br/>

                                A 17th-century poet who wrote hundreds of tautly structured and well-grounded Tattvapaadas, he is known for his simple and direct expression of the idea that salvation can be achieved in this life.<br/>
                                Tattvapaadas <br/>
                                Kadakola Madiwaleswar's work is known for its Tattvapaadas, which are poems that express a variety of ideas, including the importance of the Tattvapaadas of Basavanna, the need to protest against the power of the state and religious authorities, and the idea that salvation can be achieved.</p>
                        </div>
                    </div>

                    <div className='main-container-language'>
                        <div className='images-container'>
                            <img className='img-god-image' alt='god' src='/images/img2.png' />
                        </div>
                        <div className='temple-discription'>
                            <h1 className='temple-name'>Parama Poojya Sri Li.Vireswara Shivayogigalu Maha Pavavd Shivayogi</h1>
                            <p className='para-desription'>Sri madiwaleswara mahamath sukshetra kadakola</p>
                            <p> worked for social work and Maha matha  Development.</p>
                        </div>
                    </div>
                    <div className='main-container-language'>
                        <div className='images-container'>
                            <img className='img-god-image' alt='god' src='/images/img3.png' />
                        </div>
                        <div className='temple-discription'>
                            <h1 className='temple-name'>Shri Sh. Br. Dr. Rudramuni Shivacharya Maha Swamigalu </h1>
                            <p className='para-desription'>Sri Madiwaleswar Mahamath Sukshetra Kadakola</p>
                            <p>
​​                              Shree. Dr. Rudramuni Shivarcharya is now working for social work and Mahamatha  Development. Schools and Colleges are running under Madiwaleswar Math . Madiwaleswar Kalyan Mantapa is running under Madiwaleswar Math Organization.</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const AboutUseKannadaContainer = () => {
        return(
            <>
                <div className='main-containerAbout'>
                    <div className='main-container-language'>
                        <div className='images-container'>
                            <img className='img-god-image' alt='god' src='/images/img1.png' />
                        </div>
                        <div className='temple-discription'>
                            <h1 className='temple-name'>ಶ್ರೀ ಕಡಕೋಳ ಮಡಿವಾಳೇಶ್ವರ</h1>
                            <p className='para-desription'>Sri Madiwaleswara Mahamath Sukshetra Kadakola <br/> ಶ್ರೀ ಮಡಿವಾಳೇಶ್ವರ ಮಹಾಮಠ ಸುಕ್ಷೇತ್ರ ಕಡಕೋಳ</p>
                            <p>
                               ಪೂರ್ಣ ಹೆಸರು: <span className='span-text'>ಕಡಕೊಳದ ಮಡಿವಾಳೇಶ್ವರ</span> <br/> ಲೇಖನಿಯ ಹೆಸರು (ವಚನ ಸಹಿ): <span className='span-text'>ನಿರುಪಮಾ ನಿರಾಳ ಮತ್ಪ್ರಭು ಮಹಾಂತಯೋಗಿ.</span>
                            </p>
                            <p>ಮಡಿವಾಳೇಶ್ವರ (17ನೇ ಶತಮಾನ, ಬಸವ ನಂತರದ ಯುಗ) ಕಡಕೋಳದ ಮಡಿವಾಳೇಶ್ವರ ಎಂದು ಪ್ರಸಿದ್ಧವಾಗಿದೆ. ಹುಟ್ಟೂರು ಗುಲ್ಬರ್ಗ ಜಿಲ್ಲೆಯ ಅಫಜಲಪುರ ತಾಲೂಕಿನ ಬಿದ್ನೂರು ಗ್ರಾಮ. ಮಡಿವಾಳೇಶ್ವರರು ಕಡಕೋಲ್‌ನಲ್ಲಿ ಕೆಲಸ ಮಾಡಿದರು ಮತ್ತು ನಂತರ ಕಡಕೋಲ್‌ನಲ್ಲಿ ಸಮಾಧಿಯನ್ನು ಜೀವಂತವಾಗಿ ತೆಗೆದುಕೊಂಡರು.<br/>
                                17 ನೇ ಶತಮಾನದ ಕವಿ ನೂರಾರು ಬಿಗಿಯಾದ ರಚನಾತ್ಮಕ ಮತ್ತು ಸುಸಜ್ಜಿತ ತತ್ವಪದಗಳನ್ನು ಬರೆದಿದ್ದಾರೆ, ಅವರು ಈ ಜೀವನದಲ್ಲಿ ಮೋಕ್ಷವನ್ನು ಸಾಧಿಸಬಹುದು ಎಂಬ ಕಲ್ಪನೆಯ ಸರಳ ಮತ್ತು ನೇರ ಅಭಿವ್ಯಕ್ತಿಗೆ ಹೆಸರುವಾಸಿಯಾಗಿದ್ದಾರೆ.ತತ್ವಪದಗಳು<br/>
                                ಬಸವಣ್ಣನವರ ತತ್ವಪದಗಳ ಮಹತ್ವ, ಪ್ರಭುತ್ವ, ಧಾರ್ಮಿಕ ಅಧಿಕಾರಗಳ ವಿರುದ್ಧ ಪ್ರತಿಭಟಿಸಬೇಕಾದ ಅಗತ್ಯ, ಮೋಕ್ಷ ಪ್ರಾಪ್ತಿ ಎಂಬ ವಿಚಾರ ಸೇರಿದಂತೆ ನಾನಾ ವಿಚಾರಗಳನ್ನು ಸಾರುವ ಕಾವ್ಯಗಳು ಕಡಕೋಳ ಮಡಿವಾಳೇಶ್ವರರ ಕೃತಿ ತತ್ತ್ವಪದಗಳಿಗೆ ಹೆಸರಾಗಿದೆ. .
                            </p>
                        </div>
                    </div>

                    <div className='main-container-language'>
                        <div className='images-container'>
                            <img className='img-god-image' alt='god' src='/images/img2.png' />
                        </div>
                        <div className='temple-discription'>
                            <h1 className='temple-name'>Parama Poojya Sri Li.Vireswara Shivayogigalu Maha Pavavd Shivayogi</h1>
                            <p className='para-desription'>Sri madiwaleswara mahamath sukshetra kadakola</p>
                            <p> worked for social work and Maha matha  Development.</p>
                        </div>
                    </div>
                    <div className='main-container-language'>
                        <div className='images-container'>
                            <img className='img-god-image' alt='god' src='/images/img3.png' />
                        </div>
                        <div className='temple-discription'>
                            <h1 className='temple-name'>Shri Sh. Br. Dr. Rudramuni Shivacharya Maha Swamigalu </h1>
                            <p className='para-desription'>Sri Madiwaleswar Mahamath Sukshetra Kadakola</p>
                            <p> ಶ್ರೀ. ಡಾ.ರುದ್ರಮುನಿ ಶಿವಾಚಾರ್ಯರು ಈಗ ಸಮಾಜಸೇವೆ ಹಾಗೂ ಮಹಾಮಠದ ಅಭಿವೃದ್ಧಿಗಾಗಿ ಶ್ರಮಿಸುತ್ತಿದ್ದಾರೆ. ಮಡಿವಾಳೇಶ್ವರ ಮಠದ ಅಡಿಯಲ್ಲಿ ಶಾಲಾ ಕಾಲೇಜುಗಳು ನಡೆಯುತ್ತಿವೆ. ಮಡಿವಾಳೇಶ್ವರ ಮಠ ಸಂಸ್ಥೆಯ ಅಡಿಯಲ್ಲಿ ಮಡಿವಾಳೇಶ್ವರ ಕಲ್ಯಾಣ ಮಂಟಪ ನಡೆಯುತ್ತಿದೆ</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return(
        <>
            <Navbar/>
            <div className='heading-container'>
                <h1>{language === 'en' ? 'About Us' : 'ನಮ್ಮ ಬಗ್ಗೆ'}</h1>
            </div>
            {language === "en"? AboutUseEnglishContainer(): AboutUseKannadaContainer()}
            <Footer/>
            
            
        </>
    )
}

export default AboutUs