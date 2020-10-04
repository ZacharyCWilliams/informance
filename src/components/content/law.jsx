import React, { useEffect } from 'react';
import CenterNav from "../centernav";

export default function Law() {
  
  useEffect(() => {
    document.title = `Judges | Informance`;
  });

  return (
    <>
      <CenterNav title={"Judges"} />
    </>
  )
}