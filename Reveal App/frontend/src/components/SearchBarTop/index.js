import React from "react";
import RenderSearchImage from "../../hoc/RenderSearchImage";
import {SearchBarUploadWrapper} from "./styles";


const SearchBarTop = () => {

    return(
        <SearchBarUploadWrapper>
            {RenderSearchImage()}
            <input type="text" placeholder="Search"/>
        </SearchBarUploadWrapper>
    )

}

export default SearchBarTop;