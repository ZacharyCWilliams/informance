import React, { useEffect } from 'react';
import CenterNav from "../../components/organisms/CenterNav/index";

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