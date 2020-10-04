import React, { useEffect } from 'react';
import CenterNav from "../centernav";

export default function Polls() {

  useEffect(() => {
    document.title = `Polls | Informance`;
  });

  return (
    <>
      <CenterNav title={"Polls"} />
    </>
  )
}