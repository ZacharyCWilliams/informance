import React, { useEffect } from 'react';
import CenterNav from "../centernav";

export default function Profile() {

  useEffect(() => {
    document.title = `Profile | Informance`;
  });

  return (
    <>
      <CenterNav title={"Profile"} />
    </>
  )
}