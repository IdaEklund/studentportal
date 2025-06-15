import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export const CourseCard = () => {

  //Kursdatakontextet används här.
  const courses = useContext(DataContext);


  return (
    
    //Varje kurs mappas ut i ett "card". Längst ner på korten finns en knapp
    //som tar användaren till en sida som visar mer information.
    //På större skärmar visas 2 kort i rad och på mindre skärmar visas 1 kort
    //per rad. Jag har använt mig av Bootstrap och importerat Card, kolumner och rader.
    <Row>
      {courses.map((course) => (
        <Col
          md={6}
          xs={12}
          key={course.id}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            bg="dark"
            style={{
              width: "80%",
              minHeight: "17em",
              marginRight: "1em",
              marginBottom: "2em",
              color: "white",
            }}
          >
            <Card.Header
              style={{
                backgroundColor: "gray",
                flexShrink: "2",
                padding: "0.7em",
                marginBottom: "0.7em",
              }}
            >
              <Card.Title>{course.name}</Card.Title>
            </Card.Header>
            <Card.Body
              style={{
                padding: "0.7em",

                minHeight: "fit-content",
              }}
            >
              {/*Om beskrivningen på kortet har fler än 150 tecken så visas "..." efter 150 tecken. */}
              <Card.Text>
                {course.desc.length > 150
                  ? `${course.desc.substring(0, 150)}...`
                  : course.desc}
              </Card.Text>
            </Card.Body>
            <Card.Footer
              style={{
                backgroundColor: "darkgray",
                padding: "0.7em",
                marginTop: "0.7em",
              }}
            >
              <Card.Link
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                as={Link}
                to={`/courseDetails/${course.id}`}
              >
                Läs mer
              </Card.Link>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
