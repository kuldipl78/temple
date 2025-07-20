import './index.css'
import Navbar from "../Navbar"
import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import Footer from "../Footer"

const Gallery = () =>{
    const images = [
        "/images/img1.png",
        "/images/img2.png",
        "/images/img3.png",
        "/images/img4.png",
        "/images/img5.png",
        "/images/img6.png",
        "/images/img7.png",
        
        "/images/img9.png",
        "/images/img10.png",
        "/images/img11.png",
        "/images/img12.png",
        "/images/img13.png",
        "/images/img14.png",
        "/images/img15.png"
    ];
    const { language } = useContext(LanguageContext);
    return(
        <> 
            <Navbar/>
            <div className='heading-container'>
                <h1>{language === 'en' ? 'Gallery' : 'ಗ್ಯಾಲರಿ'}</h1>
            </div>
            <div className='gallery-image-container'>
                {images.map((item, index) => (
                    <img className='images-gallery' key={index} src={item} alt="god" />
                ))}
            </div>
            <Footer/>
        </>
    )
}

export default Gallery