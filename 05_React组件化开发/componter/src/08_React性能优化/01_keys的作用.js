import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: ["大话西游", "喜剧之王", "国产凌凌漆", "唐伯虎点秋香"],
    };
  }

  render() {
    return (
      <div>
        <h2>电影列表</h2>
        <ul>
          {this.state.movies.map((value, index) => {
            return <li key={value}>{value}</li>;
          })}
        </ul>
        <button onClick={() => this.addMovie()}>添加电影</button>
      </div>
    );
  }

  addMovie() {
    // this.setState({
    //   movies: [...this.state.movies, "功夫"],
    // });
    this.setState({
      movies: ["功夫", ...this.state.movies],
    });
  }
}
