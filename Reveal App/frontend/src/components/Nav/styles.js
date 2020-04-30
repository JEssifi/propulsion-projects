import styled from "styled-components";
import {BaseContainer} from "../../styles/containers";

// Container
export const NavContainer = styled(BaseContainer)`
height: 8%;
background-color: ${props => props.theme.secondaryColor};
align-items: center;
flex-direction:row;
`


// Wrappers
export const LogoContainer = styled(NavContainer)`
  display: flex;
  align-items: center;
  height: 100%;
  width: 15%;
  margin-left: 2%;
  
  img {
    height:40%;
    cursor: pointer;
  }
`;

export const MenuContainer = styled(NavContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 35%;
  a{
  :hover {
    border-bottom: 5px solid ${props => props.theme.thirdColor}
    }
  }
`;

export const UserProfileContainer = styled(NavContainer)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 25%;
  
  img {
    height:50%;
    cursor: pointer;
  }
  @media screen and (max-width: 1060px) {
           width: 20%;
}
`;

export const DarkModeContainer = styled(NavContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 12.5%;
  color: ${props => props.theme.thirdColor};
  
  
  :hover {
    color: ${props => props.theme.mainColor}
  }
  
  h1 {
    margin-bottom: 2%;
  }

`;

export const SignUpContainer = styled(NavContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 12.5%;
  color: ${props => props.theme.thirdColor};
  
  button{
    height: 55%;
    width: 70%;
    border-radius: 30px;
    border-color: ${props => props.theme.secondaryColor};
    font-weight: bold;
    outline: none;
  }

  }

`;
