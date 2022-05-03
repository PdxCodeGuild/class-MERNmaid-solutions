import {
	Link as RouterLink,
	useMatch,
	useResolvedPath,
} from "react-router-dom";

function Link({ children, to, ...props }) {
	const match = useMatch(to);
	const resolvedPath = useResolvedPath(to);

	return (
		<RouterLink to={resolvedPath} className={match ? "active" : ""} {...props}>
			{children}
		</RouterLink>
	);
}

export default Link;
