import styled from "styled-components";
import picture from '../../../assets/images/drawing.svg'
import {Work} from "./work/Work.tsx";
import {Container} from "../../../components/Container.tsx";
import {Theme} from "../../../styles/Theme.tsx";
import {font} from "../../../styles/Common.tsx";

const positionItem = ['Junior Web Developer', 'Web Development Intern', 'SEO / SEM Specialist']
const buttonItem = ['Full Time', 'Internship', 'Internship']
const placeOfWorkItem = ['Dr. Rajkumar’s Learning App', 'IonPixelz Web Solutions', 'HAAPS']
const dateItem = ['Sep 2021 - Dec 2021', 'Sep 2021 - Dec 2021', 'Sep 2021 - Dec 2021']
const location = ['Bengaluru', 'Bengaluru', 'Bengaluru']
const educationItems = ['Bachelor in Electronics & Communication', 'Full Time', 'Bangalore Instutute of Technology', 'Aug 2015 - Dec 2020']


export const AboutMe = () => {
    return (
        <StyledAbout id={'aboutMe'}>
            <Container>
                <AboutMeAllContainer>
                    <AboutMeContainer>
                        <AboutMeTitle>About Me</AboutMeTitle>
                        <AboutMeText>The Generator App is an online tool that helps you to export ready-made templates
                            ready to work as your future website. It helps you to combine slides, panels and other
                            components and export it as a set of static files: HTML/CSS/JS.</AboutMeText>
                        <AboutMeTitle>Work Experience</AboutMeTitle>
                        {positionItem.map((position, index) => (
                            <Work key={index}
                                  location={location[index]}
                                  position={position}
                                  button={buttonItem[index]}
                                  date={dateItem[index]}
                                  placeOfWork={placeOfWorkItem[index]}/>
                        ))}
                        <AboutMeTitle>Education</AboutMeTitle>
                        <Work position={educationItems[0]}
                              button={educationItems[1]}
                              placeOfWork={educationItems[2]}
                              date={educationItems[3]}/>
                    </AboutMeContainer>
                    <Picture src={picture}/>
                </AboutMeAllContainer>
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
const AboutMeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;
`
const AboutMeAllContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 710px;
    max-height: 815px;
    
    
    @media ${Theme.media.tablet} {
        max-width: 100vh;
    }
`
const AboutMeTitle = styled.h3`
    ${font({color: Theme.colors.fontTitle, weight: 700, Fmax: 42, Fmin: 36})}
`
const AboutMeText = styled.h3`
    ${font({color: Theme.colors.fontSubtitle, lineHeight: 1.5, weight: 400, Fmax: 18, Fmin: 14})}
`