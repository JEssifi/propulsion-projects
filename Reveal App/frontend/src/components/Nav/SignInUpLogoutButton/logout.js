import React, {useState} from "react";
import {logoutHandler} from "../../../store/actions/loginSignUp/logoutAction";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import {LogoutButton} from "./styles";
import propulsionlogo from "../../../assets/images/propulsion_logo_horizontal_white.png";


const LogOutButton = () =>{
    const dispatch = useDispatch()
    const history = useHistory()
    const [hover, setHover] = useState(false);

    const renderLogoutOnHover = () => {
        if (hover){
            return <LogoutButton onClick={() => {dispatch(logoutHandler()); history.push("/")}}>LOGOUT</LogoutButton>
        } else {
            return <img style={{width:'25%' ,height: '85%'}} src={propulsionlogo} alt="Password lock icon" />;
        }
    }



    return (
        <div onMouseEnter={() => setHover(!hover)}  onMouseLeave={() => setHover(!hover)}style={{width:'100%' ,height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {renderLogoutOnHover()}
        </div>
    )
}

export default LogOutButton;