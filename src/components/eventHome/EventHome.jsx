import { useEffect, useState } from "react";
import Event from "../events/event/Event"
import { Link } from "react-router-dom";


const EventHome = () => {

    const [event, setEvent] = useState([]);

    useEffect(() => {
        fetch('eventList.json')
            .then(res => res.json())
            .then(data => setEvent(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="max-w-7xl mx-auto bg-lime-200 p-10">
            <h2 className="text-5xl text-center mb-4 font-bold">Our Services </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" data-aos="zoom-in-down">
                {
                    event.slice(0, 4).map(eventList => (<Event key={eventList.id} eventList={eventList}></Event>))
                }
            </div>
            <div className="flex justify-center	mt-10">
                <Link to='/events'><button className="btn btn-primary">Show More</button></Link>
            </div>
        </div>
    )
}

export default EventHome