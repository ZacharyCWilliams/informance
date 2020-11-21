import { setRef } from '@material-ui/core';
import React, { useState } from 'react';
import styles from "./EditProfile.module.css";

const EditProfile = () => {

  const [name, setName] = useState("")
  const [bio, setBio] = useState("")
  const [location, setLocation] = useState("")
  const [birthday, setBirthday] = useState("")
  // const [name, setName] = useState("")

  return (
    <div className={styles.modal}>
      <div className={styles.modalHeader}>
        <h2 className={styles.header}>Edit Profile</h2>
        <button className={styles.saveButton}>Save</button>
      </div>
      <input placeholder={"Name"} className={styles.modalInput} onChange={(e) => setName(e.target.value)} type="text"/>
      <input placeholder={"Bio"} className={styles.modalInput} onChange={(e) => setBio(e.target.value)} type="text"/>
      <input placeholder={"Location"} className={styles.modalInput} onChange={(e) => setLocation(e.target.value)} type="text"/>
      <input placeholder={"Birthday"} className={styles.modalInput} onChange={(e) => setBirthday(e.target.value)} type="text"/>
    </div>
  );
}

export default EditProfile;