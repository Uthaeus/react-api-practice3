import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useNavigate } from "react-router";

import { UserContext } from "../../store/user-context";

function PostForm({post}) {
    const { register, handleSubmit, error } = useForm();
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    function buildForm(data) {
        const formData = new FormData();
        formData.append('post[user_id]', user.id);
        formData.append('post[title]', data.title);
        formData.append('post[body]', data.body);
        formData.append('post[image]', data.image[0]);
        return formData;
    }

    function submitHandler(data) {
        console.log(data);
        const formData = buildForm(data);

        fetch('http://localhost:4000/posts', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('practice_token')}`
            },
            body: formData
        })
        .then(response => {
            if (response.ok) {
                navigate('/posts');
                return response.json();
            } else {
                throw new Error('Something went wrong');
            }
        })
        .catch(error => {
            console.log('post form submit error:', error);
        });

    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" {...register('title', { required: true })} />
                    {error?.title && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="body">Body</label>
                    <textarea className="form-control" {...register('body', { required: true })} />
                    {error?.body && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type="file" className="form-control" {...register('image', { required: true })} />
                    {error?.image && <span className="text-danger">This field is required</span>}
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default PostForm;