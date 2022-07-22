import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4040/people").then((response) => {
      setPeople(response.data);
    });
  }, []);

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

    </>
  );
}

export default App;