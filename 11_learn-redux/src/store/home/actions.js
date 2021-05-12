import axios from "axios";
import { CHANGE_BANNERS, FETCH_HOME_MULTIDATA } from "./constans";

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
