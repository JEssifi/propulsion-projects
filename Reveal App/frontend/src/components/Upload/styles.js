import styled from "styled-components";
import { LoginTopContainer } from "../LoginSignUp/styles";
import { BottomContainer } from "../../styles/containers";
import { SearchBottomContainer } from "../Search/styles";

export const UploadBottomContainer = styled(SearchBottomContainer)`
  background-color: ${props => props.theme.backgroundColor};
  flex-direction: column;
  align-items: center;
`;

export const UploadTopContainer = styled(LoginTopContainer)`
  height: 25%;
  justify-content: center;
  
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.mainColor};
    border-radius: 40px;
    width: 15%;
    height: 35%;
    border: solid 3px ${props => props.theme.secondaryColor};
  }
  
  h2 {
    color: ${props => props.theme.thirdColor};
    font-size: 60px;
  }
`;

export const DropzoneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 10%;
  height: 10%;
`;
