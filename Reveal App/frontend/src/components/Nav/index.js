import React from "react";
import {useSelector} from "react-redux";
import {getToken} from "../../store/reducers/LogInReducer";

import DarkMode from "./DarkMode";
import { Route, Switch } from "react-router-dom";
import NavLoggedOut from "./NavLoggedOut";
import SignUpButton from "./SignInUpLogoutButton/signup";
import SignInButton from "./SignInUpLogoutButton/signin";
import { useHistory } from "react-router-dom";
import NavLoggedIn from "./NavLoggedIn";
import LogOutButton from "./SignInUpLogoutButton/logout";
import RenderLogo from "../../hoc/RenderLogo";

import {
  DarkModeContainer,
  LogoContainer,
  NavContainer,
  SignUpContainer
} from "./styles";
import NotFound from "../NotFound";


const Nav = () => {
  const history = useHistory();
    const token = useSelector(getToken);

  const renderPathDependingOnLogin = () => {
      if(token || localStorage.token){
          history.push("/search")
      } else {
          history.push("/")
      }
  }

  return (
    <NavContainer>
      <LogoContainer onClick={() => renderPathDependingOnLogin()}>
          <RenderLogo/>
      </LogoContainer>

      <Switch>
        <Route exact path="/" component={NavLoggedOut} />
        <Route exact path="/signup" component={NavLoggedOut} />
          <Route exact path="/congratulations" component={NavLoggedOut} />
          <Route exact path="/registration" component={NavLoggedOut} />
          <Route exact path="/search" component={NavLoggedIn} />
          <Route exact path="/upload" component={NavLoggedIn} />
          <Route exact path="/tag" component={NavLoggedIn} />
          <Route exact path="/review" component={NavLoggedIn} />
          <Route path="*" component={NavLoggedOut}/>
      </Switch>

      <DarkModeContainer>
        <DarkMode />
      </DarkModeContainer>
      <SignUpContainer>
        <Switch>
          <Route exact path="/" component={SignUpButton} />
          <Route exact path="/signup" component={SignInButton} />
            <Route exact path="/congratulations" component={SignInButton} />
            <Route exact path="/registration" component={SignInButton} />
            <Route exact path="/search" component={LogOutButton} />
            <Route exact path="/upload" component={LogOutButton} />
            <Route exact path="/tag" component={LogOutButton} />
            <Route exact path="/review" component={LogOutButton} />
        </Switch>
      </SignUpContainer>
    </NavContainer>
  );
};



export default Nav;
