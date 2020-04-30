import React, { useState } from 'react';
import NavBar from './NavBar'
import { connect } from 'react-redux';
import { PageHeading } from "../../styles/headers"
import { UsernamePwdFormContainer, UsernamePwdForm } from "../../styles/forms"
import { SubmitButton } from "../../styles/buttons"
import {registrationFunction } from "../../store/actions/registrationAction"
import {useHistory} from "react-router-dom"

const Signup = (props) => {

    const [email, setEmail] = useState('');
    const history = useHistory();
    const userRegistrationHandler = async (e) => {
        e.preventDefault();
        const data = {
            emailverification: email
        };

        const emailverified = await props.dispatch(registrationFunction(data));
        console.log("Hello Hugo", emailverified)
        if (emailverified){
            history.push("/registration/validation");
        }


    };

    return <div style={{'height':'100vh','width':'100%','display':'flex','flexDirection':'column', 'justifyContent':'center'}}>
    	    <NavBar history={props.history}/>
            <div style={{'backgroundColor':'rgb(248,248,248)','height':'100%', 'display':'flex', 'flexDirection':'column', 'alignItems':'center', 'justifyContent':'center'}}>
            <div style={{'height':'70%','width':'25%','display':'flex','flexDirection':'column','justifyContent':'space-between','alignItems':'center'}}>
            <UsernamePwdFormContainer style={{'height':'70%','justifyContent':'space-around'}}>
                <PageHeading style={{'marginBottom':'40%'}}>REGISTRATION</PageHeading>
                <UsernamePwdForm placeholder='Email' onChange={(e) => setEmail(e.currentTarget.value)} /><br/>
                <SubmitButton type='submit' onClick={userRegistrationHandler} style={{'fontWeight':'100'}}>LOGIN</SubmitButton>
            </UsernamePwdFormContainer>
            </div>
        </div>
        </div>
}

export default connect()(Signup);
