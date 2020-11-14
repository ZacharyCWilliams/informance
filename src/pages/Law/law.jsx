import React, { useEffect } from 'react';
import CenterNav from "../../components/organisms/CenterNav/index";

export default function Law({ setNavTitle }) {
  
  useEffect(() => {
    document.title = `Legal | Informance`;
    setNavTitle("Legal")
  });

  return (
    <>
      {/* <CenterNav title={"Judges"} /> */}
    </>
  )
}