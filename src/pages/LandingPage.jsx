import React, { useContext } from "react";
import { ThemeContext } from "../App";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomerReview from "../components/CustomerReview";
import AboutUs from "../components/AboutUs";
import ContactComponent from "../components/ContactComponent";
import Demonstration from "../components/Demonstration";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Demonstration id="portfolio" />
      <AboutUs />
      <CustomerReview />
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default LandingPage;
