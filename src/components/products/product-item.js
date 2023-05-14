import { Link } from "react-router-dom";
import { fetchImage } from "../../util/http";

function ProductItem({ product }) {

    return (
        <Link to={`/products/${product.id}`} className="card product-item-wrapper">
            <img src={fetchImage(product.main_image.url)} className="card-img-top" alt={product.title} width='100%' />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p>posted by: {product.user.username}</p>
            </div>
        </Link>
    );
}

export default ProductItem;