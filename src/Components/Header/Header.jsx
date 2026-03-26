import React, { useContext } from "react";
import { ThemeContext } from "../../Hooks/ThemeContext";
import { Link } from "react-router-dom";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import mainLogo from "../../Assets/Yellow.png";

const Header = () => {
  const { theme } = useContext(ThemeContext);

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
