import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {Theme} from "../../../../styles/Theme.tsx";
import {StyledButton} from "../../../../components/Button.tsx";

type ProjectPropsType = {
    title: string,
    text: string,
    image: string,
    textTech: string,
    iconId1: string;
    iconId2: string;
}


export const Project = (props: ProjectPropsType) => {
    return (
        <ProjectStyle>
            <ImageWrapper>
                <Image src={props.image} alt={"Image Project"}/>
                <StyledButton>View Project</StyledButton>
            </ImageWrapper>
            <ProjectItem>
                <ProjectTitle>{props.title}</ProjectTitle>
                <ProjectText>{props.text}</ProjectText>
                <ProjectTechStack>{props.textTech}</ProjectTechStack>
                <ItemLinkBox>
                    <ItemLink>
                        <Icon width={'20px'} height={'20px'} viewBox={"0 0 20 20"}
                              iconId={props.iconId1}/>
                        <ProjectLink href={'#'}><span>Live Preview</span></ProjectLink>
                    </ItemLink>
                    <ItemLink>
                        <Icon width={'20px'} height={'20px'} viewBox={"0 0 90 90"}
                              iconId={props.iconId2}/>
                        <ProjectLink href={'#'}><span> View Code</span></ProjectLink>
                    </ItemLink>
                </ItemLinkBox>
            </ProjectItem>
        </ProjectStyle>
    );
};

const ProjectStyle = styled.article`
    background-color: ${Theme.colors.primaryBg};
    max-width: 375px;
    min-height: 570px;
    width: 330px;
    flex-grow: 1;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.3), 0px 6px 15px rgba(0, 0, 0, 0.2);
    margin-bottom: 60px;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 375px;
    max-height: 260px;
    object-fit: cover;
`
const ImageWrapper = styled.div`
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        cursor: pointer;
        opacity: 0;
    }

    &:hover {
        ${StyledButton} {
            opacity: 1;
        }

        &::before {
            opacity: 1;
        }
    }

    ${StyledButton} {
        position: absolute;
        top: 50%;
        left: 27%;
        opacity: 0;
    }

    @media ${Theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        ${StyledButton} {
            opacity: 1;
        }
    }
`
const ProjectTitle = styled.h2`
    margin-bottom: 20px;
    font-size: 28px;
    color: ${Theme.colors.fontProject};
    font-weight: 500;
    line-height: 1.5;
`
const ProjectText = styled.p`
    text-align: start;
    color: ${Theme.colors.fontSubtitle};
    font-size: 18px;
    font-weight: 300;
    line-height: 1.2;
`
const ProjectTechStack = styled.p`
    text-align: start;
    color: ${Theme.colors.fontTitle};
    font-size: 14px;
    font-weight: 200;
    line-height: 1.5;
    margin: 10px 0 20px 0;
`
const ProjectItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px;
`
const ProjectLink = styled.a`
    color: ${Theme.colors.fontProject};
    font-size: 16px;
    line-height: 1.5;
    text-decoration: underline;
    padding-left: 10px;
    font-weight: 400;
`

const ItemLinkBox = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    width: 100%;
`

const ItemLink = styled.div`
    display: flex;
    align-items: center;
    
`

