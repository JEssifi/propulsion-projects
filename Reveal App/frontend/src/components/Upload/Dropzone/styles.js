import styled from "styled-components";

export const DropzoneWrapper = styled.div`
overflow: auto;
outline: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1%;
  height: 60%;
  width: 50%;
  border-radius: 40px;
  background-color: ${props => props.theme.secondaryColor};
  border: 5px dashed ${props => props.theme.mainColor};
    color: ${props => props.theme.fourthColor};
    font-weight: bold;
    font-size: 30px;
    padding: 1%;
    
    p{
    color: ${props => props.theme.thirdColor};
    margin-top: 1%;
    }
    
    div {
    border-radius: 40px;
   width: 90%;
   background-color:  ${props => props.theme.secondaryColor};
   margin-top: 2%;
   margin-bottom: 2%;
    }
  
  h2 {
    color: ${props => props.theme.mainColor};
    font-size: 30px;
    text-decoration: underline;
    
    margin-bottom: 2;
  }

`