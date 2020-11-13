import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from "./centernav.module.css";
import { Link } from "react-router-dom"
import SettingsIcon from '@material-ui/icons/Settings';
import Placeholder from "../../../assets/placeholder-nav.png";
import SearchIcon from '@material-ui/icons/Search';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchBar from "../../atoms/SearchBar/searchbar";
// import ForumIcon from "@material-ui/icons/Forum";
// import MessageIcon from '@material-ui/icons/Message';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
// import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import AddIcon from '@material-ui/icons/Add';
// import LocalPostOfficeOutlinedIcon from '@material-ui/icons/LocalPostOfficeOutlined';
// import Button from "../../atoms/Center-Nav-Button/Button";
import ButtonPanel from "../../molecules/CenterNav-BtnPanel/ButtonPanel";




export default function CenterNav( { title } ) {

  const [ focus, setFocus ] = useState(false)

  const focusSearch = () => {
    setFocus(true)
  }

  const relaxSearch = () => {
    setFocus(false)
  }

  return (
    <nav className={styles.container}>
      {/* <div>
        <p className="center-nav-logo">Informance</p>
      </div> */}
      <div className="left-center-nav-section">
        <Link className="center-nav-logo" to="/">
          <svg viewBox="0 0 36 36" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4" fill="url(#jsc_c_2)" height="40" width="40"><defs><linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jsc_c_2"><stop offset="0%" stop-color="#0062E0"></stop><stop offset="100%" stop-color="#19AFFF"></stop></linearGradient></defs><path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path><path class="p361ku9c" d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"></path></svg>
        </Link>
      </div>
      {/* <Link className="center-nav-settings" to="/settings">
        <SettingsIcon fontSize="large"/>
      </Link> */}
      <div className={styles.centerContainer}>
        <h1 className={styles.title}>{title}</h1>
        {/* Messages, Notifications, Settings, Add Channel */}
        <ButtonPanel />
      </div>
      <div className="right-center-nav-section">
        <form className="rightnav-search-container">
              <span className={focus ? "search-icon-center-focus" : "search-icon-center"}>
                <SearchIcon className="search-icon-center-nav" />
              </span>
              <input
                className="rightnav-input"
                type="text"
                placeholder={`Search Informance`}
                onFocus={() => focusSearch()}
                onBlur={() => relaxSearch()}
              />
          </form>
      </div>
    </nav>
  )
}