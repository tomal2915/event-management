import { useEffect, useState } from "react";
import Blog from "./blog/Blog";


const Blogs = () => {

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlog(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-24 max-w-7xl mx-auto">
            {
                blog.map(blogs => (<Blog key={blogs.id} blogs={blogs}></Blog>))
            }
        </div>
    )
}

export default Blogs