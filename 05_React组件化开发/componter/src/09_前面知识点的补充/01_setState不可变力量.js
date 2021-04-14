import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        { name: "大话西游", date: 1995 },
        { name: "喜剧之王", date: 1999 },
        { name: "国产凌凌漆", date: 1994 },
        { name: "功夫", date: 2004 },
      ],
    };
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h2>电影列表</h2>
        {movies.map((value, index) => {
          return (
            <li key={value.name}>
              电影名称: {value.name}
              上映日期: {value.date}
              <button onClick={() => this.addDate(index)}>日期+1</button>
            </li>
          );
        })}
        <button onClick={() => this.addMovie()}>添加电影</button>
      </div>
    );
  }

  addMovie() {
    // 1.不推荐写法
    // 永远不要直接修改state的数据，通过setState方法修改state数据
    // const newData = { name: "唐伯虎点秋香" };
    // this.state.movies.push(newData);
    // this.setState({
    //   movies: this.state.movies,
    // });

    // 2.推荐写法
    const newMovie = [...this.state.movies];
    newMovie.push({ name: "唐伯虎点秋香", date: 1993 });
    this.setState({
      movies: newMovie,
    });
  }

  addDate(index) {
    const newMovie = [...this.state.movies];
    newMovie[index].date += 1;
    this.setState({
      movies: newMovie,
    });
  }
}
