import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {searchFunction} from "../../../store/actions/searchAction";
import anonymous from "../../../assets/anonymous.png";
import NavBar from '../../Login_Signup/NavBar'
import {reviewsSearchFunction} from "../../../store/actions/reviewsSearchAction";
import profile_pic from "../../../assets/profile_pic.png";

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
    border-bottom: 3px solid #e47d31;
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

const ReviewContainer = styled.div`
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

const HeaderWrapper = styled.div`
    width: auto;
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

const ContentWrapper = styled.div`
    width: auto;
    height: 130px;
    display: flex;
    flex-direction: column;
`;

const RestaurantName = styled.div`
    width: auto;
    height: auto;
    font-family: Helvetica;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    color: #e47d31;
    margin-left: 13px;
    margin-top: 13px;
`;

const ReviewContent = styled.div`
    width: auto;
    height: auto;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: bold;
    text-align: left;
    color: #4c4c4c;
    margin-left: 13px;
`;

const ButtonsWrapper = styled.div`
    height: 50px;
    width: auto;
`;

const Buttons = styled.button`
  font-size: 16px;
  background-color: rgba(145, 145, 145, 0.6);
  border: solid 1px #ebebeb;
  height: 33px;
  width: 125px;
  color: white;
  font-weight: 300;
  :hover {
    cursor: pointer
  }
  :focus {
    outline: none
  }
`;


const LikeButton = styled(Buttons)`
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
`;

const CommentButton = styled(Buttons)`
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
`;


const AdditionalWrapper = styled.div`
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
`;

const LatestComments = styled.div`
    width: auto;
    height: 24px;
    font-family: Helvetica;
    font-size: 20px;
    font-weight: 300;
    text-align: left;
    color: black;
    margin-left: 13px;
    margin-bottom: 13px;
`;

const OtherName = styled(NameHeader)`
    font-size: 14px;
    text-align: left;
    margin-bottom: 7px;
`;

const OtherText = styled(ReviewContent)`
    font-size: 14px;
    font-weight: normal;
    text-align: left;
    margin-bottom: 13px;
`;

const FooterBarPlaceholder = styled.div`
    height: 88px;
    width: 1440px;
    background-color: red;
    position: absolute;
    bottom: 0;
`;


const ReviewsSearch = (props) => {
    const [search, setSearch] = useState("");

    useEffect(() => {
        props.dispatch(reviewsSearchFunction());
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

    const searchUsersButtonHandler = (e) => {
        e.preventDefault();
        props.history.push('/search/users/')
    };

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
                <ReviewsTab>REVIEWS</ReviewsTab>
                <UsersTab onClick={searchUsersButtonHandler}>USERS</UsersTab>
            </OptionsBarWrapper>
            <FeedContainer>
                <FeedWrapper>
                    {props.reviews
                        ? props.reviews.map(review => {
                            return (
                                <ReviewContainer key={review.id}>
                                    <OrangeBar />
                                    <HeaderWrapper>
                                        {/* <UserImage src={anonymous}/> */}
                                        <img src={profile_pic} height='100px'/>
                                        <ReviewHeader>
                                            <NameHeader>{review.user.first_name}</NameHeader>
                                            <InfoHeader>{review.num_reviews_of_user} Reviews in total</InfoHeader>
                                        </ReviewHeader>
                                    </HeaderWrapper>
                                    <ContentWrapper>
                                        <RestaurantName>{review.restaurant.name}</RestaurantName>
                                        <ReviewContent>{review.text_content}</ReviewContent>
                                    </ContentWrapper>
                                    <ButtonsWrapper>
                                        <LikeButton>Like</LikeButton>
                                        <CommentButton>Comment</CommentButton>
                                    </ButtonsWrapper>
                                    <AdditionalWrapper>
                                        
                                        <LatestComments>{review.comment_content.user}</LatestComments>
                                        <OtherName>Greta Żurkowska</OtherName>
                                        <OtherText>MUHAHAHHAHA!</OtherText>
                                        <OtherName>Jannic Veith</OtherName>
                                        <OtherText>YAAAAAAAAAAY!</OtherText>
                                    </AdditionalWrapper>
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
    console.log(state.reviews);
    return {
        token: state.login.token,
        reviews: state.reviews.reviews,
  };
};

export default connect(mapStateToProps)(ReviewsSearch);
