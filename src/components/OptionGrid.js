import Card from "react-bootstrap/Card";

export default function OptionGrid(props) {
  const { items, onClick, goUp } = props;
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
            src={`https://juanda.certweb.infenlaces.com/images/6745.jpg`}
          />
          <Card.Body>
            <Card.Title>Subir</Card.Title>
          </Card.Body>
        </Card>
      )}
      {items.map((item) => (
        <Card
          key={item}
          style={{ width: "10rem", margin: "1rem" }}
          onClick={onClick}
        >
          <Card.Img
            variant="top"
            src={`https://juanda.certweb.infenlaces.com/images/6745.jpg`}
          />
          <Card.Body>
            <Card.Title>{item}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
