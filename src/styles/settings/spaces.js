import { createGlobalStyle } from 'styled-components';

const GlobalSpaces = createGlobalStyle`
    :root {
        --spacing-small: 10px;
        --spacing-medium: 20px;
        --spacing-big: 40px;
    }
`;

export default GlobalSpaces;