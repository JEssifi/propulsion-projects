import { useSelector } from "react-redux";
import { getTheme } from "../store/reducers/DarkModeReducer";
import passwordGold from "../assets/svgs/password-gold.svg";
import passwordBlue from "../assets/svgs/password-blue.svg";
import React from "react";

const RenderPasswordImage = () => {
  const currentTheme = useSelector(getTheme);

  if (currentTheme === "dark") {
    return <img src={passwordGold} alt="Password lock icon" />;
  } else {
    return <img src={passwordBlue} alt="Password lock icon" />;
  }
};

export default RenderPasswordImage;
