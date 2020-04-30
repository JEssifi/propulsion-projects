import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { SubmitButton } from "../../styles/buttons"
import NavBar from "../Login_Signup/NavBar";
import arrow from "../../assets/arrow.svg";

const MainWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #f8f8f8;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TitleWrapper = styled.div`
    height: 45px;
    width: 400px;
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    align-items: center;
`;

const TitleText = styled.div`
    font-family: Helvetica;
    font-size: 24px;
    font-weight: bold;
    color: #4c4c4c;
`;

const TitleUnderline = styled.div`
    width: 200px;
    border: solid 2px #e47d31;
    margin-top: 5px;
`;

const RowWrapper = styled.div`
    height: 80px;
    width: 1179px;
    display: flex;
`;

const RowContainer = styled.div`
    height: 20px;
    width: 1179px;
    margin-top: 5px;
`;

const IndividualContainer = styled.div`
    height: 90px;
    width: 393px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
`;

const GeneralHeaders = styled.div`
    font-family: Helvetica;
    font-size: 18px;
    font-weight: bold;
    color: #4c4c4c;
    text-align: left;
    margin-left: 3px;
`;

const SpecificHeaders = styled.div`
    font-family: Helvetica;
    font-size: 14px;
    font-weight: bold;
    color: #979797;
    text-align: left;
    margin-top: 7px;
    margin-left: 3px;
`;

const FieldInput = styled.input`
    width: 370px;
    height: 35px;
    font-size: 14px;
    border-radius: 3px;
    border: solid 1px #ebebeb;
    background-color: #ffffff;
    text-align: left;
    outline: none;
    margin-top: 7px;
`;

const CategorySearch = styled.select`
    width: 370px;
    height: 35px;
    font-size: 14px;
    color: #d8d8d8;
    border-radius: 3px;
    border: solid 1px #ebebeb;
    text-align: left;
    outline: none;
    margin-top: 7px;
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

const Submit = styled(SubmitButton)`
    height: 50px;
    width: 175px;
    margin-top: 20px;
`;

const FooterBarPlaceholder = styled.div`
    height: 88px;
    width: 1440px;
    background-color: red;
    position: absolute;
    bottom: 0;
`;


const NewRestaurant = (props) => {
    const [newRestaurant, setNewRestaurant] = useState("");

    // useEffect(() => {
    //     props.dispatch(restaurantsSearchFunction());
    // }, []);


    return(
        <MainWrapper>
            <NavBar history={props.history}/>
            <TitleWrapper>
                <TitleText>CREATE NEW RESTAURANT</TitleText>
                <TitleUnderline/>
            </TitleWrapper>
                <RowContainer>
                    <GeneralHeaders>Basic</GeneralHeaders>
                </RowContainer>
                <RowWrapper>
                <IndividualContainer>
                    <SpecificHeaders>Name</SpecificHeaders>
                    <FieldInput/>
                </IndividualContainer>
                <IndividualContainer>
                    <SpecificHeaders>Category</SpecificHeaders>

                    <CategorySearch>
                        <option value="" disabled selected>Select a category...</option>
                        {props.categories
                            ? props.categories.map(category => {
                            return (
                                <option key={category.id}>{category.name}</option>
                            )
                        }): null}
                    </CategorySearch>



                </IndividualContainer>
                <IndividualContainer>
                    <SpecificHeaders>Country</SpecificHeaders>
                    <FieldInput/>
                </IndividualContainer>
                </RowWrapper>

                <RowContainer>
                    <GeneralHeaders>Address</GeneralHeaders>
                </RowContainer>
                <RowWrapper>
                <IndividualContainer>
                    <SpecificHeaders>Street</SpecificHeaders>
                    <FieldInput/>
                </IndividualContainer>
                <IndividualContainer>
                    <SpecificHeaders>City</SpecificHeaders>
                    <FieldInput/>
                </IndividualContainer>
                <IndividualContainer>
                    <SpecificHeaders>Zip</SpecificHeaders>
                    <FieldInput/>
                </IndividualContainer>
                </RowWrapper>

                <RowContainer>
                    <GeneralHeaders>Contact</GeneralHeaders>
                </RowContainer>
                <RowWrapper>
                <IndividualContainer>
                    <SpecificHeaders>Website</SpecificHeaders>
                    <FieldInput/>
                </IndividualContainer>
                <IndividualContainer>
                    <SpecificHeaders>Phone</SpecificHeaders>
                    <FieldInput/>
                </IndividualContainer>
                <IndividualContainer>
                    <SpecificHeaders>Email</SpecificHeaders>
                    <FieldInput/>
                </IndividualContainer>
                </RowWrapper>

                <RowContainer>
                    <GeneralHeaders>Details</GeneralHeaders>
                </RowContainer>
                <RowWrapper>

                <IndividualContainer>
                    <SpecificHeaders>Price Level</SpecificHeaders>

                    <CategorySearch>
                        <option value="" disabled selected>Select a price level...</option>
                        {props.restaurants
                            ? props.restaurants.map(restaurant => {
                            return (
                                <option key={restaurant.id}>{restaurant.price_level}</option>
                            )
                        }): null}
                    </CategorySearch>

                </IndividualContainer>
                </RowWrapper>
            <Submit>Submit</Submit>
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

export default connect(mapStateToProps)(NewRestaurant);
