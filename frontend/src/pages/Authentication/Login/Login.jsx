import React, { useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const loginUser = async (e) => {
    e.preventDefault();
    try { 
      const res = await axios.post("http://localhost:4000/login", {
        data: {
          email: email,
          password: password
        },
        withCredentials: true
      })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="text"/>
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"/>
        <button onClick={(e) => loginUser(e)}>Welcome Back!</button>
      </form>
    </div>
  )
}

export default Login