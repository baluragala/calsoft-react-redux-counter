import { INC, DEC } from "../actionTypes";

export default (prevState = { counter: 100, another: [] }, action) => {
  switch (action.type) {
    case INC:
      return { counter: prevState.counter + 1 };
    case DEC:
      return { counter: prevState.counter - 1 };
    default:
      return prevState;
  }
};
