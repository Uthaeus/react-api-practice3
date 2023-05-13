import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import ProductForm from "./product-form";

function EditProduct() {
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
        console.log("EditProduct.js error:", error);
      });
  }, [id]);

  return (
    <div>
      <h1>Edit Product</h1>
        <Link to="/products">Back to Products</Link>
      <hr />
      {isLoading ? <div>Loading...</div> : <ProductForm product={product} />}
    </div>
  );
}

export default EditProduct;
