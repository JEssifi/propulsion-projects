import React from "react";
import {MainButton} from "../../../styles/buttons";
import {useHistory} from "react-router-dom";


const SignUpButton = () =>{
    const history = useHistory();
    return (
        <MainButton onClick={() => history.push("/signup")}>SIGN UP</MainButton>
    )
}

export default SignUpButton;