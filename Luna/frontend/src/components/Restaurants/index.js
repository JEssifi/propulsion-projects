import React, { useState } from 'react';
import { connect } from 'react-redux';
import { logoutFunction } from "../../store/actions/logoutAction";

const Logout = (props) => {

    const logoutHandler = () => {
        props.dispatch(logoutFunction());
        props.history.push('/')
    };

    return <>
    	This is the feed page. <br/>
        <button onClick={ logoutHandler }>Logout</button>
        </>
};

export default connect()(Logout);