import { Navigate } from "react-router-dom";
import { useGlobal } from "reactn"


const LogoutButton = (props) => {

  const [token, setToken] = useGlobal("token")
  const [user, setUser] = useGlobal("user")

  const handleClick = () => {
    setToken(null)
    setUser(null)
  }

  return (
    <>
      {!user && <Navigate replace to={props.to || "/"} />}
      <button onClick={handleClick}>Logout</button>
    </>
  )
}

export default LogoutButton