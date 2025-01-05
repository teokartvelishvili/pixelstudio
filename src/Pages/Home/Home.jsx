import React, { useContext } from "react";
import { ThemeContext } from "../../Hooks/ThemeContext";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";
import Card from "../../Components/Card/Card";
import cardsData from "../../Data/CardsData";
import Caroucel3d from "../../Components/Caroucel3d/Caroucel3d";
import "./Home.css";
import Carousel from "../../Components/Carousel/Carousel";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div className="homePage">
      <div>
      <Carousel/>
      <h1>სტუდიური სერვისები</h1>
      <div  className="homepageCont">
      <div className="cards-container">
        {cardsData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
        </div>
      </div>

      </div>
    </div>
  );
};

export default Home;
