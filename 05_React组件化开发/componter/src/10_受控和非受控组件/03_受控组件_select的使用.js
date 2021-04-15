import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movies: "功夫",
    };
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.stopDefault(e)}>
          <select
            name="movie"
            onChange={(e) => this.listenChange(e)}
            value={this.state.movies}
          >
            <option value="大话西游">大话西游</option>
            <option value="国产凌凌漆">国产凌凌漆</option>
            <option value="功夫">功夫</option>
            <option value="唐伯虎点秋香">唐伯虎点秋香</option>
          </select>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }

  stopDefault(e) {
    e.preventDefault();
    console.log(this.state.movies);
  }

  listenChange(e) {
    this.setState({
      movies: e.target.value,
    });
  }
}
