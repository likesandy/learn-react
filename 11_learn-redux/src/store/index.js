import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";
/**
 *  如果导入的是redux-thunk,那么返回的就是一个中间件对象
 *  如果导入的是redux-saga,那么返回的就是一个用于创建中间件对象的方法
 */

import saga from "./saga";
import reducer from "./reducer-拆分";

/**
 * 这里导入导出是需要添加后缀名的
 * FAQ: 为什么以前我做项目的时候不需要添加后缀名,这里就需要添加后缀名
 * 因为在Vue或者React中,Vue脚手架和React脚手架都集成了webpack,webpack自动帮我们进行了一些配置
 * webpack会自动帮我们添加后缀名
 * 当前环境没有webpack,所以就需要手动添加后缀名
 */

// 应用中间件
// const storeEnhancer = applyMiddleware(thunkMiddleware);

// 创建saga中间件
const sagaMiddleware = createSagaMiddleware();
// const storeEnhancer = applyMiddleware(sagaMiddleware);

// const store = createStore(reducer, storeEnhancer);

// 获取composeEnhancers函数
// trace: true: 开启Redux dev Tools Trace(追踪功能)
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
const storeEnhancer = applyMiddleware(thunkMiddleware, sagaMiddleware);

const store = createStore(reducer, composeEnhancers(storeEnhancer));

sagaMiddleware.run(saga);

export default store;
