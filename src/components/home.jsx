import React, { useState } from 'react';
import'../scss/home.scss';
import Navbar from "./navbar";
import Content from "./content";
import RightNav from "./rightnav";
import CenterNav from "./centernav";

export default function Home() {
  const [navTitle, setNavTitle] = useState("Home")
  return (
    <section>
      <CenterNav title={navTitle} />
      <div className="container">
        <section className="left-navbar-section">
          <Navbar />
        </section>
        <section className="content-section">
          <Content title={navTitle} setNavTitle={setNavTitle} />
        </section>
        <section className="right-nav-section">
          <RightNav />
        </section>
      </div>
    </section> 
  )
}