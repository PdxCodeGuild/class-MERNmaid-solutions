import { useGlobal } from "reactn"
import NewSquawkForm from "../components/NewSquawkForm"
import SquawkList from "../components/SquawkList"

const Home = () => {

  const [token, setToken] = useGlobal("token")
  return (
    <div>
      <h1>Home Page</h1>
      {/* New squawk form */}
      {token && <NewSquawkForm />}
      {/* squawk list */}
      <SquawkList />
    </div>
  )
}

export default Home