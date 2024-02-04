import Button from "react-bootstrap/Button";
import classes from "./Body.module.css";
import { useSelector } from "react-redux";
const SaveButton = () => {
  
  const agentInfo = useSelector(
    (state) => state.roleSelectionDetails.agentInfo
  );
  const saveHandler = (saveType) => {
    console.log("AgentInfo", agentInfo);

    if (saveType === "SAVE") {
      console.log("Save clicked");
    }
    if (saveType === "SAVE_NEXT") {
      console.log("Save clicked");
    }
  };

  return (
    <>
      <div className={classes.save_btn}>
        <Button variant="primary" onClick={() => saveHandler("SAVE")}>
          Save Draft
        </Button>{" "}
        <Button variant="primary" onClick={() => saveHandler("SAVE_NEXT")}>
          Save & Continue
        </Button>{" "}
      </div>
    </>
  );
};

export default SaveButton;
