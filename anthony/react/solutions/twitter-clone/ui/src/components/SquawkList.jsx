import axios from "axios"
import { useState, useGlobal, useEffect } from "reactn"

const SquawkList = () => {

  const [squawks, setSquawks] = useState([])
  const [recentSquawk, setRecentSquawk] = useGlobal("recentSquawk")
  const [token, setToken] = useGlobal("token")
  const [user, setUser] = useGlobal("user")


  useEffect(() => {
    axios.get("http://localhost:1337/squawk/")
      .then(res => setSquawks(res.data))

    setRecentSquawk(false)
  }, [recentSquawk])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:1337/squawk/${id}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      setRecentSquawk(true)
    } catch (err) {
      console.error(err)
    }
  }


  return (
    <>
      {squawks.map(squawk => <article key={squawk._id}>
        <p>{squawk.body}</p>
        <small>-{squawk.user.username}</small>
        {squawk.user._id === user?._id && <button onClick={() => handleDelete(squawk._id)}>X</button>}
      </article>)}
    </>
  )
}

export default SquawkList
