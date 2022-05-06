import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
        <div className="header"> 
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        </Routes>

        </div>
        
        </BrowserRouter>
    )
}