import axios from "axios";
import { put, takeEvery, all } from "redux-saga/effects";

import { FETCH_HOME_MULTIDATA } from "./home/constans";
import { changeBannersAction } from "./home/actions";

function* interceptor() {
  const res = yield axios.get("http://123.207.32.32:8000/home/multidata");
  // console.log(res);
  const banners = res.data.data.banner.list;
  yield all([yield put(changeBannersAction(banners))]);
}

function* mySaga() {
  // takeLatest: 只能监听一个action
  // takeEvery: 监听全部的action
  yield takeEvery(FETCH_HOME_MULTIDATA, interceptor);
}

export default mySaga;
