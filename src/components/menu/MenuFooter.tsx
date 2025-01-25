import styled from "styled-components";
import {Theme} from "../../styles/Theme.tsx";
import {Link} from "react-scroll";

export const MenuFooter = (props: { menuItems: Array<{ title: string, href: string }> }) => {
    return (
        <StyledMenuFooter>
            <ul>

                {props.menuItems.map((item, index) => {
                    return <li key={index}>
                        <StyledNavLink activeClass="active"
                                       spy={true}
                                       smooth={true}
                                       to={item.href}
                                       offset={-240}
                        >{item.title}</StyledNavLink>
                    </li>
                })}
            </ul>
        </StyledMenuFooter>
    );
};

const StyledMenuFooter = styled.nav`
    ul {
        display: flex;
        gap: 50px;
        list-style-type: none;
        @media ${Theme.media.tablet} {
            display: none;
        }
    }
`
const StyledNavLink = styled(Link)`
    text-decoration: none;
    color: ${Theme.colors.fontTitle};
    font-size: 18px;
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    cursor: pointer;
    display: inline-block;
    position: relative;

    &:hover, &.active {
        transform: translateY(-5px);
        transition: transform 0.3s ease;
        color: black;

        &:after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 100%;
            height: 1px;
            background: #000;
            transform: scaleX(1);
            transform-origin: center;
            transition: transform 0.3s ease;
        }

`