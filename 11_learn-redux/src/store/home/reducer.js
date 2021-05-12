import { CHANGE_BANNERS } from "./constant.js";

const defaultState = {
  banners: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_BANNERS:
      return { ...state, banners: action.banners };
    default:
      return state;
  }
};
export default reducer;
