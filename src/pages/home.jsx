import React from "react";
import { Banner } from "../components/Atoms/Banner";
import { Skills } from "../components/Atoms/Skills";
import { Projects } from "../components/Atoms/Projects";
import { Contact } from "../components/Atoms/Contact";
import { Footer } from "../components/Atoms/Footer";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
