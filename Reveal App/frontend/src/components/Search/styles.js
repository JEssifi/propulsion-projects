import styled from "styled-components";
import {LogoLeftWrapper} from "../LoginSignUp/styles";
import {BottomContainer} from "../../styles/containers";


export const SearchBottomContainer = styled(BottomContainer)`
  background-color: ${props => props.theme.backgroundColor};
  flex-direction: column;
`

export const SearchLogoContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: flex-end;

`

export const SearchLogoWrapper = styled(LogoLeftWrapper)`
    height: 50%;
    width: 30%;
    margin-left: 0%;
    
    @media screen and (max-width: 1060px) {
          height: 50%;
}
    
    img{
    height: 100%;
    }
`

export const SearchFormWrapper = styled.form`
  height:50%;
  width: 100%;
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SearchBarContainer = styled.div`
  height:50%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const SearchBarWrapper = styled.div`
  height: 50%;
  width: 50%;
  background-color: ${props => props.theme.mainColor};
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  input {
  height:70%;
  width: 90%;
    text-align: left;
    font-size: 40px;
  }
  input::placeholder {
    color: ${props => props.theme.thirdColor};
    font-weight: bold;
  }
  
  input[type="text"], textarea{
    border: none;
    outline: none;
    background-color : ${props => props.theme.mainColor};
    color: ${props => props.theme.thirdColor};
    font-weight: bold;
  }

`

export const SearchButtonContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 50%;
    width:100%;
    
    button{
    display: flex;
    justify-content: center;
    align-items: center;
        height: 25%;
        width: 15%;
        border-radius: 30px;
        border-color: ${props => props.theme.secondaryColor};
        font-weight: bold;
        font-size: 40px;
        
       @media screen and (max-width: 1200px) {
           
        font-size: 20px;
}
  }

`


export const SearchBottomWrapper = styled.div`
  width: 100%;
  height: 25%;



`