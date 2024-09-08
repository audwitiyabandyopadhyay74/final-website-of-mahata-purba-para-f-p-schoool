// import { Routes, Route } from "react-router-dom"
"use client"

import Home from "./Pages/Home"
import Navbar from "./Components/Navbar";
import NavbarForMoblie from "./Components/Navbar For Mobile";
import Footer from "./Components/Footer";



export default function page() {
    return ( 
        <>
        <Navbar/>
        <NavbarForMoblie/>
        <Home/>
        <Footer/>
        </>
    )
}