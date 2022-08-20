import { useState, useEffect } from 'react'
import SideBar from '../components/SideBar'
import db from '../firebase/firebase';
import { collection, query, doc, getDocs, deleteDoc } from "firebase/firestore";


function Posts({ list }) {
    const [posts, setposts] = useState(list);

    const deletePost = async (id) => {
        const d = doc(db, 'posts', id);
        await deleteDoc(d)

    }
    return (



        <div className="bg-white-50 text-tahiti">

            <SideBar />
            <br />
            <br />

            <h1 className="block w-full text-center text-grey-darkest mb-11 text-5xl decoration-double text-zinc-900	"> Posts Management</h1>
            <div className='shops'>

                <ul>
                    {posts.map(post => (
                        <li>{post.description}</li>
                    ))}
                </ul>

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