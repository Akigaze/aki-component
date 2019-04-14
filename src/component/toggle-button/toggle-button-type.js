export const blueStyle = {
  boxColor: "#0B85FF",
  boxBorder: "#0B85FF",
  circleColor: "#FFF",
  circleBorder: "#0B85FF"
};

export const ghostStyle = {
  boxColor: "#FFF",
  boxBorder: "#B8BDC2",
  circleColor: "#FFF",
  circleBorder: "#B8BDC2"
};

export const greyStyle = {
  boxColor: "#BFBFBF",
  boxBorder: "#BFBFBF",
  circleColor: "#FFF",
  circleBorder: "#BFBFBF"
};

export const defaultToggleStyle = blueStyle;

export const getStyle = (color) => {
  if (color) {
    const defaultStyle = JSON.parse(JSON.stringify(defaultToggleStyle));
    const customOnStyle = {
      boxColor: color,
      boxBorder: color,
      circleBorder: color
    };
    return Object.assign(defaultStyle, customOnStyle)
  }
  return defaultToggleStyle;
};