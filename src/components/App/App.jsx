"use client";
import React, { useEffect } from "react";
import Navbar from "../Navbar";
import StickyContact from "../StickyContact";
import Footer from "../Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const App = ({ children }) => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate a loading time of 1.5 seconds before displaying the content
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2.5); // 1.5 seconds

  //   return () => clearTimeout(timer); // Clean up the timer
  // }, []);

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
      <ProgressBar
        height="3px"
        color="#d9dada"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <Footer />
    </div>
  );
};

export default App;
