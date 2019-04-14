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
    this.state = {
      count: 1
    }
  }

  addToggleButtonController = (func) => {
    if (isFunction(func)) {
      this.toggleButtonContollers.push(func);
    }
  };

  clickCircle = () => {
    const {count} = this.state;
    this.setState({count: count+1});
  };

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
        <ToggleButton ref={this.t1} color="#09a991" size={8} toggleReady={this.addToggleButtonController}/>
        <ToggleButton toggleChange={this.toggleClick}/>
        <ToggleButton size={12} color="red" toggleChange={this.toggleClick}/>
        <ToggleButton size={20} toggleOn={true} color="#E45632" toggleChange={this.toggleClick}/>
        <ToggleButton size={24} color="orange" toggleChange={this.toggleClick}/>
        <ToggleButton size={30} toggleOn={true} color="#45a563" toggleChange={this.toggleClick}/>
        <ToggleButton size={50} toggleChange={this.toggleClick}/>
      </div>
    )
  }
}
