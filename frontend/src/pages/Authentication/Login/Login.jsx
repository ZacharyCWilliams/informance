import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email)
    console.log(password)
  }

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="text"/>
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"/>
        <button onClick={(e) => handleLogin(e)}>Welcome Back!</button>
      </form>
    </div>
  )
}

export default Login