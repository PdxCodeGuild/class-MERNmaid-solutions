import NewSquawkForm from "../components/NewSquawkForm"
import { useGlobal } from "reactn"


const Home = () => {
    const [token, setToken] = useGlobal("token")
  return (
    <div>
        <h1>home page</h1>
        {/* new squawk form */}
        { token && <NewSquawkForm />}

        {/* squawk list */}
    </div>
  )
}

export default Home