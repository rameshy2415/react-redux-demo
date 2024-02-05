import classes from "../Body.module.css";
import { Card } from "react-bootstrap";
import {  useSelector } from "react-redux";

const AccountOwnerInfo = () => {
  const eci = useSelector(state => state.accountOwnerDetails.eci)
  console.log('ECI ', eci)
  return (
    <>
      <Card className={classes.card_width}>
        <Card.Body>
          <Card.Title>
            <strong>Account Owner Info: </strong>
          </Card.Title>
          <hr></hr>
          <div className={classes.agent_info_body}>
            ECI: <b>{eci}</b>
          </div>
          <div className={classes.agent_info_body}></div>
        </Card.Body>
      </Card>
    </>
  );
};

export default AccountOwnerInfo;
