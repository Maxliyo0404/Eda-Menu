import "./Layout.css";
import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <div className="layout">
      <main>
        <Outlet/>
        <Footer/>
      </main>
    </div>
  )
}

export default Layout