import React, { useState } from "react";

const ComplexUseState = () => {
  const [movies, setMovies] = useState([
    "大话西游",
    "功夫",
    "喜剧之王",
    "唐伯虎点秋香",
  ]);

  const [students, setStudents] = useState([
    { name: "codertao", age: 19 },
    { name: "sandy", age: 21 },
    { name: "zm", age: 20 },
  ]);

  function addMovie() {
    movies.push("国产凌凌漆");
    setMovies(movies);
  }

  function addAge(index) {
    const newAge = [...students];
    newAge[index].age += 1;
    setStudents(newAge);
  }

  return (
    <div>
      <h2>电影列表</h2>
      <ul>
        {movies.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <button onClick={() => setMovies([...movies, "国产凌凌漆"])}>
        添加电影
      </button>
      {/* 错误的做法 */}
      <button onClick={addMovie}>添加电影</button>
      <h2>学生列表</h2>
      <ul>
        {students.map((value, index) => {
          return (
            <li key={value.name}>
              <span>{`姓名:${value.name} 年龄:${value.age}`}</span>
              <button onClick={() => addAge(index)}>年龄+1</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ComplexUseState;
