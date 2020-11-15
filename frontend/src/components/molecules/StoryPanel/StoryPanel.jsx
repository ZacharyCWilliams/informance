import React from "react";
import styles from "./StoryPanel.module.css";

const StoryPanel = ({ children }) => (
    <div className={styles.container}>
      {children ? children : null }
    </div>
  )

export default StoryPanel