import React, { useContext } from "react";
import { ThemeContext } from "../../Hooks/ThemeContext";
import "./Footer.css";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footerContainer ${theme}`}>
      <div className="footerContent">
        <div className="flexMobile">
          <p>
            &copy;<span> პიქსელ სტუდია 2025.</span>{" "}
          </p>
          <a
            href="https://bestsoft.ge"
            target="_blank"
            rel="noopener noreferrer"
            className="bestSoftLink"
          >
            დამზადებულია BestSoft-ის მიერ
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
