import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { Link } from "react-router-dom";

const Carousel = () => {
  const images = [
    "https://res.cloudinary.com/dbc02mn7z/image/upload/q_auto,f_auto,w_1024/v1737913892/IMG_3851_oocsey.jpg",
    "https://res.cloudinary.com/dbc02mn7z/image/upload/q_auto,f_auto,w_1024/v1737914249/_MG_1175_ab7eda.jpg",
    "https://res.cloudinary.com/dbc02mn7z/image/upload/q_auto,f_auto,w_1024/v1737913884/Firefly_Inpaint_20230805233255_kaa6ik.png",
    "https://res.cloudinary.com/dbc02mn7z/image/upload/q_auto,f_auto,w_1024/v1737913881/IMG_4834_ujg6l7.jpg",
    "https://res.cloudinary.com/dbc02mn7z/image/upload/q_auto,f_auto,w_1024/v1737913872/IMG_2462_t3tmju.jpg",
    "https://res.cloudinary.com/dbc02mn7z/image/upload/q_auto,f_auto,w_1024/v1737913869/IMG_1366_fdxajh.jpg",
    "https://res.cloudinary.com/dbc02mn7z/image/upload/q_auto,f_auto,w_1024/v1737913866/IMG_0749_ms8tyi.jpg",
    "https://res.cloudinary.com/dbc02mn7z/image/upload/q_auto,f_auto,w_1024/v1735510838/IMG_0984_kpglis.jpg",
    "https://res.cloudinary.com/dbc02mn7z/image/upload/q_auto,f_auto,w_1024/v1737914250/%E1%83%A4%E1%83%9D%E1%83%A2%E1%83%9D_15_%E1%83%AC%E1%83%A3%E1%83%97%E1%83%981_bgihyv.jpg",
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
        <h1>
          {renderTextWithHoverEffect(
            "im momentisTvis, romelic gvinda samudamod davimaxsovroT!"
          )}
        </h1>
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
