import { useEffect, useState } from "react";
import Product from "./Product";
export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const ap_url = "https://fakestoreapi.com/products";
  useEffect(() => {
    getProducts();
    getCategories();
    getCategoriesInProducts();
  }, []);
  const getProducts = () => {
    fetch(ap_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const getCategories = () => {
    fetch(`${ap_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };
  const getCategoriesInProducts = (catName) => {
    fetch(`${ap_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  return (
    <>
      <h1 className="text-center p-3">Our Products</h1>
      <div className="container">
        <div style={{ marginLeft: "50px" }}>
          <button
            className="btn btn-info "
            style={{
              margin: "30px 50px",
              backgroundColor: "#c4c2c2",
              border: "none",
            }}
            onClick={getProducts}
          >
            All
          </button>
          {categories.map((cat) => {
            return (
              <button
                key={cat}
                className="btn btn-info "
                style={{
                  margin: "15px 50px",
                  backgroundColor: "#c4c2c2",
                  border: "none",
                }}
                onClick={() => {
                  getCategoriesInProducts(cat);
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
        <div className="row">
          {products.map((product) => {
            return (
              <div
                className="col-3"
                key={product.id}
                style={{ display: "flex", flexWrap: "Wrap" }}
              >
                <Product product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
