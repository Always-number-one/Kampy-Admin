import React, { useContext, useEffect, useState } from "react";
import { collection, query, doc, updateDoc, getDocs, deleteDoc } from "firebase/firestore";
import db from '../firebase/firebase';
import { async } from "@firebase/util";
import { AiFillDelete } from 'react-icons/ai'
import SideBar from '../components/SideBar'

function Users({ list }) {
  const [users, setUsers] = useState(list);
  const [update, setUpdate] = useState(true);


  const deleteUser = async (id) => {
    const d = doc(db, 'users', id);
    await deleteDoc(d)
    setUpdate(!update)
  }


  return (
    <div className="bg-white-50 text-tahiti">

      <SideBar />
      <br />
      <br />

      <h1 className='text-5xl text-center text-amber-600 mb-2 mr-12'>User's management</h1>
      <div className="max-w-2xl mx-auto " >

<div className="scale-125 p-5 max-w-3xl bg-white rounded-lg border shadow-md sm:p-12 dark:bg-gray-800 dark:border-gray-700 ml-20 " >
  <div className="flex justify-between items-center mb-4 " >
      <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Users Management</h3>
 </div>

 <div className="flow-root">
      <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        {users.map(user =>(
 <li className="py-3 sm:py-4">
 <div className="flex items-center space-x-4">
     <div className="flex-shrink-0">
         <img className="w-8 h-8 rounded-full" src={user.photo} alt="Neil image" />
     </div>
     <div className="flex-1 min-w-0">
         <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
             {user.name}
         </p>
         <p className="text-sm text-gray-500 truncate dark:text-gray-400">
             {user.email}
         </p>
         <p className="text-sm text-gray-500 truncate dark:text-gray-400">
         id: {user.id}
          </p>
     </div>
     <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
         <button onClick={
          ()=>{
            deleteUser(user.id)
          }
         }>Ban</button>
     </div>
 </div>
</li>




        ))}
         
          
      </ul>
 </div>
</div>
</div>

    </div>

  )
}

export async function getStaticProps() {
  let list = [];
  try {
    const q = query(collection(db, 'users'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      list.push({
        id: doc.id,
        name: doc.data().name,
        email: doc.data().email,
        photo: doc.data().photoUrl,
      })

    });
  } catch (error) {
    throw error;
  }
  return {
    props: {
      list
    }
  }


}

export default Users