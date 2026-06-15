import "./Layout.css";
import React from 'react'
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

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