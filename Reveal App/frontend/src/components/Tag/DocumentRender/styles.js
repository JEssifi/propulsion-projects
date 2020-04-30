import styled from "styled-components";

export const DocumentCard = styled.div`
display: flex;
flex-direction: column;
  height: 125px;
  width: 85%;
  margin-top: 3%;
  margin-bottom: 3%;
  padding: 5%;
  cursor: pointer;
  color: ${props => props.theme.thirdColor};
  transition: background-color  0.5s ease;
  border: 3px solid ${props => props.theme.mainColor};
  border-radius: 5px;
  
  :hover {
    background-color: ${props => props.theme.fourthColor};
    color: ${props => props.theme.thirdColor};
    transform: scale(1.05);
  }
`

export const TopTitleTypeContainer = styled.div`
height: 30%;
  display:flex;
  align-items: center;
  justify-content: space-between;
  
  h1{
    margin-left: 3%;
  }
  
  p{
  margin-right: 3%;
  }

`

export const DocumentCardTitle = styled.h1`
  display:flex;
  font-size: 22px;
  text-decoration: underline;
  text-align: left;

`

export const DocumentType = styled.p`
  
  display:flex;
  font-size: 16px;
  font-weight: bold;

`

export const DocumentImportedDate = styled.p`
  margin-left: 3%;
  display:flex;
  font-size: 16px;
  height: 15%;
  align-items: center;
`

export const DocumentSnippetText = styled.p`
  height: 55%;
  width: 90%;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-left: 3%;
  
  text-align: left;
  font-size:16px;
  text-align: left;

`