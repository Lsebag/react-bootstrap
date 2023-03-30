import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductAllinfo from "../components/ProductAllinfo";

export default function PageProduct() {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3005/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  if (product.length === 0) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <ProductAllinfo key={product.id} product={product} />
    </>
  );
}
