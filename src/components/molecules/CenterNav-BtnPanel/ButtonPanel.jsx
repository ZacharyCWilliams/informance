import React, { useState, useEffect } from "react";
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
        {showMessageCenter ? <DropdownPanel navItems={addPageMenu} sectionTitle={"Menu"} /> : null }
      </span>
      <span className="nav-drop-span">
        <Button icon={<NotificationsActiveIcon />} onClick={() => setShowNotifications(!showNotifications)} />
        {showNotifications ? <DropdownPanel navItems={addPageMenu} sectionTitle={"Menu"} /> : null }
      </span>
      <span className="nav-drop-span">
        <Button icon={<ArrowDropDownIcon />} onClick={() => setShowMenu(!showMenu)} />
        {showMenu ? <DropdownPanel navItems={addPageMenu} sectionTitle={"Menu"} /> : null }
      </span>
    </div>
  )
}

export default ButtonPanel