import {css} from "styled-components";

// instead of writing the whole @media query we will only use 
// ${mobile} nad pass props inside of it that will be read as CSS 
// for responsiveness.
export const mobile = (props) => {
    return css`
    @media only screen and (max-width: 768px) {
        ${props}
    }`;
};