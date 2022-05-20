import { useState, useGlobal } from "reactn"
import { Navigate, Link } from "react-router-dom"
import axios from "axios"


const SignupForm = () => {

  const [token, setToken] = useGlobal("token")
  const [error, setError] = useState("")
  const [signedUp, setSignedUp] = useState(false)
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:1337/auth/signup", formState)
      const { data } = await axios.post("http://localhost:1337/auth/login", {
        username: formState.username,
        password: formState.password
      })

      setToken(data.token)
      setSignedUp(true)
    }
    catch (err) {
      setError("Invalid form data")
    }

  }

  return (
    <>
      {error && <div>{error}</div>}
      {signedUp && <Navigate replace to="/" />}
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} value={formState.username} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formState.email} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} value={formState.password} />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} value={formState.confirmPassword} />
        <button>Sign Up</button>
        <Link to="/login">or login</Link>
      </form>
    </>
  )
}

export default SignupForm