import { useSelector } from "react-redux";
import { getTheme } from "../store/reducers/DarkModeReducer";
import checkDark from "../assets/svgs/check-dark.svg";
import checkLight from "../assets/svgs/check-light.svg";
import React from "react";

const RenderTickImage = () => {
  const currentTheme = useSelector(getTheme);

  if (currentTheme === "dark") {
    return <img src={checkDark} alt="Password lock icon" />;
  } else {
    return <img src={checkLight} alt="Password lock icon" />;
  }
};

export default RenderTickImage;
