import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import PostForm from "./post-form";

function EditPost() {
    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/posts/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log('post data:', data); 
            setPost(data);
            setIsLoading(false);
        })
        .catch(error => {
            console.log('post error:', error);
        });
    }, [id]);

    return (
        <div>
            <h1>Edit Post</h1>
            <Link to="/posts">Back to Posts</Link>
            <hr />
            {isLoading && <p>Loading...</p>}
            {!isLoading && <PostForm post={post} />}
        </div>
    );
}

export default EditPost;