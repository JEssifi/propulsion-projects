import React, {useState} from "react";
import {MainButton} from "../../../styles/buttons";

import {useHistory} from "react-router-dom";
import RenderAvatarImage from "../../../hoc/RenderAvatarImage";
import RenderPasswordImage from "../../../hoc/RenderPasswordImage";

import {
    ButtonContainer,
    ErrorContainer, ForgotPasswordContainer,
    FormWrapper,
    LoginFormContainer,
    LoginTopContainer,
    UserPasswordFormContainer
} from "../styles";
import {useDispatch, useSelector} from "react-redux";
import {loginFunction} from "../../../store/actions/loginSignUp/loginAction";
import {getSuccessfulValidation} from "../../../store/reducers/LogInReducer";
import RenderEmailImage from "../../../hoc/RenderEmailImage";

const Login = () =>{
    const history = useHistory();
    const getSignInSuccess = useSelector(getSuccessfulValidation)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState(false); //set up error based on Fetch


    const dispatch = useDispatch();

    const loginHandler = async e => {
        e.preventDefault();
        setResponse(false)
        const data = {
            email: email,
            password: password
        };

        const res = await dispatch(loginFunction(data));

        if (!res){
            return setResponse(true)
        } else {
            history.push('/search')
        }

    }

    return (
        <>
           <LoginTopContainer>
               <h2>Welcome to Reveal!</h2>
               <h2>Please sign in.</h2>
           </LoginTopContainer>
            <FormWrapper id="login-form" onSubmit={loginHandler}>
                <UserPasswordFormContainer>
            <LoginFormContainer>
                <RenderEmailImage/>
                <input
                    type="text"
                    onChange = {e => setEmail(e.currentTarget.value)}
                    value={email}
                    placeholder="Email"/>
            </LoginFormContainer>
                <LoginFormContainer>
                    <RenderPasswordImage/>
                <input
                    type="password"
                    onChange = {e => setPassword(e.currentTarget.value)}
                    value={password}
                    placeholder="Password"/>
                </LoginFormContainer>

                </UserPasswordFormContainer>

                <ErrorContainer>
                    {response ? <p>Incorrect Username or Password. Please try again!</p> : getSignInSuccess ? <p style={{fontWeight: 'bold'}}>Sign up was successful, you can now sign in!</p> : ''}
                </ErrorContainer>

                <ButtonContainer>
                    <MainButton onClick={loginHandler}>SIGN IN</MainButton>
                    <ForgotPasswordContainer>
                    <p>Forgot password?</p>
                        </ForgotPasswordContainer>
                </ButtonContainer>



            </FormWrapper>
        </>
    )
}

export default Login;