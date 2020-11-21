import React, { useEffect } from 'react';
import CenterNav from "../../components/organisms/CenterNav/index";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function Elections({ setNavTitle }) {

  useDocumentTitle(`Elections | Informance`)
  useEffect(() => {
    setNavTitle("Elections")
  });

  return (
    <>
      {/* <CenterNav title={"Elections"} /> */}
    </>
  )
}