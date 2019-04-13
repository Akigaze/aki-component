export const toggleStyleBlue = {
  boxColor: "#0B85FF",
  boxBorder: "#0B85FF",
  circleColor: "#FFF",
  circleBorder: "#0B85FF"
};

export const toggleStyleGhost = {
  boxColor: "#FFF",
  boxBorder: "#B8BDC2",
  circleColor: "#FFF",
  circleBorder: "#B8BDC2"
};

export const defaultToggleStyle = toggleStyleBlue;

export const getToggleStyle = (color) => {
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