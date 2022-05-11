import { Button } from "react-bootstrap";
import Link from "../components/Link";

const Navbar = () => {
	return (
		<nav>
			<h1>Class MERNmaid</h1>
			<div>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</div>
		</nav>
	);
};

export default Navbar;
