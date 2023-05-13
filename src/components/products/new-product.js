import { Link } from "react-router-dom";

import ProductForm from "./product-form";

function NewProduct() {
    return (
        <div>
            <h1>New Product</h1>
            <Link to="/products">Back to Products</Link>
            <hr />
            <ProductForm />
        </div>
    )
}

export default NewProduct;