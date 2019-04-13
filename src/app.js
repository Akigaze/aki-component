import React, {Component} from "react";
import classNames from "classnames";

import appStyle from "./style/app.css";
import {Circle} from "./component/toggle-button/Circle";
import {CapsuleBox} from "./component/toggle-button/CapsuleBox";

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
        <CapsuleBox size={30} color="grey" borderColor="#FF0000" capsuleClick={this.clickCircle}>
          <Circle size={30}/>
        </CapsuleBox>
      </div>
    )
  }
}
