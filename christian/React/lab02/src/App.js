import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/Home"
import Contact from "./components/Contact"

const App = () => {
    return (
        <div className="flex flex-row justify-center bg-zinc-800 h-screen">
        <BrowserRouter>
            <p className="text-xl">Portfolio</p>
            <Navbar/>
            
            {/* <div className="header">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

            </div> */}

        
        </BrowserRouter>
        </div>
    )
}

export default App;