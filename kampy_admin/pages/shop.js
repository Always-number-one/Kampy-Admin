import React, {useEffect,useState} from "react";
import { collection, query, doc, updateDoc, getDocs,deleteDoc } from "firebase/firestore";
import db from '../firebase/firebase';
import SideBar from '../components/SideBar'
import { AiFillDelete,AiFillPhone } from 'react-icons/ai'
import {GiReceiveMoney} from 'react-icons/gi'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
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

    <br />
    <br />

    <h1 className='text-5xl text-center text-amber-600 mb-2'>Shop Management</h1>
    <div className="relative z-20  flex flex-center w-full pl-0 md:p-4 justify-center md:space-y-2">
        <SideBar />
    <div className="grid gap-24 grid-cols-3 grid-rows-3">
 
    {shop.map(article =>{
        return (
            <Card className="w-96 py-10" >
            <CardHeader color="blue" className="relative h-56">
              <img
                src={article.image}
                alt="img-blur-shadow"
                className="h-full w-full"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
               {article.user}
              </Typography>
              <Typography>
               {article.description}
              </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
                
              <Typography className='inline-flex' variant="small" ><AiFillPhone/>{article.phone}</Typography>
              <Typography variant="small" color="gray" className="flex gap-1">
                <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
               {article.price} DT<GiReceiveMoney />
              </Typography>
              <button> <AiFillDelete  onClick={() =>
                  deleteArticle(article.id)
                } /></button>
            </CardFooter>
          </Card>
        )
    })}

  
    </div>
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