import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Icon} from "../../components/icon/Icon.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";
import {Theme} from "../../styles/Theme.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";


const headerItems = [
    {
        title: 'Home',
        href: 'main'
    },
    {
        title: 'About Me',
        href: 'aboutMe'
    },
    {
        title: 'Tech Stack',
        href: 'skill'
    },
    {
        title: 'Projects',
        href: 'project'
    },
    {
        title: 'Contact',
        href: 'contact'
    }
]


export const Header = () => {

    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={'center'}>
                    <Logo/>
                    <HeaderItems>
                        <HeaderMenu menuItems={headerItems}/>
                        <MobileMenu menuItems={headerItems}/>
                        <SocialList>
                            <Icon height={"30px"} width={"30px"} viewBox={"0 0 30 30"} iconId={'catGithab'}/>
                            <Icon height={"30px"} width={"30px"} viewBox={"0 0 31 31"} iconId={'twitter'}/>
                            <Icon height={"30px"} width={"30px"} viewBox={"0 0 30 30"} iconId={'linkedin'}/>
                        </SocialList>
                    </HeaderItems>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${Theme.colors.headerColor};
    display: flex;
    justify-content: space-evenly;
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`
const SocialList = styled.nav`
    display: flex;
    gap: 20px;

    @media ${Theme.media.tablet} {
        display: none;
    }
    @media ${Theme.media.mobile} {
        display: none;
    }
`
const HeaderItems = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10vh;

`