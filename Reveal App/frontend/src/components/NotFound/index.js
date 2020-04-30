import React from "react";
import {
    SearchBarContainer,
    SearchBarWrapper,
    SearchBottomContainer,
    SearchFormWrapper,
    SearchLogoContainer,
    SearchLogoWrapper
} from "../Search/styles";
import RenderLogo from "../../hoc/RenderLogo";
import {MenuButton} from "../../styles/buttons";

const NotFound = () => {


    return(
    <SearchBottomContainer>
        <SearchLogoContainer>
            <SearchLogoWrapper>
                <RenderLogo/>
            </SearchLogoWrapper>
        </SearchLogoContainer>
        <SearchBarContainer>
            <MenuButton style={{fontSize: '60px', cursor:'auto'}}>404 NOT FOUND! <br/> Please go back!</MenuButton>

        </SearchBarContainer>

    </SearchBottomContainer>
    )
}

export default NotFound;
