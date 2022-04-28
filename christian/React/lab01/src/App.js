import { createRoot } from "react-dom/client"
import List from "./components/List"

const App = () => {
    return (
        <div>
            <h1>testing</h1>
        <List></List>
        </div>
    )
}

const root = createRoot(document.getElementById("root"));
root.render(<App />)