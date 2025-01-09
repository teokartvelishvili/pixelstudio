import React, { useState, useContext } from "react";
import { ThemeContext } from "../../Hooks/ThemeContext";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { Link } from "react-router-dom";
import { TEXTS } from "../../Hooks/Languages";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import mainLogo from "../../Assets/Yellow.png";
import ToggleSwitch from "../Toggle/Toggle";
import toggleStars from "../../Assets/stars.jpeg";
import toggleShine from "../../Assets/sunShine.jpeg";
import geoFlag from "../../Assets/geoFlag.png";
import engFlag from "../../Assets/engFlag.png";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Access ThemeContext
  const [isChecked, setIsChecked] = useState(theme === "dark");
  const { language, setLanguage } = useContext(LanguageContext);

  const handleChange = () => {
    setIsChecked(!isChecked);
    toggleTheme(); // Toggle theme
  };
  const handleLangClick = () => {
    const newLanguage = language === "ge" ? "en" : "ge";
    setLanguage(newLanguage); // Use setLanguage from LanguageContext to update the language
  };

  return (
    <div className={`header ${theme}`}>
      <Link to="/">
        <div className="mainLogo">
          <img src={mainLogo} alt="" />
        </div>
      </Link>
      <div className="ThemeToggle">
        {/* Pass all four images as props */}
        <div className={`toggles ${theme}`}>
          {/* <ToggleSwitch 
                checked={isChecked} 
                onChange={handleChange} 
                image={toggleShine} 
                image2={toggleStars}
            /> */}
          {/* <div>
             <img
              className="lang"
              src={language === "ge" ? engFlag : geoFlag}
              alt="lang"
              onClick={handleLangClick}
            />
            </div> */}
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
