import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme.tsx";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    margin: 0;
    font-family: 'Poppins', sans-serif;
    color: ${Theme.colors.fontSubtitle};
    line-height: 1.2;
    min-height: 360px;
    min-width: 360px;
}
a {
    text-decoration: none;
}

a:visited {
    color: inherit;
}
ul {
    list-style: none;
}
button{
    background-color: unset;
    border: none;
}
section{
    padding: 100px 0;
}
`