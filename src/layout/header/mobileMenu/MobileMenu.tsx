import styled, {css} from "styled-components";
import {Theme} from "../../../styles/Theme.tsx";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuWrapper isOpen={false}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <Link href="">{item}</Link>
                        </ListItem>
                    })}
                </ul>
            </MobileMenuWrapper>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
        display: none;
    @media ${Theme.media.tablet} {
        display: block;
    }
    @media ${Theme.media.mobile} {
        display: block;
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
const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 101;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${Theme.colors.fontProject};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${Theme.colors.fontProject};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                background-color: ${Theme.colors.primaryBg};
                transform: rotate(-45deg) translateY(0);
                width: 36px;
            `
            }
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${Theme.colors.fontProject};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                background-color: ${Theme.colors.primaryBg};
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `
            }
        }
`
const MobileMenuWrapper = styled.div<{ isOpen: boolean }>`
    position: fixed;
    background: rgba(32, 32, 32, 0.9);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${Theme.colors.primaryBg};
    `}
    ul {
        display: flex;
        gap: 30px;
        justify-content: end;
        flex-direction: column;
        align-items: center;
    }
`