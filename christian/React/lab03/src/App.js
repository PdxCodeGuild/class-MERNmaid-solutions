import axios from 'axios'
import './App.css';

function App() {
  const [postInfo, setPostInfo] = useState(null)




  useEffect(() => {
   
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      setPostInfo(response.data)
      console.log(response.data)
    })
  }, [])
 
  
  
  return (
    <div>
      
    </div>
    
  );
}

export default App;
