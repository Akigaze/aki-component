import React, {Component} from "react";
import PropTypes from 'prop-types';
import {isFunction} from "lodash";
import classNames from "classnames";

import statusStyle from "../../style/toggle-button/status.css";
import commonStyle from "../../style/toggle-button/common.css";
import style from "../../style/toggle-button/component.css";
import {ghostStyle, getStyle} from "./toggle-button-type";
import {CapsuleBox} from "./CapsuleBox";
import {Circle} from "./Circle";

const toggleStatus = {
  ON: true,
  OFF: false
};

export class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.toggleStyle = {
      ON: getStyle(props.color),
      OFF: ghostStyle
    };
    this.state = {
      on: Boolean(props.toggleOn).valueOf()
    }
  }

  componentDidMount(){
    const {toggleReady} = this.props;
    if (isFunction(toggleReady)){
      toggleReady(this.toggleControl);
    }
  }

  toggleControl = (isOn) => {
    if (isOn !== this.state.on) {
      this.setToggleStatus(isOn);
    }
  };

  setToggleStatus = (isOn) => {
    this.setState({on: isOn});
    const {toggleChange} = this.props;
    if (isFunction(toggleChange)){
      toggleChange(isOn);
    }
  };

  toggleClick = () => {
    const isOn = !this.state.on;
    this.setToggleStatus(isOn);
  };

  render(){
    const {size} = this.props;
    const {on} = this.state;

    const circleXMove = on ? size : 0;
    const {boxColor, boxBorder, circleColor, circleBorder} = on ? this.toggleStyle.ON : this.toggleStyle.OFF;

    const toggleButtonClassName = classNames(
      style["toggle-button"],
      commonStyle["sizable"],
      {[statusStyle["toggle-on"]]: on, [statusStyle["toggle-off"]]: !on}
    );

    return (
      <span className={toggleButtonClassName}>
        <CapsuleBox size={size} color={boxColor} borderColor={boxBorder} capsuleClick={this.toggleClick}>
          <Circle size={size} color={circleColor} borderColor={circleBorder} xMove={circleXMove}/>
        </CapsuleBox>
      </span>
    )
  }
}

ToggleButton.defaultProps = {
  size: 10,
  color: null,
  toggleOn: false
};

ToggleButton.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  toggleOn: PropTypes.bool,
  toggleChange: PropTypes.func,
  toggleReady: PropTypes.func
};