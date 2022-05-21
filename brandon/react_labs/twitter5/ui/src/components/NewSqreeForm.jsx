import { useState, useGlobal } from "reactn";
import axios from "axios";

const NewSqreeForm = () => {

  const [body, setBody] = useState("");
  const [token, setToken] = useGlobal("token");
  const [recentSqree, setRecentSqree] = useGlobal("recentSqree");

  const handleChange = (e) => {
    setBody(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {data} = await axios.post("http://localhost:1337/sqree/", {body}, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      setBody("");
      setRecentSqree(true);
    } catch (error) {
      
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="body" placeholder="sqree" onChange={handleChange} value={body}/>
        <button disabled={!body || body.length > 241}>Sqree!</button>
      </form>
    </>
  )
}

export default NewSqreeForm;
