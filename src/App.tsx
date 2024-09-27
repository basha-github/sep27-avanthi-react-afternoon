import React from "react";
import Login from "./avanthi-components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./avanthi-components/Home";
import Products from "./avanthi-components/Products";
import ContactUs from "./avanthi-components/ContactUs";
import AboutUs from "./avanthi-components/AboutUs";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/prd" element={< Products/>} />
          <Route path="/cnt" element={<ContactUs />} />
          <Route path="/abt" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
