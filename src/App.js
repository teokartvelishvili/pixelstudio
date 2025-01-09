import React, { useState, useEffect } from "react";
import "./App.css";
import Layout from "./Layouts/Layout.js";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import CardDetails from "./Components/CardDetails/Carddetails.jsx";
import { ThemeContext } from "./Hooks/ThemeContext.js";
import { LanguageContext } from "../src/Hooks/LanguageContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Activities from "./Pages/Activities/Activities.jsx";

function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("ge");

  useEffect(() => {
    const appEl = document.getElementById("app");
    if (appEl) {
      appEl.className = theme;
    }
  }, [theme]);

  useEffect(() => {
    document.body.className = language;
  }, [language]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <Router>
      <div className="App" id="app">
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <LanguageContext.Provider value={{ language, setLanguage }}>
            <Routes>
              <Route
                path="/"
                element={
                  <Layout>
                    <Home />
                  </Layout>
                }
              />
              <Route
                path="/about"
                element={
                  <Layout>
                    <About />
                  </Layout>
                }
              />
              <Route
                path="/activities"
                element={
                  <Layout>
                    <Activities />
                  </Layout>
                }
              />
              <Route
                path="/contact"
                element={
                  <Layout>
                    <Contact />
                  </Layout>
                }
              />
              <Route
                path="/gallery/:id"
                element={
                  <Layout>
                    <CardDetails />
                  </Layout>
                }
              />
            </Routes>
          </LanguageContext.Provider>
        </ThemeContext.Provider>
      </div>
    </Router>
  );
}

export default App;
