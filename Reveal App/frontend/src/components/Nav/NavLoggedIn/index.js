import React from "react";
import { MenuContainer, UserProfileContainer } from "../styles";
import { MenuButton } from "../../../styles/buttons";
import avatar from "../../../assets/svgs/avatar-gold.svg";
import { useHistory } from "react-router-dom";

const NavLoggedIn = () => {
  const history = useHistory();

  return (
    <>
      <MenuContainer>
        <MenuButton onClick = {() => history.push('/search')}>SEARCH</MenuButton>
          <MenuButton onClick = {() => history.push('/upload')} >UPLOAD</MenuButton>
          <MenuButton onClick = {() => history.push('/tag')} >TAG</MenuButton>
        <MenuButton onClick = {() => history.push('/review')}>REVIEW</MenuButton>
      </MenuContainer>
      <UserProfileContainer>
        <img src={avatar} alt="user avatar" />
      </UserProfileContainer>
    </>
  );
};

export default NavLoggedIn;
