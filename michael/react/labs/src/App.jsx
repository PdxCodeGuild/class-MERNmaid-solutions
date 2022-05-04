import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "./components/link";

import Home from "./pages/home";
import Navbar404 from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import NotFound from "./pages/notfound";
import "./index.css";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<div>
							<HeroSection />
							<Home />
						</div>
					}
				/>
				<Route
					path="*"
					element={
						<div>
							<Navbar404 />
							<NotFound />
						</div>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
