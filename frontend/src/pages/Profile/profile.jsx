import React, { useState, useEffect, useRef } from 'react';
import CenterNav from "../../components/organisms/CenterNav/index";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import styles from "./profile.module.css";
import EditProfile from "../EditProfile/EditProfile";
import useClickOutside from "../../hooks/useClickOutside";
import axios from "axios";

export default function Profile({ setNavTitle, userData }) {
  const ref = useRef();
  const [editProfile, setEditProfile] = useState(false)

  useDocumentTitle(`Profile | Informance`);
  useEffect(() => {
    setNavTitle("Profile")
    console.log(userData)
  });

  useClickOutside(ref, () => setEditProfile(false));

  //  const getUserInfo = async () => {
  //    console.log("local storage", localStorage)
  //   try { 
  //     const { data } = await axios.post("http://localhost:4000/user")
  //     console.log(data)
  //   } catch (error) {
  //     console.log(error)
  //     throw error;
  //   }
  // }

  // getUserInfo();
  return (
    <div className={styles.container}>
      {/* <CenterNav title={"Profile"} /> */}
      {editProfile && 
      <div ref={ref}>
        <EditProfile />
      </div>}
    <div className={styles.coverPhotoContainer}>
        <img className={styles.coverPhoto} src="https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
    </div>

    <img className={styles.profilePhoto} src="https://pbs.twimg.com/profile_images/1218653607479762944/0O51r6lq_400x400.jpg" alt=""/>
    <button onClick={() => setEditProfile(true)} className={styles.editButton}>Edit Profile</button>

    <div className={styles.infoContainer}>
      <h2 className={styles.name}>Zachary Williams</h2>
      <p className={styles.handle}>@zachwilliams</p>
      <div className={styles.bioContainer}>
        <p className={styles.bio}>Hey this is my bio.</p>
      </div>
      <div className={styles.info}>
        <p className={styles.infoParagraph}>Mountain View, CA</p>
        <p className={styles.infoParagraph}>Born July 2, 1994</p>
        <p className={styles.infoParagraph}>Joined November 2020</p>
      </div>
      <div className={styles.followSection}>
        <div className={styles.followSectionDiv}>
          <p className={styles.followParagraph}>1200 </p>
          <p className={styles.wordFollow}>Following</p>
        </div>
        <div className={styles.followSectionDiv}>
          <p className={styles.followParagraph}>10,000,000</p> 
          <p className={styles.wordFollow}>Followers</p>
        </div>
      </div>
      <div className={styles.buttonSection}>
        <button className={styles.bottomButton}>Posts</button>
        <button className={styles.bottomButton}>Comments</button>
        <button className={styles.bottomButton}>Media</button>
        <button className={styles.bottomButton}>Likes</button>
      </div>
    </div>
    </div>
  )
}