import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { Link } from "react-router-dom";

const Carousel = () => {
  const images = [
    "https://res.cloudinary.com/dbc02mn7z/image/upload/v1735508011/IMG_2906_-_Copy_icdrva.jpg",
    "https://res.cloudinary.com/dbc02mn7z/image/upload/v1735507899/IMG_0412_rpeyyu.jpg",
    "https://res.cloudinary.com/dbc02mn7z/image/upload/v1735509208/Firefly_Inpaint_20230809204546_1_svphnd.jpg",
    "https://res.cloudinary.com/dbc02mn7z/image/upload/v1735508433/viber_image_2021-12-11_10-15-34-343_uopldm.jpg",
    "https://res.cloudinary.com/dbc02mn7z/image/upload/v1735510155/IMG_2183_lzsbjl.jpg",
    "https://res.cloudinary.com/dbc02mn7z/image/upload/v1735510300/IMG_5249_rtebg1.jpg",
    "https://res.cloudinary.com/dbc02mn7z/image/upload/v1735510915/IMG_3851_xd7jhj.jpg",
    "https://res.cloudinary.com/dbc02mn7z/image/upload/v1735510838/IMG_0984_kpglis.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const renderTextWithHoverEffect = (text) => {
    return text.split(" ").map((word, wordIndex) => (
      <span key={wordIndex} style={{ whiteSpace: "nowrap" }}>
        {word.split("").map((char, charIndex) => (
          <span key={`${wordIndex}-${charIndex}`} className="hover-effect">
            {char}
          </span>
        ))}
        &nbsp; {/* სივრცე სიტყვებს შორის */}
      </span>
    ));
  };
  
  return (
    <div className="carousel">
      <div className="homeMainText">
        <h1>{renderTextWithHoverEffect("im momentisTvis, romelic gvinda samudamod davimaxsovroT!")}</h1>
        <div className="slideLinkCont">
          <Link to="/about" className="slide-link">
            გაიგე მეტი Pixel Studio-ს შესახებ →
          </Link>
        </div>
      </div>
      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            loading="lazy"
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? "active" : ""}
          />
        ))}
      </div>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => goToSlide(index)}
            title={`Go to slide ${index + 1}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
