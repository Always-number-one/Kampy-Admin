import React from 'react'
import ShopsManagement from '../components/shops'
import SideBar from '../components/SideBar'

function Users() {
  return (
  
      

        <div className="bg-white-50 text-tahiti">
  
        <SideBar />
        <br/>
        <br/>
       
        <h1 className="block w-full text-center text-grey-darkest mb-11 text-5xl decoration-double text-zinc-900	"> Shops management</h1>
        <div className='shops'>
        <ShopsManagement/>
        </div>
      </div>
   
  )
}

export default Users