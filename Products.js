import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log("res", res.data);
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log("error");
      });
  };

  const productList = () => {
    if (isLoading) {
      return "Loading.........";
    }
    if (products.length) {
      return products.map((p, i) => (
        <div className="col col-lg-4 col-sm-12 py-3">
          <div class="card p-3">
            <img
              class="card-img-top"
              src={p.image}
              alt={p.title}
              width="150"
              height="200"
            />
            <div class="card-body">
              <h5 class="card-title">{p.title}</h5>
              <p class="card-text">{p.description}</p>
            </div>
            <div className="d-flex justify-content-between">
              <div>Price: {p.price}</div>
              <div>Category: {p.category}</div>
            </div>
          </div>
        </div>
      ));
    } else {
      return "No Products Found";
    }
  };
  return (
    <div className="container">
      <div className="row">{productList()}</div>
    </div>
  );
}
