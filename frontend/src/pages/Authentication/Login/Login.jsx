import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false)
  const [userData, setUserData] = useState(null)
  let history = useHistory();


  const loginUser = async (e) => {
    e.preventDefault();
    try { 
      const { data } = await axios.post("http://localhost:4000/login", {
        data: {
          email: email,
          password: password
        },
        withCredentials: true
      })
      if (data) setUserData(data);
    } catch (error) {
      console.log(error)
      throw error;
    }
  }

  useEffect(() => {
    if (userData) setLoggedIn(true);
    if (loggedIn) {
      history.push({
        pathname: '/home',
        state: { userData }
      });
    }
  }, [userData, loggedIn])

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