import Button from "react-bootstrap/Button";
import classes from './Body.module.css'
const SaveButton = () => {
  return (
    <>
      <div className={classes.save_btn}>
        <Button variant="primary">Save Draft</Button>{" "}
        <Button variant="primary">Save & Continue</Button>{" "}
      </div>
    </>
  );
};

export default SaveButton;
