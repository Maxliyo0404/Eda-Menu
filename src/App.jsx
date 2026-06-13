import "./App.css";
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import MenuPages from "./Pages/MenuPages/MenuPages";
import AboutPages from "./Pages/AboutPages/AboutPages";
import NewsPages from "./Pages/NewsPages/NewsPages";



function App() {
  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="menu" element = {<MenuPages/>}/>
        <Route path="news" element = {<AboutPages/>}/>
        <Route path="about" element = {<NewsPages/>}/>
      </Route>
    </Routes>
       </BrowserRouter>

    </>
  )
   
}

export default App