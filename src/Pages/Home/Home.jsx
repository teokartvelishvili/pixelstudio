import React, { useContext } from "react";
import { ThemeContext } from "../../Hooks/ThemeContext";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";
import Card from "../../Components/Card/Card";
import cardsData from "../../Data/CardsData";
import "./Home.css";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div className="homePage">
      {/* <button onClick={toggleTheme}>
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button> */}
      <h1>სტუდიური სერვისები</h1>
      <div className="cards-container">
        {cardsData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Home;
