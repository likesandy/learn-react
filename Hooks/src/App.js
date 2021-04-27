import React, { createContext, useState } from "react";
import ClasssCounter from "./01_邂逅Hook/01_class_counter";
import HookCounter from "./01_邂逅Hook/02_hook_counter";
import HookEnhanceCounter from "./01_邂逅Hook/03_hook_enhance_counter";
import UseStates from "./02_useState/01_多个状态的使用";
import ComplexUseState from "./02_useState/02_复杂状态的操作";
import ClassCounterChangeTitle from "./03_useEffect/01_class实现title的修改";
import HookCounterChangeTitle from "./03_useEffect/02_hook实现title的修改";
import HookSubscribe from "./03_useEffect/03_hooks模拟订阅和取消订阅";
import HookUseEffects from "./03_useEffect/04_多个useEffect一起使用";
import HookContext from "./04_useContext/useContext的使用";
import HookUseReducer from "./05_useReducer/useReducer的使用";
import HookUseCallbackDemo1 from "./06_useCallback/01_useCallback不能进行的性能优化";
import HookUseCallbackDemo2 from "./06_useCallback/02_useCallback不能进行的性能优化";
import HookUseMemoDemo1 from "./07_useMemo/01_useMemo复杂计算的应用";
import HookUseMemoDemo2 from "./07_useMemo/02_useMemo传入子组件应用类型";
import HookUseRefDemo1 from "./08_useRef/01_useRef引用DOM";
import HookUseRefDemo2 from "./08_useRef/02_useRef引用其他数据";
import ForwardRefDemo from "./09_useImperativeHandle/01_forwardRef的用法";
import HookUseImperativeHandleDemo from "./09_useImperativeHandle/02_useImperativeHandle的用法";
import HookUseEffectCounterDemo from "./10_useLayoutEffect/01_useEffect的counter修改";
import HookUseLayouEffectCounterDemo from "./10_useLayoutEffect/02_useLayouEffect的counter修改";
import CustomHookDemo1 from "./11_自定义Hook/01_认识自定义Hook";
import CustomHookDemo2 from "./11_自定义Hook/02_自定义Hook练习_Context共享";
import CustomHookDemo3 from "./11_自定义Hook/03_自定义Hook练习_获取滚动位置";
import CustomHookDemo4 from "./11_自定义Hook/04_自定义Hook练习_localStorage存储";

export const UserContext = createContext();
export const ThemeContext = createContext();

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      {/* 1.邂逅Hook */}
      {/* <ClasssCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookEnhanceCounter/> */}

      {/* 2.useState的使用 */}
      {/* <UseStates/> */}
      {/* <ComplexUseState/> */}
      {/* <ClassCounterChangeTitle /> */}

      {/* 3.useEffect的使用 */}
      {/* <HookCounterChangeTitle /> */}
      {/* {show && <HookSubscribe />} */}
      {/* <HookUseEffects /> */}

      {/* 4.useContext的使用 */}
      {/* <UserContext.Provider value={{ name: "codertao", age: 19 }}>
        <ThemeContext.Provider value={{ fontSize: "30px", color: "red" }}>
          <HookContext />
        </ThemeContext.Provider>
      </UserContext.Provider> */}

      {/* 5.useReducer的使用 */}
      {/* <HookUseReducer /> */}

      {/* 6.useCallback的使用 */}
      {/* <HookUseCallbackDemo1 /> */}
      {/* <HookUseCallbackDemo2 /> */}

      {/* 7.useMemo的使用 */}
      {/* <HookUseMemoDemo1 /> */}
      {/* <HookUseMemoDemo2 /> */}

      {/* 8.useRef的使用 */}
      {/* <HookUseRefDemo1 /> */}
      {/* <HookUseRefDemo2 /> */}

      {/* 9.useImperativeHandle的使用 */}
      {/* <ForwardRefDemo /> */}
      {/* <HookUseImperativeHandleDemo/> */}

      {/* 10.useLayoutEffect的使用 */}
      {/* <HookUseEffectCounterDemo /> */}
      {/* <HookUseLayouEffectCounterDemo /> */}

      {/* 11.自定义Hook的使用 */}
      {/* {show && <CustomHookDemo1 />} */}
      {/* <UserContext.Provider value={{ name: "codertao", age: "19" }}>
        <ThemeContext.Provider value={{ color: "red" }}>
          <CustomHookDemo2 />
        </ThemeContext.Provider>
      </UserContext.Provider> */}
      {/* <CustomHookDemo3 /> */}
      <CustomHookDemo4 />

      <button onClick={() => setShow(!show)}>切换组件</button>
    </div>
  );
};

export default App;
