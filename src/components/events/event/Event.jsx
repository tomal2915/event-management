import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";


const Event = ({ eventList }) => {

    const { id, eventName, eventDetails, image, price, category } = eventList;

    return (
        <div className="card glass">
            <figure><img src={image} alt="image" /></figure>
            <div className="card-body">
                <h2 className="card-title">{eventName}</h2>
                <p className="font-bold flex items-center">Price: <BsCurrencyDollar></BsCurrencyDollar> {price}</p>
                <p className="font-bold">{category}</p>
                {
                    eventDetails.length > 50 ?
                        <p>{eventDetails.slice(0, 50)}</p>
                        :
                        { eventDetails }
                }
                <div className="card-actions justify-center">
                    <Link to={`/event/${id}`}><button className="btn btn-primary">Show Details</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Event