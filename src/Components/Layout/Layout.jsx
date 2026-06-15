import "./Layout.css";
import React from 'react'
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function Layout() {
  return (
    <div className="layout">
      <main>
        <Header/>
        <Outlet/>
     
      </main>
    </div>
  )
}

export default Layout