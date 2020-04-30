import React, {useMemo, useState} from "react";
import {Accordion, AccordionContent, AccordionSection, AccordionText, AccordionTitle} from "../../DropDownMenu/styles";
import {IndividualTagContainer} from "../../Tag/TagSelector/styles";
import {useSelector} from "react-redux";
import {getCurrentReview} from "../../../store/reducers/HighlightReducer";

const ReviewScore = props => {

    const currentReviewMemo = useMemo(() =>{

        if (props.storedReviews){
            console.log(props.storedReviews, 'STORED REVIEWS')

            return(<AccordionSection style={{cursor: 'auto'}} className="accordion__section">

                <Accordion className="accordion"><div style={{ cursor: 'auto',width: 'auto',height: 'auto', marginTop: '1%',marginRight: '5%'}}>
                    <div style={{cursor: 'auto',padding: '5px',height: 'auto',borderRadius: '50px', backgroundColor: `${props.storedReviews.id_tag.color}`, cursor:"pointer", display: 'inline-block',}} >
                        <div style={{cursor: 'auto',width: '36px', height: '14px', backgroundColor: `${props.storedReviews.id_tag.color}` ,borderRadius: '50px'}} />
                    </div>
                </div><AccordionTitle style={{cursor: 'auto'}}>{`${props.storedReviews.id_tag.title}`}</AccordionTitle>

                </Accordion>
                <AccordionContent>
                    <AccordionText className="accordion__text">
                        <IndividualTagContainer style={{display: 'flex', flexDirection: 'column',alignItems: 'flex-start',  padding: '5%', height: '100%'}}>
                            <div style={{display:'flex', width: '100%', height: '50%'}} >
                            <p style={{textAlign: 'left', fontWeight: 'bold', fontSize: '25px', cursor: 'auto'}}>{props.storedReviews.selection}</p>

                            </div>
                            <div style={{width: '100%', height: '50%'}} >
                            <p style={{cursor: 'auto',textAlign: 'left', marginTop: '10%', fontSize: '22px' }}>{`${props.storedReviews.score*100}%`}</p>
                            </div>
                            <div style={{marginTop: '10%'  ,backgroundColor: '#000000', width:'100%', height: '50px', borderRadius:'20px', boxShadow: '0px 0px 5px 2px #3d6af2'}}>
                                <div style={{backgroundColor: '#3d6af2', animation: 'width: 1.2 ease-in ', width:`${props.storedReviews.score*100}%`, height: '50px', borderRadius: '20px'}}></div>
                            </div>

                        </IndividualTagContainer>
                    </AccordionText>

                </AccordionContent>

            </AccordionSection>)
        } else {
            return (<></>)
        }




    }, [ props.storedReviews ]
)


    return( <>{currentReviewMemo}</>
    )

};

export default ReviewScore;