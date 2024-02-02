import { Button } from "react-bootstrap";
import Counter from "./Counter";
import { useDispatch, useSelector } from "react-redux";
import classes from './Main.module.css'
import '../index.css'

const Main = () => {
  const dispatch = useDispatch();
  const showCounter = useSelector((state) => state.showCounter);
  //const {showCounter} = useSelector((state) => state);
  //console.log('showCounter', showCounter)

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const incrementByHandler = () => {
    dispatch({ type: "INCREMENT_BY", payload:5 });
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const counterHandler = () => {
    dispatch({ type: "HIDE_COUNTER" });
  };

  return (
    <>
      {showCounter && <Counter />}

      <hr />
      <div>
        <Button variant="primary" size="sm" onClick={incrementHandler}>
          Increment
        </Button>{" "}
        <Button variant="primary" size="sm" onClick={incrementByHandler}>
          Increment By
        </Button>{" "}
        <Button variant="secondary" size="sm" onClick={decrementHandler}>
          Decrement
        </Button>
        <br />
      </div>
      <div className={classes.btn_margin}>
        <Button variant="info" size="sm" onClick={counterHandler}>
          {showCounter ? "HideCounter" : "ShowCounter"}
        </Button>
      </div>
    </>
  );
};

export default Main;
