import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        font-family: Karla, Helvetica, Arial, sans-serif;
        font-size: 20px;
        text-align: center;
        
    ::-webkit-scrollbar {
        width: 0px;
        background: transparent; 
    }
    
  @media screen and (max-width: 1060px) {
            div,img,button,form,p{ width:67%; height: 67%;}
            button { width:50%; font-size: 10px;}
}

`;

export const light =  {
    name: 'light',
    mainColor: "#3d6af2",
    secondaryColor: "#FFFFFF",
    thirdColor: "#000000",
    fourthColor: "#3d6af2",
    fifthColor: "#FFFFFF",
    sixthColor: "#c4c4c4",
    backgroundColor: "#ffffff",
};

export const dark = {
    name: 'dark',
    mainColor: "#0E0D26",
    secondaryColor: "#401B3A",
    thirdColor: "#F2A03D",
    fourthColor: "#8C6185",
    fifthColor: "#3f3f3f",
    sixthColor: "#c4c4c4",
    backgroundColor: "#252525",
};



