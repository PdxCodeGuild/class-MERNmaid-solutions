import { createRoot } from "react-dom/client";
import List from "./components/List";

const App = () => {
	return (
		<div>
			<h1>Hello World</h1>
			<List />
		</div>
	);
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
