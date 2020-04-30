import styled from "styled-components";


export const SearchBarUploadWrapper = styled.form`
  display: flex;
  align-items: center;
  height: 5%;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.mainColor};
  background-color: ${props => props.theme.secondaryColor};


  img {
    width: 5%;
    height: 80%;
  }

  input {
    text-align: left;
    height: 100%;
    width: 100%;
    @media screen and (max-width: 1060px) {
      width: 50%;
      font-size: 14px;
    }
  }
  input::placeholder {
    color: ${props => props.theme.mainColor};
    font-weight: bold;
    @media screen and (max-width: 1060px) {
      width: 70%;
      font-size: 14px;
    }
  }

  input[type="text"],
  textarea {
    border: none;
    outline: none;
    background-color: ${props => props.theme.secondaryColor};
    font-size: 24px;
    font-weight: bold;
    color: ${props => props.theme.mainColor};

    @media screen and (max-width: 1060px) {
      font-size: 14px;
    }
  }
`;