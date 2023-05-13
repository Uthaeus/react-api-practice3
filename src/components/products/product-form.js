import { useEffect } from "react";
import { useForm } from "react-hook-form";

function ProductForm({product}) {
    const { register, handleSubmit, reset, error } = useForm();

    useEffect(() => {
        if (product) {
            reset(product);
        }
    }, [product, reset]);

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
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" {...register('description', { required: true })} />
                    {error?.description && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number" className="form-control" {...register('price', { required: true })} />
                    {error?.price && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="main_image">Main Image</label>
                    <input type="file" className="form-control" {...register('main_image', { required: true })} />
                    {error?.main_image && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="thumb_image">Thumb Image</label>
                    <input type="file" className="form-control" {...register('thumb_image', { required: true })} />
                    {error?.thumb_image && <span className="text-danger">This field is required</span>}
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default ProductForm;