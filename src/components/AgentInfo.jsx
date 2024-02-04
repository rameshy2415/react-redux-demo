import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Body.module.css";
import { roleSelectionAction } from "../actions/RoleSelectionActions";

const AgentInfo = () => {
  const dispatch = useDispatch();
  const agentInfo = useSelector((state) => state.roleSelectionDetails.agentInfo);

  const agentRemoveHandler = () => {
   // dispatch({ type: "AGENT_REMOVE", payload: {} });
    dispatch(roleSelectionAction.removeAgentView());
  };
  return (
    <>
      <hr></hr>
      <Card className={classes.card_width}>
        <Card.Body>
          <Card.Title>
            <strong>Agent Info: <i>{agentInfo.firstName} {' '} {agentInfo.lastName}</i> </strong>
          </Card.Title>
          <hr></hr>
          <div className={classes.agent_info_body}>
            <Card.Text><b>SID:</b>{agentInfo.sid}</Card.Text>
            <Card.Text><b>First Name:</b> {agentInfo.firstName}</Card.Text>
            <Card.Text><b>Middle Name:</b> {agentInfo.middleName}</Card.Text>
          </div>
          <div className={classes.agent_info_body}>
            <Card.Text><b>Last Name:</b> {agentInfo.lastName}</Card.Text>
            <Card.Text><b>Rep Code:</b> {agentInfo.repCode}</Card.Text>
            <Card.Text><b>Suffix:</b>: {agentInfo.suffix}</Card.Text>
          </div>
          <Button variant="danger" onClick={agentRemoveHandler} className={classes.agent_info_btn}>
            Remove
          </Button>{" "}
        </Card.Body>
      </Card>
    </>
  );
};

export default AgentInfo;
