// import bannerimg from '../Assets/Image/school-.png'
"use client"

import { useState, useEffect } from "react";
import Slider from "./Slider";

const aboutUs = () => {
  window.location.href = "/about-us";
}

const Banner = () => {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div >
          <Slider/>
</div>
  );  
}

export default Banner;
