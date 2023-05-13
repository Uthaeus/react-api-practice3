import { useState, useEffect } from "react";

import PostItem from "../components/posts/post-item";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:4000/posts')
        .then(response => response.json())
        .then(data => {
            console.log('posts data:', data); 
            setPosts(data);
            setIsLoading(false);
        })
        .catch(error => {
            console.log('posts error:', error);
        });
    }, []);

    return (
        <div>
            <h1>Posts Page</h1>
            <hr />
            {isLoading && <p>Loading...</p>}
            {!isLoading && posts.map(post => <PostItem key={post.id} post={post} />)}
        </div>
    );
}

export default Posts;