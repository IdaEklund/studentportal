import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export const CourseDetails = () => {

//Kursdatakontexten används här.
const courses = useContext(DataContext);

//React Router params används för att få kursens ID.
const { courseId } = useParams();
const course = courses.find((c) => c.id === Number(courseId));

//Om kursen inte hittas visas ett felmeddelande.
if (!course) {
    return <div>Kurs hittades inte.</div>;
}

//Informationen om kursen visas på en sida på
//ett Bootstrap-Card.
return (
    <Container
    style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
    }}
    >
    <Card
        bg="dark"
        border="light"
        style={{
        backgroundColor: "darkgrey",
        color: "white",
        width: "30em",
        minHeight: "20em",
        maxHeight: "22.4em",
        marginTop: "6em",
        marginBottom: "0.7em",
        }}
    >
        <Card.Header style={{ backgroundColor: "gray" }}>
        Course details
        </Card.Header>
        <Card.Body>
        <Card.Title>{course.name}</Card.Title>
        <Card.Text style={{ marginTop: "2em" }}>{course.desc}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
