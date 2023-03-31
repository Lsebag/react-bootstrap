import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductAllinfo from "../components/ProductAllinfo";
import axios from "axios";

export default function PageProduct() {
  const [product, setProduct] = useState(null);

  const { id: productId } = useParams();

  //Con fetch
  // useEffect(() => {
  //   fetch(`http://localhost:3005/products/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => setProduct(data));
  // }, []);

  // Con axios
  useEffect(() => {
    axios
      .get(`http://localhost:3005/products/${productId}`)
      .then((response) => setProduct(response.data));
  }, [productId]);

  // if (product.length === 0) {
  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <ProductAllinfo key={product.id} product={product} />
    </>
  );
}
