import React, { useState } from "react";
import ButtonPanel from "../../atoms/PostSectionButton/PostButton";
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';

const PostSectionPanel = () => {

  // const [addPage, setAddPage] = useState(false)
  // const [showMessageCenter, setShowMessageCenter] = useState(false)
  // const [showNotifications, setShowNotifications] = useState(false)
  // const [showMenu, setShowMenu] = useState(false)

  // const handleAddPage = () => {
  //   setShowMessageCenter(false)
  //   setShowNotifications(false)
  //   setShowMenu(false)
  //   setAddPage(!addPage)
  //   console.log(addPage)
  // }

  // const handleMessageCenterClick = () => {
  //   setAddPage(false)
  //   setShowNotifications(false)
  //   setShowMenu(false)
  //   setShowMessageCenter(!showMessageCenter)
  //   console.log(showMessageCenter)
  // }

  // const handleNotificationClick = () => {
  //   setAddPage(!setShowNotifications)
  //   console.log(showNotifications)
  // }

  // const handleMenuClick = () => {
  //   setAddPage(!setShowMenu)
  //   console.log(showMenu)
  // }

  return (
    <div className="placeholder-navigation">
      <span className="nav-drop-span">
        <ButtonPanel icon={<ImageOutlinedIcon fontSize="large" />} />
      </span>
      <span className="nav-drop-span">
        <ButtonPanel icon={<VideocamOutlinedIcon fontSize="large" />} />
      </span>
      <span className="nav-drop-span">
        <ButtonPanel icon={<PollOutlinedIcon fontSize="large" />} />
      </span>
      <span className="nav-drop-span">
        <ButtonPanel icon={<ScheduleOutlinedIcon fontSize="large" />} />
      </span>
    </div>
  )
}

export default PostSectionPanel