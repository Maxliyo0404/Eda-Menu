import "./App.css";
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import MenuPages from "./Pages/MenuPages/MenuPages";
import AboutPages from "./Pages/AboutPages/AboutPages";
import NewsPages from "./Pages/NewsPages/NewsPages";
import CantactPages from "./Pages/ContactPages/ContactPages";


function App() {
  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="menu" element = {<MenuPages/>}/>
        <Route path="news" element = {<NewsPages/>}/>
        <Route path="about" element = {<AboutPages/>}/>
        <Route path="contact" element = {<CantactPages/>}/>
      </Route>
    </Routes>
       </BrowserRouter>

    </>
  )
   
}

export default App