import {
	Link as RouterLink,
	useMatch,
	useResolvedPath,
} from "react-router-dom";
import { Button } from "react-bootstrap";

function Link({ children, to, ...props }) {
	const resolved = useResolvedPath(to);
	const match = useMatch({ path: resolved.pathname, end: true });
	return (
		<RouterLink to={to}>
			<Button variant={match ? "primary" : "outline-secondary"}>
				{children}
			</Button>
		</RouterLink>
	);
}

export default Link;
