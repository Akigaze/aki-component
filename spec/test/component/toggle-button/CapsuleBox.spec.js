import React from "react";
import {mount} from "enzyme";

import commonStyle from "../../../../src/style/toggle-button/common.css";
import style from "../../../../src/style/toggle-button/component.css";
import {CapsuleBox} from "../../../../src/component/toggle-button/CapsuleBox";

describe("CapsuleBox", () => {
  it("should with sizable className", () => {
    const capsuleBox = mount(<CapsuleBox/>);

    expect(capsuleBox.children()).toHaveClassName(commonStyle["sizable"]);
    expect(capsuleBox.children()).toHaveClassName(commonStyle["thin-border"]);
    expect(capsuleBox.children()).toHaveClassName(style["capsule-box"]);

  });

  it("should be a capsule shape with specific size", () => {
    const capsuleBox = mount(<CapsuleBox size={18}/>);
    const expectStyle = expect.objectContaining({width: 36, height: 18, borderRadius: 10});

    expect(capsuleBox.children().type()).toBe("span");
    expect(capsuleBox.children().prop("style")).toEqual(expectStyle);
  });

  it("should with specific color and border", () => {
    const capsuleBox = mount(<CapsuleBox size={18} color="#FF0000" borderColor="#0000FF"/>);
    const exceptStyle = expect.objectContaining({backgroundColor: "#FF0000", borderColor: "#0000FF"});

    expect(capsuleBox.children().prop("style")).toEqual(exceptStyle);
  });

  it("should render the given sub component", () => {
    const capsuleBox = mount(<CapsuleBox size={18}><span>123</span></CapsuleBox>);

    expect(capsuleBox.children().contains(<span>123</span>)).toBeTruthy();
  });

  it("should call function from capsuleClick prop when click", () => {
    const mockClickFunc = jest.fn();
    const capsuleBox = mount(<CapsuleBox capsuleClick={mockClickFunc}/>);
    capsuleBox.simulate("click");

    expect(mockClickFunc).toHaveBeenCalledTimes(1);
  })
});