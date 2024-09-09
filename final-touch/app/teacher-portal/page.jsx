import React from 'react'
import Sidebar from '../Components/Sidebar'
import Dashboard from '../Components/Dashboard'
import {app} from '../firebaseConfig'
import { getAuth} from "firebase/auth";

export default  function page  ()  {
const auth = getAuth(app)
const user = auth.currentUser;

if (user !== null) {
  // The user is signed in.
  console.log(user)
} else {
  return (
<div className='teacher-portal'>
<Sidebar/>
<Dashboard/>
</div>
  )
  // No user is signed in.
}


}
