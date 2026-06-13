import "./Layout.css";
import React from 'react'
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
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