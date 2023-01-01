import styled from "styled-components";

const Button = styled.button`
    background: ${(props) => (props.inverted ? 'limegreen' : 'white')};  
    color: ${(props) => (props.inverted ? 'white' : 'limegreen')};;
    border: 2px solid limegreen;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;

    &:hover {
        background: blue;
        opacity: 0.9;
    }
`;//css en javascript

export default Button;