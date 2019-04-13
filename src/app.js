import React, {Component} from "react";
import classNames from "classnames";
import {isFunction} from "lodash";

import appStyle from "./style/app.css";
import {Circle} from "./component/toggle-button/Circle";
import {CapsuleBox} from "./component/toggle-button/CapsuleBox";
import {ToggleButton} from "./component/toggle-button/ToggleButton";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.toggleButtonContollers = [];
    this.t1 = React.createRef();
  }

  addToggleButtonController = (func) => {
    if (isFunction(func)) {
      this.toggleButtonContollers.push(func);
    }
  };

  clickCircle(){
    console.log("test");
  }

  toggleClick = (status) => {
    console.log(this.t1.current.state.on);
    this.toggleButtonContollers.forEach(func => func(!this.t1.current.state.on));
  };

  render() {
    const titleClassName = classNames(appStyle["big-red-title"]);
    return (
      <div>
        <h1 className={titleClassName}>Hello React!</h1>
        <Circle size={50} color="#FC7F82" borderColor="#F7595D" circleClick={this.clickCircle}/>
        <br/>
        <span>
          <CapsuleBox size={30} color="grey" borderColor="#FF0000" capsuleClick={this.clickCircle}>
            <Circle size={30}/>
          </CapsuleBox>
        </span>
        <br/>
        <ToggleButton ref={this.t1} size={8} toggleReady={this.addToggleButtonController}/>
        <ToggleButton toggleChange={this.toggleClick}/>
        <ToggleButton size={12} toggleChange={this.toggleClick}/>
        <ToggleButton size={20} toggleChange={this.toggleClick}/>
        <ToggleButton size={24} toggleChange={this.toggleClick}/>
        <ToggleButton size={30} toggleChange={this.toggleClick}/>
        <ToggleButton size={50} toggleChange={this.toggleClick}/>
      </div>
    )
  }
}
