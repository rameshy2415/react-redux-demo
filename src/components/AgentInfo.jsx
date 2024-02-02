import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import Workflow from "./WorkFlow";
import classes from "./Body.module.css";
const AgentInfo = () => {
  const dispatch = useDispatch();
  const agentSid = useSelector((state) => state.agentSid);

  const agentRemoveHandler = () => {
    dispatch({ type: "AGENT_REMOVE", payload: {} });
  };
  return (
    <>
      <hr></hr>
      <Card className={classes.card_width}>
        <Card.Body>
          <Card.Title>
            <strong>Agent Info: <i>Ramesh Yadav</i> </strong>
          </Card.Title>
          <hr></hr>
          <div className={classes.agent_info_body}>
            <Card.Text><b>SID:</b> {agentSid}</Card.Text>
            <Card.Text><b>First Name:</b> Ramesh</Card.Text>
            <Card.Text><b>Middle Name:</b> -</Card.Text>
          </div>
          <div className={classes.agent_info_body}>
            <Card.Text><b>Last Name:</b> Yadav</Card.Text>
            <Card.Text><b>Rep Code:</b> JA8</Card.Text>
            <Card.Text><b>Suffix:</b>: Mr.</Card.Text>
          </div>
          {/* <Card.Link href="#">Remove</Card.Link> */}
          <Button variant="danger" onClick={agentRemoveHandler} className={classes.agent_info_btn}>
            Remove
          </Button>{" "}
        </Card.Body>
      </Card>
      <Workflow></Workflow>
    </>
  );
};

export default AgentInfo;
