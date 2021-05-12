import axios from "axios";
import {
  INCREASE,
  REDUCE,
  CHANGE_BANNERS,
  FETCH_HOME_MULTIDATA,
} from "./constant.js";

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

export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners,
});

export const getBannersAction = (dispatch, getState) => {
  axios({
    url: "http://123.207.32.32:8000/home/multidata",
  }).then((res) => {
    const data = res.data.data;
    dispatch(changeBannersAction(data.banner.list));
  });
};

export const fetchHomeMultidataAction = {
  type: FETCH_HOME_MULTIDATA,
};
