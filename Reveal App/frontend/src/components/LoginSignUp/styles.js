import styled from "styled-components";
import {BaseContainer} from "../../styles/containers";
import coverLeftLight from "../../assets/images/Left-Section-SignUp-LightMode.png"
import coverLeftDark from "../../assets/images/Left-Section-SignUp-DarkMode.png"
import {BaseForm} from "../../styles/forms";

// Left Container
export const LoginLeftContainer = styled(BaseContainer)`
display:flex;
width: 60%;
height: 100%;
    background-image: ${props => (props.theme.name === 'dark' ? `url(${coverLeftDark})` :  `url(${coverLeftLight})` )};
    background-size: cover;
    background-repeat: no-repeat;
    background-size: 75% 100%;
    background-color: ${props => props.theme.backgroundColor};
align-items: center;
`

export const LogoLeftContainer = styled.div`
    display: flex;
    align-items: flex-end;
    height: 38%;
    width: 100%;
    
    
`

export const LogoLeftWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 40%;
    width: 35%;
    border-radius: 50px;
    margin-left: 8%;
    
    
    
    img{
    height: 100%;
    width: 80%;
    }
    
    @media screen and (max-width: 1060px) {
           height:25%;
}
`

export const SloganContainer = styled.div`
    display: flex;
    align-items:center;
    height: 38%;
    width: 100%;
    
    h2 {
        font-size: 36px;
        width:45%;
        color: ${props => props.theme.thirdColor};
        line-height: 200%;
    margin-left: 4%;
    @media screen and (max-width: 1060px) {
           font-size:20px;
}
    }  
`

export const RobotContainer = styled.div`
display: flex;
    align-items:center;
    height: 24%;
    width: 100%;
`


// Right Container

export const LoginRightContainer = styled(BaseContainer)`
display:flex;
width: 40%;
height: 100%;
align-items: center;

    background-color: ${props => props.theme.backgroundColor};
`

// LOGIN

export const LoginTopContainer = styled(LoginRightContainer)`
    justify-content: flex-end;
    height: 30%;
    width: 100%;
    
    h2 {
    font-size: 36px;
    font-weight: bold;
    color: ${props => props.theme.mainColor};
    
    @media screen and (max-width: 1060px) {
           font-size:20px;
}
    
    }
    
    h2:nth-child(2){
    color: ${props => props.theme.thirdColor};
    }
`

export const FormWrapper =styled(BaseForm)`
    width: 100%;
    height: 70%;
`

export const UserPasswordFormContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items:center;
    width: 100%;
    height: 40%;
`



export const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 5px solid ${props => props.theme.mainColor};
  width:50%;
  height: 30%;
  
  margin-top: 5%;
  
  img {
    width: 10%;
    height:50%;
  }
  
  input {
    text-align: left;
    @media screen and (max-width: 1060px) {
    width:50%;
           font-size:14px;
}
  }
  
   input::placeholder {
    color: ${props => props.theme.thirdColor};
    font-weight: bold;
    @media screen and (max-width: 1060px) {
    width:70%;
           font-size:14px;
}
  }

  input[type="text"],input[type="password"],input[type="email"]  , textarea{
    border: none;
    outline: none;
  padding: 4%;
  background-color : ${props => props.theme.backgroundColor}; 
  font-size:24px;
    color: ${props => props.theme.thirdColor};
    
    
    @media screen and (max-width: 1060px) {
           font-size:14px;
}
  }
    

`;

export const EmailFormContainer = styled(UserPasswordFormContainer)`

    justify-content: space-around;
    
     


`

export const TickContainer = styled(UserPasswordFormContainer)`

    justify-content: center;
    
    img {
      width:80%;
      height: 80%;
    
    }
    
`

export const RegistrationStatusContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: flex-end;
    height:20%;
    width: 20%;
    
    .registration-stage {
        height:50%;
        width: 50%;
    }
    
`

export const ErrorContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 12%;
    
    @media screen and (max-width: 1060px) {
           display: flex;
           align-items: center;
           width:100%;
            justify-content: center;
}
    
    p{
    font-size: 18px;
    color: ${props => props.theme.thirdColor};
    
    @media screen and (max-width: 1060px) {
           font-size:12px;
}
    
    }
    
    
    
`

export const ForgotPasswordContainer = styled(ErrorContainer)`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 12%;
    
    p{
    font-size: 16px;
    color: ${props => props.theme.thirdColor};
    cursor: pointer;
    
      font-weight: bold;
    
    :hover {
      color: ${props => props.theme.secondaryColor};
      
    }
    }
    
`

export const ButtonContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 48%;
    
    @media screen and (max-width: 1200px) {
           width:100%;
}
    
    button{
    height: 20%;
    width: 40%;
    border-radius: 30px;
    border-color: ${props => props.theme.secondaryColor};
    font-weight: bold;
    font-size: 40px;
    @media screen and (max-width: 1200px) {
           font-size:20px;
           height: 15%;
}
  }
  
   

`

// Registration Verification page

export const VerificationTopContainer = styled(LoginTopContainer)`
    height:10%;
    justify-content: center;
   
`

export const VerificationFormWrapper =styled(FormWrapper)`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`



export const VerificationFormContainer = styled(UserPasswordFormContainer)`
    width:50%;
    justify-content: space-around;
  
    height: 75%;
    
`

export const VerificationInvFormContainer = styled(LoginFormContainer)`
display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 5px solid ${props => props.theme.mainColor};
  width:100%;
  height: 10%;
  
  margin: 0%;
  padding: 0%;
  
  img {
    width: 10%;
    height:40%;
  }
  
  input {
    text-align: left;
    width: 100%;
  }
  
   input::placeholder {
    color: ${props => props.theme.thirdColor};
    font-weight: bold;
   }

  input[type="text"],input[type="password"],input[type="email"] , textarea {
    border: none;
    outline: none;
  padding: 2%;
  background-color : ${props => props.theme.backgroundColor}; 
  font-size:24px;
    color: ${props => props.theme.thirdColor};
    
    
    @media screen and (max-width: 1060px) {
           font-size:14px;
}
  }
    

`;

export const VerificationErrorContainer = styled(ErrorContainer)`
    height: 5%;
    
    p{
    font-size: 18px;
    color: ${props => props.theme.thirdColor};
    }
    
`

export const VerificationButtonContainer = styled(ButtonContainer)`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 20%;
    
    button{
    height: 40%;
    width: 40%;
    border-radius: 30px;
    border-color: ${props => props.theme.secondaryColor};
    font-weight: bold;
    font-size: 40px;
    
    @media screen and (max-width: 1200px) {
           font-size:16px;
           height: 30%;
}
    
  }

`

export const VerificationStatusContainer = styled(RegistrationStatusContainer)`
    height:40%;   
`

//propulsion logo

export const PropulsionLogo = styled.img`
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 1000;
  height: 10%;
  width: 5%;

`