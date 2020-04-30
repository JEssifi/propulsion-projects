import styled from 'styled-components';

export const MainButton = styled.button`
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.mainColor};
  cursor: pointer;
  font-size: 24px;
  border: solid 3px ${props => props.theme.mainColor};
  color: ${props => props.theme.thirdColor};
  
    outline: none;
  
  @media screen and (max-width: 1060px) {
           width: 20%;
           font-size:14px;
}
  
`;

export const MenuButton = styled.a`
  height: 92%;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${props => props.theme.thirdColor};
  text-decoration: none;
  font-weight: bold;
  font-size:19px;
  
  @media screen and (max-width: 1200px) {
           font-size:16px;
}
  
   @media screen and (max-width: 1060px) {
           font-size:14px;
}
  
`;

