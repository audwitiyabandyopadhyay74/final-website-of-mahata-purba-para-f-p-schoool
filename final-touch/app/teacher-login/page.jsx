// "use client"
// import React ,{useState} from 'react'
// import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail} from 'firebase/auth'
// import {app} from "../firebaseConfig"
// // import { redirect } from 'next/navigation'
// import { signOut } from 'firebase/auth'

// const page = () => {
// const [email,setEmail] = useState()
// const [password,setPassword] = useState()
// const auth = getAuth(app)


// const onLogin = (e) =>{
// e.preventDefault()
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log(user)
//     // ...
//   document.location.href = "/teacher-portal/"
//   })
//   .catch((error) => {
//     alert("Invalid Email or Password"+ error)
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorMessage)
//   });
// }

// const onResetPassword = (e) =>{
// e.preventDefault()

// sendPasswordResetEmail(auth, email)
//   .then(() => {
//     alert("Password reset link sent to your email :" + email)
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorMessage)
//   });

// }

//   return (
//     <div className='h-screen w-screen flex justify-center items-center'>
//     <div className="flex items-center justify-center bg-[#080808e0] h-[75%] w-11/12  rounded-lg lg:w-[30%]">
// <form action="" className='h-[100%] w-[100%] flex flex-col items-center  justify-center gap-5'>
// <h1 className='text-3xl font-bold '>Login</h1>
//     <input type="text" name="" value={email} onChange={(e)=>setEmail(e.target.value)} id="" className='h-[7vh] w-[80%] bg-black text-white border-none outline-none rounded-md shadow-lg p-1' placeholder='Enter Your Email ' />
//     <input type="text"     value={password} onChange={(e)=>setPassword(e.target.value)}  name="" id="" className='h-[7vh] w-[80%] bg-black text-white border-none outline-none rounded-md shadow-lg p-1' placeholder='Enter Your Password' />
//  <button className='text-blue-900' onClick={onResetPassword}    >Reset Password</button>
// <button  onClick={onLogin} className='h-[7vh] w-[30%] bg-black text-white border-none outline-none rounded-md shadow-lg p-1 font-bold hover:scale-110'>Login </button>
// </form>        
//     </div>
//     </div>
//   )
// }

// export default page


import React from 'react'

export const page = () => {
  return (
    <div>page</div>
  )
}
