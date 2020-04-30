import React, { useState } from "react";
import { MainButton } from "../../../styles/buttons";
import {useHistory} from "react-router-dom";
import RenderTickImage from "../../../hoc/RenderTickImage";
import RenderEmailImage from "../../../hoc/RenderEmailImage";
import RenderAvatarImage from "../../../hoc/RenderAvatarImage";
import RenderPasswordImage from "../../../hoc/RenderPasswordImage";
import RenderRegistrationStatusRegistration from "../../../hoc/RenderRegistrationStatusRegistration";

import {
    VerificationButtonContainer, VerificationErrorContainer,
    VerificationFormContainer,
    VerificationFormWrapper,
    VerificationInvFormContainer, VerificationStatusContainer,
    VerificationTopContainer
} from "../styles";
import {useDispatch, useSelector} from "react-redux";
import {getSignUpEmail} from "../../../store/reducers/LogInReducer";
import {validationFunction} from "../../../store/actions/loginSignUp/signupValidationAction";

const SignUpRegistration = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const inputtedEmail = useSelector(getSignUpEmail)
    const [verification, setVerification] = useState("");
    const [email, setEmail] = useState(inputtedEmail);
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [incorrectPassword, setIncorrectPassword] = useState(false)
    const [response, setResponse] = useState(false);

    const registrationHandler = async e => {
        e.preventDefault();
        setResponse(false)
        setIncorrectPassword(false)

        const data = {
            verification_code: verification,
            email: email,
            username: username,
            password: password,
            password_repeat: passwordRepeat,
            firstname: firstName,
            lastname: lastName,
        };

        if (password !== passwordRepeat){
            return setIncorrectPassword(true)
        } else if (password === passwordRepeat) {
            const res = await dispatch(validationFunction(data));
            if (!res){
                return setResponse(true)
            } else {
                history.push('/')
            }
        } else {
            return setResponse(true)
        };
    };



    return (
        <>
            <VerificationTopContainer>
                <h2>Verification</h2>
            </VerificationTopContainer>
            <VerificationFormWrapper id="login-form" onSubmit={registrationHandler}>
                <VerificationFormContainer>
                    <VerificationInvFormContainer>
                        <RenderTickImage/>
                        <input
                            type="text"
                            onChange={e => setVerification(e.currentTarget.value)}
                            value={verification}
                            placeholder="Verification code"
                        />
                    </VerificationInvFormContainer>
                    <VerificationInvFormContainer>
                        <RenderEmailImage/>
                        <input
                            type="email"
                            onChange={e => setEmail(e.currentTarget.value)}
                            value={email}
                            placeholder="Email"
                        />
                    </VerificationInvFormContainer>
                <VerificationInvFormContainer>
                    <RenderAvatarImage/>
                        <input
                            type="text"
                            onChange = {e => setUsername(e.currentTarget.value)}
                            value={username}
                            placeholder="Username"/>
                    </VerificationInvFormContainer>
                    <VerificationInvFormContainer>
                        <RenderAvatarImage/>
                        <input
                            type="text"
                            onChange = {e => setFirstName(e.currentTarget.value)}
                            value={firstName}
                            placeholder="First name"/>
                    </VerificationInvFormContainer>
                <VerificationInvFormContainer>
                    <RenderAvatarImage/>
                        <input
                            type="text"
                            onChange = {e => setLastName(e.currentTarget.value)}
                            value={lastName}
                            placeholder="Last name"/>
                    </VerificationInvFormContainer>
                    <VerificationInvFormContainer>

                        <RenderPasswordImage/>

                        <input
                            type="password"
                            onChange = {e => setPassword(e.currentTarget.value)}
                            value={password}
                            placeholder="Password"/>
                    </VerificationInvFormContainer>
                <VerificationInvFormContainer>
                    <RenderPasswordImage/>
                        <input
                            type="password"
                            onChange = {e => setPasswordRepeat(e.currentTarget.value)}
                            value={passwordRepeat}
                            placeholder="Password repeat"/>
                    </VerificationInvFormContainer>
                </VerificationFormContainer>

                <VerificationErrorContainer>
                    <p>
                        {response ? (
                            <p>
                                Incorrect detail inputted. Please try again!
                            </p>
                        ) : incorrectPassword ? (<p>
                            Password doesn't match. Please try again!
                        </p>) : (
                            ""
                        )}
                    </p>
                </VerificationErrorContainer>

                <VerificationButtonContainer>
                    <MainButton onClick={registrationHandler}>COMPLETE</MainButton>
                    <VerificationStatusContainer>
                       <RenderRegistrationStatusRegistration/>
                    </VerificationStatusContainer>
                </VerificationButtonContainer>
            </VerificationFormWrapper>
        </>
    );
};

export default SignUpRegistration;
