import { INCREASE, REDUCE } from "./constant.js";

// export const increaseAction = (num) => {
//   return {
//     type: INCREASE,
//     num: num,
//   };
// };

export const increaseAction = (num) => ({
  // ({})表示返回一个对象
  type: INCREASE,
  num,
});

export const reduceAction = (num) => ({
  type: REDUCE,
  num,
});
