import React, { useState } from 'react'
import "./postcontent.scss";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";



export default function PostContent() {
    return (
      <section className="post-content-section">
        <div className="post-section">
          <img className="profile-avatar" src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" alt=""/>
          <input className="post-input" placeholder="What's happening?" type="text"/>
        </div>
        <div className="attachment-section">
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </section>
    )
}
