import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:4040/people").then((response) => {
      setPeople(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <div>
        {people.map((person) => (
          <div class="person" key={person.id}>
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