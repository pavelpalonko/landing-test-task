import React from "react";
import SectionExamples from "../component/UI/SectionExamples/SectionExamples";
import SectionForm from "../component/UI/SectionForm/SectionForm";
import SectionInfo from "../component/UI/SectionInfo/SectionInfo";
import SectionPreview from "../component/UI/SectionPreview/SectionPreview";
import SectionService from "../component/UI/SectionServices/SectionServices";
import SectionSlider from "../component/UI/SectionSlider/SectionSlider";

const MainPage = () => {

  return (
    <main>
      <SectionPreview/>
      <SectionService/>
      <SectionSlider/>
      <SectionExamples/>
      <SectionInfo/>
      <SectionForm/>
    </main>
  )
}

export default MainPage