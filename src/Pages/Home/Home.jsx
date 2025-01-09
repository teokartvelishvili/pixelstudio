// import React, { useContext } from "react";
// import { ThemeContext } from "../../Hooks/ThemeContext";
// import { LanguageContext } from "../../Hooks/LanguageContext";
// import { TEXTS } from "../../Hooks/Languages";

// import Caroucel3d from "../../Components/Caroucel3d/Caroucel3d";
import "./Home.css";
import Carousel from "../../Components/Carousel/Carousel";

const Home = () => {
  // const { theme, toggleTheme } = useContext(ThemeContext);
  // const { language } = useContext(LanguageContext);

  return (
    <div className="homePage">
      <div>
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
