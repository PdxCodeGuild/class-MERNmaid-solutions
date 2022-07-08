import { useState, useGlobal } from "reactn";

const Contact = () => {

  const [token, setToken] = useGlobal("token")

  return (
    <div class="main">
      <h1><a href="/">Placeholder Name</a></h1>
      <h2>Contact me:</h2>
      <div>
        <textarea rows="8" cols="80"></textarea><br/>
        <button>send</button>
      </div>
    </div>
  );
};

export default Contact;