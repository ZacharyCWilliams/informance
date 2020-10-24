import React, { useEffect } from 'react';
import CenterNav from "../centernav";

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