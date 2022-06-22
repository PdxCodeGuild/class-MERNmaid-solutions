import { BrowserRouter, Routes, Route } from "react-router-dom";



import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"

export default function App() {
  return (
    // <div className="bg-sky-300">
    <div className="bg-zinc-900 ">

      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}


