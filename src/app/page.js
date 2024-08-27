import React from 'react'
import UserTable from './todo/page'
import AddUsers from './addTask/page'
const page = () => {
  return (
    <div className='flex-col'>
<p>Click here to Proceed</p>
     <a href="/todo">
      <button className='bg-orange-200 p-3 rounded-md '>TODO-APP</button>
     </a>
    </div>
  )
}

export default page
