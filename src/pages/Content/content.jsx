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

export default function Content({ title, setNavTitle }) {
  return (
    <Switch>
      <Route path="/news">
        <News title="News" setNavTitle={setNavTitle} />
      </Route>
      <Route path="/trends">
        <Trends title="Trends" setNavTitle={setNavTitle}  />
      </Route>
      <Route exact path="/">
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