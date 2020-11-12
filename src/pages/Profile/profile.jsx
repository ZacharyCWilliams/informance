import React, { useEffect } from 'react';
import CenterNav from "../centernav";

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