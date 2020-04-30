import styled from "styled-components";

export const MenuButtons = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  color: #4a4a4a;
  font-weight: 100;
  :hover {
    border-bottom: solid 3px ${props => props.theme.mainColor};
    cursor: pointer;
  };
  :focus {
    outline: none
  }
`;

export const MenuButtonsActive = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  color: #4a4a4a;
  border-bottom: solid 3px ${props => props.theme.mainColor};
  :focus {
    outline: none
  }
`;

export const MainOrangeButton = styled.button`
  font-size: 16px;
  background-color: ${props => props.theme.mainColor};
  border: solid 1px ${props => props.theme.fourthColor};
  width: 100%;
  color: ${props => props.theme.fourthColor};
  :hover {
    cursor: pointer
  }
  :focus {
    outline: none
  }
`;

export const SignUpButton = styled(MainOrangeButton)`
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  font-weight:400;
`;

export const LoginButton = styled(MainOrangeButton)`
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  font-weight:400;
`;

export const SubmitButton = styled(MainOrangeButton)`
    font-size: 20px;
    height: 15%;
    width: 40%;
    border: none;
    border-radius: 50px;
`;

export const RegistrationButton = styled(MainOrangeButton)`
    font-size: 20px;
    height: 18%;
    width: 14%;
    border: none;
    border-radius: 30px;
    margin-top: 0%;
`;

export const BestRatedRestaurantTitle = styled(MenuButtons)`
height: 50%;
  display: flex;
  justify-content:center;
  align-items: center;
  cursor: unset;
  color: #4a4a4a;
    border-bottom: solid 3px ${props => props.theme.mainColor};
    font-weight: bold;
`
