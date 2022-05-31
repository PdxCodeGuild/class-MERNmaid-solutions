import { useState, useEffect, useGlobal } from "reactn";
import axios from "axios";

const SqreeList = () => {

  const [recentSqree, setRecentSqree] = useGlobal("recentSqree");
  const [token, setToken] = useGlobal("token");
  const [user, setUser] = useGlobal("user");

  const [sqrees, setSqrees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1337/sqree/")
      .then(res => setSqrees(res.data));

    setRecentSqree(false);
  }, [recentSqree]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:1337/sqree/${id}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      setRecentSqree(true);
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <>
      {sqrees.map(sqree => <div key={sqree._id}>
        <p>{sqree.body}</p>
        <h6>{sqree.user.username}</h6>
        { sqree.user._id === user?._id && <button onClick={() => handleDelete(sqree._id)}>x</button> }
      </div>)}
    </>
  )
}

export default SqreeList
