import {login, logout, signup, validation} from "../../types";

const initialState = {
    token: null,
    signupEmail: '',
    signupSuccessful: false,
};

const LogInReducer = (state = initialState, action) => {
    switch (action.type) {
        case login: {
            return {
                ...state,
                token: action.payload,
            };
        }
        case logout: {
            return {
                ...state,
                token: null,
            };
        }
        case signup: {
            return {
                ...state,
                signupEmail: action.payload,
            };
        }
        case validation: {
            return {
                ...state,
                signupSuccessful: true,
            };
        }
        default: {
            return state;
        }
    }
};

export default LogInReducer;

export const getToken = ({ LogInReducer }) => LogInReducer.token;
export const getSignUpEmail = ({LogInReducer}) => LogInReducer.signupEmail
export const getSuccessfulValidation = ({LogInReducer}) => LogInReducer.signupSuccessful
