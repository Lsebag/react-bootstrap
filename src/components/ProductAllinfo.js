export default function ProductAllinfo({ product }) {
  return (
    <>
      <h2>
        <a href={`/products/${product.id}`}>{product.productDisplayName}</a>
      </h2>
      <p>Género de ropa: {product.gender}</p>
      <p>Categoría: {product.masterCategory}</p>
      <p>Subcategoría: {product.subCategory}</p>
      <p>Precio: {product.price}</p>
      <p>Tipo de artículo: {product.articleType}</p>
      <p>Color base: {product.baseColour}</p>
      <p>Temporada: {product.season}</p>
      <p>Año: {product.year}</p>
      <p>Uso: {product.usage}</p>
    </>
  );
}
