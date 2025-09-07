import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

//På startsidan visas en välkomsttext, en bild och lite
//information i ett Bootstrap-card.
export const Home = () => {
return (
  <Container
    style={{
      display: "flex",
      justifyContent: "center",
      marginTop: "3em",
      minHeight: "100vh",
    }}
  >
    <Card style={{ width: "40em", height: "fit-content" }}>
      <Card.Header>
        <Card.Title
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "2em",
          }}
        >
          Welcome!
        </Card.Title>
      </Card.Header>
      <Card.Img
        variant="top"
        src="https://cdn.pixabay.com/photo/2012/03/04/00/55/academic-22143_1280.jpg"
        alt="school"
      />
      <Card.Body >
        <Card.Text>
          You can find course information and registration details on the
          Student Portal.
        </Card.Text>
      </Card.Body>
    </Card>
  </Container>
);
};
