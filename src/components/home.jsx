import React from 'react';
import'../scss/home.scss';
import Navbar from "./navbar";
import RightNav from "./rightnav";

export default function Home() {
  return (
    <div className="container">
      <div>
        <Navbar />
        {/* <Content /> */}
        <RightNav />
      </div>
    </div>
  )
}