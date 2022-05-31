import {
	Link as RouterLink,
	useMatch,
	useResolvedPath,
} from "react-router-dom";



export default function Navbar(){
    return(
        <div className="flex flex-row">
            <RouterLink to="/contact">Contact!</RouterLink>
            <RouterLink to="/home">Home</RouterLink>
        </div>
    )
}

