import { useSelector } from "react-redux";
import { getTheme } from "../store/reducers/DarkModeReducer";
import plus from "../assets/svgs/plus-dark.svg";
import plusDark from "../assets/svgs/plus.svg";
import React from "react";

const RenderPlus = () => {
  const currentTheme = useSelector(getTheme);

  if (currentTheme === "dark") {
    return <img src={plusDark} alt="Add new tag" />;
  } else {
    return <img src={plus} alt="Add new tag" />;
  }
};

export default RenderPlus;
