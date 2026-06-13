import "./Layout.css";
import React from 'react'
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="Layout">
        <main>
            <Header/>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout