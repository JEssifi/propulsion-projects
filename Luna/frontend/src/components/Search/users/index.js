import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {searchFunction} from "../../../store/actions/searchAction";
import anonymous from "../../../assets/anonymous.png";
import profile_pic from "../../../assets/profile_pic.png";
import NavBar from '../../Login_Signup/NavBar'
import {UsersSearchFunction} from "../../../store/actions/usersSearchAction";

const MainWrapper = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #f8f8f8;
    position: relative;
    display: flex;
    flex-direction: column;
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
    border-bottom: 1px solid #d8d8d8;
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
    border-bottom: 3px solid #e47d31;
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

const ReviewContainer = styled.div`
    width: 270px;
    height: 188px;
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

const HeaderWrapper = styled.div`
    width: auto;
    height: auto;
    display: flex;
    border-bottom: solid 1px #ebebeb;
`;

const UserImage = styled.img`
    width: 66px;
    height: 68px;
`;

const ReviewHeader = styled.div`
    width: auto;
    height: 66px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const NameHeader = styled.div`
    font-family: Helvetica;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    color: #e47d31;
    margin-left: 13px;
`;

const InfoHeader = styled.div`
    font-family: Helvetica;
    font-size: 14px;
    font-weight: bold;
    color: #4c4c4c;
    margin-left: 13px;
`;

const FooterBarPlaceholder = styled.div`
    height: 88px;
    width: 1440px;
    background-color: red;
    position: absolute;
    bottom: 0;
`;


const UsersSearch = (props) => {
    const [search, setSearch] = useState("");

    useEffect(() => {
        props.dispatch(UsersSearchFunction());
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


    const searchRestaurantsButtonHandler = (e) => {
        e.preventDefault();
        props.history.push('/search/restaurants/')
    };

    const searchReviewsButtonHandler = (e) => {
        e.preventDefault();
        props.history.push('/search/reviews/')
    };

    console.log('HI', props);

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
            </SearchBarWrapper>
            <OptionsBarWrapper>
                <RestaurantsTab onClick={searchRestaurantsButtonHandler}>RESTAURANTS</RestaurantsTab>
                <ReviewsTab onClick={searchReviewsButtonHandler}>REVIEWS</ReviewsTab>
                <UsersTab>USERS</UsersTab>
            </OptionsBarWrapper>
            <FeedContainer>
                <FeedWrapper>
                    {props.users
                        ? props.users.map(user => {
                            console.log('HI', user.username);
                            return (
                                <ReviewContainer key={user.id}>
                                    <OrangeBar />
                                    <HeaderWrapper>
                                        {/* <UserImage src={anonymous}/> */}
                                        <img src={profile_pic} height='100px'/>
                                        <ReviewHeader>
                                            <NameHeader>{user.first_name}</NameHeader>
                                            <InfoHeader>{user.num_reviews} Reviews in total</InfoHeader>
                                        </ReviewHeader>
                                    </HeaderWrapper>
                                    {user.about}
                                </ReviewContainer>
                            )
                        }): null}
                    </FeedWrapper>
                </FeedContainer>
            <FooterBarPlaceholder/>
        </MainWrapper>
    )
};

const mapStateToProps = state => {
    console.log('state.users', state.users);
    return {
        token: state.login.token,
        users: state.users.users,
  };
};

export default connect(mapStateToProps)(UsersSearch);
