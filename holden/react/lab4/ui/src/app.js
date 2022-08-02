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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:4040/people/", {
      "firstName": firstName,
      "lastName": lastName,
      "username": username,
      "age": age}).then((response) => {
      if (response.status == 200) {
        axios.get("http://localhost:4040/people").then((response) => {
          setPeople(response.data);
        });
      }
    });
  }

  const handleDelete = async (id) => {
    const { data } = await axios.delete(`http://localhost:4040/people/${id}`);
    axios.get("http://localhost:4040/people").then((response) => {
      setPeople(response.data);
    });
  }

  return (
    <>
      <div className="people">
        {people.map((person) => (
          <div className="person" key={person.id}>
            <div>username: {person.username}</div>
            <div>name: {person.firstName} {person.lastName}</div>
            <div>age: {person.age} <button onClick={() => handleDelete(person._id)}>delete</button></div>
          </div>
        ))}
      </div>
      <div className="personForm">
        <input type="text" value={username} placeholder="username" onChange={usernameChange}/><br/>
        <input type="text" value={firstName} placeholder="first name" onChange={firstNameChange}/><input type="text" placeholder="last name" value={lastName} onChange={lastNameChange}/><br/>
        <input type="text" value={age} placeholder="age" onChange={ageChange}/><button onClick={handleSubmit}>add</button>
      </div>

    </>
  );
}

export default App;