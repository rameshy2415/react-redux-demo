import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import classes from "./Body.module.css";
import { roleSelectionAction } from "../actions/RoleSelectionActions";

const AgentRoleSelection = () => {
  const dispatch = useDispatch();

  const selectionHandler = (event) => {
    const agentRole = event.target.value;

    if (agentRole === "delegate") {
      //dispatch({ type: "DELEGATE_VIEW", payload: { agentRole: agentRole } });
      dispatch(roleSelectionAction.delegateView({ agentRole: agentRole , agentSid:''}));
    }

    if (agentRole === "agent") {
      const agentInfo = {
        firstName: "Mayur",
        middleName: "-",
        lastName: "Panjwani",
        sid: "F123456",
        repCode: "JA8",
        branchCode: "",
        suffix: "Mr.",
      };
      //dispatch({ type: "AGENT_INFO", payload: { agentRole: agentRole, agentInfo:agentInfo } });
      dispatch(
        roleSelectionAction.agentView({
          agentRole: agentRole,
          agentInfo: agentInfo,
          agentSid:''
        })
      );
    }
  };

  return (
    <>
      <Card className={classes.card_width}>
        <Card.Body className={classes.workflow_card}>
          <Form>
            <strong>Are you agent or Delegate</strong>
            {["radio"].map((type) => (
              <div key={`reverse-${type}`} className="mb-3">
                <Form.Check
                  inline
                  reverse
                  label="Agent"
                  name="group1"
                  type={type}
                  id={`reverse-${type}-1`}
                  value="agent"
                  onChange={selectionHandler}
                />
                <Form.Check
                  inline
                  reverse
                  label="Delegate"
                  name="group1"
                  type={type}
                  value="delegate"
                  id={`reverse-${type}-2`}
                  onChange={selectionHandler}
                />
              </div>
            ))}
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default AgentRoleSelection;
