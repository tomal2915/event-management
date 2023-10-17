import { useLoaderData, useParams } from "react-router-dom"
import { BsCurrencyDollar } from 'react-icons/bs';


const EventDetails = () => {

  const { id } = useParams();
  // const { eventName, eventDetails, image, price, date, dayName, place, companyName, category } = useParams();

  const events = useLoaderData();
  // const intId = parseInt(id);

  const event = events.find(event => event.id === id);
  // console.log(event, id);

  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={event.image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{event.eventName}, {event.companyName}</h1>
            <h3 className="text-2xl flex items-center">Price: <BsCurrencyDollar></BsCurrencyDollar> {event.price}</h3>
            <h3>{event.category}</h3>
            <p>{event.date}, {event.dayName}, {event.place}</p>
            <p className="py-6">{event.eventDetails}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetails