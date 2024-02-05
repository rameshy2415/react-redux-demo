import { Table } from "react-bootstrap";
import classes from "../Body.module.css";

import { useDispatch } from "react-redux";
import { accountOwnerActions } from "../../actions/AccountOwnerActions";

const TableView = (props) => {
  const tableColumnHeader = ["ECI", "First Name", "Last Name"];
  const tableRowData = ["12345", "John", "Cena"];
  console.log('Props ', props)

  const dispatch = useDispatch();

  const columnHeader = tableColumnHeader.map((item) => {
    return <th key={item}>{item}</th>;
  });

  const tableData = tableRowData.map((item) => {
    return <td key={item}>{item}</td>;
  });

  const clickHandler = () => {
    dispatch(accountOwnerActions.hideEciSearchTable({ isTableVisible: false }));
  };
  return (
    <>
      <div className={classes.agentTableView}>
        <Table striped bordered hover size="sm" onClick={clickHandler}>
          <thead>
            <tr>{columnHeader}</tr>
          </thead>
          <tbody>
            <tr>{tableData}</tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default TableView;
