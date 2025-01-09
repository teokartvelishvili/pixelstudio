import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import cardsData from "../../Data/CardsData";
import "./CardDetails.css";

const CardDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const cardIndex = cardsData.findIndex((item) => item.id === id);
  const card = cardsData[cardIndex];

  if (!card) return <p>Card not found</p>;

  const handleNext = () => {
    const nextIndex = (cardIndex + 1) % cardsData.length;
    navigate(`/gallery/${cardsData[nextIndex].id}`);
  };

  const handlePrev = () => {
    const prevIndex = (cardIndex - 1 + cardsData.length) % cardsData.length;
    navigate(`/gallery/${cardsData[prevIndex].id}`);
  };

  return (
    <div className="card-details">
      <h1>{card.category}</h1>
      <div className="photo-gallery">
        {card.photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            loading="lazy"
            alt={`Gallery ${index}`}
            onError={(e) => (e.target.src = "/path/to/default-image.jpg")}
          />
        ))}
      </div>
      <div className="navigation-buttons">
        <button className="prev-button" onClick={handlePrev}>
          {/* <img
            src="/path/to/prev-arrow.png"
            alt="Previous"
            className="arrow-icon"
          /> */}
          {" < "}
          წინა
        </button>
        <button className="next-button" onClick={handleNext}>
          შემდეგი {" > "}
          {/* <img
            src="/path/to/next-arrow.png"
            alt="Next"
            className="arrow-icon"
          /> */}
        </button>
      </div>
    </div>
  );
};

export default CardDetails;
