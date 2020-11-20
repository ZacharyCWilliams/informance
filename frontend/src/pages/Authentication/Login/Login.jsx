import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import { Link } from "react-router-dom";
import Joi from "joi-browser";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false)
  const [userData, setUserData] = useState(null)
  const [emailError, setEmailError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)
  let history = useHistory();


  const loginUser = async (e) => {
    e.preventDefault();
    let errors = await validate()
    if (errors) {
      setEmailError(errors.email)
      setPasswordError(errors.password)
    }
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

  // joi validations
   
  const schema = Joi.object().keys({ 
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password")
  }); 

  const validate = () => {
    const fields = { email, password };
    const options = { abortEarly: false };
    const { error } = Joi.validate(fields, schema, options); 

    if (!error) return null;
    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    if (errors.length !== 0) {
      return errors
    }
  }
  
  // const validateField = ({ name, value }) => {
  //   const field = { [name]: value };
  //   const schema = { [name]: formSchema[name] }
  //   const { error } = Joi.validate(field, schema)
  //   return error ? error.details[0].message : null;
  // }
  // const errorMessage
  // if (errors.length !== 0) {
  //   errorMessage = errors.map(error => {
  //     return (
  //       <div>
  //         {error}
  //       </div>
  //     )
  //   })
  // }

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
          { emailError && <p className={styles.errorMessage}>{emailError}</p>}
          <input className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"/>
          { passwordError && <p className={styles.errorMessage}>{passwordError}</p>}
          <button className={styles.button} onClick={(e) => loginUser(e)}>Welcome Back!</button>
          {/* <Link to="/register" className={styles.register}>Don't have an account? Register here.</Link> */}
        </form>
      </div>
    </div>
    // </div>
  )
}

export default Login