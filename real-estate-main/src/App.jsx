import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom"; // Correct import
import Header from "./components/Header";
import Footer from "./components/Footer";
import Propertydetails from "../src/pages/PropertyDetails";
import Home from "./pages/Home";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/property/:id" element={<Propertydetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
