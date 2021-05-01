import { INCREASE, REDUCE } from "./constant.js";

export const increaseAction = () => ({
  type: INCREASE,
});

export const reduceAction = (num) => ({
  type: REDUCE,
  num,
});
