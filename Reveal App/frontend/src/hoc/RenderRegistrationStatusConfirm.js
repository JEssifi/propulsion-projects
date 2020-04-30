import registrationFilledDark from "../assets/svgs/signin-dark.svg";
import registrationNotFilledDark from "../assets/svgs/signin-dark-notfilled.svg";
import registrationFilled from "../assets/svgs/signin-light.svg";
import registrationNotFilled from "../assets/svgs/signin-light-notfilled.svg";
import React from "react";
import { useSelector } from "react-redux";
import { getTheme } from "../store/reducers/DarkModeReducer";

const RenderRegistrationStatusConfirm = () => {
  const currentTheme = useSelector(getTheme);

  if (currentTheme === "dark") {
    return (
      <>
        <img
          className="registration-stage"
          src={registrationNotFilledDark}
          alt="Registration stage"
        />
        <img
          className="registration-stage"
          src={registrationFilledDark}
          alt="Registration stage"
        />
        <img
          className="registration-stage"
          src={registrationNotFilledDark}
          alt="Registration stage"
        />
      </>
    );
  } else {
    return (
      <>
        <img
          className="registration-stage"
          src={registrationNotFilled}
          alt="Registration stage"
        />
        <img
          className="registration-stage"
          src={registrationFilled}
          alt="Registration stage"
        />
        <img
          className="registration-stage"
          src={registrationNotFilled}
          alt="Registration stage"
        />
      </>
    );
  }
};

export default RenderRegistrationStatusConfirm;
