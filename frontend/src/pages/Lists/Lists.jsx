import React, { useEffect } from 'react';
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Lists = ({ setNavTitle }) => {

  useDocumentTitle(`Lists | Informance`)
  useEffect(() => {
    setNavTitle("Lists")
  });

  return (
    <>
    </>
  );
}

export default Lists;