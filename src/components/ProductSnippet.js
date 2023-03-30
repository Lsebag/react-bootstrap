export default function ProductSnippet({ product }) {
  return (
    <>
      <h2>
        <a href={`/products/${product.id}`}>{product.productDisplayName}</a>
      </h2>
      <p>Categoría: {product.masterCategory}</p>
      <p>Subcategoría: {product.subCategory}</p>
      <p>Precio: {product.price}</p>
    </>
  );
}
