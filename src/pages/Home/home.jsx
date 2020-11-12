import React, { useState } from 'react';
import'./home.scss';
// import Navbar from "../../components/organisms/LeftNav/navbar";
import Content from "../Content/content";
// import RightNav from "../../components/organisms/RightNav/rightnav";
import CenterNav from "../../components/organisms/CenterNav/centernav.jsx";

export default function Home() {
  const [navTitle, setNavTitle] = useState("Home")
  return (
    <section>
      <CenterNav title={navTitle} />
      <div className="container">
        <section className="left-navbar-section">
          {/* <Navbar /> */}
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