import './index.css'
import Navbar from "../Navbar"
import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import Footer from "../Footer"

const Events = () => {
    const { language } = useContext(LanguageContext);
    const EnglishContainer = () => {
        return(
            <>
                <div className='english-container-event'>
                    <h1 className='heading-text-event'>Madiwaleswar Mahamath regularly conducts events that bring the community together, celebrating spiritual practices and cultural traditions.</h1>
                    <hr/>
                    <div className='card-event-container'>
                         <div className='main-containerAbout'>
                            
                            <div className='main-container-language'>

                                <div className='images-container'>
                                    <img style={{width : "400px", height: "500px"}} className='im-god-image' alt='god' src='/images/img17.png' />
                                </div>
                                <div className='temple-discription'>
                                    <h1 className='temple-name'> Philosophical Sahitya Conference District Kannada Sahitya Parishad, Kalaburagi.</h1>
                                    <p>
                                        The Conference President Mr.Sh.Br.Dr.Rudramuni Shivacharya
                                    </p>
                                    <p> Location: Kannada Bhavan, Kalaburagi.</p>
                                </div>
                            </div>

                            <div className='main-container-language'>
                                <div className='images-container'>
                                    <img style={{width: "600px"}} className='im-god-image' alt='god' src='/images/img18.png' />
                                </div>
                                <div className='temple-discription'>
                                    <h1 className='temple-name'>Sri Vireshwar Shivayogi 34th Punya Smaranotsava</h1>
                                    <p> Date: 10-07-2023 (Monday) </p>
                                </div>
                            </div>
                            
                            <div className='main-container-language'>
                                <div className='images-container'>
                                    <img style={{height: "500px"}} className='im-god-image' alt='god' src='/images/img19.png' />
                                </div>
                                <div className='temple-discription'>
                                    <h1 className='temple-name'>Padayatra </h1>
                                    <p className='para-desription'>Shri Madiwaleswar Mahamath Sukshektra Kadakola</p>
                                    <p> Date: 16-08-2024 (Friday)</p>
                                </div>
                            </div>

                             <div className='main-container-language'>
                                <div className='images-container'>
                                    <img style={{height: "500px"}} className='im-god-image' alt='god' src='/images/img20.png' />
                                </div>
                                <div className='temple-discription'>
                                    <h1 className='temple-name'>28th Jatra Festival & Rathotsav 2022  </h1>
                                    <p className='para-desription'>Shri Madiwaleswar Mahamath Sukshektra Kadakola</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

     const ContainKannader = () => {
        return(
            <>
                <div className='english-container-event'>
                    <div className='card-event-container'>
                         <div className='main-containerAbout'>
                            
                            <div className='main-container-language'>

                                <div className='images-container'>
                                    <img style={{width : "400px", height: "500px"}} className='im-god-image' alt='god' src='/images/img17.png' />
                                </div>
                                <div className='temple-discription'>
                                    <h1 className='temple-name'> ತಾತ್ವಿಕ ಸಾಹಿತ್ಯ ಸಮ್ಮೇಳನ. </h1>
                                    <p>
                                        The Conference President Mr.Sh.Br.Dr.Rudramuni Shivacharya
                                    </p>
                                    <p> Location: Kannada Bhavan, Kalaburagi.</p>
                                </div>
                            </div>

                            <div className='main-container-language'>
                                <div className='images-container'>
                                    <img style={{width: "600px"}} className='im-god-image' alt='god' src='/images/img18.png' />
                                </div>
                                <div className='temple-discription'>
                                    <h1 className='temple-name'>ಶ್ರೀ ವೀರೇಶ್ವರ ಶಿವಯೋಗಿ 34ನೇ ಪುಣ್ಯ ಸ್ಮರಣೋತ್ಸವ</h1>
                                    <p> Date: 10-07-2023 (Monday) </p>
                                </div>
                            </div>
                            
                            <div className='main-container-language'>
                                <div className='images-container'>
                                    <img style={{height: "500px"}} className='im-god-image' alt='god' src='/images/img19.png' />
                                </div>
                                <div className='temple-discription'>
                                    <h1 className='temple-name'>ಪಾದಯಾತ್ರೆ </h1>
                                    <p className='para-desription'>Shri Madiwaleswar Mahamath Sukshektra Kadakola</p>
                                    <p> Date: 16-08-2024 (Friday)</p>
                                </div>
                            </div>

                             <div className='main-container-language'>
                                <div className='images-container'>
                                    <img style={{height: "500px"}} className='im-god-image' alt='god' src='/images/img20.png' />
                                </div>
                                <div className='temple-discription'>
                                    <h1 className='temple-name'>28ನೇ ಜಾತ್ರಾ ಮಹೋತ್ಸವ ಮತ್ತು ರಥೋತ್ಸವ 2022</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return(
        <>
            <Navbar/>
            <div className='heading-container fade-in'>
                <h1>{language === 'en' ? 'Events' : ''}</h1>
            </div>
            <div className='gallery-image-container fade-in'>
                {language === "en" ? EnglishContainer() : ContainKannader() }
            </div>
            <Footer/>
        </>
    )
}

export default Events