import { useState, useEffect } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';

import Person from './Person';

const People = (props) => {

  const [people, setPeople] = useState([]);

  const newPersonData = { firstName: "", lastName: "" };
  const [newPerson, setNewPerson] = useState(newPersonData);

  const getPeople = async () => {
    await axios.get("http://localhost:3030/people")
    .then(res => {
      setPeople(res.data)
    });
  };

  useEffect(() => {
    getPeople();
  }, []);

  const handleChange = (e) => {
    setNewPerson({...newPerson, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await axios.post("http://localhost:3030/add-person", newPerson)
      .then(getPeople)
      .then(setNewPerson(newPersonData));
  };

  return (
    <div id="people">
      <form id="newPersonForm" onSubmit={handleSubmit}>
        <input
          name="firstName"
          value={newPerson.firstName}
          onChange={handleChange}
          placeholder="first name"
          type="text"
        />
        <input
          name="lastName"
          value={newPerson.lastName}
          onChange={handleChange}
          placeholder="last name"
          type="text"
        />
        <Button type="submit">Add Person</Button>
      </form>
      { people?.map((person, index) => 
        <Person person={person} id={index} key={index} getPeople={getPeople}/>
      )}
    </div>
  )
};

export default People;
