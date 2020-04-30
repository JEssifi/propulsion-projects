import emailGold from "../assets/svgs/message-gold.svg";
import emailBlue from "../assets/svgs/message-blue.svg";
import React from "react";
import { useSelector } from "react-redux";
import { getTheme } from "../store/reducers/DarkModeReducer";

const RenderEmailImage = () => {
  const currentTheme = useSelector(getTheme);

  if (currentTheme === "dark") {
    return <img src={emailGold} alt="Password lock icon" />;
  } else {
    return <img src={emailBlue} alt="Password lock icon" />;
  }
};

export default RenderEmailImage;
