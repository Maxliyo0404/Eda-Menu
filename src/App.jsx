import "./App.css";
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Pages/MenuPages/MenuPages";


function App() {
  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="menu" element = {<Menu/>}/>
        <Route path="news" element = {<ServicesPages/>}/>
        <Route path="about" element = {<CompanyPages/>}/>

      </Route>
    </Routes>
       </BrowserRouter>

    </>
  )
   
}

export default App