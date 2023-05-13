import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ProductItem from "../components/products/product-item";

function Products() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:4000/products")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((data) => {
                setProducts(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log("Products.js error:", error);
            });
    }, []);


    return (
        <div>
            <h1>Products</h1>
            <Link to="/products/new">New Product</Link>
            <hr />
            {isLoading && <div>Loading...</div>}
            {!isLoading && products.map((product) => {
                    return <ProductItem key={product.id} product={product} />;
                })
            }
        </div>
    );
}

export default Products;