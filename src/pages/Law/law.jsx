import React, { useEffect } from 'react';
import CenterNav from "../../components/organisms/CenterNav/index";

export default function Law({ setNavTitle }) {
  
  useEffect(() => {
    document.title = `Judges | Informance`;
    setNavTitle("Judges")
  });

  return (
    <>
      {/* <CenterNav title={"Judges"} /> */}
    </>
  )
}