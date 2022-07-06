import { useState, useGlobal } from "reactn"

const Contact = () => {

  const [token, setToken] = useGlobal("token")

  return (
    <h1>Placeholder Contact</h1>
  );
};

export default Contact;