import React, { useEffect } from 'react';
import CenterNav from "../../components/organisms/CenterNav/index";
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