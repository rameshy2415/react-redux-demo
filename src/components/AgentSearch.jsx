import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import classes from "./Body.module.css";
import AgentTableView from "./AgentTableView";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { roleSelectionAction } from "../actions/RoleSelectionActions";
import Card from "react-bootstrap/Card";
import { fetchPosts } from '../reducers/APICallReducer'

const AgentSearch = () => {
  const dispatch = useDispatch();
  const [sid, setSid] = useState("");
  const isTableVisible = useSelector(
    (state) => state.roleSelectionDetails.isTableVisible
  );

  // const apiDispatch = useDispatch()
  const { posts, status, isError } = useSelector((state) => state.posts);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {isError}</div>;

  console.log('Posts', posts)


  const agentSearchHandler = () => {
    setSid(sid);
    dispatch(
      roleSelectionAction.setAgentSid({ agentSid: sid, isTableVisible: true })
    );

    dispatch(
      fetchPosts()
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
