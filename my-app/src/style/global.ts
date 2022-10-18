import { text } from 'stream/consumers';
import reset from 'styled-components';
import {createGlobalStyle} from 'styled-components';

import {colorStack} from './colorStack';

export const GlobalStyle = createGlobalStyle`
${reset}
html{
    font-sie:16px;
}

body {
    background: #060604;
    overflow:hidden;
    height:100vh;
    font-family: 'Roboto',sans-serif ;
}

a, p {
    color: ${colorStack.white};
    font-size: 1rem;
    text-decoration: none;
}`