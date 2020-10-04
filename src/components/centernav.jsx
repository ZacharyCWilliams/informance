import React from 'react';
import "../scss/centernav.scss";

export default function CenterNav( { title } ) {
  return (
    <nav className="center-nav-container">
      <h1 className="center-nav-title">{title}</h1>
    </nav>
  )
}