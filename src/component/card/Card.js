import React, {Component} from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import {isEmpty, isNumber, isString} from "lodash";

import commonStyle from "../../style/card/common.css";
import style from "../../style/card/component.css";

class CardStyle {
  constructor(width, height, color, backgroundColor, borderColor, justifyContent) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.backgroundColor = backgroundColor;
    this.borderColor = borderColor;
    this.justifyContent = justifyContent;
    this.borderRadius = Math.floor(height/4);
  }

  toJson = () => {
    const validEntries = Object.keys(this)
      .filter(k => this[k] && (isNumber(this[k]) || isString(this[k])))
      .map(k => {return {[k]: this[k]}});
    return Object.assign({}, ...validEntries)
  }
}

export class Card extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {width, height, color, bgcolor, border, align, text} = this.props;
    const cardStyle = new CardStyle(width, height, color, bgcolor, border, align).toJson();
    const defaultClassStyle = classNames(
      style["default-card"],
      commonStyle["in-flex-center"],
      commonStyle["padding-h8"],
      commonStyle["padding-v4"]
    );
    return (
      <div className={defaultClassStyle} style={cardStyle}>{text}</div>
    )
  }
}

Card.ALIGN = {
  LEFT: "end",
  RIGHT: "flex-end",
  CENTER: "center"
};

Card.defaultProps = {
  text: "",
  height: 24,
  width: "fit-content",
  align: Card.ALIGN.LEFT
};

Card.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number]),
  color: PropTypes.string,
  bgcolor: PropTypes.string,
  border: PropTypes.string,
  text: PropTypes.string,
  align: PropTypes.string
};
