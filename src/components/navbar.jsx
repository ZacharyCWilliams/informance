import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import navbar from "../scss/navbar.scss"
import HomeIcon from "@material-ui/icons/Home";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import BallotIcon from "@material-ui/icons/Ballot";
import BarChartIcon from "@material-ui/icons/BarChart";
import GavelIcon from "@material-ui/icons/Gavel";
import PersonIcon from "@material-ui/icons/Person";
import AnnouncementIcon from "@material-ui/icons/Announcement";

export default function Navbar() {
  return (
    <Router>
      <div className="navbar-container">
        <nav className="navbar-div">
          <ul className="side-nav-ul">
            <Link className="side-nav-link" to="/">
              <p className="side-nav-li">Informance</p>
            </Link>
            <Link className="side-nav-link" to="/">
              <HomeIcon fontSize="large" className="nav-icon" />
              <p className="side-nav-li">Home</p>
            </Link>
            <Link className="side-nav-link" to="/trends">
              <TrendingUpIcon fontSize="large" className="nav-icon" />
              <p className="side-nav-li">Trends</p>
            </Link>
            <Link className="side-nav-link" to="/news">
              <AnnouncementIcon fontSize="large" className="nav-icon" />
              <p className="side-nav-li">News</p>
            </Link>
            <Link className="side-nav-link" to="/elections">
              <BallotIcon fontSize="large" className="nav-icon" />
              <p className="side-nav-li">Elections</p>
            </Link>
            <Link className="side-nav-link" to="/polls">
              <BarChartIcon fontSize="large" className="nav-icon" />
              <p className="side-nav-li">Polls</p>
            </Link>
            <Link className="side-nav-link" to="/law">
              <GavelIcon fontSize="large" className="nav-icon" />
              <p className="side-nav-li">Judges</p>
            </Link>
            <Link className="side-nav-link" to="/profile">
              <PersonIcon fontSize="large" className="nav-icon" />
              <p className="side-nav-li">Profile</p>
            </Link>
            {/* </li> */}
            {/* <li className="side-nav-link">
              <Link to="/groups">Groups</Link>
            </li>
            <li className="side-nav-link">
              <Link to="/dating">Dating</Link>
            </li> */}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
}
