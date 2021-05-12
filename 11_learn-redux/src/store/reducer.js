import { INCREASE, REDUCE, CHANGE_BANNERS } from "./constant.js";

/*
const defaultState = {
  counter: 0,
  banners: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, counter: state.counter + action.num };
    case REDUCE:
      return { ...state, counter: state.counter - action.num };
    case CHANGE_BANNERS:
      return { ...state, banners: action.banners };
    default:
      return state;
  }
};
*/

// 拆分reducer

const defaultCounterState = {
  counter: 0,
};

const defaultHomeState = {
  banners: [],
};

const counterReducer = (state = defaultCounterState, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, counter: state.counter + action.num };
    case REDUCE:
      return { ...state, counter: state.counter - action.num };
    case CHANGE_BANNERS:
    default:
      return state;
  }
};

const homeReducer = (state = defaultHomeState, action) => {
  switch (action.type) {
    case CHANGE_BANNERS:
      return { ...state, banners: action.banners };
    default:
      return state;
  }
};

const reducer = (state = {}, action) => ({
  counterInfo: counterReducer(state.counterInfo, action),
  homeInfo: homeReducer(state.homeInfo, action),
});

export default reducer;
