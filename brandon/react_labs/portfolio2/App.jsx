import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import "./src/index.css";
import Header from "./components/Header";
import HomePage from "./pages/Home.page";
import ContactPage from "./pages/Contact.page";
import Footer from "./components/Footer";

const App = () => {
  const [dark, setDark] = useState(false);

  const handleDarken = () => {
    setDark(!dark);
    console.log("darken ship.", dark)
  };

  return(
    <BrowserRouter>
      <div className={dark ? "dark" : "light"}>
        <Header darken={handleDarken} dark={dark}/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="*" element={<HomePage/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
