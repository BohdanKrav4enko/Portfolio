import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {SectionText} from "../../../components/SectionText.tsx";
// import {Menu} from "../../../components/menu/Menu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";
import projectImage1 from '../../../assets/images/Rectangle 6.svg'
import projectImage2 from '../../../assets/images/Rectangle 14.svg'
import projectImage3 from '../../../assets/images/Rectangle 8.svg'
import projectImage4 from '../../../assets/images/Rectangle 4.svg'
import projectImage5 from '../../../assets/images/Rectangle 12.svg'
import projectImage6 from '../../../assets/images/Rectangle 13.svg'
import {Container} from "../../../components/Container.tsx";

// const projectItems = ['All', 'landing page', 'React', 'spa']

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionText>Things I’ve built so far</SectionText>
                {/*<Menu menuItems={projectItems}/>*/}
                <FlexWrapper wrap={"wrap"} align={'center'} justify={'space-around'}>
                    <Project iconId1={"linkChain"} iconId2={"gitHab"} title={'Project Tile goes here'}
                             image={projectImage4}
                             text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                             textTech={'Tech stack : HTML , JavaScript, SASS, React'}/>
                    <Project iconId1={"linkChain"} iconId2={"gitHab"} title={'Project Tile goes here'}
                             image={projectImage1}
                             text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                             textTech={'Tech stack : HTML , JavaScript, SASS, React'}/>
                    <Project iconId1={"linkChain"} iconId2={"gitHab"} title={'Project Tile goes here'}
                             image={projectImage3}
                             text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                             textTech={'Tech stack : HTML , JavaScript, SASS, React'}/>
                    <Project iconId1={"linkChain"} iconId2={"gitHab"} title={'Project Tile goes here'}
                             image={projectImage5}
                             text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                             textTech={'Tech stack : HTML , JavaScript, SASS, React'}/>
                    <Project iconId1={"linkChain"} iconId2={"gitHab"} title={'Project Tile goes here'}
                             image={projectImage6}
                             text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                             textTech={'Tech stack : HTML , JavaScript, SASS, React'}/>
                    <Project iconId1={"linkChain"} iconId2={"gitHab"} title={'Project Tile goes here'}
                             image={projectImage2}
                             text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                             textTech={'Tech stack : HTML , JavaScript, SASS, React'}/>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
   ${FlexWrapper} {
       gap: 30px;
   }
`
