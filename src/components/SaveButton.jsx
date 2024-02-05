import Button from "react-bootstrap/Button";
import classes from "./Body.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiNotificationAction } from "../actions/uiNotificationActions";
const SaveButton = () => {

  const dispatch = useDispatch()
  
  const agentInfo = useSelector(
    (state) => state.roleSelectionDetails.agentInfo
  );
  const saveHandler = (saveType) => {
    console.log("AgentInfo", agentInfo);

    if (saveType === "SAVE") {
      console.log("Save clicked");
      dispatch(uiNotificationAction.showNotification({status:'success', title:'Success!', message:'successfully saved..', isNotification:true}))

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
