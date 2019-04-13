import React, {Component} from "react";
import PropTypes from 'prop-types';
import {isFunction} from "lodash";
import classNames from "classnames";

import commonStyle from "../../style/toggle-button/common.css";
import style from "../../style/toggle-button/component.css";

export class Circle extends Component{
  constructor(props){
    super(props);
  }

  click = () => {
    const {circleClick} = this.props;
    if (isFunction(circleClick)) {
      circleClick();
    }
  };

  render(){
    const {size, color, borderColor, xMove, yMove} = this.props;

    const circleShape = {width: size, height: size, borderRadius: size/2+1};
    const circleColor = {backgroundColor: color, borderColor};
    const circleTransform = {transform: `translateX(${xMove}px) translateY(${yMove}px)`};
    const circleStyle = Object.assign({}, circleShape, circleColor, circleTransform);

    const circleClassName = classNames(style["circle"], commonStyle["sizable"], commonStyle["thin-border"]);

    return (
      <span className={circleClassName} style={circleStyle} onClick={this.click}/>
    )
  }
}

Circle.defaultProps = {
  size: 10,
  color: "#FFFFFF",
  borderColor: "#000000",
  xMove: 0,
  yMove: 0,
  circleClick: null
};

Circle.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  xMove: PropTypes.number,
  yMove: PropTypes.number,
  circleClick: PropTypes.func
};