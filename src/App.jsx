import React, { useState } from "react";


import "./App.css";
import Header from "./assets/components/Header";
import Sidebar from "./assets/components/Sidebar";
import Footer from "./assets/components/Footer";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/components/routes/Home";
import Matchdetails from "./assets/components/routes/Matchdetails";
import Playerdetails from "./assets/components/routes/Playerdetails";
import Scores from "./assets/components/routes/Scores";
import About from "./assets/components/routes/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/match-details" element={<Matchdetails />} />
          <Route path="/player-details" element={<Playerdetails />} />
          <Route path='/match-scores' element={<Scores/>}/>
          <Route path="/about-scoresheet " element={<About/>}/>
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
