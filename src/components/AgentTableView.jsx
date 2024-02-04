import Table from "react-bootstrap/Table";
import classes from "./Body.module.css";
import { useDispatch, useSelector } from "react-redux";
import { roleSelectionAction } from "../actions/RoleSelectionActions";

const AgentTableView = () => {
  const agentSid = useSelector((state) => state.roleSelectionDetails.agentSid);

  const dispatch = useDispatch();
  const agentInfo = {
    firstName: "Ramesh",
    middleName: "-",
    lastName: "Yadav",
    sid: agentSid,
    repCode: "JA8",
    branchCode: "",
    suffix: "Mr.",
  };

  const agentViewHandler = () => {
    //dispatch({ type: "AGENT_SEARCH", payload: { agentSid: agentSid, agentInfo: agentInfo }});
    dispatch(
      roleSelectionAction.agentSearch({
        agentInfo: agentInfo,
        isTableVisible:false,
      })
    );
  };
  return (
    <>
      <div className={classes.agentTableView}>
        <Table striped bordered hover size="sm" onClick={agentViewHandler}>
          <thead>
            <tr>
              <th>SID</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{agentSid}</td>
              <td>Ramesh</td>
              <td>Yadav</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default AgentTableView;
