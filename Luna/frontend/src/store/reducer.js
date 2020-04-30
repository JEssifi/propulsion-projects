import { combineReducers } from "redux";
import { login, logout, listBestRestaurants, getRestaurants, search, getCategories, getReviews, getUsers } from "./types";


const initialState = {
    token: null,
    userAuth: null,
    error: null,
    bestRestaurants: []
};


const initialStateRegister = {
    email: "",
};


const registerReducer = (state = initialStateRegister, action) => {
    switch (action.type) {
        case "registration":
            return {
                email: action.payload,
            };
        default:
            return state;
    }
};




const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case login:
            return {
                token: action.payload,
                userAuth: true,
            };
        default:
            return state;
    }
};

const logoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case logout:
            return {
                token: null,
                userAuth: null,
                error: null
            };
        default:
            return state;
    }
};

const restaurantsReducer = (state = { restaurants: [] }, action) => {
    switch (action.type) {
        case getRestaurants:
            return {
                restaurants: action.payload
            };
        case search:
            return {
                restaurants: action.payload
            };
        case listBestRestaurants:
            return {
                ...state,
                bestRestaurants: action.payload
            }
        default:
            return state;
    }
};

const categoriesReducer = (state = { categories: [] }, action) => {
    switch (action.type){
        case getCategories:
            return{
                categories: action.payload
            };
        default:
            return state;
    }
};

const reviewsReducer = (state = { reviews: [] }, action) => {
    switch (action.type){
        case getReviews:
            return{
                reviews: action.payload
            };
        case search:
            return {
                reviews: action.payload
            };
        default:
            return state;
    }
};

const usersReducer = (state = { users: [] }, action) => {
    switch (action.type){
        case getUsers:
            return{
                users: action.payload
            };
        case search:
            return {
                users: action.payload
            };
        default:
            return state;
    }
};



const allReducers = combineReducers({
    login: loginReducer,
    logout: logoutReducer,
    restaurants: restaurantsReducer,
    categories: categoriesReducer,
    reviews: reviewsReducer,
    users: usersReducer,
});

export default allReducers;
