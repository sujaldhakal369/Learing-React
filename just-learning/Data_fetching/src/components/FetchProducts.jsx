import React, { useState, useEffect } from "react";

const FetchProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from DummyJSON API
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Runs once when the component mounts

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: "100px" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchProducts;
