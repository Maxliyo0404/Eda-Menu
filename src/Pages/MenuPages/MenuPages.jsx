import "./MenuPages.css";
import React from 'react'
import Hero from "../../Components/Hero/Hero";
import SectionOne from "../../Components/Main/SectionOne/SectionOne";
import SectionTwo from "../../Components/Main/SectionTwo/SectionTwo";
import SectionThree from "../../Components/Main/SectionThree/SectionThree";
function MenuPages() {
  return (
    <>
     <Hero/>
     <SectionOne/>
     <SectionTwo/>
     <SectionThree/>
    </>
  )
}

export default MenuPages