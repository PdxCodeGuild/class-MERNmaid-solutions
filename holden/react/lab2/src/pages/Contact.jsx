import { useState, useGlobal } from "react"

const Contact = () => {

  const [token, setToken] = useGlobal("token")

  return (
    <h1>Placeholder Contact</h1>
  )
};

export default Contact;