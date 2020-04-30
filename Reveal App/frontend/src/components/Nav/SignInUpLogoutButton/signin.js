import React from "react";
import {MainButton} from "../../../styles/buttons";
import {useHistory} from "react-router-dom";


const SignInButton = () =>{

    const history = useHistory();
    return (
        <MainButton onClick={() => history.push("/")}>SIGN IN</MainButton>
    )
}

export default SignInButton;