import React, { useContext } from "react";
import { ThemeContext } from "../App";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomerReview from "../components/CustomerReview";
import AboutUs from "../components/AboutUs";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <CustomerReview />
      <Footer />
    </div>
  );
};

export default LandingPage;
