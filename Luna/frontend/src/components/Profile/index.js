import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../Login_Signup/NavBar'

const Profile = (props) => {

    return <>
    	    <NavBar history={props.history}/>
        </>
}

export default connect()(Profile);