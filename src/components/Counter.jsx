import { useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector(state => state.counter)
  return (
    <>
      <div>
        <h3>{counter}</h3>
      </div>
    </>
  );
};

export default Counter;
