import styled from 'styled-components';

import { center } from '../tools/center';

const Card = styled.article`
    background-color: var(--card-backcolor);
    color: var(--card-textcolor);
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    padding-top: 58px;
    padding-bottom: 40px; 
    width: 370px;
    margin-bottom: var(--spacing-big);
    ${ center };
`;

export default Card;