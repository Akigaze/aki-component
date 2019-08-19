import React, {Component} from "react";
import classNames from "classnames";
import {isFunction} from "lodash";
import {Card} from "../component/card/Card";


export default class CardDeliver extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {LEFT, CENTER, RIGHT} = Card.ALIGN;
    return (
      <div>
        <Card text="hello world"/>
        <Card text="hello world"/>
        <br/>
        <Card text="hello world" width={100} height={50} color="#00FF00"/>
        <Card text="hello world" width={100} height={40} color="#52c41a" border="#b7eb8f" bgcolor="#f6ffed" align={RIGHT}/>
        <Card text="hello world" width={150} height={60} color="#00FF00" border="#45236f" bgcolor="red" align={CENTER}/>
      </div>
    )
  }
}
