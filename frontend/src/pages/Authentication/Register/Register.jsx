import React, { useState } from "react";
import styles from "./Register.module.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Joi from "joi-browser";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [userData, setUserData] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [emailError, setEmailError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)
  const [usernameError, setUsernameError] = useState(null)
  const [confirmPassError, setConfirmPassError] = useState(null)
  const [nameError, setNameError] = useState(null)
  const [numberError, setNumberError] = useState(null)

  let history = useHistory();

  const registerUser = async (e) => {
    e.preventDefault();
    let errors = await validate()
    if (errors) {
      setEmailError(errors.email)
      setPasswordError(errors.password)
      setConfirmPassError(errors.confirmPass)
      setUsernameError(errors.username)
      setNameError(errors.name)
      setNumberError(errors.number)
    }
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

    // joi validations
   
  const schema = Joi.object().keys({ 
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
    confirmPass: Joi.string().required().label("Confirm Password"),
    username: Joi.string().required().label("@handle"),
    name: Joi.string().required().label("Full Name"),
    number: Joi.string().required().label("Phone Number")
  }); 

  const validate = () => {
    const fields = { email, password, confirmPass, username, name, number };
    const { error } = Joi.validate(fields, schema); 

    if (!error) return null;
    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    if (errors.length !== 0) {
      return errors
    }
  }



  return (

    // <div>
    //   <h2>Register</h2>
      
    // </div>
    <div className={styles.container}>
      <div className={styles.registerFormContainer}>
        <form className={styles.registerForm}>
        {emailError && <p className={styles.errorMessage}>{emailError}</p>}
        {passwordError && <p className={styles.errorMessage}>{passwordError}</p>}
        {usernameError && <p className={styles.errorMessage}>{usernameError}</p>}
        {confirmPassError && <p className={styles.errorMessage}>{confirmPassError}</p>}
        {nameError && <p className={styles.errorMessage}>{nameError}</p>}
        {numberError && <p className={styles.errorMessage}>{numberError}</p>}
            <input className={styles.registerInput} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="text"/>
            <input className={styles.registerInput} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"/>
            <input className={styles.registerInput} value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} placeholder="Confirm Password" type="text"/>
            <input className={styles.registerInput} value={username} onChange={(e) => setUsername(e.target.value)} placeholder="@handle" type="text"/>
            <input className={styles.registerInput} value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" type="text"/>
            <input className={styles.registerInput} value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Phone Number" type="text"/>
          <button className={styles.registerUserButton} onClick={(e) => registerUser(e)}>Create</button>
        </form>
      </div>
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
          <input className={styles.input} placeholder={"Email"} type="text"/>
          <input className={styles.input} placeholder="Password" type="password"/>
          <button className={styles.button}>Welcome Back!</button>
          {/* <Link to="/register" className={styles.register}>Don't have an account? Register here.</Link> */}
        </form>
      </div>
    </div>
  )
}

export default Register