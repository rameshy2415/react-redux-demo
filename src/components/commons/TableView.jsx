import { Table } from "react-bootstrap";
import classes from "../Body.module.css";

const TableView = (props) => {
  const tableColumnHeader = ["ECI", "First Name", "Last Name"];
  const tableRowData = ["12345", "John", "Cena"];
  console.log('props', props)

  const columnHeader = tableColumnHeader.map((item) => {
    return <th key={item}>{item}</th>;
  });

  const tableData = tableRowData.map((item) => {
    return <td key={item}>{item}</td>;
  });

  const clickHandler = () => {
    console.log("Hello");
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
