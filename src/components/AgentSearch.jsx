import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import classes from "./Body.module.css";
import AgentTableView from "./AgentTableView";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { roleSelectionAction } from "../actions/RoleSelectionActions";
import Card from "react-bootstrap/Card";

const AgentSearch = () => {
  const dispatch = useDispatch();
  const [sid, setSid] = useState("");
  const isTableVisible = useSelector(
    (state) => state.roleSelectionDetails.isTableVisible
  );

  const agentSearchHandler = () => {
    setSid(sid);
    // dispatch({ type: "SET_AGENT_SID", payload: { agentSid: sid } });
    dispatch(
      roleSelectionAction.setAgentSid({ agentSid: sid, isTableVisible: true })
    );
  };

  const changeHandler = (event) => {
    setSid(event.target.value);
  };

  return (
    <>
      <hr></hr>

      <Card className={classes.card_width}>
        <Card.Body>
          <strong>Agent Search</strong>
            <Form className={classes.agnt_search}>
              <Form.Control
                type="input"
                id="agentSid"
                name="agentSid"
                value={sid}
                maxLength={7}
                minLength={7}
                aria-describedby="agentSidHelpBlock"
                required
                onChange={changeHandler}
              />
              <Button
                disabled={sid.length !== 7}
                className={classes.agnt_search_btn}
                variant="success"
                onClick={agentSearchHandler}
              >
                search
              </Button>{" "}
            </Form>
        </Card.Body>
      </Card>

      <div>{isTableVisible && <AgentTableView />}</div>
    </>
  );
};

export default AgentSearch;
