import { useGlobal } from "reactn";

import NewSqreeForm from "../components/NewSqreeForm";
import SqreeList from "../components/SqreeList";

const Home = () => {
  const [token, setToken] = useGlobal("token");

  return (
    <div>
      <h1>Home</h1>
      {token && <NewSqreeForm />}
      <SqreeList />
    </div>
  )
}

export default Home;
