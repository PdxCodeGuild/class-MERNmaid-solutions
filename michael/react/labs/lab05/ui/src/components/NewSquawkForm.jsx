import { useState, useGlobal, useRef } from "reactn";
import axios from "axios";

const NewSquawkForm = () => {
	const [body, setBody] = useState("");
	const [token, setToken] = useGlobal("token");
	const [recentSquawk, setRecentSquawk] = useGlobal("recentSquawk");

	const handleChange = (e) => {
		setBody(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (body.length < 1 || body.length > 241) return;
		const { data } = await axios.post(
			"http://127.0.0.1:1337/squawk/",
			{ body },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		setBody("");
		setRecentSquawk(true);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="body"
					placeholder="Squawk"
					onChange={handleChange}
					value={body}
				/>
				<button disabled={!body || body.length > 241}>Squawk</button>
			</form>
		</>
	);
};

export default NewSquawkForm;
