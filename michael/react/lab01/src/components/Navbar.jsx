import Link from "../components/Link";

import React from "react";

const Navbar = () => {
	const [, updateState] = React.useState();
	const forceUpdate = React.useCallback(() => updateState({}), []);
	return (
		<nav>
			<h1>Michael's React Labs</h1>
			<div>
				<Link to="/">Home </Link>
				<button onClick={forceUpdate}>Force re-render</button>
				{/* <Link to="/about">About </Link> */}
				{/* <Link to="/contact">Contact </Link> */}
			</div>
		</nav>
	);
};

export default Navbar;
