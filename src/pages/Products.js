import { useState, useEffect } from "react";
import axios from "axios";
import ProductsTable from "../components/ProductTable";
// import { ListGroup } from "react-bootstrap";
// import { useLocation } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import OptionGrid from "../components/OptionGrid.js";

let uniqueCategories;

function Products() {
  //  let location = useLocation();
  // console.log(location?.state?.category, "**************");
  //  console.log(location?.state?.category || "");
  // const { category: defaultCategory, subcategory: defaultSubcategory } =
  const { category, subcategory } = useParams();

  // Esto es para que me pinte la URL a medida que navego
  const navigate = useNavigate();

  const [products, setProducts] = useState();
  // const [category, setCategory] = useState("");

  // const [category, setCategory] = useState(defaultCategory);
  // const [subcategory, setSubcategory] = useState(defaultSubcategory);

  // Así es con fetch
  // useEffect(() => {
  //   fetch(`http://localhost:3005/products/`)
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));
  // }, []);

  // Así es con axios
  useEffect(() => {
    axios.get(`http://localhost:3005/products/`).then(({ data }) => {
      const categories = data.map((product) => product.masterCategory);
      uniqueCategories = [...new Set(categories)];

      // uniqueCategories=['category1','category2','category3']
      // uniqueCategories=[{name:'category1',img:'ruta-img'},{name:'category2',img:'ruta-img'},{name:'category3',img:'ruta-img'}]

      setProducts(data);
    });
    // .then((response) => {const categories = response.data.map((product) => product.masterCategory)
    //   const uniqueCategories = [...new Set(categories)]
    //   setProducts(response.data));

    // .catch((error)=>)
  }, []);

  // Esto es para que me pinte la URL a medida que navego
  // useEffect(() => {
  //   setCategory(defaultCategory);
  //   setSubcategory(defaultSubcategory);
  // }, [defaultCategory, defaultSubcategory]);

  if (!products) {
    return <div>Cargando...</div>;
  }

  const selectCategory = (event) =>
    navigate(`/products/${event.target.innerText}`);
  // setCategory(event.target.innerText);
  // setSubcategory("");

  // Esto es para que me pinte la URL a medida que navego

  const selectSubcategory = (event) =>
    navigate(`/products/${category}/${event.target.innerText}`);
  // setSubcategory(event.target.innerText);

  // Esto es para que me pinte la URL a medida que navego

  const uniqueSubcategories = [
    ...new Set(
      products
        .filter((product) => product.masterCategory === category)
        .map((product) => product.subCategory)
    ),
  ];

  // Aquí le digo que me recorra el array de products y que me los devuelva solo si el masterCategory es igual a la categoría
  const filterProducts = products
    .filter((product) => product.masterCategory === category)
    .filter((product) => product.subCategory === subcategory);

  return (
    <>
      <h1>Productos</h1>
      <p>Selecciona alguna categoría para ver nuestros productos:</p>
      {!category && (
        <OptionGrid
          items={uniqueCategories}
          defaultItem={category}
          onClick={selectCategory}
          goUp={false}
        />
      )}
      {category && (
        <>
          <p>Selecciona alguna subcategoría para ver nuestros productos:</p>

          <OptionGrid
            items={uniqueSubcategories}
            defaultItem={subcategory}
            onClick={selectSubcategory}
            goUp={true}
          />
        </>
      )}

      {/* {products.map((product) => (
        <div key={product.id}>
          <h2>{product.productDisplayName}</h2>
          <p>Categoría: {product.masterCategory}</p>
          <p>Subcategoría: {product.subCategory}</p>
          <p>Precio: {product.price}</p>
        </div>
      ))} */}

      {/* {products.map((product) => (
        <ProductSnippet key={product.id} product={product} />
      ))} */}

      {category && subcategory && <ProductsTable products={filterProducts} />}
      {/* <ProductsTable products={products} /> */}
    </>
  );
}

export default Products;

// Aquí utilizaremos el .set para convertir un array de datos repetidos a un array nuevo
// const coches=['bmw','astra','fiat','astra']
// Luego hacemos un Set para tomar los valores una sola vez aunque se repitan, y luego con "..." los uno en un nuevo array
