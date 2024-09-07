"use client"

import React,{useEffect} from 'react';
import {Link} from 'next/link';

const Popup = () => {
  // document.getElementsByClassName("Popup").onclick = () => { document.getElementsByClassName("Popup").style.display = "none";}
useEffect(()=>{
const popup = document.getElementsByClassName("Popup")[0];
// const close = document.getElementsByClassName("close")[0];
const handleclose = ()=>{
  popup.style.display = "none";
}

window.addEventListener("click", handleclose);

},[]) 
const Button = ()=>{
  var newWindow = window.open("https://mail.google.com", "_blank", "width=600,height=400");
}
  return (
    <div className='Popup'>
        {/* <div className="">X</div> */}
      <div className="text-box">
        <h3>Please Login Gmail First to Fill the form and reload</h3>
        <button style={{background:"#080808e0",padding:"40px", borderRadius:"30px",}} onClick={Button}>Go to Gmail</button>
      </div>
    </div>
  );
}

export default Popup;
