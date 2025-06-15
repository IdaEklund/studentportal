import { NewsData } from "../data/newsData";
import { NewsPost } from "../Components/NewsPost";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


//News.jsx tar emot en array med inlägg från newsData.js (som props) och mappar ut varje
//objekt till en NewsPost.
export const News = () => {
  const newsData = NewsData();

  return (
    <Container style={{ marginTop: "3em" }}>
      <Row>
        {newsData.map((data) => (
          <Col
            md={6}
            xs={18}
            key={data.id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <NewsPost title={data.title} body={data.body}></NewsPost>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
