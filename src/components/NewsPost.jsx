import Card from "react-bootstrap/Card";

//Den här komponenten visar varje enskild nyhet. Den tar emot "title" och "body"
//som props från "News".
export const NewsPost = ({
  /*Detta är postsens "default-värden" ifall ingen titel eller body skulle finnas.*/
  title = "The post title",
  body = "The post's body."
}) => 
  
  {
  return (
    //Varje nyhet visas i ett Bootstrap-card.
      <Card style={{margin: "2em", height: "fit-content", width: "25em", minHeight: "13em"}}>
        <Card.Header style={{backgroundColor: "dimgray", color: "white"}}>
          <Card.Title>{title}</Card.Title> 
          </Card.Header>
      <Card.Body>
        <Card.Text>
          {body}
        </Card.Text>
      </Card.Body>
      </Card>
  );
}