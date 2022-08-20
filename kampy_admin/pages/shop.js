import React, {useEffect,useState} from "react";
import { collection, query, doc, updateDoc, getDocs,deleteDoc } from "firebase/firestore";
import db from '../firebase/firebase';
import SideBar from '../components/SideBar'
import { AiFillDelete } from 'react-icons/ai'
function Shops({list}) {
  const [shop , setShop]= useState(list)
  const [update, setUpdate] = useState(true);

  const deleteArticle = async (id, event) => {
    const d = doc(db, 'shops', id);
    await deleteDoc(d)
    setUpdate(!update)
  }


  return (

    
    <div className="bg-white-50 text-tahiti">

      <SideBar />
      <h1 className="block w-full text-center text-grey-darkest mb-11 text-5xl decoration-double text-zinc-900	"> Shops management</h1>
      <div className='shops'>
      {shop.map((e,i)=>{
        return (
          <div className="card">
            <div className="card-header">
              <div className="profile">
                <span className="letter">{e.user[0]}</span>
              </div>
              <div className="card-title-group">
                <h5 className="card-title">{e.title}</h5>
                <div className="card-date">{e.userName}</div>
              </div>
            </div>
            <img className="card-image" src={e.image}  />
            <div className="card-text">{e.description}</div>
            <div className="card-like-bar">
            <AiFillDelete onClick={event =>
                          deleteArticle(e.id, event)}/>
              <div className="like-text">
               
              </div>
            </div>
          </div>
        )
      })}
      </div>
    </div>

  )
}

export async function getStaticProps() {
  let list = [];
  try {
    const q = query(collection(db, 'shops'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      list.push({
        id: doc.id,
        description: doc.data().description,
        image: doc.data().imgUrl,
        phone: doc.data().phoneN,
        price: doc.data().price,
        title: doc.data().title,
        userImg: doc.data().userImage,
        user:doc.data().userName
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

export default Shops