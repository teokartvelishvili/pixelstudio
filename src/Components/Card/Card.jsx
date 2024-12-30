import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ id, image, category }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/gallery/${id}`);
  };

  return (
    <div className="card-wrapper" onClick={handleCardClick}>
      <div className="card">
        <img src={image} alt={category} className="card-image" />
        <div className="card-overlay"></div>
      </div>
      <div className="card-category">
        <p>{category.toUpperCase()}</p>
        <br />
      </div>
    </div>
  );
};

export default Card;
