import React from 'react'
import UsersManagment from '../components/users'
import SideBar from '../components/SideBar'

function Users() {
  return (
  
      
     
        <div className="bg-white-50 text-tahiti">
  
        <br/>
        <br/>
       
        <SideBar />
        <h1 className="block w-full text-center text-grey-darkest mb-11 text-5xl decoration-double text-zinc-900	"> Users management</h1>
        <UsersManagment/>
      </div>
   
  )
}

export default Users