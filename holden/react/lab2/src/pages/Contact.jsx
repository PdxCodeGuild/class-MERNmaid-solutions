import { useState, useGlobal } from "reactn";
import Button from 'react-bootstrap/Button';

const Contact = () => {

  const [token, setToken] = useGlobal("token")

  return (
    <div>
    <h1>Contact me:</h1>
    <textarea rows="8" cols="80"></textarea>
    <button>send</button>
    </div>
  );
};

export default Contact;