import React, { useState, useEffect } from 'react';
import'./home.scss';
// import Navbar from "../../components/organisms/LeftNav/navbar";
import Content from "../Content/content";
// import RightNav from "../../components/organisms/RightNav/rightnav";
import CenterNav from "../../components/organisms/CenterNav/centernav.jsx";
import LeftNav from "../../components/molecules/LeftNav/LeftNav"

// left nav icons
import HomeWorkTwoToneIcon from '@material-ui/icons/HomeWorkTwoTone';
import TimelineIcon from '@material-ui/icons/Timeline';
import PollTwoToneIcon from '@material-ui/icons/PollTwoTone';
import ListAltTwoToneIcon from '@material-ui/icons/ListAltTwoTone';
import GavelIcon from '@material-ui/icons/Gavel';
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import BookTwoToneIcon from '@material-ui/icons/BookTwoTone';

import { useHistory } from "react-router-dom";

export default function Home(props) {
  const [navTitle, setNavTitle] = useState("Home")
  const [userData, setUserData] = useState(null)
  let history = useHistory()

  const links = [
    { icon: <HomeWorkTwoToneIcon fontSize="large" />, title: "Home", path: "/home"},
    { icon: <BookTwoToneIcon fontSize="large" />, title: "News", path: "/news"},
    { icon: <TimelineIcon fontSize="large" /> , title: "Discover", path: "/discover"},
    { icon: <PollTwoToneIcon fontSize="large" />, title: "Polls", path: "/polls"},
    { icon: <ListAltTwoToneIcon fontSize="large" />, title: "Lists", path: "/lists"},
    { icon: <GavelIcon fontSize="large" />, title: "Law", path: "/law"},
    { icon: <PersonOutlineTwoToneIcon fontSize="large" />, title: "Profile", path: "/profile"},
    // { title: "Law", path: "/law"},
  ]

 

  useEffect(() => {
    console.log(history)
  })

  // useEffect(() => {
  //   if (history.state.location) {     
  //     const data = history.state.location.userData;
  //     setUserData(data)
  //     console.log(userData)
  //   }
  // }, [history])

  return (
    <section>
      <CenterNav title={navTitle} />
      <div className="container">
        <section className="left-navbar-section">
          {/* <Navbar /> */}
          <LeftNav links={links} />
        </section>
        <section className="content-section">
          <Content title={navTitle} setNavTitle={setNavTitle} />
        </section>
        <section className="right-nav-section">
          {/* <RightNav /> */}
        </section>
      </div>
    </section> 
  )
}