import { setGlobal, addCallback } from "reactn"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signup from "./pages/Signup";
import Login from "./pages/Login"
import Home from "./pages/Home";

import './App.css';


//Routes change from page to page
//Router holds Routes
//add callback allows to run call back functions when state changes(state of token)
function App() {

  const rehydrateState = () => {
    const state = localStorage.getItem("globalState")
    if (state) return JSON.parse(state)
  }

  setGlobal({
    token: null
  })

  addCallback(state => {
    localStorage.setItem("globalState", JSON.stringify(state))

  })

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" />
        <Route path="*" />


      </Routes>
    </Router>
  );
}

export default App;
