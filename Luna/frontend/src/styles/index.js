import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 20px;
        text-align: center;
    }
`;

export const theme = {
  borderRadius: "6px",
  mainColor: "#e47d31",
  secondaryColor: "#4c4c4c",
  thirdColor: "rgba(145, 145, 145, 0.6)",
  fourthColor: "white",
  background: "#f8f8f8",
};