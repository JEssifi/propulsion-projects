import React, { useState } from "react";
import { MainButton } from "../../../styles/buttons";
import {useHistory} from "react-router-dom";
import RenderEmailImage from "../../../hoc/RenderEmailImage";
import RenderRegistrationStatusSignUp from "../../../hoc/RenderRegistrationStatusSignUp";

import {
  ButtonContainer,
  EmailFormContainer,
  ErrorContainer,
  FormWrapper,
  LoginFormContainer,
  LoginTopContainer,
  RegistrationStatusContainer
} from "../styles";
import {useDispatch} from "react-redux";
import {loginFunction} from "../../../store/actions/loginSignUp/loginAction";
import {signupFunction} from "../../../store/actions/loginSignUp/signupAction";

const SignUp = () => {
    const history = useHistory()
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState(false); //set up error based on Fetch

  const dispatch = useDispatch();

  const signupHandler = async e => {
    e.preventDefault();
    setResponse(false)
    const data = {
      email: email,
    };

    const res = await dispatch(signupFunction(data));

    if (!res){
      return setResponse(true)
    } else {
      history.push('/congratulations')
    }

  }



  return (
    <>
      <LoginTopContainer>
        <h2>Welcome to Reveal!</h2>
        <h2>Please enter your e-mail.</h2>
      </LoginTopContainer>
      <FormWrapper id="login-form" onSubmit={signupHandler}>
        <EmailFormContainer>
          <LoginFormContainer>
              <RenderEmailImage/>
            <input
              type="email"
              onChange={e => setEmail(e.currentTarget.value)}
              value={email}
              placeholder="Email"
            />
          </LoginFormContainer>
        </EmailFormContainer>

        <ErrorContainer>
          <p>
            {response === true ? (
              <p>
                Incorrect e-mail or e-mail is already in use. Please try again!
              </p>
            ) : (
              ""
            )}
          </p>
        </ErrorContainer>

        <ButtonContainer>
          <MainButton onClick={signupHandler}>SUBMIT</MainButton>
          <RegistrationStatusContainer>
            <RenderRegistrationStatusSignUp/>
          </RegistrationStatusContainer>
        </ButtonContainer>
      </FormWrapper>
    </>
  );
};

export default SignUp;
