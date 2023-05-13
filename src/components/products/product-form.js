import { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { UserContext } from "../../store/user-context";

function ProductForm({product}) {
    const { register, handleSubmit, reset, error } = useForm();
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (product) {
            reset(product);
        }
    }, [product, reset]);

    function buildForm(data) {
        let formData = new FormData();

        formData.append('product[user_id]', user.id);
        formData.append('product[title]', data.title);
        formData.append('product[description]', data.description);
        formData.append('product[price]', data.price);
        formData.append('product[main_image]', data.main_image[0]);
        formData.append('product[thumb_image]', data.thumb_image[0]);

        return formData;
    }

    function submitHandler(data) {
        console.log(data);
        const dataToSend = buildForm(data);

        fetch("http://localhost:4000/products", {
            method: "POST",
            body: dataToSend,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("practice_token")}`,
            }
        })
        .then((response) => {
            if (response.ok) {
                navigate("/products");
                return response.json();
            } else {
                throw new Error("Something went wrong");
            }
        })
        .catch((error) => {
            console.log("ProductForm.js error:", error);
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
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" {...register('description', { required: true })} />
                    {error?.description && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="float" className="form-control" {...register('price', { required: true })} />
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