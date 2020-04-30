import { useSelector } from "react-redux";
import { getTheme } from "../store/reducers/DarkModeReducer";
import logoDark from "../assets/svgs/RevealApp-Dark.svg";
import logo from "../assets/svgs/RevealApp-Logo-Only text.svg";
import React from "react";

const RenderLogo = () => {
  const currentTheme = useSelector(getTheme);

  if (currentTheme === "dark") {
    return <img src={logoDark} alt="Reveal app logo" />;
  } else {
    return <img src={logo} alt="Reveal app logo" />;
  }
};

export default RenderLogo;
