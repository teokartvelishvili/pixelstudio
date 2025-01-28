import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import cardsData from "../../Data/CardsData";
import "./CardDetails.css";

const CardDetails = () => {
  const { id } = useParams();

  // ვპოულობთ არჩეულ კატეგორიას
  const selectedCategory = cardsData.find((category) => category.id === id);

  // localStorage-დან არჩეული საბკატეგორიის აღდგენა
  const savedSubcategoryId = localStorage.getItem(`selectedSubcategory-${id}`);
  const initialSubcategory =
    selectedCategory?.subcategories.find(
      (subcat) => subcat.id === savedSubcategoryId
    ) || selectedCategory?.subcategories[0] || null;

  const [selectedSubcategory, setSelectedSubcategory] = useState(
    initialSubcategory
  );

  if (!selectedCategory) return <p>Category not found</p>;

  const handleSubcategoryChange = (subcategoryId) => {
    const subcategory = selectedCategory.subcategories.find(
      (subcat) => subcat.id === subcategoryId
    );
    setSelectedSubcategory(subcategory);

    // localStorage-ში არჩეული საბკატეგორიის შენახვა
    localStorage.setItem(`selectedSubcategory-${id}`, subcategoryId);
  };

  useEffect(() => {
    // თუ localStorage-ში არჩეული საბკატეგორია არ არის ნაპოვნი, დავამატოთ ნაგულისხმევი
    if (selectedSubcategory && !savedSubcategoryId) {
      localStorage.setItem(`selectedSubcategory-${id}`, selectedSubcategory.id);
    }
  }, [selectedSubcategory, id, savedSubcategoryId]);

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
