import React, {useEffect} from 'react';
import {connect} from 'react-redux';

export default function HOCWrapper(WrappedComponent) {

    function AuthComponent(props) {
        useEffect(() => {
            redirectUser()
        }, [props.token]);

        const redirectUser = () => {
            console.log('login')
            if ( !props.token ) {
                props.history.push('/login')
            } else {
                props.history.push('/')
            }
        };

        return <WrappedComponent {...props}/>
    }

    function mapStateToProps(state) {

        return {
            token: state.login.token
        }
    }

    return connect(mapStateToProps)(AuthComponent)
};
