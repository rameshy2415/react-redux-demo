import { Card } from "react-bootstrap";
import classes from "../Body.module.css";
const RegBiUI = () => {
  return (
    <>
    <hr />
      <Card className={classes.card_width}>
        <Card.Body>
          <h3>RegBI Section is working</h3>
        </Card.Body>
      </Card>
    </>
  );
};

export default RegBiUI;