import React from "react";
import {mount} from "enzyme";

import statusStyle from "../../../../src/style/toggle-button/status.css";
import commonStyle from "../../../../src/style/toggle-button/common.css";
import style from "../../../../src/style/toggle-button/component.css";
import {defaultToggleStyle, blueStyle, ghostStyle} from "../../../../src/component/toggle-button/toggle-button-type";
import {ToggleButton} from "../../../../src/component/toggle-button/ToggleButton";

describe("ToggleButton", () => {
  it("should with toggle-button className", () => {
    const toggleButton = mount(<ToggleButton/>);

    expect(toggleButton.children()).toHaveClassName(commonStyle["sizable"]);
    expect(toggleButton.children()).toHaveClassName(style["toggle-button"])
  });

  it("should contain a CapsuleBox and a Circle", () => {
    const toggleButton = mount(<ToggleButton/>);

    expect(toggleButton.children().type()).toBe("span");
    expect(toggleButton.exists("CapsuleBox")).toBeTruthy();
    expect(toggleButton.find("CapsuleBox").exists("Circle")).toBeTruthy();
  });

  it("should render with specific size", () => {
    const toggleButton = mount(<ToggleButton size={30}/>);
    const capsuleBox = toggleButton.find("CapsuleBox");
    const circle = toggleButton.find("Circle");

    expect(toggleButton.children().type()).toBe("span");
    expect(capsuleBox.props()).toEqual(expect.objectContaining({size: 30}));
    expect(circle.props()).toEqual(expect.objectContaining({size: 30}));
  });

  it("should be off status as default", () => {
    const {boxColor, boxBorder, circleColor, circleBorder} = ghostStyle;
    const toggleButton = mount(<ToggleButton/>);
    const capsuleBox = toggleButton.find("CapsuleBox");
    const circle = toggleButton.find("Circle");

    expect(capsuleBox.props()).toEqual(expect.objectContaining({color: boxColor, borderColor: boxBorder}));
    expect(circle.props()).toEqual(expect.objectContaining({color: circleColor, borderColor: circleBorder}));
    expect(toggleButton.children()).toHaveClassName(statusStyle["toggle-off"]);
  });

  it("should render the given status", () => {
    const {boxColor, boxBorder, circleColor, circleBorder} = defaultToggleStyle;
    const toggleButton = mount(<ToggleButton toggleOn={true}/>);
    const capsuleBox = toggleButton.find("CapsuleBox");
    const circle = toggleButton.find("Circle");

    expect(capsuleBox.props()).toEqual(expect.objectContaining({color: boxColor, borderColor: boxBorder}));
    expect(circle.props()).toEqual(expect.objectContaining({color: circleColor, borderColor: circleBorder}));
    expect(toggleButton.children()).toHaveClassName(statusStyle["toggle-on"]);
  });

  it("should Circle move when click", () => {
    const toggleButton = mount(<ToggleButton size={30}/>);
    const capsuleBox = toggleButton.find("CapsuleBox");

    capsuleBox.simulate("click");
    const circle = toggleButton.find("Circle");

    expect(circle.prop("xMove")).toBe(30)
  });

  it("should call function from toggleChange prop when click", () => {
    const mockClickFunc = jest.fn();
    const toggleButton = mount(<ToggleButton size={30} toggleChange={mockClickFunc}/>);
    const capsuleBox = toggleButton.find("CapsuleBox");

    capsuleBox.simulate("click");

    expect(mockClickFunc).toHaveBeenCalledWith(true)
  });

  it("should be on style when click", () => {
    const {boxColor, boxBorder, circleColor, circleBorder} = blueStyle;
    const toggleButton = mount(<ToggleButton/>);
    toggleButton.find("CapsuleBox").simulate("click");
    toggleButton.update();

    const capsuleBox = toggleButton.find("CapsuleBox");
    const circle = toggleButton.find("Circle");

    expect(capsuleBox.props()).toEqual(expect.objectContaining({color: boxColor, borderColor: boxBorder}));
    expect(circle.props()).toEqual(expect.objectContaining({color: circleColor, borderColor: circleBorder}));
    expect(toggleButton.children()).toHaveClassName(statusStyle["toggle-on"]);
  });

  it("should call function of toggleReady prop after render", () => {
    const mockReadyFunc = jest.fn();
    const toggleButton = mount(<ToggleButton toggleReady={mockReadyFunc}/>);

    expect(mockReadyFunc).toHaveBeenCalledWith(toggleButton.instance().toggleControl);
  });

  it("should enable change ToggleButton status outside", () => {
    let toggleController = null;
    function readyFunc(func){
      toggleController = func
    }
    const toggleButton = mount(<ToggleButton toggleReady={readyFunc}/>);
    toggleController(true);
    toggleButton.update();

    expect(toggleButton.children()).toHaveClassName(statusStyle["toggle-on"]);
  });

  it("should not change ToggleButton status when give the same status", () => {
    let toggleController = null;
    function readyFunc(func){
      toggleController = func
    }
    const toggleButton = mount(<ToggleButton toggleReady={readyFunc}/>);
    toggleController(false);
    toggleButton.update();

    expect(toggleButton.children()).toHaveClassName(statusStyle["toggle-off"]);
  });

  it("should render the specific color ToggleButton", () => {
    const {circleColor} = blueStyle;
    const toggleButton = mount(<ToggleButton color="#FF0000"/>);
    toggleButton.setState({on: true});
    toggleButton.update();

    const capsuleBox = toggleButton.find("CapsuleBox");
    const circle = toggleButton.find("Circle");

    expect(capsuleBox.props()).toEqual(expect.objectContaining({color: "#FF0000", borderColor: "#FF0000"}));
    expect(circle.props()).toEqual(expect.objectContaining({color: circleColor, borderColor: "#FF0000"}));
  });
});