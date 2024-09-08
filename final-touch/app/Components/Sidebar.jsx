"use client"
import React from 'react'

const Sidebar = () => {
  // var [style, setStyle] = useState({})
  // console.log(style)
  // const styleh = {
  //   borderRightColor: `${style}`
  // }
  return (
    <div className='sidebar'>
      <div className="logo">
        Mahata Purba Para Free Primary School H.T Portal
      </div>
      <div className="options">
      <div className='option'> Dashboard</div>
        <div className='option'>Teacher Attendance</div>
        <div className="option">Current School Fund</div>
      </div>
    </div>
  )
}

export default Sidebar