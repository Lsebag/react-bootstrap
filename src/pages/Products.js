import { useState, useEffect } from "react";
import ProductSnippet from "../components/ProductSnippet";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3005/products/`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  if (products.length === 0) {
    return <div>Cargando...</div>;
  }
  console.log(products);

  return (
    <>
      <h1>Productos</h1>
      <p>Esta es nuestra lista de productos:</p>
      {/* {products.map((product) => (
        <div key={product.id}>
          <h2>{product.productDisplayName}</h2>
          <p>Categoría: {product.masterCategory}</p>
          <p>Subcategoría: {product.subCategory}</p>
          <p>Precio: {product.price}</p>
        </div>
      ))} */}

      {products.map((product) => (
        <ProductSnippet key={product.id} product={product} />
      ))}
    </>
  );
}
