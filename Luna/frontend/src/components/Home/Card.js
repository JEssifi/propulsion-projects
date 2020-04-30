import React, { useState } from 'react';
import { RestaurantCard } from "../../styles/cards"
import restaurant_img from '../../assets/restaurant_pic.jpg'
import starEmpty from "../../assets/star-grey.svg";
import starHalf from "../../assets/rating.svg";
import starFull from "../../assets/star-yellow.svg";
import styled from "styled-components";

const Card = (props) => {

    const StarsRating = styled.div`
        width: auto;
        height: 22px;
        color: #4c4c4c;
        display: flex;
`;

    const Stars = styled.img`
        width: 27px;
        height: 24.4px;
`;

    var ratingStars = [false,false,false,false,false];
    ratingStars.fill(true,0,Math.floor(props.restaurant.avg_rating));

     return (
            <div>
                <RestaurantCard>
                    <div style={{'width':'100%','height':'100%','display':'flex','flexDirection':'column','justifyContent':'space-around','alignItems':'flex-start','paddingLeft':'18px','paddingRight':'18px'}}>
                    <p >{props.restaurant.name}</p>
                    <div style={{'width':'100%','display':'flex','justifyContent':'space-between'}}>
                        <StarsRating>
                            { ratingStars.map( (rating,index) =>  { return rating ?  <Stars src={starFull} key={index}/>:  props.restaurant.avg_rating>index && props.restaurant.avg_rating<index+1 ? <Stars src={starHalf} key={index}/> : <Stars src={starEmpty} key={index}/>} ) }
                        </StarsRating>
                        <p style={{'color':'grey'}}>{props.restaurant ? props.restaurant.num_ratings : null}</p>
                    </div>
                    {props.restaurant.street}
                    </div>
                    <img src={restaurant_img} height='200px' width='100%'/>
                </RestaurantCard>
            </div>
     )
}


export default Card;