import React, { useEffect } from 'react';
import CenterNav from "../centernav";
import PostContent from "../Post/postcontent";

export default function Dashboard({ setNavTitle }) {

  useEffect(() => {
    document.title = `Home | Informance`;
    setNavTitle("Home")
  });

  return (
    <>
     <PostContent />
    </>
  )
}