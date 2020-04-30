import styled from "styled-components";
import {MainButton} from "../../../styles/buttons";

export const TopDocumentBar = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5%;
  background-color: ${props => props.theme.mainColor};
  color: ${props => props.theme.secondaryColor};
  border-radius: 5px;
  
  div {
    display: flex;
    align-items: center;
    width: 40%;
  }
  
  div:last-child{
    width:10%;
    align-items: center;
  }
`

export const TopDocumentBarColorWrapper = styled.div`
  display: flex;
  height: 70%;
  border-radius: 20px;
`

export const EditReviewBarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 5%;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.thirdColor};
  
  div {
  display: flex;
  justify-content: flex-start;
  width:50%;
  }
  
  p{
  width: 50%;
  font-weight: bold;
  text-align: center;
  }
`

export const EditReviewButtons = styled(MainButton)`
  border: 0;
  width: 25%;
  border-radius: 20px;
  background-color: ${props => props.theme.secondaryColor};
  margin-left: 1%;
  margin-right: 1%;
  font-weight: bold;
  
  :hover{
    color: ${props => props.theme.mainColor}
  }
`
export const AcceptButton = styled(EditReviewButtons)`
  color: green;
  :hover{
    color: ${props => props.theme.mainColor}
  }

`

export const RejectButton = styled(EditReviewButtons)`
  color: red;
  :hover{
    color: ${props => props.theme.mainColor}
  }

`


export const AnnotationWrapper = styled.div`
display: flex;
flex-direction: column;
  height: 100%;
  width: 90%;
  margin-top: 2%;
  
  overflow-y: scroll;
  
  p{
    line-height: 1.5;
    
  }
  
  span {
    line-height: 1.5;
  
  }

`

