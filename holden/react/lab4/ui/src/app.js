import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [people, setPeople] = useState([]);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState("");

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
    await axios.post("http://localhost:4040/people/", {
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
    setEditId("");
    setEdit(false);
    await axios.delete(`http://localhost:4040/people/${id}`);
    axios.get("http://localhost:4040/people").then((response) => {
      setPeople(response.data);
    });
  }

  const startEdit = (person) => {
    setEditId(person._id);
    setUsername(person.username);
    setFirstName(person.firstName);
    setLastName(person.lastName);
    setAge(person.age);
    setEdit(true);
  }

  const handleEdit = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:4040/people/${editId}`, {
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

  const cancelEdit = () => {
    setEditId("");
    setUsername("");
    setFirstName("");
    setLastName("");
    setAge("");
    setEdit(false);
  }

  return (
    <>
      <div className="people">
        {people.map((person) => (
          <div className={`person ${person._id==editId? "editing" : ""}`} key={person._id}>
            <div>
              <div>username: {person.username}</div>
              <div>name: {person.firstName} {person.lastName}</div>
              <div>age: {person.age}</div>
            </div>
            <div>
              <button onClick={() => startEdit(person)}>edit</button><br/>
              <button onClick={() => handleDelete(person._id)}>delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className={`personForm ${edit? "editing" : ""}`}>
        <input type="text" value={username} placeholder="username" onChange={usernameChange}/><br/>
        <input type="text" value={firstName} placeholder="first name" onChange={firstNameChange}/><input type="text" placeholder="last name" value={lastName} onChange={lastNameChange}/><br/>
        <div className="flexButtons">
          <input type="text" value={age} placeholder="age" onChange={ageChange}/>
          <span>
            <button className={edit? "hidden" : ""} onClick={handleSubmit}>add</button>
            <button className={edit? "" : "hidden"} onClick={handleEdit}>edit</button><button className={edit? "" : "hidden"} onClick={cancelEdit}>cancel</button>
          </span>
        </div>
      </div>

    </>
  );
}

export default App;