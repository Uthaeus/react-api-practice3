import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function PostDetail() {
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

    let postImage = post.image ? `http://localhost:4000${post.image.url}` : 'https://via.placeholder.com/600x400';

    return (
        <div>
            <h1>Post Detail</h1>
            <Link to="/posts">Back to Posts</Link>
            <hr />
            {isLoading && <p>Loading...</p>}
            {!isLoading && (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <p>posted by: {post.user?.username}</p>
                    <img src={postImage} alt={post.title} />
                </div>
            )}
        </div>
    );
}

export default PostDetail;