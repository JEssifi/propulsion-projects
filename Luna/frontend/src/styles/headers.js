import styled from "styled-components";

export const PageHeading = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12%;
  width: 40%;
  color: #4a4a4a;
  border-bottom: solid 3px ${props => props.theme.mainColor};
  font-weight: bold;
`;