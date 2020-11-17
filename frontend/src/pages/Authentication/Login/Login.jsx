import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import { Link } from "react-router-dom";

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
    if (userData) {
      console.log(userData)
      setLoggedIn(true);
    }
    if (loggedIn) {
      console.log("user data", userData)
      history.push({
        pathname: '/home',
        state: { userData }
      });
    }
  }, [userData, loggedIn])

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <h2 className={styles.title}>
          Informance
        </h2>
        <div className={styles.links}>
          <Link className={styles.link1} to="/login">LOG IN</Link>
          <Link className={styles.link2} to="/register">SIGN UP</Link>
        </div>
      </div>
      {/* <div className={styles.margins}> */}
      <div className={styles.formContainer}>
        <h2 className={styles.header}>Be informed. Be influential.</h2>
        <p className={styles.paragraph}>We missed you! Sign back into informance below.</p>
        <form className={styles.form}>
          <input className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"Email"} type="text"/>
          <input className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"/>
          <button className={styles.button} onClick={(e) => loginUser(e)}>Welcome Back!</button>
          {/* <Link to="/register" className={styles.register}>Don't have an account? Register here.</Link> */}
        </form>
      </div>
    </div>
    // </div>
  )
}

export default Login