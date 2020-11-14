import React, { useState } from 'react';
import'./home.scss';
// import Navbar from "../../components/organisms/LeftNav/navbar";
import Content from "../Content/content";
// import RightNav from "../../components/organisms/RightNav/rightnav";
import CenterNav from "../../components/organisms/CenterNav/centernav.jsx";
import LeftNav from "../../components/molecules/LeftNav/LeftNav"

export default function Home() {
  const [navTitle, setNavTitle] = useState("Home")

  const links = [
    { title: "Home", path: "/"},
    { title: "News", path: "/news"},
    { title: "Trends", path: "/trends"},
    { title: "Polls", path: "/polls"},
    { title: "Lists", path: "/lists"},
    { title: "Law", path: "/law"},
    { title: "Profile", path: "/profile"},
    // { title: "Law", path: "/law"},
  ]

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