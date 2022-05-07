import { useEffect, useState } from "react";

const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch( `https://powerful-journey-42037.herokuapp.com/blog`)
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [blogs]);

    return [blogs, setBlogs];

};

export default useBlogs;