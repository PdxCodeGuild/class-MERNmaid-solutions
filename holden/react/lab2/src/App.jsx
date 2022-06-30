import { createRoot } from "react-dom/client";
import List from "./components/List";

const App = () => {
	return (
		<div className="main">
			<h1>React Lab 2</h1>
      <br/>
		</div>
	);
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);