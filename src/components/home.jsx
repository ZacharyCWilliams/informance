import React from 'react';
import'../scss/home.scss';
import Navbar from "./navbar";
import Content from "./content";
import RightNav from "./rightnav";

export default function Home() {
  return (
    <div className="container">
      <section className="left-navbar-section">
        <Navbar />
      </section>
      <section className="content-section">
        <Content />
      </section>
      <section className="right-nav-section">
        <RightNav />
      </section>
    </div>
  )
}