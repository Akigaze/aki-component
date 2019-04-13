import React, {Component} from "react";
import classNames from "classnames";

import appStyle from "./style/app.css";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const titleClassName = classNames(appStyle["big-red-title"]);
    return (
      <div>
        <h1 className={titleClassName}>Hello React!</h1>
      </div>
    )
  }
}
