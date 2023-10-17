import { Link } from "react-router-dom";


const works = ({work}) => {

    const { id, blogName, blogDetails, image } = work;

  return (
    <div className="card glass">
            <figure><img src={image} alt="image" /></figure>
            <div className="card-body">
                <h2 className="card-title">{blogName}</h2>
                {
                    blogDetails.length > 50 ?
                        <p>{blogDetails.slice(0, 50)}</p>
                        :
                        { blogDetails }
                }
                <div className="card-actions justify-center">
                    <Link to={`/work/${id}`}><button className="btn btn-primary">Show Details</button></Link>
                </div>
            </div>
        </div>
  )
}

export default works