import React, { useEffect } from 'react';
import CenterNav from "../../components/organisms/CenterNav/index";
import PostContent from "../Post/postcontent";
import DropdownPanel from "../../components/atoms/CenterNav/DropdownPanel/DropdownPanel";
import DropdownLink from "../../components/atoms/CenterNav/DrowndownLink/DropdownLink";
import StoryPanel from "../../components/molecules/StoryPanel/StoryPanel";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function Dashboard({ setNavTitle }) {

  useDocumentTitle(`Home | Informance`)
  useEffect(() => {
    setNavTitle("Home")
  });

  return (
    <>
      <PostContent />
      <StoryPanel />
    </>
  )
}