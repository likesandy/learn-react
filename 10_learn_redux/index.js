/**
 * 导入redex,如果在Node环境下运行可以使用CJS的方式进行导入
 * 这里也可以使用ES6模块化的方式进行导入
 * 但是因为是在Node的环境下运行,如果使用ESModlue的方式来进行导入
 * 需要额外进行一些配置
 * 需要在package.json文件中添加type:module(Node > 13.2)
 */
import redux from "redux";

// 默认值
const defaultState = {
  counter: 0,
};

// reducer
/**
 *
 * @param {*} state 状态,state = defaultState表示第一次进来没有值就使用默认值
 * @param {*} action 行为,action就是下面派发传入的action
 * @returns 返回一个state
 *
 */
function reducer(state = defaultState, action) {
  switch (action.type) {
    case "INCREASE":
      /**
       * 这里需要用展开语法的方式拿到原来的state对象,然后再写counter:state.counter+1
       * 这样后面的counter就会把前面的counter给覆盖掉
       * 返回的就是新的state
       * 不能使用state.counter += 1
       * 因为这样写reducer就不是一个纯函数了
       */
      // return state.counter += 1
      return { ...state, counter: state.counter + 1 };
    case "REDUCE":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

// store(创建的时候需要传入一个纯函数reducer)
const store = redux.createStore(reducer);

// actions
const action1 = { type: "INCREASE" };
const action2 = { type: "REDUCE" };

// 订阅store的修改
/**
 * 当store的值发生改变就会调用回调函数
 * store.getState()就可以拿到新的state对象
 */
store.subscribe(() => {
  console.log("counter:", store.getState().counter);
});

// 派发action
/**
 * 派发dispatch的本质就是去调用上面的reducer函数
 */
store.dispatch(action1);
store.dispatch(action2);
