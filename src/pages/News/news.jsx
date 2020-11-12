import React, { useEffect } from 'react';
import CenterNav from "../centernav";

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