import React, { useEffect } from 'react';
import CenterNav from "../centernav";

export default function Elections({ setNavTitle }) {

  useEffect(() => {
    document.title = `Elections | Informance`;
    setNavTitle("Elections")
  });

  return (
    <>
      {/* <CenterNav title={"Elections"} /> */}
    </>
  )
}