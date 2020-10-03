import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../scss/rightnav.scss';


export default function RightNav() {
  return (
    <Router>
      <div className="right-nav-container">
        <nav className="right-nav-div">
          <ul className="side-rightnav-ul">
            <div>
              <input type="text" placeholder="Search Informance" />
            </div>
            <Link className="side-rightnav-link" to="/groups">
              {/* <PersonIcon fontSize="large" className="nav-icon" /> */}
              <p className="side-rightnav-li">Community</p>
            </Link>
            <Link className="side-rightnav-link" to="/dating">
              {/* <PersonIcon fontSize="large" className="nav-icon" /> */}
              <p className="side-rightnav-li">Dating</p>
            </Link>
            {/* <Link className="side-nav-link" to="/profile">
              <PersonIcon fontSize="large" className="nav-icon" />
              <p className="side-nav-li">Dating</p>
            </Link> */}
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
