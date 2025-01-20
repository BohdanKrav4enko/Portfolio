import styled from "styled-components";
import {Theme} from "../../styles/Theme.tsx";

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>

                {props.menuItems.map((item, index) => {
                    return <li key={index}>
                        <a href="">{item}</a>
                    </li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        list-style-type: none;
        justify-content: end;
    }

    a {
        text-decoration: none;
        color: ${Theme.colors.fontSubtitle};
        font-size: 20px;
    }
`
