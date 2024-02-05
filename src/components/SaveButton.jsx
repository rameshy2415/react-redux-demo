import Button from "react-bootstrap/Button";
import classes from "./Body.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiNotificationAction } from "../actions/uiNotificationActions";
const SaveButton = () => {
  const dispatch = useDispatch();

  const indexArray = useSelector((state) => state.uiNotofication.indexArray);
  const currentIndex = useSelector(
    (state) => state.uiNotofication.currentIndex
  );

  const agentInfo = useSelector(
    (state) => state.roleSelectionDetails.agentInfo
  );
  const saveHandler = (saveType) => {
    console.log("AgentInfo", agentInfo);

    if (saveType === "SAVE") {
      console.log("Save clicked");
      dispatch(
        uiNotificationAction.showNotification({
          status: "success",
          title: "Success!",
          message: "successfully saved..",
          isNotification: true,
        })
      );
    }
    if (saveType === "SAVE_NEXT") {
      const tempArray = [...indexArray];
      const tempIndex = currentIndex + 1;
      tempArray.push(tempIndex);
      dispatch(
        uiNotificationAction.updateIndexAndArray({
          currentIndex: tempIndex,
          indexArray: tempArray,
        })
      );
      console.log("Save clicked");
    }
  };

  let buttonContent = (
    <Button variant="primary" onClick={() => saveHandler("SAVE_NEXT")}>
      Save & Continue
    </Button>
  );

  if (indexArray.length === 4) {
    buttonContent = (
      <Button variant="primary" onClick={() => saveHandler("SUBMIT")}>
        Submit
      </Button>
    );
  }

  return (
    <>
      <div className={classes.save_btn}>
        <Button variant="primary" onClick={() => saveHandler("SAVE")}>
          Save Draft
        </Button>{" "}
       {buttonContent}
      </div>
    </>
  );
};

export default SaveButton;
