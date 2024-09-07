"use client"

import govtofwblogo from '../Assets/Image/government-of-west-bengal-logo.png'
import { useEffect, useState } from 'react'

const AboutSection = () => {
  const [hydrated, setHydrated] = useState(false);

useEffect(() => {
  // this forces a rerender
  setHydrated(true)
}, [])

if(!hydrated) {
  // this returns null on first render, so the client and server match
  return null
}
  return (
    <div style={{padding:"50px"}}>
      
    <section className='about-us-section' style={{background:"#070707e0",marginTop:"300px",borderRadius:"30px"}}> <br /> <br />
    <h1 id="heading">About us</h1>
<div className="content">
    <p>
      this school is a government school and is approved by the West Bengal ministry of education. 
      and this school is manged and owned by the Government of West Bengal it's falls under WBBPE Board. 
      This School was established in the year 1932 and is a Goverment school. The school is located in Mahata 
    </p>
    <div class="img-of-about-section"style={{background:govtofwblogo}}>
       <div id="bottom"> </div>
    </div>      <br /> <br />

    </div>
  </section>
    </div>
  )
}

export default AboutSection
