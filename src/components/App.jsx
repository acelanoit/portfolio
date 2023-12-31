import React from "react";
// We import all the components we need in our app:
import Navbar from "./Navbar";
import TopContainer from "./TopContainer";
import About from "./About";
import Meme from "./Meme";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <TopContainer />
      <About />
      <Meme />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};
