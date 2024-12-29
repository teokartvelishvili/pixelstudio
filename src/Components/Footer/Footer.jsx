import React, { useContext } from "react";
import { ThemeContext } from '../../Hooks/ThemeContext';
import "./Footer.css";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footerContainer ${theme}`}>
      <div className="footerContent">
        <div>
          <p>
            &copy; პიქსელ სტუდია 2025. 
            <span> </span>
            <a 
              href="https://bestsoft.ge" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bestSoftLink"
            >
              დამზადებულია BestSoft-ის მიერ
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}  
export default Footer;
