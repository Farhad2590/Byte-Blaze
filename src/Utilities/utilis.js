import toast from "react-hot-toast";

export const getblogs = () => {
    let blogs = [];
    const storedBlogs = localStorage.getItem('blogs')
    if(storedBlogs){
        blogs = JSON.parse(storedBlogs)
    }
    return blogs;
}

export const saveBlog = blog =>{
    let blogs = getblogs()

    const isExit = blogs.find(b => b.id === blog.id)
    if(isExit){
        return toast.error('Already Saved In Bookmark')
    }
    blogs.push(blog)
    localStorage.setItem('blogs',JSON.stringify(blogs));
    toast.success("Sucessfully Saved")
}

export const deleteBlog = id =>{
    let blogs = getblogs()

    const remaining = blogs.filter(b => b.id !== id)
    localStorage.setItem('blogs',JSON.stringify(remaining));
    toast.success("Blog Removed From Bookmark!")
}