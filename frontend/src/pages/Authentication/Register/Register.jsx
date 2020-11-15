import React, { useState } from "react";
import styles from "./Register.module.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email)
    console.log(password)
    console.log(confirmPass)
    console.log(name)
    console.log(number)
  }

  return (
    <div>
      <h2>Register</h2>
      <form>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="text"/>
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"/>
        <input value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} placeholder="Confirm Password" type="text"/>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" type="text"/>
        <input value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Phone Number" type="text"/>
        <button onClick={(e) => handleLogin(e)}>Welcome Back!</button>
      </form>
    </div>
  )
}

export default Register