import redux from "redux";
/**
 * 这里导入导出是需要添加后缀名的
 * FAQ: 为什么以前我做项目的时候不需要添加后缀名,这里就需要添加后缀名
 * 因为在Vue或者React中,Vue脚手架和React脚手架都集成了webpack,webpack自动帮我们进行了一些配置
 * webpack会自动帮我们添加后缀名
 * 当前环境没有webpack,所以就需要手动添加后缀名
 */
import reducer from "./reducer.js";

const store = redux.createStore(reducer);

export default store;
