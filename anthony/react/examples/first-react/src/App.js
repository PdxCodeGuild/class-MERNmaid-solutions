import { useState } from "react";
import { createRoot } from "react-dom/client";
import MenuItem from "./MenuItem";

const App = () => {
	const [coupon, setCoupon] = useState("save10");
	const [message, setMessage] = useState("");
	const [history, setHistory] = useState([]);

	const handleClick = () => {
		if (coupon === "save10") {
			setMessage("You saved 10%");
		} else if (coupon === "save20") {
			setMessage("You saved 20%");
		} else {
			setMessage("Sorry, that coupon code is invalid.");
		}

		setHistory([...history, coupon]);
		setCoupon("");
	};

	return (
		<div>
			<h1>Hello World</h1>
			<input value={coupon} />
			<button onClick={handleClick}>Apply</button>
			<p>{message}</p>
			{history.map((el) => (
				<p>{el}</p>
			))}
			<MenuItem name="Pizza" price={4} calories={200} />
			<MenuItem name="Beer" price={6} calories={140} />
			<MenuItem name="Fries" price={2} calories={250} />
		</div>
	);
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
