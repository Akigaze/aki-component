import React from "react";
import {mount} from "enzyme";

import statusStyle from "../../../../src/style/toggle-button/status.css";
import commonStyle from "../../../../src/style/toggle-button/common.css";
import style from "../../../../src/style/toggle-button/component.css";
import {toggleStyle} from "../../../../src/component/toggle-button/toggle-button-type";
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
    const {boxColor, boxBorder, circleColor, circleBorder} = toggleStyle.ON;
    const toggleButton = mount(<ToggleButton/>);
    toggleButton.find("CapsuleBox").simulate("click");
    toggleButton.update();

    const capsuleBox = toggleButton.find("CapsuleBox");
    const circle = toggleButton.find("Circle");

    expect(capsuleBox.props()).toEqual(expect.objectContaining({color: boxColor, borderColor: boxBorder}));
    expect(circle.props()).toEqual(expect.objectContaining({color: circleColor, borderColor: circleBorder}));
    expect(toggleButton.children()).toHaveClassName(statusStyle["toggle-on"]);
  })
});