import "./Layout.css";
import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
function Layout() {
  return (
    <div className="layout">
      <main>
        <Header/>
        <Outlet/>
        <Footer/>
      </main>
    </div>
  )
}

export default Layout