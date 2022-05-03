import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';

const Header = (props) => {
  return(
    <div id="header">
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
      </div>
    </div>
  );
};    

export default Header;
