import styled from "styled-components";
import {Theme} from "../../../styles/Theme.tsx";
import {Link} from "react-scroll";

export const HeaderMenu = (props: { menuItems: Array<{ title: string, href: string }> }) => {
    return (
        <StyledHeaderMenu>
            <ul>

                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <LinkNav activeClass="active"
                                 spy={true}
                                 smooth={true}
                                 to={item.href}
                                 offset={-240}
                        >{item.title}
                        </LinkNav>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    @media ${Theme.media.tablet} {
        display: none;
    }
    @media ${Theme.media.mobile} {
        display: none;
    }

    ul {
        display: flex;
        gap: 30px;
        justify-content: end;
    }
`
const ListItem = styled.li`

`
const LinkNav = styled(Link)`
    font-family: 'DM Sans', sans-serif;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
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
    }
`;
