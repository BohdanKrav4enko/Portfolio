import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Container} from "../../../components/Container.tsx";
import {Theme} from "../../../styles/Theme.tsx";
import {font} from "../../../styles/Common.tsx";
import  Typewriter  from  'typewriter-effect' ;


export const Contact = () => {
    return (
        <Container>
            <StyledContact id={'contact'}>
                <StyledSectionTitle>For any questions please mail me:</StyledSectionTitle>
                <StyledEmail>
                    <Typewriter
                    options={{
                        strings: ['hi@pavanmg.in'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                </StyledEmail>
            </StyledContact>
        </Container>
    );
};

const StyledContact = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-bottom: 200px;

    p {
        line-height: 1;
    }

    h2 {
        margin: 0;
    }
`

const StyledEmail = styled.h2`
    background: ${Theme.colors.accentColor};
    -webkit-background-clip: text;
    ${font({family: "DM Sans", weight: 700, Fmax: 58, Fmin: 36, color: 'transparent'})}
`
const StyledSectionTitle = styled(SectionTitle)`
    color: ${Theme.colors.fontContact};
    ${font({family: "DM Sans", weight: 700, Fmax: 58, Fmin: 36, color: Theme.colors.fontContact})}
`
