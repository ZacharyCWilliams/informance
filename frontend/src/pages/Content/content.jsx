import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "../Dash/dashboard";
import Elections from "../Elections/elections";
import Law from "../Law/law";
import News from "../News/news";
import Polls from "../Polls/polls";
import Trends from "../Trends/trends";
import Profile from "../Profile/profile";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";

export default function Content({ title, setNavTitle }) {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Register />
      </Route>
      <Route path="/news">
        <News title="News" setNavTitle={setNavTitle} />
      </Route>
      <Route path="/discover">
        <Trends title="Discover" setNavTitle={setNavTitle}  />
      </Route>
      <Route path="/home">
        <Dashboard title="Home" setNavTitle={setNavTitle}  />
      </Route>
      <Route path="/elections">
        <Elections title="Elections" setNavTitle={setNavTitle}  />
      </Route>
      <Route path="/polls">
        <Polls title="Polls" setNavTitle={setNavTitle}  />
      </Route>
      <Route path="/law">
        <Law title={`Judges & Law`} setNavTitle={setNavTitle}  />
      </Route>
      <Route path="/profile">
        <Profile title="Profile" setNavTitle={setNavTitle}  />
      </Route>
    </Switch>
  )
}