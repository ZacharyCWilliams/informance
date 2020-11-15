import React, { useEffect } from 'react';
import CenterNav from "../../components/organisms/CenterNav/index";

export default function Polls({ setNavTitle }) {

  useEffect(() => {
    document.title = `Polls | Informance`;
    setNavTitle("Polls")
  });

  return (
    <>
      {/* <CenterNav title={"Polls"} /> */}
    </>
  )
}