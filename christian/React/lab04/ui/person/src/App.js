import React from "react";
import axios from "axios";

const App = () => {
  const [addUser, setAddUser] = (useState = "");

  axios
    .post("http://localhost:30001/create")
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  setAddUser({ firstName: "", lastName: "", username: "", age: "" });

  return <div>App</div>;
};

export default App;
