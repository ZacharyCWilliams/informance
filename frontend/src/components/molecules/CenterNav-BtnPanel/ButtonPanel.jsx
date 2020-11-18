import React, { useState, useEffect } from "react";
import Button from "../../atoms/Center-Nav-Button/Button";
import { useHistory } from "react-router-dom";
// menu icons
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddIcon from '@material-ui/icons/Add';
import LocalPostOfficeOutlinedIcon from '@material-ui/icons/LocalPostOfficeOutlined';
import DropdownPanel from "../../atoms/CenterNav/DropdownPanel/DropdownPanel"
// add page icons
import PostAddIcon from '@material-ui/icons/PostAdd';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import SubjectOutlinedIcon from '@material-ui/icons/SubjectOutlined';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

// show menu icons

import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

const ButtonPanel = () => {

  const [addPage, setAddPage] = useState(false)
  const [showMessageCenter, setShowMessageCenter] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const addPageMenu = [
    { title: "Post", tagline: "Create a post", icon: <PostAddIcon fontSize="large" />, onClick: () => console.log("post button clicked") },
    { title: "Story", tagline: "Share a story", icon: <BookOutlinedIcon fontSize="large" />, onClick: () => console.log("story button clicked") },
    { title: "Fundraiser", tagline: "Raise money for a cause you care about.", icon: <PaymentOutlinedIcon fontSize="large" />, onClick: () => console.log("fundraiser button clicked") },
    { title: "Petition", tagline: "Start a petition to build awareness and enact change.", icon: <SubjectOutlinedIcon fontSize="large" />, onClick: () => console.log("Petition button clicked") },
    { title: "Blog", tagline: "Create a blog. Share insights and thoughts through writing.", icon: <CreateOutlinedIcon fontSize="large" />, onClick: () => console.log("Petition button clicked") },
    { title: "Video Channel", tagline: "Create a video channel.", icon: <CameraAltOutlinedIcon fontSize="large" />, onClick: () => console.log("Petition button clicked") },
  ]

  // const messageCenterMenu = [

  // ]

  // const notificationMenu = [

  // ]
  // let history = useHistory();

  // const logoutUser = () => {
  //   localStorage.clear();
  //   history.push("/login")
  // }

  const extraMenu = [
    { title: "Profile", tagline: "See your profile", icon: <AccountCircleOutlinedIcon fontSize="large" />, onClick: () => console.log("post button clicked") },
    { title: "Dark Mode", tagline: "Toggle Dark Mode", icon: <Brightness2OutlinedIcon fontSize="large" />, onClick: () => console.log("story button clicked") },
    { title: "Settings", tagline: "View Settings", icon: <SettingsOutlinedIcon fontSize="large" />, onClick: () => console.log("fundraiser button clicked") },
    { title: "Help Center", tagline: "Need help? Try our support center.", icon: <HelpOutlineOutlinedIcon fontSize="large" />, onClick: () => console.log("Petition button clicked") },
    { title: "Log Out", tagline: "We'll miss you.", icon: <ExitToAppOutlinedIcon fontSize="large" />, onClick: () => console.log("logout clicked") },
  ]

  document.body.addEventListener("click", () => {
    setAddPage(false);
    setShowMessageCenter(false)
    setShowNotifications(false)
    setShowMenu(false)
  })

  useEffect(() => {

    // menu swapping logic
  if (showMenu) {
    setAddPage(false)
    setShowNotifications(false)
    setShowMessageCenter(false)
    console.log("show menu: ", showMenu)
  }

  if (addPage) {
    setShowMessageCenter(false)
    setShowNotifications(false)
    setShowMenu(false)
    console.log("add page: ", addPage)
  }

  if (showMessageCenter) {
    setAddPage(false)
    setShowNotifications(false)
    setShowMenu(false)
    console.log("show message center: ", showMessageCenter)
  }

  if (showNotifications) {
    setShowMessageCenter(false)
    setAddPage(false)
    setShowMenu(false)
    console.log("show notifications: ", showNotifications)
  }

  }, [showMenu, addPage, showMessageCenter, showNotifications])

  return (
    <div className="placeholder-navigation">
      <span className="nav-drop-span">
        <Button icon={<AddIcon />} onClick={() => setAddPage(!addPage)} />
        {addPage ? <DropdownPanel navItems={addPageMenu} sectionTitle={"Create"} /> : null }
      </span>
      <span className="nav-drop-span">
        <Button icon={<LocalPostOfficeOutlinedIcon />} onClick={() => setShowMessageCenter(!showMessageCenter)} />
        {showMessageCenter ? <DropdownPanel navItems={addPageMenu} sectionTitle={"Messages"} /> : null }
      </span>
      <span className="nav-drop-span">
        <Button icon={<NotificationsActiveIcon />} onClick={() => setShowNotifications(!showNotifications)} />
        {showNotifications ? <DropdownPanel navItems={addPageMenu} sectionTitle={"Notifications"} /> : null }
      </span>
      <span className="nav-drop-span">
        <Button icon={<ArrowDropDownIcon />} onClick={() => setShowMenu(!showMenu)} />
        {showMenu ? <DropdownPanel navItems={extraMenu} sectionTitle={"Menu"} /> : null }
      </span>
    </div>
  )
}

export default ButtonPanel