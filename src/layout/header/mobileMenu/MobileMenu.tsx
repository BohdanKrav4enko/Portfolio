import styled, {css} from "styled-components";
import {Theme} from "../../../styles/Theme.tsx";
import {useState} from "react";
import {Link} from "react-scroll";

export const MobileMenu = (props: { menuItems: Array<{title: string, href: string}> }) => {

    const [menuIsOpne, setMenuIsOpen] = useState(false);

    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpne);
    }

    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={menuIsOpne} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerButton>
            <MobileMenuWrapper isOpen={menuIsOpne} onClick={onBurgerBtnClick}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <LinkNav onClick={onBurgerBtnClick}
                                     activeClass="active"
                                     spy={true}
                                     smooth={true}
                                     to={item.href}
                                     offset={-240}>{item.title}</LinkNav>
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
const LinkNav = styled(Link)`
    font-family: 'DM Sans', sans-serif;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    display: inline-block;
    position: relative;

    &:hover, &.active {
        transform: translateY(-5px);
        transition: transform 0.3s ease;
        color: #ece5e5;

        &:after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 100%;
            height: 1px;
            background: #ece5e5;
            transform: scaleX(1);
            transform-origin: center;
            transition: transform 0.3s ease;
        }
    }

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
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(-100%);
    transition: transform 1s ease;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0);
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