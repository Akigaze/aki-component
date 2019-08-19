import React, {Component, Fragment} from "react";
import {isFunction} from "lodash";

import ToggleButtonDeliver from "./deliver/ToggleButtonDeliver";

import appStyle from "./style/app.css"


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentComponent: Fragment
    }
  }

  lookToggleButton = () => {
    this.setState({currentComponent: ToggleButtonDeliver})
  };

  render() {
    const Comp = this.state.currentComponent;
    return (
      <div>
        <span onClick={this.lookToggleButton} className={appStyle["comp-tab"]}>Toggle Button</span>
        <Comp/>
      </div>
    )
  }
}
