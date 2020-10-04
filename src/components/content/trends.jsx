import React, { useEffect } from 'react';
import CenterNav from "../centernav";

export default function Trends() {

  useEffect(() => {
    document.title = `Trends | Informance`;
  });

  return (
    <>
      <CenterNav title={"Trends"} />
    </>
  )
}