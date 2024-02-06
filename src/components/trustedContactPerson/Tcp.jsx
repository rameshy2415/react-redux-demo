import { Card } from "react-bootstrap";
import classes from "../Body.module.css";
const TcpUI = () => {
  return (
    <>
    <hr />
      <Card className={classes.card_width}>
        <Card.Body>
          <h3>TcpUI Section is working</h3>
        </Card.Body>
      </Card>
    </>
  );
};

export default TcpUI;