import Card from "react-bootstrap/Card";

export default function OptionGrid(props) {
  const { items, onClick } = props;
  return (
    <>
      {items.map((item) => (
        <Card key={item} style={{ width: "25rem" }} onClick={onClick}>
          <Card.Img
            variant="top"
            src={`https://juanda.certweb.infenlaces.com/images/6745.jpg`}
          />
          <Card.Body>
            <Card.Title>{item}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
