import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./content/dashboard";
import Elections from "./content/elections";
import Law from "./content/law";
import News from "./content/news";
import Polls from "./content/polls";
import Trends from "./content/trends";
import Profile from "./content/profile";

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