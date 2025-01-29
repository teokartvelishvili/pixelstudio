import React from "react";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="ContactPage">
      <div className="hr"></div>
      <h2> დაგვიკავშირდით </h2>
      <div className="contact-container">
        <div className="contact-background">
          <div className="contact-info">
            <p>
              ჩვენი ფოტო სტუდია გთავაზობთ პროფესიონალურ ფოტოგრაფიას და ვიდეო
              გადაღებას ნებისმიერი მიზნისთვის. თქვენთვის სასურველი შთამბეჭდავი
              კადრები, რომლებიც აღბეჭდავს თქვენს საუკეთესო მომენტებს.
            </p>
            <p>Hello@pixelstudio.ge</p>
            <p>123-456-7890</p>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/@pixelstudiogeo"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "#dfb759", fontSize: "24px" }}
                />
              </a>
              <a
                href="https://instagram.com"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "#dfb759", fontSize: "24px" }}
                />
              </a>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="სახელი *" required />
                <input type="text" placeholder="გვარი *" required />
              </div>
              <input type="email" placeholder="იმეილი *" required />
              <input type="text" placeholder="Subject" />
              <textarea
                placeholder="დაგვიტოვე შეტყობინება ..."
                required
              ></textarea>
              <button type="submit">გაგზავნა</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
