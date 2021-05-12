import store from "./store/index.js";
import { increaseAction, reduceAction } from "./store/actions.js";

// 订阅store的修改
store.subscribe(() => {
  console.log("counter:", store.getState().counter);
});

// 派发action
store.dispatch(increaseAction(5));
store.dispatch(reduceAction(10));
