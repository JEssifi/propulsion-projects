import styled from "styled-components";

export const AddNewTagContainer = styled.div`
height: 8.7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.fourthColor};
  border-radius: 5px;
  padding:1%;
  
  h1 {
    margin-left: 5%;
    color: ${props => props.theme.fifthColor};
    font-size: 30px;
  }
  
  
  img {
  cursor: pointer;
    height:50%;
    width: 15%;
  }
  
  div {
  cursor: pointer;
    height:100%;
    width: 15%;
    img {
  cursor: pointer;
    height:100%;
    width: 65%;
  }
    
  }

`

export const IndividualTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  p{cursor: pointer}
  
  img {
  cursor: pointer;
    height:20%;
    width: 10%;
  }
  
`

export const SubTagDeleteTimesContainer = styled.div`
  
  cursor: pointer;
    transition: transform 0.6s ease;
    margin-left: auto;   
    margin-right: 5%;

`

export const AddNewTagForm = styled.form`
  display: flex;
  align-items: center;
  width: 50%;
  height:70%;
  border-bottom: ${props => props.theme.secondaryColor} 3px solid;
  background-color: ${props => props.theme.fourthColor};
  
  input {
    text-align: left;
    width:100%;
    @media screen and (max-width: 1060px) {
    width:50%;
           font-size:14px;
}
  }
  
   input::placeholder {
    color: ${props => props.theme.secondaryColor};
    font-weight: bold;
    @media screen and (max-width: 1060px) {
    width:70%;
           font-size:14px;
}
  }

  input[type="text"]  , textarea{
    border: none;
    outline: none;
  padding: 4%;
  background-color : ${props => props.theme.mainColor}; 
  font-size: 20px;
    color: ${props => props.theme.secondaryColor};
    text-decoration: none;
    font-weight: bold;
    
    
    @media screen and (max-width: 1060px) {
           font-size:14px;
}
 

  }
   div{
  height: 100%;
  width: 15%;
  
  img {
   height: 100%;
   width: 100%;
  }
  }
`

export const AddNewSubTagForm = styled (AddNewTagForm)`
  width: 85%;
  background-color: ${props => props.theme.mainColor};
   border-bottom: ${props => props.theme.fourthColor} 3px solid;
  background-color: ${props => props.theme.secondaryColor};
  margin-left: auto;
  
  input[type="text"]  , textarea{
  background-color : ${props => props.theme.secondaryColor};
  color: ${props => props.theme.mainColor};
  }
  input::placeholder {
    color: ${props => props.theme.mainColor};
    }
    
    div{
  height: 100%;
  width: 10%;
   margin-right: 5%;
  
  img {
   height: 100%;
   width: 100%;
  }
`
