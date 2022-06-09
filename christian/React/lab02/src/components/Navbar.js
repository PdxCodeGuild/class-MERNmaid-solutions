import {
  Link as RouterLink,
  useMatch,
  useResolvedPath,
} from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className=" bg-slate-800 text-white font-sans font-bold pb-5">
        <div className="flex justify-evenly text-2xl pt-3">
          <RouterLink to="/contact">Contact! ☎️</RouterLink>
          <RouterLink to="/">Home Page 🏠</RouterLink>
        </div>
      </nav>
    </>
  );
}

e;
