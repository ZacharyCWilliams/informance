import React, { useEffect } from 'react';
import CenterNav from "../../components/organisms/CenterNav/index";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function Trends({ setNavTitle }) {

  useDocumentTitle(`Discover | Informance`)
  useEffect(() => {
    setNavTitle("Discover")
  });

  return (
    <>
      {/* <CenterNav title={"Trends"} /> */}
    </>
  )
}