import { INCREASE, REDUCE } from "./constant.js";

const defaultState = {
  counter: 0,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, counter: state.counter + 1 };
    case REDUCE:
      return { ...state, counter: state.counter - action.num };
    default:
      return state;
  }
};

export default reducer;
