import { useSelector } from "react-redux";
import { getTheme } from "../store/reducers/DarkModeReducer";
import searchBlue from "../assets/svgs/search-light.svg";
import searchGold from "../assets/svgs/search-dark.svg";
import React from "react";

const RenderSearchImage = () => {
  const currentTheme = useSelector(getTheme);

  if (currentTheme === "dark") {
    return <img src={searchBlue} alt="Magnifying glass image for search bar" />;
  } else {
    return <img src={searchGold} alt="Magnifying glass image for search bar" />;
  }
};

export default RenderSearchImage;
