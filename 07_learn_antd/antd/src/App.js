import React, { PureComponent } from "react";
import { Button, DatePicker, Space } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import "antd/dist/antd.less";

import Bar from "./components/foo/bar/index";

export default class App extends PureComponent {
  render() {
    return (
      <>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />
        <br />
        <Button type="primary">Click me!</Button>
        <Button type="primary" icon={<PoweroffOutlined />}>
          Click me!
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} />
        <hr />
        <Space direction="vertical">
          <DatePicker />
        </Space>
        <hr />
        <Bar />
      </>
    );
  }
}
