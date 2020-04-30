import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import NavBar from '../Login_Signup/NavBar'
import home_background from '../../assets/home_background.jpg'
import { SubmitButton } from "../../styles/buttons"
import { PageHeading } from "../../styles/headers"
import { UsernamePwdForm } from "../../styles/forms"
import Card from "./Card"
import { listBestRestaurantsFunction } from "../../store/actions/listBestRestaurantsAction";
import { searchFunction } from "../../store/actions/searchAction";

const Home = (props) => {

    useEffect( () => {
        props.dispatch(listBestRestaurantsFunction());
    }, [] )

    const [search, setSearch] = useState("");

    const userSearchHandler = event => {
        event.preventDefault();
        const data = {
            name: search
        };
        props.dispatch(searchFunction(data));
        props.history.push('/search/restaurants/')
    };

    return <div style={{'height':'100vh','display':'flex','flexDirection':'column','alignItems':'center'}}>
    	    <NavBar history={props.history} style={{'backgroundColor':'blue'}}/>
            <img src={home_background} width='100%' height='40%' />
            <div style={{'position':'absolute','top':'27%','backgroundColor':'transparent','width':'50%','height':'5%','display':'flex','justifyContent':'space-between'}}>
                <UsernamePwdForm placeholder='Search...' style={{'width':'70%','height':'100%'}} />
                <SubmitButton onClick={userSearchHandler} style={{'height':'100%','fontWeight':'100','width':'25%'}}>Search</SubmitButton>
            </div>
            <PageHeading style={{'marginTop':'1.5%','height':'7%','width':'20%'}}>Best Rated Restaurants</PageHeading>
            {/*<div style={{'display':'flex','justifyContent':'space-around','width':'90%'}}>
            {   props.bestRestaurants ? props.bestRestaurants.map( (restaurant,index) => <Card key={index} restaurant={restaurant} /> ) : undefined   }
            </div>*/}
           </div>
}


const mapStateToProps = state => {
    return {
      bestRestaurants: state.restaurants.bestRestaurants,
    };
  };

  export default connect(mapStateToProps)(Home);
