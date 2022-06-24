import { useState } from "reactn";

const Contact = () => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === "name") {
			setName(value);
		} else if (name === "phone") {
			setPhone(value);
		} else if (name === "email") {
			setEmail(value);
		} else if (name === "message") {
			setMessage(value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setName("");
		setPhone("");
		setEmail("");
		setMessage("");

		console.log(name, phone, email, message);
	};

	// Herotofu form
	return (
		<div class="w-full h-screen md:w-96 md:max-w-full mx-auto">
			<div class="p-6 border border-gray-300 sm:rounded-md">
				<form method="POST" onSubmit={handleSubmit}>
					<label class="block mb-6">
						<span class="text-gray-700">Your name</span>
						<input
							type="text"
							name="name"
							value={name}
							onChange={handleChange}
							class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50"
							placeholder="Joe Bloggs"
						/>
					</label>
					<label class="block mb-6">
						<span class="text-gray-700">Email address</span>
						<input
							name="email"
							type="email"
							value={email}
							onChange={handleChange}
							class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50"
							placeholder="joe.bloggs@example.com"
							required
						/>
					</label>
					<label class="block mb-6">
						<span class="text-gray-700">Message</span>
						<textarea
							name="message"
							value={message}
							onChange={handleChange}
							class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50"
							rows="3"
							placeholder="Tell us what you're thinking about..."
						></textarea>
					</label>
					<div class="mb-6">
						<button
							type="submit"
							class="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800"
						>
							Contact Us
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
