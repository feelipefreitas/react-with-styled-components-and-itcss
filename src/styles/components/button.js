import styled from 'styled-components';

const Button = styled.a`
    display: inline-block;
    width: 120px;
    height: 35px;
    line-height: 35px;
    background-color: var(--buttom-backcolor);
    color:  var(--buttom-color);
    border-radius: var(--buttom-radious);
    text-transform: uppercase;
    cursor: pointer;
    transition: all 200ms linear;
    border: 1px solid var(--buttom-color);
    
    ${ props => 
        props.disable
        ?
        `
            color: #838383;
            background-color: #ccc;
        `
        :
        `
            &:hover {
                background-color: var(--buttom-color);
                color: #fff;
                border: 1px solid  var(--buttom-backcolor);
            }
        `
    }
`;

export default Button;