import styled from "styled-components";
import picture from '../../../assets/images/drawing.svg'
import {Work} from "./work/Work.tsx";
import {Container} from "../../../components/Container.tsx";
import {Theme} from "../../../styles/Theme.tsx";
import {font} from "../../../styles/Common.tsx";

const positionItem = ['Junior Web Developer', 'Web Development Intern', 'SEO / SEM Specialist']
const timeItem = ['Full Time', 'Internship', 'Internship']
const placeOfWorkItem = ['Dr. Rajkumar’s Learning App', 'IonPixelz Web Solutions', 'HAAPS']
const dateItem = ['Sep 2021 - Dec 2021', 'Sep 2021 - Dec 2021', 'Sep 2021 - Dec 2021']
const location = ['Bengaluru', 'Bengaluru', 'Bengaluru']
const educationItems = ['Bachelor in Electronics & Communication', 'Full Time', 'Bangalore Instutute of Technology', 'Aug 2015 - Dec 2020']


export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <AboutAllContainer>
                    <AboutContainer>
                        <AboutTitle>About Me</AboutTitle>
                        <AboutText>The Generator App is an online tool that helps you to export ready-made templates
                            ready to work as your future website. It helps you to combine slides, panels and other
                            components and export it as a set of static files: HTML/CSS/JS.</AboutText>
                        <AboutTitle>Work Experience</AboutTitle>
                        {positionItem.map((position, index) => (
                            <Work key={index}
                                  location={location[index]}
                                  position={position}
                                  time={timeItem[index]}
                                  date={dateItem[index]}
                                  place={placeOfWorkItem[index]}/>
                        ))}
                        <AboutTitle>Education</AboutTitle>
                        <Work position={educationItems[0]}
                              time={educationItems[1]}
                              place={educationItems[2]}
                              date={educationItems[3]}/>
                    </AboutContainer>
                    <Picture src={picture}/>
                </AboutAllContainer>
            </Container>
        </StyledAbout>
    );
};

const Picture = styled.img`
    max-height: 834px;
    max-width: 834px;
    width: auto;
    position: absolute;
    object-fit: contain;
    right: -300px;
    z-index: -1;
    @media (max-width: 1170px) {
        display: none;
    }
`

const StyledAbout = styled.section`
    overflow: hidden;
    position: relative;

${Container} {
    @media (max-width: 1170px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
`
const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;
`
const AboutAllContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 710px;
    
    
    @media ${Theme.media.tablet} {
        max-width: 100vh;
    }
`
const AboutTitle = styled.h3`
    ${font({color: Theme.colors.fontTitle, weight: 700, Fmax: 42, Fmin: 36})}
`
const AboutText = styled.h3`
    ${font({color: Theme.colors.fontSubtitle, lineHeight: 1.5, weight: 400, Fmax: 18, Fmin: 14})}
`