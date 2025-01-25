import styled from "styled-components";
import {FooterText} from "../../components/FooterText.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Icon} from "../../components/icon/Icon.tsx";
import {MenuFooter} from "../../components/menu/MenuFooter.tsx";
import {Container} from "../../components/Container.tsx";
import {Theme} from "../../styles/Theme.tsx";
import {animateScroll as scroll} from "react-scroll/modules";

const footerItems = [
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

export const Footer = () => {
    return (
        <StyledFooter>
            <StyledContainer>
                <TopFooter justify={'space-between'} align={'center'}>
                    <StyledLogo onClick={() => {scroll.scrollTo(0, 0)}}>
                    <Icon height={'180px'} width={'100px'} viewBox={"0 0 97 59"} iconId={'logoFooter'}/>
                    </StyledLogo>
                    <FooterContent>
                        <FooterText>+91 12345 09876</FooterText>
                        <FooterText>info@example.com</FooterText>
                        <SocialList>
                            <SocialItem>
                                <SocialLink>
                                    <Icon height={"30px"} width={"30px"} viewBox={"0 0 30 30"} iconId={'footerCat'}/>
                                </SocialLink>
                            </SocialItem>
                            <SocialItem>
                                <SocialLink>
                                    <Icon height={"30px"} width={"30px"} viewBox={"0 0 31 31"}
                                          iconId={'footerTwitter'}/>
                                </SocialLink>
                            </SocialItem>
                            <SocialItem>
                                <SocialLink>
                                    <Icon height={"30px"} width={"30px"} viewBox={"0 0 30 30"} iconId={'footerIn'}/>
                                </SocialLink>
                            </SocialItem>
                        </SocialList>
                    </FooterContent>
                </TopFooter>
                <BottomFutter justify={'space-between'} align={'center'}>
                    <MenuFooter menuItems={footerItems}/>
                    <Copyright>Designed and built
                        by <span>Pavan MG with Love & Coffee</span></Copyright>
                </BottomFutter>
            </StyledContainer>
        </StyledFooter>
    );
};
const TopFooter = styled(FlexWrapper)`
    margin-bottom: 60px;
    @media ${Theme.media.tablet} {
        flex-direction: column;
        margin-bottom: 0;
    }
`
const FooterContent = styled(FlexWrapper)`
    display: flex;
    justify-content: space-between;
    gap: 50px;

    ${FooterText} {
        font-family: "DS Sans", sans-serif;
        font-size: 18px;
        color: ${Theme.colors.fontTitle};
        font-weight: 400;
    }

    @media ${Theme.media.tablet} {
        flex-direction: column;
        gap: 50px;
    }

`
const StyledContainer = styled(Container)`
    position: relative;


    &::before {
        content: "";
        position: absolute;
        border: 1px solid ${Theme.colors.fontSubtitle};
        display: inline-block;
        left: 0;
        right: 0;
        top: 60%;
    }
    @media ${Theme.media.tablet} {
        &::before {
            content: "";
            position: absolute;
            border: 1px solid ${Theme.colors.fontSubtitle};
            display: inline-block;
            left: 0;
            right: 0;
            top: 0;
        }
    }
`

const StyledFooter = styled.footer`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 60px 0;

`
const SocialList = styled.ul`
    display: flex;
    list-style-type: none;
`
const SocialItem = styled.li`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
`
const SocialLink = styled.a`
    margin-left: 20px;
`

const Copyright = styled.small`
    margin-left: 40px;
    box-sizing: border-box;
    color: ${Theme.colors.fontSubtitle};
    font-size: 18px;
    font-weight: 400;

    span {
        background: ${Theme.colors.accentColor};
        -webkit-background-clip: text;
    }


`
const BottomFutter = styled(FlexWrapper)`
    @media ${Theme.media.tablet} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 40px;
    }
`
const StyledLogo = styled.a`

    &:hover{
        cursor: pointer;
        transform: translateY(-5px);
        transition: transform 0.3s ease;
    }
`
