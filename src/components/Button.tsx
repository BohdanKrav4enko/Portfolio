import styled from "styled-components";


export const StyledButton = styled.button`
    cursor: pointer;
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    height: 32px;
    width: 170px;
    text-transform: uppercase;
    transition: transform 0.2s ease;

    &:hover {
        color: #d1cbcb;
    }

    &:active {
        color: #9a8989;
        transform: scale(1.1);
    }
`