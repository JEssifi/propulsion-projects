import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SubmitButton } from "../../styles/buttons"
import {registrationFunction } from "../../store/actions/registrationAction"
import {UsernamePwdFormContainer} from "../../styles/forms";
import {UsernamePwdForm} from "../../styles/forms";
import {PageHeading} from "../../styles/headers";

const Signup = (props) => {

    const [email, setEmail] = useState('');

    const userRegistrationHandler = async (e) => {
        e.preventDefault();
        const data = {
            emailverification: email
        };

        const emailverified = await props.dispatch(registrationFunction(data));
        if (emailverified){
            //redirect to verification page
        }


    };

    return <div style={{'height':'100vh','width':'100%','display':'flex','flexDirection':'column', 'justifyContent':'center'}}>
            <div style={{'backgroundColor':'rgb(248,248,248)','height':'100%', 'display':'flex', 'flexDirection':'column', 'alignItems':'center', 'justifyContent':'center'}}>
            <div style={{'height':'70%','width':'25%','display':'flex','flexDirection':'column','justifyContent':'space-between','alignItems':'center'}}>
            <UsernamePwdFormContainer style={{'height':'70%','justifyContent':'space-around'}}>
                <PageHeading style={{'marginBottom':'20%'}}>VALIDATE YOUR ACCOUNT</PageHeading>
                <UsernamePwdForm placeholder='Code' onChange={(e) => setEmail(e.currentTarget.value)} /><br/>
                <SubmitButton type='submit' onClick={userRegistrationHandler} style={{'fontWeight':'100'}}>Validate</SubmitButton>
            </UsernamePwdFormContainer>
            </div>
        </div>
        </div>
}

export default connect()(Signup);
