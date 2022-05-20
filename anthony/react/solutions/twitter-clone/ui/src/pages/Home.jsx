import { useGlobal } from "reactn"
import NewSquawkForm from "../components/NewSquawkForm"

const Home = () => {

  const [token, setToken] = useGlobal("token")
  return (
    <div>
      <h1>Home Page</h1>
      {/* New squawk form */}
      {token && <NewSquawkForm />}
      {/* squawk list */}
    </div>
  )
}

export default Home