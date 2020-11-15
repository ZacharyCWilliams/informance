import React from "react";
import styles from "./PostContentPanel.module.css";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

const PostContentPanel = () => {

  const style = {

  largeIcon: {
    fontSize: "3rem"
  },

};

  return (
    <div className={styles.container}>
      <button className={styles.cont}>
        <AddCircleOutlineOutlinedIcon fontSize="large" className={styles.continue} />
      </button>
      <button className={styles.sendPost}>Post</button>
    </div>
  )
}

export default PostContentPanel