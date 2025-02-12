import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import cardsData from "../../Data/CardsData";
import "./CardDetails.css";

const CardDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // ვპოულობთ არჩეულ კატეგორიას
  const selectedCategory = cardsData.find((category) => category.id === id);

  // ინიციალიზაცია საბკატეგორიისთვის, თუნდაც მონაცემი არ იყოს ნაპოვნი
  const [selectedSubcategory, setSelectedSubcategory] = useState(
    selectedCategory?.subcategories[0] || null
  );

  if (!selectedCategory) return <p>Category not found</p>;

  const handleSubcategoryChange = (subcategoryId) => {
    const subcategory = selectedCategory.subcategories.find(
      (subcat) => subcat.id === subcategoryId
    );
    setSelectedSubcategory(subcategory);

    // ვცვლით URL-ს
    navigate(`/gallery/${id}?subcategory=${subcategoryId}`);
  };

  // გალერიაზე უკან დაბრუნება
  const handleBackToGallery = () => {
    navigate("/activities");
  };

  return (
    <div className="card-details">
      <h1>{selectedCategory.category}</h1>

      {/* უკან დაბრუნების ღილაკი */}
      <button className="back-button" onClick={handleBackToGallery}>
        &larr; Back to Gallery
      </button>

      {/* საბკატეგორიების ღილაკები */}
      <div className="subcategories">
        {selectedCategory.subcategories.map((subcategory) => (
          <button
            key={subcategory.id}
            className={`subcategory-button ${
              selectedSubcategory?.id === subcategory.id ? "active" : ""
            }`}
            onClick={() => handleSubcategoryChange(subcategory.id)}
          >
            {subcategory.name}
          </button>
        ))}
      </div>

      {/* სურათები */}
      <div className="photo-gallery">
        {selectedSubcategory?.photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            loading="lazy"
            alt={`Photo ${index}`}
            onError={(e) => (e.target.src = "/path/to/default-image.jpg")}
          />
        ))}
      </div>
    </div>
  );
};

export default CardDetails;
