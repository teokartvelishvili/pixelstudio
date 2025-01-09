import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { Link } from "react-router-dom";

const Carousel = () => {
  const images = [
    "https://scontent.ftbs5-2.fna.fbcdn.net/v/t1.6435-9/44921217_1105434466281653_7349247719916961792_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=Ht3l3Tb25E8Q7kNvgG3bRBs&_nc_zt=23&_nc_ht=scontent.ftbs5-2.fna&_nc_gid=AK8MfKAFKxbsckL6eNxutVR&oh=00_AYC832dkATlknlDAbhXVRlZKg0tBi4QG05JdxIpMYkcvTw&oe=679F7DD4",
    "https://scontent.ftbs5-2.fna.fbcdn.net/v/t39.30808-6/470218949_1028234339345236_7499941248697845531_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vDBDoinzZxIQ7kNvgEyzPyy&_nc_zt=23&_nc_ht=scontent.ftbs5-2.fna&_nc_gid=A4TujICaoKxTUp5VAu-ZE-D&oh=00_AYC7eb2FTFj-WBLH3HVakzsl-vwdzVWHJMVsOriISyNn_A&oe=677DF31B",
    "https://scontent.ftbs5-2.fna.fbcdn.net/v/t1.6435-9/33808791_984082425083525_360469604356587520_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=WjiQIr_Zm-kQ7kNvgGMi8cb&_nc_zt=23&_nc_ht=scontent.ftbs5-2.fna&_nc_gid=A8t1nJ49sLNHbvSyGRVVZQU&oh=00_AYBbkwfByiyffKPQstfrFWhP8wNHCz_okX7A0ZtcLB4-og&oe=679F6EDA",
    "https://scontent.ftbs5-3.fna.fbcdn.net/v/t39.30808-6/470124565_1026134786221858_3814634485070654587_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dk5NZ7Z6GEQQ7kNvgHXyP8s&_nc_zt=23&_nc_ht=scontent.ftbs5-3.fna&_nc_gid=AHiP98MoMza37eFELXwgD4d&oh=00_AYCAuPponyA24RyubA0XkpE67eG7Tp3f_5IJDL9yAIEqLw&oe=677DE766",
    "https://scontent.ftbs5-3.fna.fbcdn.net/v/t1.6435-9/29260999_945961628895605_4591102546575097856_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=8SjaVSo_ds0Q7kNvgH2VJPu&_nc_zt=23&_nc_ht=scontent.ftbs5-3.fna&_nc_gid=Anw4aBk4Fxnc4hmFSuJgQEJ&oh=00_AYBwSkrHPIQunQGEp4sjkYE2NqmjGMNSOWbRP_xxDpioSw&oe=679F942A",
    "https://scontent.ftbs5-3.fna.fbcdn.net/v/t39.30808-6/440594417_841967901305215_3509032756961598585_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3sGLelcMVBAQ7kNvgHuYBr3&_nc_zt=23&_nc_ht=scontent.ftbs5-3.fna&_nc_gid=AkqKzJqoJKOamPL0bT7HQ8U&oh=00_AYBwxun3ZfVnk5VboclOchjdXrTFlQyUUSlIrJTIWbnO3A&oe=677DF9BE",
    "https://scontent.ftbs5-2.fna.fbcdn.net/v/t39.30808-6/464047093_2844561932368889_8356409811858317130_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=nSlLOUZ24EcQ7kNvgF3oVNW&_nc_zt=23&_nc_ht=scontent.ftbs5-2.fna&_nc_gid=AM2_p3e1JILrVlgwnmq4tTI&oh=00_AYBBINWqDVExYiHy_hvbnzpBKTJ_Rx1OJiC3cgQ0aoitug&oe=677DD0D0",
    "https://scontent.ftbs5-4.fna.fbcdn.net/v/t39.30808-6/433902689_821404416694897_3078200177428263904_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XfoFA-bv7UoQ7kNvgFUHcWh&_nc_zt=23&_nc_ht=scontent.ftbs5-4.fna&_nc_gid=ABL5Jp-AGZ0e9EC6xfrMtDU&oh=00_AYCVlkxqrvph1TnO9h6_4IRihHgaDrtFrVHdoZzYgLUPkQ&oe=677E10D5",
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

  return (
    <div className="carousel">
      <div className="homeMainText">
        <h1>
          im momentisTvis, romelic gvinda samudamod davimaxsovoT!
        </h1>
        <Link to="/about" className="slide-link">
          გაიგე მეტი Pixel Studio-ს შესახებ →
        </Link>
      </div>
      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
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
