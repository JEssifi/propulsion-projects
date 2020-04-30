import React from "react";
import {LoginLeftContainer, LoginRightContainer} from "./styles";
import {BottomContainer} from "../../styles/containers";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const LoginSignUp = () =>{
    return (
        <BottomContainer>
            <LeftSide/>
            <RightSide/>
        </BottomContainer>
    )
}

export default LoginSignUp;