import React from "react";
import {mount} from "enzyme";

import {Circle} from "../../../../src/component/toggle-button/Circle";
import style from "../../../../src/style/toggle-button/common.css";

describe("Circle", () => {
  it("should with sizable className", () => {
    const circle = mount(<Circle/>);

    expect(circle.children()).toHaveClassName(style["sizable"]);
    expect(circle.children()).toHaveClassName(style["thin-border"]);
  });

  it("should be a circle span with specific size", () => {
    const circle = mount(<Circle size={10}/>);
    const exceptStyle = expect.objectContaining({width: 10, height: 10, borderRadius: 5});

    expect(circle.children().type()).toBe("span");
    expect(circle.children().prop("style")).toEqual(exceptStyle);
  });

  it("should with specific color and border", () => {
    const circle = mount(<Circle size={10} color="#FF0000" borderColor="#0000FF"/>);
    const exceptStyle = expect.objectContaining({backgroundColor: "#FF0000", borderColor: "#0000FF"});

    expect(circle.children().prop("style")).toEqual(exceptStyle);
  });

  it("should horizontally translate given xMove and yMove", () => {
    const circle = mount(<Circle size={10} xMove={10} yMove={20}/>);
    const exceptStyle = expect.objectContaining({transform: "translateX(10px) translateY(20px)"});

    expect(circle.children().prop("style")).toEqual(exceptStyle);
  });

  it("should call function from circleClick prop when clik", () => {
    const mockClickFunc = jest.fn();
    const circle = mount(<Circle circleClick={mockClickFunc}/>);
    circle.simulate("click");

    expect(mockClickFunc).toHaveBeenCalledTimes(1);
  })
});