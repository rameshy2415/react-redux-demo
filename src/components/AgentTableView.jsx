import Table from "react-bootstrap/Table";
import classes from "./Body.module.css";
import {  useDispatch, useSelector } from "react-redux";

const AgentTableView = () => {
  const agentSid = useSelector((state) => state.agentSid);

  const dispatch = useDispatch();
  const agentInfo = {firstName:'Ramesh', middleName:'', lastName:'Yadav', sid:agentSid, repCode:'JA8', branchCode:'', suffix:'Mr.'}

  const agenViewHandler = () =>{
    dispatch({ type: "AGENT_SEARCH", payload: { agentSid: agentSid, agentInfo: agentInfo }});
  }
  return (
    <>
      <div className={classes.agentTableView}>
        <Table striped bordered hover size="sm" onClick={agenViewHandler}>
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
              <td>Mark</td>
              <td>Otto</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default AgentTableView;
