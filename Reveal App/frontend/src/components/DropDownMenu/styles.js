import styled from "styled-components";

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
`

export const Accordion = styled.button`
  background-color: ${props => props.theme.fifthColor};;
  color: ${props => props.theme.fourthColor};
  font-size: 24px;
  padding: 18px;
  display: flex;
  align-items: center;
  border: ${props => props.theme.fourthColor} 3px solid;
  margin-top: 1%;
  margin-bottom: 1%;
  border-radius: 5px;
  outline: none;
  transition: border 0.6s, color 0.6s, background-color 0.6s ease;
  
  :hover, .active {
    background-color: ${props => props.theme.fourthColor};
    color: ${props => props.theme.secondaryColor};
    border: ${props => props.theme.thirdColor} 3px solid;
  }
  
  .wrapper__icon{
    width: 50%;
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
  
  }
  
  .accordion__icon__cross{
  
  cursor: pointer;
    transition: transform 0.6s ease;
    margin-left: 5%;
    margin-right:5%;   
    
  
  }
  
  .accordion__icon{
  
  cursor: pointer;
    transition: transform 0.6s ease;
    margin-left: 5%;
    margin-right:5%;
    
   
  }
  
  .accordion__icon__rotate {
  
  cursor: pointer;
    transition: transform 0.6s ease;
    transform: rotate(90deg);
    margin-left: 5%;
    margin-right:5%;
  }
`

export const AccordionTitle = styled.p`

  cursor: pointer;
font-weight: bold ;

`

export const AccordionContent = styled.div`
  background-color: ${props => props.theme.secondaryColor};
  overflow: hidden;
  transition: max-height 0.6s ease;

`

export const AccordionText = styled.div`
  font-size: 20px;
  color: ${props => props.theme.mainColor};
  padding: 2%;
  
  p{
    margin-left: 5%;
  }
`

