import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import App from "../App";

const Router = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/app" Component={App} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
