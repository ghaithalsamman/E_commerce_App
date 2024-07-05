import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <div className="card " style={{ height: "300px", width: "300px" }}>
      <img
        src={product.image}
        className="card-img-top "
        alt={product.title}
        style={{ height: "200px" }}
      />
      <div className="card-body ">
        <p>Price: {product.price}$</p>
        <Link className="btn btn-primary" to={`/product/${product.id}`}>
          Details
        </Link>
      </div>
    </div>
  );
}
