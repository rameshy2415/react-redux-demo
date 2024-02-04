import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import classes from "./Body.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { roleSelectionAction } from "../actions/RoleSelectionActions";
const Workflow = () => {
  const dispatch = useDispatch();
  
  const [workFlowData, setWorkFlowData] = useState({
    partyType: "",
    transactionType: "",
  });

  //console.log("WorkFlow Data", workFlowData);

  const handleDropdownChange = (value, changeType) => {
    if (changeType === "PARTY_TYPE") {
      setWorkFlowData((prevState) => {
        return { ...prevState, partyType: value };
      });
    }

    if (changeType === "TRANSACTION_TYPE") {
      setWorkFlowData((prevState) => {
        return { ...prevState, transactionType: value };
      });
    }

    dispatch(roleSelectionAction.saveData({ workFlowInfo: { ...workFlowData } }))
    
  };

  return (
    <>
      <hr></hr>
      <Card className={classes.card_width}>
        <Card.Body className={classes.workflow_card}>
          <div className={classes.workflow_party_type}>
            <label className={classes.workflow_label} htmlFor="partyType">
              Ownership Type:
            </label>
            <Form.Select
              required
              className={classes.workflow_select}
              id="partyType"
              aria-label="Default select example"
              value={workFlowData.partyType}
              onChange={(event) =>
                handleDropdownChange(event.target.value, "PARTY_TYPE")
              }
            >
              <option value="individual">Individual</option>
              <option value="trust">Trust</option>
            </Form.Select>
          </div>

          <div className={classes.workflow_account_type}>
            <label className={classes.workflow_label} htmlFor="transType">
              Workflow:
            </label>
            <Form.Select
            placeholder="select"
              required
              className={classes.workflow_select}
              id="transType"
              aria-label="Default select example"
              value={workFlowData.transactionType}
              onChange={(event) =>
                handleDropdownChange(event.target.value, "TRANSACTION_TYPE")
              }
            >
              <option value="newAccount">New Account</option>
              <option value="brokerDealerChange">Broker Dealer Change</option>
              <option value="ownerShipChange">Ownership Change</option>
            </Form.Select>
          </div>
        </Card.Body>
      </Card>

      <hr />
    </>
  );
};

export default Workflow;
