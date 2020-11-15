import React, { useEffect } from 'react';
import CenterNav from "../../components/organisms/CenterNav/index";

export default function Profile({ setNavTitle }) {

  useEffect(() => {
    document.title = `Profile | Informance`;
    setNavTitle("Profile")
  });

  return (
    <>
      {/* <CenterNav title={"Profile"} /> */}
    </>
  )
}