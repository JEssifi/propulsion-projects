import React from "react";

import {MainButton} from "../../styles/buttons";
import RenderLogo from "../../hoc/RenderLogo";

import {
    SearchBarContainer,
    SearchBarWrapper,
    SearchBottomContainer,
    SearchBottomWrapper, SearchButtonContainer,
    SearchFormWrapper,
    SearchLogoContainer,
    SearchLogoWrapper
} from "./styles";
import {useDispatch} from "react-redux";

const Search = () => {

    return(

        <SearchBottomContainer>
            <SearchLogoContainer>
                <SearchLogoWrapper>
                    <RenderLogo/>
                </SearchLogoWrapper>
            </SearchLogoContainer>
            <SearchFormWrapper>
                <SearchBarContainer>
                    <SearchBarWrapper>
                    <input type="text" placeholder="Search"/>
                </SearchBarWrapper>
                </SearchBarContainer>
                <SearchButtonContainer>
                <MainButton >SEARCH</MainButton>
                </SearchButtonContainer>
            </SearchFormWrapper>

            <SearchBottomWrapper>


            </SearchBottomWrapper>

        </SearchBottomContainer>

    )

}

export default Search;