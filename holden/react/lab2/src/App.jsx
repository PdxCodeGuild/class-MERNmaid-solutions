import { createRoot } from "react-dom/client";
import List from "./components/List";

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