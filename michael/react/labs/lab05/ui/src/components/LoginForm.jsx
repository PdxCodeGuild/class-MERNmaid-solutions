import { useState, useGlobal } from "reactn";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
	const [token, setToken] = useGlobal("token");
	const [user, setUser] = useGlobal("user");
	const [error, setError] = useState("");
	const [loggedIn, setLoggedIn] = useState(false);
	const [formState, setFormState] = useState({
		username: "",
		password: "",
	});

	const handleChange = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post(
				"http://127.0.0.1:1337/auth/login",
				formState
			);
			setUser(data.user);
			setToken(data.token);
			setLoggedIn(true);
		} catch (err) {
			setError("Invalid login");
		}
	};

	return (
		<>
			{loggedIn && <Navigate replace to="/" />}
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="username"
					placeholder="Username"
					onChange={handleChange}
					value={formState.username}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					onChange={handleChange}
					value={formState.password}
				/>
				<button>Login</button>
				<Link to="/signup">or signup</Link>
			</form>
		</>
	);
};

export default LoginForm;
