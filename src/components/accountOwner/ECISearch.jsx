import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import classes from "../Body.module.css";
import { Card } from "react-bootstrap";
import TableView from "../commons/TableView";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { accountOwnerActions } from "../../actions/AccountOwnerActions";

const ECISearch = () => {
  const dispatch = useDispatch();
  const [eci, setEci] = useState("");
  const isTableVisible = useSelector(state => state.accountOwnerDetails.isTableVisible)

  const eciSearchHandler = () => {
    //setEci(eci);
    dispatch(accountOwnerActions.eciSearchHandler({eci:eci, isTableVisible:true}))
  };

  const changeHandler = (event) => {
    const eci = event.target.value
    setEci(eci);
  };

  return (
    <>
      <Card className={classes.card_width}>
        <Card.Body>
          <Card.Title>
            <strong>ECI Search</strong>
          </Card.Title>
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
                onClick={eciSearchHandler}
              >
                search
              </Button>{" "}
            </div>
            <div>
          {isTableVisible && <TableView />}  
            </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ECISearch;
