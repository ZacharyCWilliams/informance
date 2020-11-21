import React, { useEffect } from 'react';
import CenterNav from "../../components/organisms/CenterNav/index";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function Polls({ setNavTitle }) {

  useDocumentTitle(`Polls | Informance`)
  useEffect(() => {
    setNavTitle("Polls")
  });

  return (
    <>
      {/* <CenterNav title={"Polls"} /> */}
    </>
  )
}