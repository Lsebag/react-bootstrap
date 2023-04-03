import { LinkContainer } from "react-router-bootstrap";
export default function ProductRow({ product }) {
  // const { product } = props
  return (
    <tr>
      <td>{product.id}</td>
      <td style={{ textDecoration: "underline", cursor: "pointer" }}>
        <LinkContainer to={`/product/${product.id}`}>
          {
            // eslint-disable-next-line
          }
          <span>{product.productDisplayName}</span>
        </LinkContainer>
      </td>
      <td>{product.masterCategory}</td>
      <td>{product.subCategory}</td>
      <td>{product.price}</td>
    </tr>
  );
}
