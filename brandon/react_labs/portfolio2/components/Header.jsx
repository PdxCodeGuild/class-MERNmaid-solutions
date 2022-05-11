import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';

import DarkMode from "./DarkMode";

const Header = (props) => {
  return(
    <div id="header">
      <div id="selfPhoto"></div>
      <div id="name">
        <h1>Brandon Rimes</h1>
        <h2>Software Developer</h2>
      </div>
      <div id="nav">
        <Link to="/">
          <Button variant="primary">Home</Button>
        </Link>
        <Link to="/contact">
          <Button variant="primary">Contact</Button>
        </Link>
        <DarkMode darken={props.darken} dark={props.dark}/>
      </div>
    </div>
  );
};    

export default Header;
