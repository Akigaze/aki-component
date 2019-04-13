import React, {Component} from "react";
import PropTypes from 'prop-types';
import {isFunction} from "lodash";
import classNames from "classnames";

import commonStyle from "../../style/toggle-button/common.css";
import style from "../../style/toggle-button/component.css";

export class CapsuleBox extends Component{
  constructor(props){
    super(props);
  }

  click = () => {
    const {capsuleClick} = this.props;
    if (isFunction(capsuleClick)) {
      capsuleClick();
    }
  };

  render(){
    const {size, color, borderColor} = this.props;

    const shapeStyle = {width: 2*size, height: size, borderRadius: size/2+1};
    const colorStyle = {backgroundColor: color, borderColor};
    const capsuleBoxStyle = Object.assign({}, shapeStyle, colorStyle);

    const capsuleBoxClassName = classNames(style["capsule-box"], commonStyle["sizable"], commonStyle["thin-border"]);

    return (
      <span className={capsuleBoxClassName} style={capsuleBoxStyle} onClick={this.click}>
        {this.props.children}
      </span>
    )
  }
}

CapsuleBox.defaultProps = {
  size: 10,
  color: "#FFFFFF",
  borderColor: "#000000",
  capsuleClick: null
};

CapsuleBox.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  capsuleClick: PropTypes.func
};