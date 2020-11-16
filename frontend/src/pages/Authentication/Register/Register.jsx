import React, { useState } from "react";
import styles from "./Register.module.css";
import axios from "axios";
import { useHistory } from "react-router-dom";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [userData, setUserData] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  let history = useHistory();

  const registerUser = async (e) => {
    e.preventDefault();
    try { 
      const { data } = await axios.post("http://localhost:4000/register", {
        data: {
          email: email,
          password: password,
          confirmPass: confirmPass,
          username: username,
          name: name,
          number: number
        },
        withCredentials: true
      })
      console.log(data)
      if (data) setUserData(data);
    } catch (error) {
      console.log(error)
      throw error;
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <form>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="text"/>
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"/>
        <input value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} placeholder="Confirm Password" type="text"/>
        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="@handle" type="text"/>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" type="text"/>
        <input value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Phone Number" type="text"/>
        <button onClick={(e) => registerUser(e)}>Welcome Back!</button>
      </form>
    </div>
  )
}

export default Register