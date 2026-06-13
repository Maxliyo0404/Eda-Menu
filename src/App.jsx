import "./App.css";
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Componenets/Layout/Layout";
import MenuPages from "./Pages/MenuPages/MenuPages";



function App() {
  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="menu" element = {<MenuPages/>}/>
        <Route path="news" element = {<ServicesPages/>}/>
        <Route path="about" element = {<CompanyPages/>}/>

      </Route>
    </Routes>
       </BrowserRouter>

    </>
  )
   
}

export default App