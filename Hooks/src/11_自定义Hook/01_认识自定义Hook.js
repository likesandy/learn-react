import React, { useEffect } from "react";

function useCustomHook(name) {
  useEffect(() => {
    console.log(`${name}组件渲染成功`);
    return () => {
      console.log(`${name}组件卸载成功`);
    };
  }, []);
}

const Home = (props) => {
  useCustomHook("Home");
  return <h2>Home</h2>;
};

const About = (props) => {
  useCustomHook("About");
  return <h2>Home</h2>;
};

export default function CustomHookDemo1() {
  useCustomHook("CustomHook");
  return (
    <div>
      <h2>CustomHook</h2>
      <Home />
      <About />
    </div>
  );
}
