import React from 'react'
import SchoolFund from './School Fund '
import CurrentTeacherCount from './CurrentTeacherCount'
import Transactions from './Transactions'

const Dahboard = () => {
  return (
    <div className='dashboard'>
<div className='top'><SchoolFund/> <CurrentTeacherCount/></div>
<br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /> <br />
<Transactions/>
    </div>
  )
}

export default Dahboard