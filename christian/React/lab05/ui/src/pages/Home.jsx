import NewSquawkForm from "../components/NewSquawkForm"
import SquawkList from "../components/SquawkList"
import { useGlobal } from "reactn"


const Home = () => {
    const [token, setToken] = useGlobal("token")
  return (
    <div>
        <h1>home page</h1>
        {/* new squawk form */}
        { token && <NewSquawkForm />}
        <SquawkList />

        {/* squawk list */}
    </div>
  )
}

export default Home