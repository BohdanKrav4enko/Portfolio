import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import {animateScroll as scroll}  from "react-scroll";

export const Logo = () => {
    return (
        <StyledLogo onClick={() => {scroll.scrollTo(0, 0)}}>
            <Icon viewBox={"0 0 97 59"} height={"59px"} width={"97px"} iconId={'logo'}/>
        </StyledLogo>
    );
};

const StyledLogo = styled.a`

    &:hover{
        cursor: pointer;
        transform: translateY(-5px);
        transition: transform 0.3s ease;
    }
`