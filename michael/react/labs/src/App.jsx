import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "./components/link";

import Home from "./pages/Home";
import TodoList from "../lab01/src/pages/TodoList";
import Navbar404 from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import NotFound from "./pages/Notfound";
import Contact from "../lab02/src/pages/Contact";
import Fakeposts from "../lab03/src/pages/Fakeposts";
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
					path="Lab01"
					element={
						<div className="bg-teal-100">
							<Navbar404 />
							<TodoList />
						</div>
					}
				/>
				<Route
					path="Lab02"
					element={
						<div className="bg-teal-100">
							<Navbar404 />
							<Contact />
						</div>
					}
				/>
				<Route
					path="*"
					element={
						<div>
							<Navbar404 />
							<Fakeposts />
						</div>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
