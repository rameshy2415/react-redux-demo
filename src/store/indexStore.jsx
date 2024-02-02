import { legacy_createStore as createStore } from "redux";

const INITIAL_STATE = { counter: 0, showCounter: true };

const createReducer = (state = INITIAL_STATE, action) => {
  let updatedState ;

  switch (action.type) {
    case "INCREMENT":
      updatedState = {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
      break;

    case "DECREMENT":
      updatedState = {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
      break;

    case "INCREMENT_BY":
      updatedState = {
        counter: state.counter + action.payload,
        showCounter: state.showCounter,
      };
      break;

    case "HIDE_COUNTER":
      updatedState = {
        counter: state.counter,
        showCounter: !state.showCounter,
      };
      break;

    default:
      updatedState = { ...state };
      break;
  }

  return updatedState;
};

const store = createStore(createReducer);

export default store;
