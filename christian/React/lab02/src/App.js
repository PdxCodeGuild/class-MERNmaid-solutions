import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Contact from "./components/Contact"

const App = () => {
    return (
        <BrowserRouter>
                <p>hello</p>
            <div className="header">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

            </div>

        </BrowserRouter>
    )
}

export default App;