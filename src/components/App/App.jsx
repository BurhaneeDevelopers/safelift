"use client";
import React, { useEffect } from "react";
import Navbar from "../Navbar";
import StickyContact from "../StickyContact";
import Footer from "../Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="fixed left-0 top-80 z-30">
        <StickyContact />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default App;
