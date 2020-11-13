import React, { useState } from "react";
import Button from "../../atoms/Center-Nav-Button/Button";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddIcon from '@material-ui/icons/Add';
import LocalPostOfficeOutlinedIcon from '@material-ui/icons/LocalPostOfficeOutlined';
import DropdownPanel from "../../atoms/CenterNav/DropdownPanel/DropdownPanel"
import PostAddIcon from '@material-ui/icons/PostAdd';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import SubjectOutlinedIcon from '@material-ui/icons/SubjectOutlined';

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
  ]

  // const messageCenterMenu = [

  // ]

  // const notificationMenu = [

  // ]

  // const extraMenu = [

  // ]

  const handleAddPage = () => {
    setShowMessageCenter(false)
    setShowNotifications(false)
    setShowMenu(false)
    setAddPage(!addPage)
  }

  const handleMessageCenterClick = () => {
    setAddPage(false)
    setShowNotifications(false)
    setShowMenu(false)
    setShowMessageCenter(!showMessageCenter)
    console.log(showMessageCenter)
  }

  const handleNotificationClick = () => {
    setAddPage(!setShowNotifications)
    console.log(showNotifications)
  }

  const handleMenuClick = () => {
    setAddPage(!setShowMenu)
    console.log(showMenu)
  }

  return (
    <div className="placeholder-navigation">
      <span className="nav-drop-span">
        <Button icon={<AddIcon />} onClick={handleAddPage} />
        {addPage ? <DropdownPanel navItems={addPageMenu} sectionTitle={"Create"} /> : null }
      </span>
      <span className="nav-drop-span">
        <Button icon={<LocalPostOfficeOutlinedIcon />} onClick={handleMessageCenterClick} />
      </span>
      <span className="nav-drop-span">
        <Button icon={<NotificationsActiveIcon />} onClick={handleNotificationClick} />
      </span>
      <span className="nav-drop-span">
        <Button icon={<ArrowDropDownIcon />} onClick={handleMenuClick} />
      </span>
    </div>
  )
}

export default ButtonPanel