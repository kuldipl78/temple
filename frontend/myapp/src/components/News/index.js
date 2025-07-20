import './index.css'
import Navbar from "../Navbar";
import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import Footer from "../Footer"

const News = () => {
    const { language } = useContext(LanguageContext);
    return(
        <>
            <Navbar/>
            <div className='heading-container'>
                <h1>{language === 'en' ? 'News & Media' : 'ಸುದ್ದಿ ಮತ್ತು ಮಾಧ್ಯಮ'}</h1>
            </div>
            <div className='main-newsContainer'>
                <img alt='new-image' src='https://res.cloudinary.com/dnjnrvy8w/image/upload/v1751887876/Screenshot_2025-07-07_165920_gudcwq.png' />
            </div>
            <Footer/>

        </>
    )
}

export default News