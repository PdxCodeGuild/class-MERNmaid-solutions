import { setGlobal, addCallback } from "reactn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {

  const rehydrateState = () => {
    const state = localStorage.getItem("globalState");
    if (state) return JSON.parse(state);

    return {
      token: null,
      user: null,
      recentSqree: false
    };
  }

  setGlobal(rehydrateState());

  addCallback(state => {
    localStorage.setItem("globalState", JSON.stringify(state))
  });

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/profile"/>
        <Route path="*"/>
      </Routes>
    </Router>
  );
}

export default App;
