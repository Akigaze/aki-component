import React, {Component} from "react";
import classNames from "classnames";

import appStyle from "./style/app.css";
import {Circle} from "./component/toggle-button/Circle";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  clickCircle(){
    console.log("test");
  }

  render() {
    const titleClassName = classNames(appStyle["big-red-title"]);
    return (
      <div>
        <h1 className={titleClassName}>Hello React!</h1>
        <Circle size={50} color="#FC7F82" borderColor="#F7595D" circleClick={this.clickCircle}/>
      </div>
    )
  }
}
