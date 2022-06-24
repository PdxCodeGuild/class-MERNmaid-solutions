import { createRoot } from "react-dom/client";
import List from "./components/List";

const App = () => {
	return (
		<div className="main">
			<h1>React Lab 1</h1>
      <br/>
			<List />
		</div>
	);
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);