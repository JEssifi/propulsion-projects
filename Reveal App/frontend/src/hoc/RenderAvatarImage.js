import {useSelector} from "react-redux";
import {getTheme} from "../store/reducers/DarkModeReducer";
import avatarGold from "../assets/svgs/avatar-gold.svg";
import avatarBlue from "../assets/svgs/avatar-blue.svg";
import React from "react";




const RenderAvatarImage = () => {
    const currentTheme = useSelector(getTheme);

    if (currentTheme === "dark") {
        return <img src={avatarGold} alt="User icon" />;
    } else {
        return <img src={avatarBlue} alt="User icon" />;
    }
};

export default RenderAvatarImage;