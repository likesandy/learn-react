import { INCREASE, REDUCE } from "./constant.js";

export const increaseAction = (num) => ({
  type: INCREASE,
  num,
});

export const reduceAction = (num) => ({
  type: REDUCE,
  num,
});
