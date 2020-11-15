import React, { useEffect } from 'react';
import CenterNav from "../../components/organisms/CenterNav/index";

export default function News({title, setNavTitle}) {

  useEffect(() => {
    document.title = `News | Informance`;
    setNavTitle("News")
  });

  return (
    <>
      {/* <CenterNav title={"News"} /> */}
    </>
  )
}