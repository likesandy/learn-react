import React, { PureComponent } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./style.css";

export default class TransitionGroupDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movies: ["大话西游", "功夫", "国产凌凌漆", "唐伯虎点秋香"],
    };
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <TransitionGroup>
          {this.state.movies.map((value, index) => {
            return (
              <CSSTransition key={index} classNames="movie" timeout={300}>
                <div>{value}</div>
              </CSSTransition>
            );
          })}
          <button
            onClick={() => this.setState({ movies: [...movies, "喜剧之王"] })}
          >
            添加电影
          </button>
        </TransitionGroup>
      </div>
    );
  }
}
