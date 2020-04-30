import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginFunction } from "../../store/actions/loginAction";
import { SubmitButton } from "../../styles/buttons"
import { PageHeading } from "../../styles/headers"
import { UsernamePwdFormContainer, UsernamePwdForm } from "../../styles/forms"
import NavBar from './NavBar'


const Login = (props) => {

    const [email, setEmail] = useState('sagi@email.com');
    const [password, setPassword] = useState('propulsion');

    const userLoginHandler = (e) => {
        e.preventDefault();
        const data = {
            email,
            password
        };
        props.dispatch(loginFunction(data))
    };

    return <div style={{'height':'100vh','width':'100%','display':'flex','flexDirection':'column', 'justifyContent':'center'}}>
            <NavBar history={props.history}/>
            <div style={{'backgroundColor':'rgb(248,248,248)','height':'100%', 'display':'flex', 'flexDirection':'column', 'alignItems':'center', 'justifyContent':'center'}}>
            <div style={{'height':'70%','width':'25%','display':'flex','flexDirection':'column','justifyContent':'space-between','alignItems':'center'}}>
            <PageHeading>LOGIN</PageHeading>
            <UsernamePwdFormContainer>
                <UsernamePwdForm placeholder='sagi@email.com' onChange={(e) => setEmail(e.currentTarget.value)} /><br/>
                <UsernamePwdForm placeholder='propulsion' onChange={(e) => setPassword(e.currentTarget.value)} /><br/>
                <SubmitButton type='submit' onClick={userLoginHandler} style={{'fontWeight':'100'}}>LOGIN</SubmitButton>
            </UsernamePwdFormContainer>
            </div>
        </div>
        <div style={{'height':'10%'}}>
        </div>
        </div>
}

export default connect()(Login);