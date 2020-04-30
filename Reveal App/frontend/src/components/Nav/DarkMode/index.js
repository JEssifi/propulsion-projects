import React from "react";
import { Toggle } from "react-toggle-component";

import { useDispatch, useSelector } from "react-redux";
import { darkmode } from "../../../store/types";
import { getTheme } from "../../../store/reducers/DarkModeReducer";

const DarkMode = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(getTheme);

  const darkModeHandler = theme => ({
    type: darkmode,
    payload: theme
  });

  const changeTheme = () => {
    if (currentTheme === "light") {
      return dispatch(darkModeHandler("dark"));
    } else {
      dispatch(darkModeHandler("light"));
    }
  };

  const renderDarkModeHeadingText = () => {
    if (currentTheme === "light") {
      return <h1>DARK</h1>;
    } else {
      return <h1>LIGHT</h1>;
    }
  };

  return (
    <>
      {renderDarkModeHeadingText()}
      <Toggle
        leftBackgroundColor={props => props.theme.mainColor}
        rightBackgroundColor={props => props.theme.thirdColor}
        borderColor={props => props.theme.secondaryColor}
        knobColor={props => props.theme.secondaryColor}
        name="dark-mode-toggle"
        onToggle={changeTheme}
      />
    </>
  );
};

export default DarkMode;
