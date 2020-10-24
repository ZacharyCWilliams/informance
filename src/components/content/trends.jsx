import React, { useEffect } from 'react';
import CenterNav from "../centernav";

export default function Trends({ setNavTitle }) {

  useEffect(() => {
    document.title = `Trends | Informance`;
    setNavTitle("Trends")
  });

  return (
    <>
      {/* <CenterNav title={"Trends"} /> */}
    </>
  )
}