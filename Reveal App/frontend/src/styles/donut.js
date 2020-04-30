import styled from "styled-components";

export const DonutSpinner = styled.div`
  display: inline-block;
  border: 10px solid ${props => props.theme.mainColor};
  border-left-color: ${props => props.theme.thirdColor};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: donut-spin 1.2s linear infinite;
  margin-top: 20%;

  @keyframes donut-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`
