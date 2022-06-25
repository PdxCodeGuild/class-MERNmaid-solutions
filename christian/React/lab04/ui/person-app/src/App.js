import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [error, setError] = useState("");
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    username: "",
    age: "",
  });

  useEffect(() => {
    listPeople();
  }, []);

  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  const listPeople = async () => {
    try {
      await axios.get("http://localhost:3001/people");
      const response = await axios.get("http://localhost:3001/people");
      setPeople(response.data);
    } catch (error) {
      setError(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/create", person);
      const response = await axios.post("http://localhost:3001/create", {
        firstName: person.firstName,
        lastName: person.lastName,
        userName: person.username,
      });
      console.log(response);
    } catch (error) {
      setError("error");
      console.log(error);
    }
  };

  return (
    <>
      <h1>hello</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="name"
          onChange={handleChange}
          value={person.firstName}
        />
        <input
          type="text"
          name="lastName"
          placeholder="last name"
          onChange={handleChange}
          value={person.lastName}
        />
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
          value={person.username}
        />
        <input
          type="text"
          name="age"
          placeholder="age"
          onChange={handleChange}
          value={person.age}
        />
        <button>Create Person</button>
      </form>
      {people.map(person => 
        <ul key={person._id}>
          <li>{person.firstName}</li>
        </ul>
      )}
    </>
  );
};
export default App;
