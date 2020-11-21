import React, { useEffect } from 'react';
import CenterNav from "../../components/organisms/CenterNav/index";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function Law({ setNavTitle }) {
  
  useDocumentTitle(`Legal | Informance`)
  useEffect(() => {
    setNavTitle("Legal")
  });

  return (
    <>
      {/* <CenterNav title={"Judges"} /> */}
    </>
  )
}