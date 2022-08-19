import React, {useEffect,useState} from "react";
import { collection, query, doc, updateDoc, getDocs } from "firebase/firestore";
import db from '../firebase/firebase';

function ShopsManagement (){
    const [shop , setShop]= useState([])
    useEffect(()=>{
        getShops();
    })

    const getShops = async()=>{
        try {
            const q = query(collection(db,'shops'));
            const querySnapshot = await getDocs(q);
            var list = [];
            querySnapshot.forEach((doc)=>{
                list.push({
                    id:doc.id,
                    description: doc.data().description,
                    image: doc.data().imgUrl,
                    price: doc.data().price,
                    title:  doc.data().title,
                    userName: doc.data().userName,
                    userImage: doc.data().userImage
                })
                setShop(list);
               
            });
        }catch(error){
            throw error;
        }
    }
    return (
        shop.map((e,i)=>{
            return (
            <div className="card">
            <div className="card-header">
              <div className="profile">
                <span className="letter">{e.userName[0]}</span>
              </div>
              <div className="card-title-group">
                <h5 className="card-title">{e.title}</h5>
                <div className="card-date">{e.userName}</div>
              </div>
            </div>
            <img className="card-image" src={e.image}  />
            <div className="card-text">{e.description}</div>
            <div className="card-like-bar">
              <img className="card-like-icon" src={e.userImage} alt="Logo" />
           
              <div className="like-text">
               
              </div>
            </div>
          </div>)
        })
        


    )
}

export default ShopsManagement