import { useForm } from "react-hook-form";

function PostForm({post}) {
    const { register, handleSubmit, error } = useForm();

    function submitHandler(data) {
        console.log(data);
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