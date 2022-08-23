import { useState} from 'react'
import SideBar from '../components/SideBar'
import db from '../firebase/firebase';
import { collection, query, doc, getDocs, deleteDoc } from "firebase/firestore";
import {FcLike} from 'react-icons/fc'
import {BiMap} from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
// import Image from './Image'

function Posts({ list }) {
    const [posts, setposts] = useState(list);
    const [update, setUpdate] = useState(true)
    const deletePost = async (id) => {
        const d = doc(db, 'posts', id);
        await deleteDoc(d)
        setUpdate(!update)
        setposts(list)
    }
    return (



        <div className="bg-white-50 text-tahiti">

            <br />
            <br />

            <h1 className='text-5xl text-center text-amber-600 mb-2'>Posts Management</h1>
            <div className="relative z-20  flex flex-center w-full pl-0 md:p-4 justify-center md:space-y-2">
                <SideBar />
            <div className="grid gap-24 grid-cols-3 grid-rows-3">
         
            {posts.map(post =>{
                return (
                    <Card className="w-96 py-10">
                    <CardHeader color="blue" className="relative h-56">
                      <img
                        src={post.image}
                        alt="img-blur-shadow"
                        className="h-full w-full"
                      />
                    </CardHeader>
                    <CardBody className="text-center">
                      <Typography variant="h5" className="mb-2">
                       {post.userName}
                      </Typography>
                      <Typography>
                       {post.description}
                      </Typography>
                    </CardBody>
                    <CardFooter divider className="flex items-center justify-between py-3">
                        
                      <Typography className='inline-flex' variant="small" > {post.likes} <FcLike className='my-1 mx-2' /></Typography>
                      <Typography variant="small" color="gray" className="flex gap-1">
                        <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                       {post.localisation}<BiMap className='my-1' />
                      </Typography>
                      <button> <AiFillDelete  onClick={() =>
                          deletePost(post.id)
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
    var list = [];
    try {
        const q = query(collection(db, 'posts'))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            list.push({
                id: doc.id,
                description: doc.data().description,
                likes: doc.data().likesCount,
                localisation: doc.data().localisation,
                image: doc.data().imgUrl,
                userImage: doc.data().userImage,
                userName: doc.data().userName
            })
        });
    } catch (error) {
        throw error;
    }
    return {
        props: {
            list,
        }
    }

}

export default Posts