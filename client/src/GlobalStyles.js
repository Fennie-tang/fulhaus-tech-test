import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,*:before, *:after{
    box-sizing: border-box;
}

html, body{
    max-width: 100vw;
    max-height: 100vh;
}
`;
