import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import classes from "./Body.module.css";
import AgentTableView from "./AgentTableView";

import { useState } from "react";
import { useDispatch } from "react-redux";
const AgentSearch = () => {
  const dispatch = useDispatch();
  const [sid, setSid] = useState("");
  const [isTable, setTable] = useState(false);

  const agentSearchHandler = () => {
    setSid(sid);
    dispatch({ type: "SET_AGENT_SID", payload: { agentSid: sid } });
    setTable(true);
  };

  const changeHandler = (event) => {
    setSid(event.target.value);
  };

  return (
    <>
      <hr></hr>
      <strong>Agent Search</strong>
      <div className={classes.agnt_search}>
        <Form.Control
          type="input"
          id="agentSid"
          name="agentSid"
          value={sid}
          aria-describedby="agentSidHelpBlock"
          onChange={changeHandler}
        />
        <Button
          className={classes.agnt_search_btn}
          variant="success"
          onClick={agentSearchHandler}
        >
          search
        </Button>{" "}
      </div>
      <div>{isTable && <AgentTableView ></AgentTableView>}</div>
    </>
  );
};

export default AgentSearch;
