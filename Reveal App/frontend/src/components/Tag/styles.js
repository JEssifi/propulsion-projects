import styled from "styled-components";
import { SearchBottomContainer } from "../Search/styles";

export const TagBottomContainer = styled(SearchBottomContainer)`
  background-color: ${props => props.theme.backgroundColor};
  flex-direction: column;
  align-items: center;
`;

export const UnderSearchContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const LeftDocumentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 20%;
  background-color: ${props => props.theme.backgroundColor};
  overflow-y: scroll;
  padding:1%;
   -webkit-box-shadow:   inset -15px 0px 20px -25px ${props => props.theme.mainColor};
    -moz-box-shadow:  inset -15px 0px 20px -25px ${props => props.theme.mainColor};
    box-shadow:  inset -15px 0px 20px -25px ${props => props.theme.mainColor};
`;

export const MiddleAnnotationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 60%;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => (props.theme.name === 'dark' ? `#FFFFFF` :  `#000000` )};
  padding:1%;
     -webkit-box-shadow: 0px -1px 3px ${props => props.theme.mainColor};
  -moz-box-shadow: 0px -1px 3px ${props => props.theme.mainColor};
  box-shadow: 0px -1px 3px ${props => props.theme.mainColor};
`;

export const RightTagsContainer = styled.div`
  height: 100%;
  width: 20%;
  background-color: ${props => props.theme.backgroundColor};
  overflow-y: scroll;
  padding:1%;
   -webkit-box-shadow: inset  15px 0px 20px -25px ${props => props.theme.mainColor};
    -moz-box-shadow: inset 15px 0px 20px -25px ${props => props.theme.mainColor};
    box-shadow: inset 15px 0px 20px -25px ${props => props.theme.mainColor};
`;
