import React from "react";
import RenderLogo from "../../../hoc/RenderLogo";

import {LoginLeftContainer, LogoLeftContainer, LogoLeftWrapper, RobotContainer, SloganContainer} from "../styles";

const LeftSide = () =>{

    return (
            <LoginLeftContainer >
                <LogoLeftContainer>
                    <LogoLeftWrapper>
                       <RenderLogo/>
                    </LogoLeftWrapper>

                </LogoLeftContainer>
                <SloganContainer>
                    <h2>DISCOVER WHAT YOU CAN UNCOVER...</h2>
                </SloganContainer>
                <RobotContainer>


                </RobotContainer>

            </LoginLeftContainer>
    )
}

export default LeftSide;