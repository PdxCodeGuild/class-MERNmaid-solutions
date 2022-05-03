import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import "./src/index.css";
import Header from "./components/Header";
import HomePage from "./pages/Home.page";
import ContactPage from "./pages/Contact.page";
import Footer from "./components/Footer";

const App = () => {

  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="*" element={<HomePage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
