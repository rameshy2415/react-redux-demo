import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import classes from "../Body.module.css";
import { Card } from "react-bootstrap";

import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { roleSelectionAction } from "../../store/applicationStore";

const ECISearch = () => {
  //const dispatch = useDispatch();
  const [eci, setEci] = useState("");

  const agentSearchHandler = () => {
    setEci(eci);
    // dispatch(roleSelectionAction.setAgentSid({ eci: eci }))
  };

  const changeHandler = (event) => {
    setEci(event.target.value);
  };

  return (
    <>
      <Card className={classes.card_width}>
        <Card.Body>
          <Card.Title>
            <strong>ECI Search</strong>
          </Card.Title>
          <hr></hr>
            <div className={classes.agnt_search}>
              <Form.Control
                type="input"
                id="ownerEci"
                name="ownerEci"
                value={eci}
                maxLength={5}
                aria-describedby="eciSidHelpBlock"
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
        </Card.Body>
      </Card>
    </>
  );
};

export default ECISearch;
