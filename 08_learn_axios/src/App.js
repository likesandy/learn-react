import React, { PureComponent } from "react";
// import axios from "axios";
import request from "./service/request";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    // 拿到数据
    // this.setState({
    //   movies:[...this.state.movies,...res]
    // })

    // 本质调用所有的方法最后都会变成调用request方法
    // // axios(get)
    // axios({
    //   url: "http://httpbin.org/get",
    //   params: {
    //     name: "codertao",
    //     age: 19,
    //   },
    //   // 默认get可以不需要填写
    //   method: "get",
    // })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.error(err));
    // // axios(post)
    // axios({
    //   url: "http://httpbin.org/post",
    //   data: {
    //     name: "zjh",
    //     age: 21,
    //   },
    //   method: "post",
    // })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.error(err));
    // // axios.get
    // axios
    //   .get("http://httpbin.org/get", {
    //     params: {
    //       name: "zh",
    //       age: 20,
    //     },
    //   })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.error(err));
    // // axios.post
    // axios
    //   .post("http://httpbin.org/post", {
    //     name: "ymy",
    //     age: 20,
    //   })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.error(err));
    // // axios.request + async + await
    // try {
    //   const result = await axios.request({
    //     url: "http://httpbin.org/get",
    //     params: {
    //       name: "sandy",
    //       age: 21,
    //     },
    //   });
    //   console.log(result);
    // } catch (err) {
    //   console.log(err);
    // }
    // // axios.all(本质 = Promise.all)
    // const request1 = await axios.request({
    //   url: "http://httpbin.org/get",
    //   params: {
    //     name: "zs",
    //     age: 30,
    //   },
    // });
    // const request2 = await axios.request({
    //   url: "http://httpbin.org/post",
    //   data: {
    //     name: "ls",
    //     age: 40,
    //   },
    //   method: "post",
    // });
    // axios
    //   .all([request1, request2])
    //   .then(([res1, res2]) => {
    //     console.log(res1);
    //     console.log(res2);
    //   })
    //   .catch((err) => console.error(err));
    // // Promise.all
    // const promise1 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve("promise1");
    //   }, 1000);
    // });
    // const promise2 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve("promise2");
    //   }, 3000);
    // });
    // Promise.all([promise1, promise2]).then(([pro1, pro2]) => {
    //   console.log(pro1);
    //   console.log(pro2);
    // });

    // 创建新的实例
    // const instance1 = axios.create({
    //   baseURL: "https://codertao.org",
    //   timeout: "3000",
    // });

    // const instance2 = axios.create({
    //   timeout: "3112",
    //   headers: {},
    // });

    // 请求和响应拦截(拦截器)
    // axios.interceptors.request.use(
    //   (config) => {
    //     // 1.发送网络请求时,在界面的中间位置显示Loading组件

    //     // 2.某一些请求要求用户必须携带token,如果没有携带,就跳转到登录页面

    //     // 3.params/data序列化

    //     console.log("数据被拦截");
    //     return config;
    //   },
    //   (err) => {}
    // );

    // axios.interceptors.response.use(
    //   (res) => {
    //     return res.data;
    //   },
    //   (err) => {
    //     if (err && err.response) {
    //       switch (err.response.status) {
    //         case 400:
    //           console.log("请求错误");
    //           break;
    //         case 401:
    //           console.log("未授权访问");
    //           break;
    //         default:
    //           console.log("其他错误信息");
    //       }
    //     }
    //   }
    // );

    try {
      const result = await request.request({
        url: "http://httpbin.org/get",
        params: {
          name: "sandy",
          age: 21,
        },
      });
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <h2>App</h2>
      </div>
    );
  }
}
