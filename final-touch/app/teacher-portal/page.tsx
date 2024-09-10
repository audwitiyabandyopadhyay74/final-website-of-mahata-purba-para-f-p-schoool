"use client"
// import React, { useEffect, useState } from 'react'

// import Sidebar from '../Components/Sidebar'
// import Dashboard from '../Components/Dashboard'
// import { app } from '../firebaseConfig'
// import { onAuthStateChanged } from 'firebase/auth'
// import { getAuth } from "firebase/auth";

// export default function Page() {
//   const auth = getAuth(app)
//   const [user1, setUser] = useState(false);

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(true)
//       } else {
//         setUser(false)The git repository at "c:\Us
//       }
//     });
//   }, [auth])
// const onLogin=()=>{
//  document.location.href="/teacher-login"
// }

//   return (
//     <> 
//       {user1 ? (
//         <div className='flex'>
//           <Sidebar />
//           <Dashboard />
//         </div>
//       ) : (
//         <div className=' w-screen h-screen flex items-center content-center'>
//           {/* You can add a login component or a message here */}
// <h1 className='text-5xl font-bold px-[50%] w-[400vh]'>Please Login To Access HT Portal</h1>
// <button className='' onClick={onLogin}>Login</button>
//         </div>
//       )}
//     </>
//   );
// }

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page