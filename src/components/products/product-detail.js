import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchImage } from "../../util/http";

function ProductDetail() {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:4000/products/" + id)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((data) => {
                setProduct(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log("ProductDetail.js error:", error);
            });
    }, [id]);

    return (
        <div>
            <h1>Product Detail</h1>
            <hr />
            {isLoading && <div>Loading...</div>}
            {!isLoading && (
                <div>
                    <img src={fetchImage(product.main_image?.url)} alt={product.title} width='600px' height='400px' />
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>posted by: {product.user.username}</p>
                </div>
            )}
        </div>
    );
}

export default ProductDetail;