import Card from "../../Components/Card/Card";
import cardsData from "../../Data/CardsData";
import "./Activities.scss";

const Activities = () => {
  // const { theme, toggleTheme } = useContext(ThemeContext);
  // const { language } = useContext(LanguageContext);

  return (
    <div className="activities">
      <h1>სტუდიური სერვისები</h1>
      <div className="actpageCont">
        <div className="cards-container">
          {cardsData.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
