import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import ProductAllinfo from "../components/ProductAllinfo";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";

function PageProduct() {
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
      .get(`http://localhost:3000/products/${productId}`)
      .then((response) => setProduct(response.data));
  }, [productId]);

  // if (product.length === 0) {
  if (!product) {
    return <div>Cargando...</div>;
  }

  const {
    productDisplayName: name,
    price,
    masterCategory: categoria,
    subCategory,
  } = product;

  return (
    <>
      <h1>Producto</h1>
      <p>Aquí renderizamos el producto con id {productId}</p>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`https://juanda.certweb.infenlaces.com/images/${productId}.jpg`}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}</Card.Text>
          {/* <LinkContainer to="/products" state={{ category: categoria }}> */}
          <LinkContainer to={`/products/${categoria}`}>
            <Card.Link> {categoria}</Card.Link>
          </LinkContainer>

          <LinkContainer to={`/products/${categoria}/${subCategory}`}>
            <Card.Link> {subCategory}</Card.Link>
          </LinkContainer>
          {/* 
          <Button variant="secondary">{categoria}</Button> */}
        </Card.Body>
        <Button variant="primary">Comprar</Button>
      </Card>
      {/* <ProductAllinfo key={product.id} product={product} /> */}
    </>
  );
}

export default PageProduct;
