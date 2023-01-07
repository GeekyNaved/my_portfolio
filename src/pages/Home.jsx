import React from "react";
import AboutSection from "../components/AboutSection";
import Contact from "../components/Contact";
import HeroSection from "../components/HeroSection";
import MyWork from "../components/MyWork";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MyWork />
      <Contact />
    </>
  );
};

export default Home;
