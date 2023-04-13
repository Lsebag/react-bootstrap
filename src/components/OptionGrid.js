import Card from "react-bootstrap/Card";

export default function OptionGrid(props) {
  const { items, onClick, goUp, defaultItem } = props;
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {goUp && (
        <Card
          key={"Subir"}
          style={{ width: "10rem", margin: "1rem" }}
          onClick={onClick}
        >
          <Card.Img
            variant="top"
            src={`https://cdn-icons-png.flaticon.com/512/61/61449.png?w=360`}
            alt="Volver"
          />
          <Card.Body>
            <Card.Title>Volver</Card.Title>
          </Card.Body>
        </Card>
      )}
      {items.map(({ name, id, price }) => (
        <Card
          key={name}
          style={{ width: "10rem", margin: "1rem" }}
          onClick={onClick}
          id={id}
          bg={defaultItem === name ? "primary" : ""}
          text={defaultItem === name ? "white" : ""}
        >
          <Card.Img
            variant="top"
            src={`https://juanda.certweb.infenlaces.com/images/${id}.jpg`}
            alt={name}
            id={id}
          />
          <Card.Body>
            <Card.Title id={id}>{name}</Card.Title>
          </Card.Body>
          {price && <Card.Footer id={id}>{price}€</Card.Footer>}
        </Card>
      ))}
    </div>
  );
}
