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
            <h3>{person.username}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;