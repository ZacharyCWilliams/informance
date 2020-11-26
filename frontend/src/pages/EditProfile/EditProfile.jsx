import { setRef } from '@material-ui/core';
import React, { useState } from 'react';
import styles from "./EditProfile.module.css";

const EditProfile = () => {
  const [name, setName] = useState("")
  const [bio, setBio] = useState("")
  const [location, setLocation] = useState("")
  const [birthday, setBirthday] = useState("")
  // const [name, setName] = useState("")

  // document.addEventListener("Click", () => {
  //   setEditProfile(false)
  // })

  return (
    <div className={styles.modal}>
      <div className={styles.modalHeader}>
        <h2 className={styles.header}>Edit Profile</h2>
        <button className={styles.saveButton}>Save</button>
      </div>
      <button className={styles.coverButton}>
        <img className={styles.coverPhoto} src="https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
      </button>
      <button className={styles.profileButton}>
        <img className={styles.editPhoto} src="https://pbs.twimg.com/profile_images/1218653607479762944/0O51r6lq_400x400.jpg" alt=""/>
      </button>
      <input placeholder={"Name"} className={styles.modalInput} onChange={(e) => setName(e.target.value)} type="text"/>
      <input placeholder={"Bio"} className={styles.modalInput} onChange={(e) => setBio(e.target.value)} type="text"/>
      <input placeholder={"Location"} className={styles.modalInput} onChange={(e) => setLocation(e.target.value)} type="text"/>
      <input placeholder={"Birthday"} className={styles.modalInput} onChange={(e) => setBirthday(e.target.value)} type="text"/>
    </div>
  );
}

export default EditProfile;