import { useLoaderData, useParams } from "react-router-dom";


const BlogDetails = () => {

    const { id } = useParams();
    // const { eventName, eventDetails, image, price, date, dayName, place, companyName, category } = useParams();

    const blogs = useLoaderData();
    // const intId = parseInt(id);

    const blog = blogs.find(blog => blog.id === id);
    // console.log(blog, id);

    return (
        <div className="max-w-7xl mx-auto mt-20">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={blog.image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{blog.blogName}, {blog.companyName}</h1>
                        <p className="py-6">{blog.blogDetails}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails