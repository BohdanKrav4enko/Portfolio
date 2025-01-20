import styled from "styled-components";
import {Theme} from "../../styles/Theme.tsx";

export const MenuFooter = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenuFooter>
            <ul>

                {props.menuItems.map((item, index) => {
                    return <li key={index}>
                        <a href="">{item}</a>
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

    a {
        text-decoration: none;
        color: ${Theme.colors.fontTitle};
        font-size: 18px;
        font-family: "DM Sans", sans-serif;
        font-weight: 400;
    }
    li  {
        
    }
`