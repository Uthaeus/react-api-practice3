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
        <div className="products-container">
            <div className="products-header">
                <h1 className="products-title">Products</h1>
                <Link className="new-product-link" to="/products/new">New Product</Link>
                <hr />
            </div>
            {isLoading && <div>Loading...</div>}
            {!isLoading && (
                <div className="products-content">
                    {products.map((product) => <ProductItem key={product.id} product={product} />)}
                </div>
            )
            }
        </div>
    );
}

export default Products;