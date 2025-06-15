import { CourseCard } from "../Components/CourseCard";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import Container from "react-bootstrap/Container";


export const Courses = () => {
  //Kursdatakontexten används här.
  const courses = useContext(DataContext);

// Renderar en lista av CourseCard-komponenter, en för varje kurs.
// Varje CourseCard får kursobjektet som prop.
return (
    <Container style={{ marginTop: "5em" }}>
    {courses.map((course) => (
        <CourseCard key={course.id} course={course}></CourseCard>
    ))}
    </Container>
);
};
