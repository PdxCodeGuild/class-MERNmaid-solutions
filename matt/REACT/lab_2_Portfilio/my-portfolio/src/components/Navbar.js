import selfie from '../img/selfie.jpg'

import {
	Link as RouterLink,
	useMatch,
	useResolvedPath,
} from "react-router-dom";

export default function Navbar() {
    return (
		<nav className="text-white pt-10 pl-96 pr-96 flex justify-between">
			<div>
				<h1 className='text-[25px] underline decoration-green-700 underline-offset-8'>Matt Chimenti</h1>
			</div>
			<div>
				<RouterLink className="pl-5 text-gray-500" to="/about">About</RouterLink>
				<RouterLink className="pl-5 text-gray-500" to="/contact">Contact</RouterLink>

			</div>
		</nav>
    )
}