import React, { useEffect } from 'react';
import CenterNav from "../centernav";

export default function Elections() {

  useEffect(() => {
    document.title = `Elections | Informance`;
  });

  return (
    <>
      <CenterNav title={"Elections"} />
    </>
  )
}