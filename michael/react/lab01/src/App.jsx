import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "./components/link";

import Home from "./pages/home";
import Navbar from "./components/Navbar";
import NotFound from "./pages/notfound";
import "./index.css";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/" element={<Link to="/">Home</Link>} /> */}

				{/* Not found */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
