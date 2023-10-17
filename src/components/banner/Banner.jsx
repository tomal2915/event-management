import { Link } from "react-router-dom"


const Banner = () => {
    return (
        <div className="hero min-h-screen h-[500px]" style={{
            backgroundImage: 'url(https://i.ibb.co/7nLKsS0/banner.jpg)',
            // backgroundSize: 'cover', // Set background size to cover the entire element
            // backgroundPosition: 'center', // Center the background image
            // top: -10,
        }} >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content max-w-7xl mx-auto">
                <div className=" max-w-md" data-aos="fade-down-right">
                    <h1 className="mb-5 text-5xl font-bold ">
                        The UK’s Best Event Management Agency for Corporate</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link to='/events'><button className="btn btn-primary">Get Started</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Banner