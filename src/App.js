import React from "react";

import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import JobsCta from "./components/JobsCta";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <InfoSection />
      <JobsCta />
      <Footer />
    </div>
  );
}

export default App;
