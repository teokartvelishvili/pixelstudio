import React, { useState } from "react";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("https://formspree.io/f/xjkgwnrw", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        setMessageSent(true);
        form.reset();
        setTimeout(() => setMessageSent(false), 5000);
      }
    });
  };

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
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="first_name"
                  placeholder="სახელი *"
                  required
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="გვარი *"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="იმეილი *"
                required
              />
              <input type="text" name="subject" placeholder="Subject" />
              <textarea
                name="message"
                placeholder="დაგვიტოვე შეტყობინება ..."
                required
              ></textarea>
              <button type="submit">გაგზავნა</button>
            </form>
            {messageSent && (
              <p className="success-message">შეტყობინება გაიგზავნა!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
