import React, { useState } from "react";

const UseStates = () => {
  const [counter, setCounter] = useState(0);
  const [age, setAge] = useState(19);
  const [movies, setMovies] = useState([
    "大话西游",
    "喜剧之王",
    "国产凌凌漆",
    "功夫",
  ]);
  return (
    <div>
      <h2>当前计数:{counter}</h2>
      <h2>我的年龄:{age}</h2>
      <ul>
        {movies.map((value, index) => {
          return <li key={value}>{value}</li>;
        })}
      </ul>
    </div>
  );
};

export default UseStates;
