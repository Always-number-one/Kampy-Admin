import { useState, useEffect } from 'react'
import SideBar from '../components/SideBar'
import db from '../firebase/firebase';
import { collection, query, doc, getDocs, deleteDoc } from "firebase/firestore";


function Events({ events }) {
    const [oldEvents, setEvents] = useState(events);

    const deleteEvent = async (id) => {
        const d = doc(db, 'events', id);
        await deleteDoc(d)
        setEvents(events)

    }
    return (



        <div className="bg-white-50 text-tahiti">

            <SideBar />
            <br />
            <br />

            <h1 className="block w-full text-center text-grey-darkest mb-11 text-5xl decoration-double text-zinc-900	"> Events management</h1>
            <div className='shops'>

                <ul>
                    {oldEvents.map(event => (
                        <li>{event.eventName}</li>
                    ))}
                </ul>

            </div>
        </div>

    )
}

export async function getStaticProps() {
    var events = [];
    try {
        const q = query(collection(db, 'events'))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            events.push({
                id: doc.id,
                contact: doc.data().contactUs,
                description: doc.data().description,
                // endingDate: doc.data().endingDate,
                eventName: doc.data().eventName,
                group: doc.data().group,
                // image: doc.data().imageUrl,
                // places: doc.data().nbrPlaces,
                // startingDate: doc.data().startingDate
            })
        });
    } catch (error) {
        throw error;
    }
    return {
        props: {
            events,
        }
    }

}

export default Events