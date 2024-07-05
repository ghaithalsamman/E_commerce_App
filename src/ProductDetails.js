import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const ap_url = "https://fakestoreapi.com/products";
  useEffect(() => {
    fetch(`${ap_url}/${params.productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div
      style={{
        width: "600px",
        height: "600px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <img src={product.image} className="card-img-top" alt={product.title} />
      <h3>{product.category}</h3>
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">{product.description}</p>
      <p>Price: {product.price}$</p>
    </div>
  );
}
