import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {restaurantsSearchFunction} from "../../../store/actions/restaurantsSearchAction";
import {categoriesFunction} from "../../../store/actions/categoriesAction";
import {searchFunction} from "../../../store/actions/searchAction";
import arrow from "../../../assets/arrow.svg";
import NavBar from '../../Login_Signup/NavBar'
import Card from "../../Home/Card"

const MainWrapper = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #f8f8f8;
    position: relative;
    display: flex;
    flex-direction: column;
`;

const TopBarPlaceholder = styled.div`
    height: 70px;
    width: 1440px;
    background-color: blue;
`;

const SearchBarWrapper = styled.form`
    height: 50px;
    display: flex;
`;

const Search = styled.input`
    height: 50px;
    width: 100%;
    font-family: Helvetica;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    color: #d8d8d8;
    background-color: white;
    border: none;
    border-right: 3px solid #f8f8f8;
    padding-left: 30px;
    outline: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const CategorySearch = styled.select`
    height: 50px;
    width: 290px;
    font-family: Helvetica;
    font-size: 20px;
    color: #d8d8d8;
    border: solid 1px #ebebeb;
    background-color: white;
    background: url(${arrow}) ;
    background-position: 95% 50%;
    background-repeat: no-repeat;
    -webkit-appearance: none;
    text-indent: 15px;
    text-overflow: '';
        :focus {
            outline:none;
        }
`;

const OptionsBarWrapper = styled.div`
    height: 55px;
    width: 100%;
    background-color: #f8f8f8;
    padding-top: 8px;
    display: flex;
    justify-content: center;
`;

const RestaurantsTab = styled.div`
    height: 47px;
    width: 210px;
    background-color: #f8f8f8;
    border-bottom: 3px solid #e47d31;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
        cursor:pointer
    }
`;

const ReviewsTab = styled.div`
    height: 47px;
    width: 210px;
    background-color: #f8f8f8;
    border-bottom: 1px solid #d8d8d8;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
        cursor:pointer
    }
`;

const UsersTab = styled.div`
    height: 47px;
    width: 210px;
    background-color: #f8f8f8;
    border-bottom: 1px solid #d8d8d8;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
        cursor:pointer
    }
`;

const FeedContainer = styled.div`
    height: 525px;
    width: 100vw;
    overflow: scroll;
`;

const FeedWrapper = styled.div`
    height: auto;
    width: 1170px;
    background-color: #f8f8f8;
    margin-top: 55px;
    margin-right: 135px;
    margin-left: 135px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const RestaurantContainer = styled.div`
    width: 270px;
    height: 410px;
    border-radius: 3px;
    border: solid 1px #ebebeb;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
`;

const OrangeBar = styled.div`
    width: auto;
    height: 8px;
    background-color: #e47d31;
`;

const RestaurantName = styled.div`
    width: auto;
    height: 24px;
    margin-left: 13px;
    margin-top: 8px;
    margin-bottom: 5px;
    font-family: Helvetica;
    font-size: 20px;
    color: #4c4c4c;
    display: flex;
    justify-content: flex-start;
`;

const Address = styled.div`
    width: auto;
    height: 22px;
    margin-left: 13px;
    margin-bottom: 5px;
    font-family: Helvetica;
    font-size: 16px;
    color: #4c4c4c;
    display: flex;
    justify-content: flex-start;
`;

const StarsRating = styled.div`
    width: auto;
    height: 22px;
    margin-left: 7px;
    margin-bottom: 30px;
    color: #4c4c4c;
    display: flex;
`;

const Stars = styled.img`
    width: 27px;
    height: 24.4px;
`;

const RestaurantImage = styled.div`
    width: auto;
    height: 284px;
    background-color: pink;
`;

const FooterBarPlaceholder = styled.div`
    height: 88px;
    width: 1440px;
    background-color: red;
    position: absolute;
    bottom: 0;
`;


const RestaurantsSearch = (props) => {

    const [category, setCategory] = useState(null);

    const [search, setSearch] = useState("");

    useEffect(() => {
        props.dispatch(restaurantsSearchFunction());
        props.dispatch(categoriesFunction());
    }, []);


    const userSearchHandler = event => {
        event.preventDefault();
        const data = {
            name: search
        };
        props.dispatch(searchFunction(data));
    };

    const setSearchHandler = event => {
        event.preventDefault();
        setSearch(event.target.value);
    };

    const searchReviewsButtonHandler = (e) => {
        e.preventDefault();
        props.history.push('/search/reviews/')
    };

    const searchUsersButtonHandler = (e) => {
        e.preventDefault();
        props.history.push('/search/users/')
    };

    const categories = Array.from(new Set(props.categories))

    return(
        <MainWrapper>
            <NavBar history={props.history}/>
            <SearchBarWrapper onSubmit={userSearchHandler}>
                <Search
                    name="search"
                    onChange={setSearchHandler}
                    value={search}
                    placeholder="Search..."
                />
                <CategorySearch onChange={(e) => setCategory(e.currentTarget.value)} >
                    <option>Select a category...</option>
                    {categories
                        ? categories.map(category => {
                        return (
                            <option key={category.id}>{category.name}</option>
                        )
                    }): null}
                </CategorySearch>
            </SearchBarWrapper>
            <OptionsBarWrapper>
                <RestaurantsTab>RESTAURANTS</RestaurantsTab>
                <ReviewsTab onClick={searchReviewsButtonHandler}>REVIEWS</ReviewsTab>
                <UsersTab onClick={searchUsersButtonHandler}>USERS</UsersTab>
            </OptionsBarWrapper>
            <FeedContainer>
                <FeedWrapper>
                    { props.restaurants ? props.restaurants.filter( restaurant => !category || restaurant.category_name === category ).map( (restaurant,index) => <Card key={index} restaurant={restaurant} />) : null }
                    {/* {props.restaurants
                        ? props.restaurants.map(restaurant => {
                            return (
                                <RestaurantContainer key={restaurant.id}>
                                    <OrangeBar />
                                    <RestaurantName>{restaurant.name}</RestaurantName>
                                    <Address>{restaurant.city}</Address>
                                    <StarsRating>
                                        props.restaurant.avg_rating ? { ratingStars.map( (rating,index) =>  { return rating ?  <Stars src={starFull} key={index}/>:  props.restaurant.avg_rating>index && props.restaurant.avg_rating<index+1 ? <Stars src={starHalf} key={index}/> : <Stars src={starEmpty} key={index}/>} ) } : null
                                    </StarsRating>
                                    <RestaurantImage/>
                                </RestaurantContainer>
                            )
                        }): null} */}
                    </FeedWrapper>
                </FeedContainer>
            <FooterBarPlaceholder/>
        </MainWrapper>
    )
};

const mapStateToProps = state => {
    return {
        token: state.login.token,
        restaurants: state.restaurants.restaurants,
        categories: state.categories.categories,
  };
};

export default connect(mapStateToProps)(RestaurantsSearch);
