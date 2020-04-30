// Design for Restaurant, Review and User Cards
import styled from "styled-components";
import {BestRatedRestaurantTitle} from "./buttons";

//Restaurant Cards
export const RestaurantCard = styled.div`
    border-top: 5px solid ${props => props.theme.mainColor};  
    border-left: 1px solid #ebebeb;
    border-right: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    margin-top: 20%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    height:330px;
    width:300px;
`

export const RestaurantNameContainer = styled(RestaurantCard)`
    border-top: none;
    border-left: none;
    border-bottom: none;
    display:flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    background-color: #ffffff;
    
`

export const StarsRatingContainer = styled(RestaurantCard)`
    border-top: none;
    
    border-right: none;
    border-left: none;
    display:flex;
    align-items: center;
    justify-content: space-between;
    flex-direction:row;
    height: 11%;
    width: 100%;
`

export const BottomPhotoContainer = styled.div`
    
    height: 67%;
    width: 100%;
    border-top: none;
    display:flex;
    img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    }
`

export const RestaurantTitle = styled(BestRatedRestaurantTitle)`
    border-bottom: none;
    font-weight: normal;
    font-size:20px;
    margin-left: 1%;
    
  cursor: unset;
  
  :hover {
    border-bottom: unset;
    font-weight: unset;
  }
`

export const AddressTitle = styled(RestaurantTitle)`
    font-size:18px;
`

export const RatingTitle = styled(RestaurantTitle)`
    margin-right: 5%;
`

export const StarRating = styled.img`

  width: 27px;
  height: 24.4px;
`

