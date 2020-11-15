import React, { useState } from 'react'
import "./postcontent.scss";
// import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
// import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
// import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
// import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
// import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import PostSectionPanel from "../../components/molecules/PostSectionPanel/PostSectionPanel";
import PostContentPanel from "../../components/molecules/PostContentPanel/PostContentPanel"



export default function PostContent() {
    return (
      <section className="post-content-section">
        <div className="post-section">
          <img className="profile-avatar" src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" alt=""/>
          <textarea className="post-input" placeholder="What's happening?" type="text"/>
        </div>
        <div className="attachment-section">
          <div className="offset-panel">
            <PostSectionPanel />
          </div>
          <div className="post-content-section">
            <PostContentPanel />
          </div>
        </div>
      </section>
    )
}
