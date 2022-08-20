import React, { useContext, useEffect, useState } from "react";
import { collection, query, doc, updateDoc, getDocs, deleteDoc } from "firebase/firestore";
import db from '../firebase/firebase';
import { async } from "@firebase/util";
import { AiFillDelete } from 'react-icons/ai'
import SideBar from '../components/SideBar'

function Users({ list }) {
  const [users, setUsers] = useState(list);
  const [update, setUpdate] = useState(true);


  const deleteUser = async (id, event) => {
    const d = doc(db, 'users', id);
    await deleteDoc(d)
    setUpdate(!update)
  }


  return (
    <div className="bg-white-50 text-tahiti">

      <br />
      <br />

      <SideBar />
      <h1 className="block w-full text-center text-grey-darkest mb-11 text-5xl decoration-double text-zinc-900	"> Users management</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden"></div>

            <table className="min-w-full text-center  absolute inset-x-0 top-30 left-20 h-16	 ">
              <thead className="border-b bg-gray-800 ">
                <tr scope="col" className="text-sm font-medium text-gray-900  px-6 py-4 text-left  " >
                  <th
                    scope="col" className="text-sm font-medium text-center text-white px-6 py-4 border-separate border-spacing-2 border border-slate-500 "
                  >
                    User ID
                  </th>
                  <th
                    scope="col" className="text-sm font-medium text-center text-white px-6 py-4 border-separate border-spacing-2 border border-slate-500 "
                  >
                    Name
                  </th>
                  <th
                    scope="col" className="text-sm font-medium text-center text-white px-6 py-4 border-separate border-spacing-2 border border-slate-500"
                  >
                    Email
                  </th>
                  Ban
                </tr>
              </thead>
              <tbody>
                {users.map((e, i) => {
                  return (
                    <tr key={i}>
                      <td
                        style={{
                          padding: '10px',
                          border: 'solid 1px gray',
                        }}
                      >
                        {e.id}
                      </td>
                      <td
                        style={{
                          border: "border-spacing-2",
                          padding: '10px',
                          border: 'solid 1px gray',
                        }}
                      >
                        {e.name}
                      </td>
                      <td
                        style={{
                          padding: '10px',
                          border: 'solid 1px gray',
                        }}
                      >
                        {e.email}
                      </td>
                      <td
                        style={{
                          padding: '10px',
                          border: 'solid 1px gray',
                        }}
                      >
                        <AiFillDelete />
                        <button onClick={event =>
                          deleteUser(e.id, event)
                        }>Ban</button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
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