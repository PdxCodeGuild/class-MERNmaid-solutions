import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [error, setError] = useState("");
  const [deleteId, setDeleteId] = useState("")
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    userName: "",
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
        userName: person.userName,
        age: person.age,
      });
      console.log(response);
    } catch (error) {
      setError("error");
      console.log(error);
    }
  }
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/delete/${id}`)
      const response = await axios.delete(`http://localhost:3001/${id}`)
      setDeleteId(response._id)
      if (response._id === person._id)
      setDeleteId("")
        
    } catch (err) {
      console.error(err)
    }
  }

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
          name="userName"
          placeholder="username"
          onChange={handleChange}
          value={person.userName}
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
      <article key={person._id}>
          <p>{person.firstName}</p>
          <p>{person.lastName}</p>
          <p>{person.userName}</p>
          <p>{person.age}</p>
         <button onClick={handleDelete}>Delete</button>
          
      </article>
        )}
      </>
    );
  };
  export default App;
        
        

