import Card from "react-bootstrap/Card";
import SaveButton from "./SaveButton";
import Dropdown from "react-bootstrap/Dropdown";
import classes from './Body.module.css'
const Workflow = () => {
  return (
    <>
      <hr></hr>
      <Card className={classes.card_width}>
        <Card.Body className={classes.workflow_card}>
          <div className={classes.workflow_party_type}>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
               Select Party Type
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Individual</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Trust</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className={classes.workflow_account_type}>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Select Transaction Type
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">New Account</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Broker Dealer Change</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Ownership Change</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Card.Body>
      </Card>

      <hr />
      <SaveButton></SaveButton>
    </>
  );
};

export default Workflow;
