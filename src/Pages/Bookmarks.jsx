import { useEffect, useState } from "react";
import { deleteBlog, getblogs } from "../Utilities/utilis";
import BlogCard from "../Components/BlogCard/BlogCard";

const Bookmarks = () => {
    const [blogs,setBlogs] = useState([])
    useEffect(() =>{
        const storedBlogs =getblogs()
        setBlogs(storedBlogs);
    },[])
    const handleDelete= id =>{
        deleteBlog(id)
        const storedBlogs =getblogs()
        setBlogs(storedBlogs);
     }
    return (
        <div className="grid px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {
            blogs.map(blog => <BlogCard handleDelete={handleDelete} deletable={true} blog={blog} key={blog.id}></BlogCard>)
        }
    </div>
    );
};

export default Bookmarks;