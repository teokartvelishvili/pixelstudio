import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import cardsData from "../../Data/CardsData";
import "./CardDetails.css";

const CardDetails = () => {
  const { id } = useParams();

  // ვპოულობთ არჩეულ კატეგორიას
  const selectedCategory = cardsData.find((category) => category.id === id);

  // localStorage-დან სურათების აღდგენა
  const savedPhotos = JSON.parse(localStorage.getItem(`photos-${id}`)) || [];

  // ინიციალიზაცია
  const [selectedSubcategory, setSelectedSubcategory] = useState(
    selectedCategory?.subcategories[0] || null
  );
  const [photos, setPhotos] = useState(
    savedPhotos.length > 0
      ? savedPhotos
      : selectedCategory?.subcategories[0]?.photos || []
  );

  if (!selectedCategory) return <p>Category not found</p>;

  const handleSubcategoryChange = (subcategoryId) => {
    const subcategory = selectedCategory.subcategories.find(
      (subcat) => subcat.id === subcategoryId
    );
    setSelectedSubcategory(subcategory);

    // განახლებული სურათების შენახვა
    if (subcategory) {
      setPhotos(subcategory.photos);
      localStorage.setItem(`photos-${id}`, JSON.stringify(subcategory.photos));
    }
  };

  useEffect(() => {
    // ინიციალიზაცია: ნაგულისხმევი სურათების შენახვა
    if (photos.length > 0 && !localStorage.getItem(`photos-${id}`)) {
      localStorage.setItem(`photos-${id}`, JSON.stringify(photos));
    }
  }, [photos, id]);

  return (
    <div className="card-details">
      <h1>{selectedCategory.category}</h1>

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
        {photos.map((photo, index) => (
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

  );
};

export default CardDetails;
