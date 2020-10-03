import React from 'react';
import'../scss/home.scss';
import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="container">
      <div>
        <Navbar />
        {/* <Content /> */}
      </div>
    </div>
  )
}