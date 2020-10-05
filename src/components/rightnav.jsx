import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../scss/rightnav.scss';
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import GroupIcon from "@material-ui/icons/Group";


export default function RightNav() {

  let searchIcon = <SearchIcon />

  return (
    <Router>
      <div className="right-nav-container">
        <nav className="right-nav-div">
          <ul className="side-rightnav-ul">
            <div className="rightnav-search-container">
              {/* <SearchIcon /> */}
              <input
                className="rightnav-input"
                type="text"
                placeholder="Search Informance"
              />
            </div>
            <div className="pc-compass-container">
              <Link className="rightnav-dna-btn" to="/political-dna">
                <h2>Take Political DNA Test</h2>
              </Link>
              {/* <h2 className="community-h2">Take Political DNA Test</h2> */}
              {/* <button className="pc-button">
                <h2 className="community-h2">Poltical DNA</h2>
                <img
                  src="https://i.imgur.com/stD0fhI.png"
                  alt=""
                  className="political-compass"
                />
              </button> */}
            </div>
            <div className="rightnav-middle-container">
              <h2 className="community-h2">Community</h2>
              <Link className="side-rightnav-link" to="/groups">
                <GroupIcon className="right-nav-icon" />
                <p className="side-rightnav-li">Groups</p>
              </Link>
              <Link className="side-rightnav-link" to="/dating">
                <FavoriteIcon className="right-nav-icon" />
                <p className="side-rightnav-li">Dating</p>
              </Link>
              <Link className="side-rightnav-link" to="/notifs">
                <NotificationsActiveIcon className="right-nav-icon" />
                <p className="side-rightnav-li">Notifications</p>
              </Link>
              <Link className="side-rightnav-link" to="/messages">
                <ForumIcon className="right-nav-icon" />
                <p className="side-rightnav-li">Messages</p>
              </Link>
            </div>
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
