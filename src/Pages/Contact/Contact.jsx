@mixin flex-column($gap: 3%) {
  display: flex;
  flex-direction: column;
  gap: $gap;
}

.ContactPage {
  text-align: center;
  color: #dfb759;
  font-size: larger;
}
hr {
  color: #dfb759;
  background-color: #dfb759;
  height: 1px;
  border: none;
}

.contact-container {
  display: flex;
  min-height: 100vh;
  background-color: #000; /* Background color */
  color: white;
  position: relative;
}

.contact-background {
  display: flex;
  align-items: start;
  gap: 10%;
  min-height: 100%;
  width: 100%;
  padding: 30px;
  padding-top: 6%;
  background-image: url("/Assets/mainImage.png"); /* Add your image path */
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
}

/* Add the black overlay */
.contact-background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Black overlay with transparency */
  z-index: -1; /* Place it behind the content */
}

.contact-info {
  @include flex-column;
  flex: 1;
  padding: 10px;
  color: white;
  gap: 3%;
  z-index: 2; /* Ensure it's above the overlay */
  margin-top: 3%;
  background: #00000073;
  border-radius: 1% 3%;
}

.contact-info p {
  margin: 10px 0;
  color: #dfb759;
  text-shadow: 0px -3px 6px #000;
}

.social-icons {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.social-icon {
  color: white;
  text-decoration: none;
}

.contact-form {
  flex: 1;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5); /* Form background with transparency */
  border-radius: 10px;
  z-index: 2; /* Ensure it's above the overlay */
  border: 1px solid #dfb759;
  max-width: 30vw;
  margin-right: 13%;
}

.contact-form form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  gap: 10px;
}

.form-group input {
  flex: 1;
}

input,
textarea {
  padding: 10px;
  border: none;
  border-bottom: 1px solid #dfb759;
  border-radius: 5px;
  font-size: 14px;
  background: transparent;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #dfb759;
  color: #000;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #ccc;
}

@media (max-width: 768px) {
  .contact-background {
    flex-direction: column;
    padding-bottom: 30%;
  }
  .contact-form {
    align-self: center;
  }
  .contact-form {
    max-width: 100%;
    margin-right: 0%;
  }
}
