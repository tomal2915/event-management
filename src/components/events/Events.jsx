import { useEffect, useState } from "react";
import Event from "./event/Event";


const Events = () => {

    const [event, setEvent] = useState([]);

    useEffect(() => {
        fetch('eventList.json')
            .then(res => res.json())
            .then(data => setEvent(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-24 max-w-7xl mx-auto">
            {
                event.map(eventList => (<Event key={eventList.id} eventList={eventList}></Event>))
            }
        </div>
    )
}

export default Events