"use client"
import React from 'react'
import {app} from "../firebaseConfig"
import { getAuth, signOut } from "firebase/auth";

const Sidebar = () => {
  // var [style, setStyle] = useState({})
  // console.log(style)
  // const styleh = {
  //   borderRightColor: `${style}`
  // }

  const auth = getAuth(app);

  const signOutUser = () =>{
    signOut(auth).then(() => {
      alert("signed out")
    }).catch((error) => {
      console.log(error)
    });
  }
  

  return (
    <div className='sidebar'>
      <div className="logo">
        Mahata Purba Para Free Primary School H.T Portal
      </div>
      <div className="options">
      <div className='option'> Dashboard</div>
        <div className='option'>Teacher Attendance</div>
        <div className="option">Current School Fund</div>
      <button onClick={signOutUser} className='h-[7vh] w-[20vh] bg-black text-white border-none outline-none rounded-md shadow-lg p-1 font-bold hover:scale-110'>Sign Out</button>
      </div>
      </div>
    
  )
}

export default Sidebar