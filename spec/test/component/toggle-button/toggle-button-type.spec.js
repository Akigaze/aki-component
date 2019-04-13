import {defaultToggleStyle, getToggleStyle} from "../../../../src/component/toggle-button/toggle-button-type";

describe("toggle-button-type", () => {
  it("should return default toggle style when no custom color", () => {
    const style = getToggleStyle();

    expect(style).toEqual(defaultToggleStyle);
  });

  it("should change CapsuleBox color and Circle border by custom color", () => {
    const style = getToggleStyle("red");
    const expectStyle = {boxColor: "red", boxBorder: "red", circleBorder: "red", circleColor: defaultToggleStyle.circleColor};

    expect(style).toEqual(expectStyle);
  });
});