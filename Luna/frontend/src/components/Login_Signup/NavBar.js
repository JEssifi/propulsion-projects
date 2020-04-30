import React from 'react';
import { connect } from 'react-redux';
import { LoginButton, SignUpButton, MenuButtons, MenuButtonsActive } from "../../styles/buttons"
import logo from '../../assets/logo.svg'

const NavBar = (props) => {

    const homePageButtonHandler = (e) => {
        e.preventDefault();
        props.history.push('/')
    }

    const profilePageButtonHandler = (e) => {
        e.preventDefault();
        props.history.push('/profile/')
    }

    const signupPageButtonHandler = (e) => {
        e.preventDefault();
        props.history.push('/signup/')
    }

    const loginPageButtonHandler = (e) => {
        e.preventDefault();
        props.history.push('/login/')
    }

    const searchPageButtonHandler = (e) => {
        e.preventDefault();
        props.history.push('/search/restaurants/')
    }

    return <div style={{'width':'100%','height':'70px','display':'flex','alignItems':'center','justifyContent':'space-between','paddingLeft':'40px','paddingRight':'40px','backgroundColor':'white', 'border-bottom':'2px solid #f8f8f8'}}>
         {console.log('---',props)}
         <img src={logo} />
         <div style={{'height':'100%','width':'40%'}}>
         <div style={{'display':'flex','justifyContent':'space-around','alignItems':'center','height':'100%'}}>
        { props.history.location.pathname==='/' ? <MenuButtonsActive onClick={homePageButtonHandler}>Home</MenuButtonsActive> : <MenuButtons onClick={homePageButtonHandler}>Home</MenuButtons> }
        { props.history.location.pathname==='/search/restaurants/' ? <MenuButtonsActive onClick={searchPageButtonHandler}>Search</MenuButtonsActive> : <MenuButtons onClick={searchPageButtonHandler}>Search</MenuButtons> }
        { props.history.location.pathname==='/profile/' ? <MenuButtonsActive onClick={searchPageButtonHandler}>Profile</MenuButtonsActive> : <MenuButtons onClick={profilePageButtonHandler}>Profile</MenuButtons> }
            <div style={{'height':'50%','width':'45%','display':'flex','alignItems':'stretch'}}>
                <SignUpButton onClick={signupPageButtonHandler} style={{'fontWeight':'100'}}>SIGNUP</SignUpButton>
                <LoginButton onClick={loginPageButtonHandler} style={{'fontWeight':'100'}}>LOGIN</LoginButton>
            </div>
         </div>
         </div>
    </div>
}

export default connect()(NavBar);