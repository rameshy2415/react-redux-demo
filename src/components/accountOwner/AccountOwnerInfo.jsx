import classes from "../Body.module.css";
import { Card } from "react-bootstrap";
const AccountOwnerInfo = () => {
  return (
    <>
      <Card className={classes.card_width}>
        <Card.Body>
          <Card.Title>
            <strong>Account Owner Info: </strong>
          </Card.Title>
          <hr></hr>
          <div className={classes.agent_info_body}></div>
          <div className={classes.agent_info_body}></div>
        </Card.Body>
      </Card>
    </>
  );
};

export default AccountOwnerInfo;
