import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
	<Router>
		<Navbar />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	</Router>
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);