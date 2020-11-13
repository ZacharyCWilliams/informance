import React from "react";
import styles from "./PostButton.module.css";

const PostButton = ({ icon, onClick }) => {
  return <button className={styles.postbutton} onClick={onClick}>{icon}</button>
}

export default PostButton