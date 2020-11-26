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
import Lists from "../Lists/Lists";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";

export default function Content({ title, setNavTitle, userData }) {
  console.log(userData)
  return (
    <Switch>
      <Route path="/news">
        <News title="News" setNavTitle={setNavTitle} userData={userData} />
      </Route>
      <Route path="/discover">
        <Trends title="Discover" setNavTitle={setNavTitle} userData={userData}  />
      </Route>
      <Route path="/home">
        <Dashboard title="Home" setNavTitle={setNavTitle} userData={userData}  />
      </Route>
      <Route path="/elections">
        <Elections title="Elections" setNavTitle={setNavTitle} userData={userData}  />
      </Route>
      <Route path="/polls">
        <Polls title="Polls" setNavTitle={setNavTitle} userData={userData}  />
      </Route>
      <Route path="/law">
        <Law title={`Judges & Law`} setNavTitle={setNavTitle} userData={userData}  />
      </Route>
      <Route path="/lists">
        <Lists title={`Lists`} setNavTitle={setNavTitle} userData={userData}  />
      </Route>
      <Route path="/profile">
        <Profile title="Profile" setNavTitle={setNavTitle} userData={userData}  />
      </Route>
    </Switch>
  )
}