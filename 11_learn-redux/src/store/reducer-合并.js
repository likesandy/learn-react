import { reducer as counterReducer } from "./counter";
import { reducer as homeRedcuer } from "./home";

const reducer = (state = {}, action) => ({
  counterInfo: counterReducer(state.counterInfo, action),
  homeInfo: homeRedcuer(state.homeInfo, action),
});

export default reducer;
