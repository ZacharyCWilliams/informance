import React, { useEffect } from 'react';
import CenterNav from "../centernav";

export default function News() {

  useEffect(() => {
    document.title = `News | Informance`;
  });

  return (
    <>
      <CenterNav title={"News"} />
    </>
  )
}