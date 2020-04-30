import React from "react";
import {MainButton} from "../../../styles/buttons";
import {useHistory} from "react-router-dom";
import RenderTickImage from "../../../hoc/RenderTickImage";
import RenderRegistrationStatusConfirm from "../../../hoc/RenderRegistrationStatusConfirm";

import {
    ButtonContainer,
    ErrorContainer,
    FormWrapper,
    LoginTopContainer, RegistrationStatusContainer, TickContainer,

} from "../styles";

const SignUpConfirmed = () =>{
    const history = useHistory();

    return (
        <>
            <LoginTopContainer>
                <h2>Congratulations!</h2>
                <h2>We've sent you a verification code.</h2>
            </LoginTopContainer>
            <FormWrapper id="login-form">
                <TickContainer>
                       <RenderTickImage/>
                </TickContainer>
                <ErrorContainer>

                </ErrorContainer>

                <ButtonContainer>
                    <MainButton onClick={() => history.push('/registration')}>CONTINUE</MainButton>
                    <RegistrationStatusContainer>
                        <RenderRegistrationStatusConfirm/>
                    </RegistrationStatusContainer>
                </ButtonContainer>
            </FormWrapper>
        </>
    )
}

export default SignUpConfirmed;