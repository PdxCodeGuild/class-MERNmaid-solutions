import { useState, useGlobal } from "reactn"

const Contact = () => {

  const [token, setToken] = useGlobal("token")

  return (
    <h1>Contact me:</h1>
    <textarea name="name" rows="8" cols="80"></textarea>
    <button type="button" name="button">send</button>
  );
};

export default Contact;