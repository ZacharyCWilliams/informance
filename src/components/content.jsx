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

export default function Content() {
  return (
    <Switch>
      <Route path="/news">
        <News title="News" />
      </Route>
      <Route path="/trends">
        <Trends title="Trends"  />
      </Route>
      <Route exact path="/">
        <Dashboard title="Home"  />
      </Route>
      <Route path="/elections">
        <Elections title="Elections"  />
      </Route>
      <Route path="/polls">
        <Polls title="Polls"  />
      </Route>
      <Route path="/law">
        <Law title={`Judges & Law`}  />
      </Route>
      <Route path="/profile">
        <Profile title="Profile"  />
      </Route>
    </Switch>
  )
}