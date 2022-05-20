import axios from "axios"
import { useState, useGlobal, useRef } from "reactn"

const NewSquawkForm = () => {

    const [body, setBody] = useState("")
    const [token, setToken] = useGlobal("token")
    const submitButton = useRef("")

    const handleChange = (e) => {
        setBody(e.target.value)
        if (body.length < 1 || body.length > 241) {
            submitButton.current.disabled = true
            return
        }
        submitButton.current.disabled = false
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (body.length < 1 || body.length > 241) return
        
        const {data} = await axios.post("http://localhost:1337/squawk/", {body} , {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        console.log(data.body)

    }



  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" name="body" placeholder="post a squawk" onChange={handleChange} value={body} />
        <button disabled ref={submitButton}>Squawk!</button>

    </form>
    
    </>
  )
}

export default NewSquawkForm