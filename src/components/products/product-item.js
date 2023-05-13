import { Link } from "react-router-dom";

function ProductItem({ product }) {

    return (
        <Link className="card">
            <img src={product.main_image} className="card-img-top" alt={product.title} />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p>posted by: {product.user.username}</p>
            </div>
        </Link>
    );
}

export default ProductItem;