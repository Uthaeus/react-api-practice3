import { Link } from "react-router-dom";

function PostItem({post}) {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p className="card-text">{post.body}</p>
                <Link to={`/posts/${post.id}`} className="btn btn-primary">Read More &rarr;</Link>
            </div>
            <div className="card-footer text-muted">
                Posted on {post.createdAt} by
                <Link to="#"> {post.user.name}</Link>
            </div>
        </div>
    );
}

export default PostItem;