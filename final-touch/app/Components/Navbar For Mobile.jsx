"use client"

import React from 'react'
import { useState , useEffect } from 'react'

const Home = () =>{
  document.location.href = "/"
}

const Aboutus = () =>{
  document.location.href = "/about-us"
}

const Form = () =>{
  document.location.href = "http://mahatapurbaparafreprimaryadmissionform.audwitiyabandyopadhyay.org.in/"
}

const Contactus = () =>{
  document.location.href = "/contact-us"
}

const NavbarForMoblie = () => {
  const [openednav, setOpenednav] = useState("no")
useEffect(() => {
  if(openednav === "yes"){
    document.querySelector(".navlinks").style.display = "flex"
    document.querySelector("body").style.overFlow = "hidden"
  }
  else{
    document.querySelector(".navlinks").style.display = "none"
    // document.querySelector("#root").style.overFlow = "auto"
  }
}, [openednav])
  return (
  <>
    <div className='navbarformobile'>
            <div className="logo">Mahata Purba Para Free Primary</div>
<div className="hamburger-icon" 
onClick={() =>{
  if(openednav === "no"){
    setOpenednav("yes")
  }
  else{
    setOpenednav("no")
  }
}} ></div>
    </div>
    <div className="navlinks">
    <button onClick={Home}>Home</button>
        <button onClick={Aboutus}>About us</button>
        <button onClick={Form}>Form</button>
        <button onClick={Contactus}>Contact us</button>

    </div>
    </>
  )
}

export default NavbarForMoblie
