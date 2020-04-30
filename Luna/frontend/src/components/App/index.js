import React from 'react';
import Login from '../Login_Signup/index.js';
import Feed from '../Feed/index.js';
import Home from '../Home/index.js';
import Profile from '../Profile/index.js';
import Signup from '../Login_Signup/Signup';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HOCWrapper from '../../HOC';
import store from "../../store";
import { loginAction } from "../../store/actions/loginAction";
import RestaurantsSearch from "../Search/restaurants";
import ReviewsSearch from "../Search/reviews";
import UsersSearch from "../Search/users";
import NewRestaurant from "../New_Restaurant";
import ValidationPage from "../ValidationPage";

// fetches the token from the localStorage and saves it in the state
const token = localStorage.getItem('token');
if (token) {
  store.dispatch(loginAction(token))
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={ HOCWrapper(Login) }/>
        {/* <Route exact path="/feed" component={ HOCWrapper(Feed) }/> */}
        <Route exact path="/" component={ Home }/>
        <Route exact path="/profile" component={ Profile }/>
        <Route exact path="/signup" component={ Signup }/>
        <Route exact path="/search/restaurants" component={RestaurantsSearch} />
        <Route exact path="/search/reviews" component={ReviewsSearch} />
        <Route exact path="/search/users" component={UsersSearch} />
        <Route exact path="/restaurants/new" component={NewRestaurant} />
        <Route exact path="/registration/validation" component={ValidationPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
