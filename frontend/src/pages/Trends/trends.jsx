import React, { useEffect } from 'react';
import CenterNav from "../../components/organisms/CenterNav/index";

export default function Trends({ setNavTitle }) {

  useEffect(() => {
    document.title = `Discover | Informance`;
    setNavTitle("Discover")
  });

  return (
    <>
      {/* <CenterNav title={"Trends"} /> */}
    </>
  )
}