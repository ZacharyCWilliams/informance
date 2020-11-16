import React from 'react';
import { Switch, Route } from "react-router-dom"
import Home from "./pages/Home/index";
import Login from "./pages/Authentication/Login/Login";
import Register from "./pages/Authentication/Register/Register";
import './App.css';


function App() {

  return (
    <div className="App">
      <Switch>
         <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
