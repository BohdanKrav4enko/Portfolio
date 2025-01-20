import styled from "styled-components";
import {Theme} from "../../../styles/Theme.tsx";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>

                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
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
const Link = styled.a`
    font-family: 'DM Sans', sans-serif;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
`