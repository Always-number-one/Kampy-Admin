import { useState } from 'react'
import SideBar from '../components/SideBar'
import db from '../firebase/firebase';
import { collection, query, doc, getDocs, deleteDoc } from "firebase/firestore";
import { AiFillDelete,AiFillPhone } from 'react-icons/ai'
import {IoPersonSharp} from 'react-icons/io'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

function Events({ events }) {
    const [oldEvents, setEvents] = useState(events);

    const deleteEvent = async (id) => {
        const d = doc(db, 'events', id);
        await deleteDoc(d)
        setEvents(events)

    }
    return (

        <div className="bg-white-50 text-tahiti">

        <br />
        <br />
    
        <h1 className='text-5xl text-center text-amber-600 mb-2'>Events Management</h1>
        <div className="relative z-20  flex flex-center w-full pl-0 md:p-4 justify-center md:space-y-2">
            <SideBar />
        <div className="grid gap-24 grid-cols-3 grid-rows-3">
     
        {oldEvents.map(event =>{
            return (
                <Card className="w-96">
                <CardHeader color="blue" className="relative h-56">
                  <img
                    src={event.image}
                    alt="img-blur-shadow"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody className="text-center">
                  <Typography variant="h5" className="mb-2">
                   {event.user}
                  </Typography>
                  <Typography>
                   {event.description}
                  </Typography>
                </CardBody>
                <CardFooter divider className="flex items-center justify-between py-3">
                    
                  <Typography variant="small" >{event.contact}<AiFillPhone/></Typography>
                  <Typography variant="small" color="gray" className="flex gap-1">
                    <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                   20 pax<IoPersonSharp />
                  </Typography>
                  <button> <AiFillDelete  onClick={() =>
                      deleteEvent(event.id)
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
                // group: doc.data().group,
                image: doc.data().imgUrl,
                // places: doc.data().nbrPlace,
                // startingDate: doc.data().startingDate,
                user:doc.data().username
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

export default Events;