import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Counter from "./Counter";

const mockStore = configureStore([]);

describe("Counter component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      counter: {
        value: 0,
      },
    });
  });

  test("renders with initial value", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    expect(getByText("0")).toBeInTheDocument();
  });

  test("increments the counter", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    fireEvent.click(getByText("Increment"));
    expect(getByText("1")).toBeInTheDocument();
  });

  test("decrements the counter", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    fireEvent.click(getByText("Decrement"));
    expect(getByText("-1")).toBeInTheDocument();
  });
});
