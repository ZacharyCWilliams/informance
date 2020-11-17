import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from "react-router-dom"
import Home from "./pages/Home/index";
import Login from "./pages/Authentication/Login/Login";
import Register from "./pages/Authentication/Register/Register";
import './App.css';


function App() {

  // background #36393f
  // color #72767d

  const [loggedIn, setLoggedIn] = useState(false);
  let history = useHistory()

  // let userLoggedIn = () => {
  //   if (loggedIn) {
  //     return <Home />
  //   } else {
  //     return <Login />
  //   }
  // }

  useEffect(() => {
    // if (!loggedIn) history.push("/login")
  }, [loggedIn])


  return (
       <Switch>
         <Route path="/login">
          <Login logUserIn={setLoggedIn} />
        </Route>
        <Route path="/register">
          <Register logUserIn={setLoggedIn} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  );
}

export default App;
// <div className="App">
{/* <Home /> */}
    {/* </div> */}


   
