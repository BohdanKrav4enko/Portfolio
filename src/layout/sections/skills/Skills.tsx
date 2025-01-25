import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {Skill} from "./skill/Skill.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {SectionText} from "../../../components/SectionText.tsx";
import {Container} from "../../../components/Container.tsx";
import {Fade} from "react-awesome-reveal";


export const Skills = () => {
    return (
        <StyledSkills id={'skill'}>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionText> Technologies I’ve been working with recently</SectionText>
                <Fade cascade={true}>
                    <StyledFlexWrapper wrap={"wrap"} align='center' justify={'space-around'}>
                        <Skill iconId={"html"}/>
                        <Skill iconId={"css"}/>
                        <Skill iconId={"js"}/>
                        <Skill iconId={"react"}/>
                        <Skill iconId={"vector"}/>
                        <Skill iconId={"bootStrap"}/>
                        <Skill iconId={"tailwind"}/>
                        <Skill iconId={"sass"}/>
                        <Skill iconId={"git"}/>
                        <Skill iconId={"greensock"}/>
                        <Skill iconId={"vsCode"}/>
                        <Skill iconId={"gitHab"}/>
                    </StyledFlexWrapper>
                    </Fade>
            </Container>
        </StyledSkills>
);
};

const StyledFlexWrapper = styled(FlexWrapper)`
gap: 100px;
@media screen and (min-width: 930px) and (max-width: 1129px) {
    gap: 100
    px;
    padding: 0
    100
    px;
}

`
const StyledSkills = styled.section`
position: relative;
`


