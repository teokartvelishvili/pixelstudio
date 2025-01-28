import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import cardsData from "../../Data/CardsData";
import "./CardDetails.css";

const CardDetails = () => {
  const { id } = useParams();

  // ვპოულობთ არჩეულ კატეგორიას
  const selectedCategory = cardsData.find((category) => category.id === id);

<<<<<<< HEAD
  // localStorage-დან არჩეული საბკატეგორიის აღდგენა
  const savedSubcategoryId = localStorage.getItem(`selectedSubcategory-${id}`);
  const initialSubcategory =
    selectedCategory?.subcategories.find(
      (subcat) => subcat.id === savedSubcategoryId
    ) || selectedCategory?.subcategories[0] || null;

=======
  // localStorage-დან სურათების აღდგენა
  const savedPhotos = JSON.parse(localStorage.getItem(`photos-${id}`)) || [];

  // ინიციალიზაცია
>>>>>>> parent of 899e5cf (Update Carddetails.jsx)
  const [selectedSubcategory, setSelectedSubcategory] = useState(
    initialSubcategory
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

<<<<<<< HEAD
    // localStorage-ში არჩეული საბკატეგორიის შენახვა
    localStorage.setItem(`selectedSubcategory-${id}`, subcategoryId);
  };

  useEffect(() => {
    // თუ localStorage-ში არჩეული საბკატეგორია არ არის ნაპოვნი, დავამატოთ ნაგულისხმევი
    if (selectedSubcategory && !savedSubcategoryId) {
      localStorage.setItem(`selectedSubcategory-${id}`, selectedSubcategory.id);
    }
  }, [selectedSubcategory, id, savedSubcategoryId]);
=======
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
>>>>>>> parent of 899e5cf (Update Carddetails.jsx)

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

<<<<<<< HEAD
=======
export default CardDetails;

  );
};

>>>>>>> parent of 899e5cf (Update Carddetails.jsx)
export default CardDetails;
