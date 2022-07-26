import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [people, setPeople] = useState([]);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4040/people").then((response) => {
      setPeople(response.data);
    });
  }, []);

  const usernameChange = (e) => {
    setUsername(e.target.value);
  }

  const firstNameChange = (e) => {
    setFirstName(e.target.value);
  }

  const lastNameChange = (e) => {
    setLastName(e.target.value);
  }

  const ageChange = (e) => {
    setAge(e.target.value);
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const { data } = await axios.post("http://localhost:1337/squawk/", { body }, {});
  //   setFirstName("");
  // }

  return (
    <>
      <div className="people">
        {people.map((person) => (
          <div className="person" key={person.id}>
            <div>username: {person.username}</div>
            <div>name: {person.firstName} {person.lastName}</div>
            <div>age: {person.age}</div>
          </div>
        ))}
      </div>
      <div className="personForm">
        <input type="text" value={usernameame} onChange={usernameChange}>
      </div>

    </>
  );
}

export default App;