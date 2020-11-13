import React, { useEffect } from 'react';
import CenterNav from "../../components/organisms/CenterNav/index";
import PostContent from "../Post/postcontent";
import DropdownPanel from "../../components/atoms/CenterNav/DropdownPanel/DropdownPanel";
import DropdownLink from "../../components/atoms/CenterNav/DrowndownLink/DropdownLink";

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