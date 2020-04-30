import React from "react";
import {LoginRightContainer, PropulsionLogo} from "../styles";
import {Route, Switch} from "react-router-dom";
import Login from "./login";
import SignUp from "./signup";
import SignUpConfirmed from "./signupConfirm";
import SignUpRegistration from "./signupRegistration";
import propulsionlogo from "../../../assets/images/propulsion_logo_horizontal_white.png";

const RightSide = () =>{

    return (
        <LoginRightContainer>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/congratulations" component={SignUpConfirmed} />
                <Route exact path="/registration" component={SignUpRegistration} />

            </Switch>
            <PropulsionLogo src={propulsionlogo} alt="Password lock icon" />
        </LoginRightContainer>
    )
}

export default RightSide;