import { useRef } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./index.css";

// 7 unique images only
const images = [
  "/images/img1.png",
  "/images/img2.png",
  "/images/img3.png",
  "/images/img4.png",
  "/images/img5.png",
  "/images/img6.png",
  "/images/img7.png"
];

const Home = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300;
    }
  };

  return (
    <>
      <Navbar />
      <div className="carousel-container">
        <button className="carousel-btn left" onClick={scrollLeft}>❮</button>

        <div className="scroll-wrapper" ref={scrollRef}>
          <div className="scroll-content">
            {images.map((src, index) => (
              <div className="image-wrapper" key={index}>
                <img src={src} alt={`img-${index + 1}`} className="carousel-img" />
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-btn right" onClick={scrollRight}>❯</button>
      </div>
      <Footer />
    </>
  );
};

export default Home;
