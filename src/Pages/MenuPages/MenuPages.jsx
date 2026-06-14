import "./MenuPages.css";
import React from 'react'
import Hero from "../../Components/Hero/Hero";
import SectionOne from "../../Components/Main/SectionOne/SectionOne";
import SectionTwo from "../../Components/Main/SectionTwo/SectionTwo";
import SectionThree from "../../Components/Main/SectionThree/SectionThree";
import SectionFour from "../../Components/Main/SectionFour/SectionFour";
import SectionFive from "../../Components/Main/SectionFive/SectionFive";
import SectionSix from "../../Components/Main/SectionSix/SectionSix";
function MenuPages() {
  return (
    <>
     <Hero/>
     <SectionOne/>
     <SectionTwo/>
     <SectionThree/>
     <SectionFour/>
     <SectionFive/>
     <SectionSix/>
    </>
  )
}

export default MenuPages