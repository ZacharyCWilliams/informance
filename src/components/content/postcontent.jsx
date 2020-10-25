import React, { useState } from 'react'
import "./postcontent.scss";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';



export default function PostContent() {
    return (
      <section className="post-content-section">
        <div className="post-section">
          <img className="profile-avatar" src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" alt=""/>
          <input className="post-input" placeholder="What's happening?" type="text"/>
          <button className="send-post-button">Post</button>
        <div className="attachment-section">
          <button className="post-section-icon">
            <ImageOutlinedIcon fontSize="large" />
          </button>
          <button className="post-section-icon">
            <VideocamOutlinedIcon fontSize="large" />
          </button>
          <button className="post-section-icon">
            <GifOutlinedIcon fontSize="large" />
          </button>
          <button className="post-section-icon">
            <ScheduleOutlinedIcon fontSize="large" />
          </button>
        </div>
        </div>
      </section>
    )
}
