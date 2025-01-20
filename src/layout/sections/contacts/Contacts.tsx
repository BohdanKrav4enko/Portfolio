import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Container} from "../../../components/Container.tsx";
import {Theme} from "../../../styles/Theme.tsx";
import {font} from "../../../styles/Common.tsx";
// import {StyledButton} from "../../../components/Button.tsx";

export const Contact = () => {
    return (
        <Container>
            <StyledContact>
                {/*<SectionTitle>Contact</SectionTitle>*/}
                {/*<StyledForm>*/}
                {/*    <Field placeholder={"Name"}/>*/}
                {/*    <Field placeholder={"Email"}/>*/}
                {/*    <Field placeholder={"Message"} as={"textarea"}/>*/}
                {/*    <StyledButton type={"submit"}>Send Message</StyledButton>*/}
                {/*</StyledForm>*/}
                <StyledSectionTitle>For any questions please mail me:</StyledSectionTitle>
                <StyledEmail>hi@pavanmg.in</StyledEmail>
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
// const StyledForm = styled.form`
//     max-width: 500px;
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     gap: 5px;
//     margin: 0 auto;
//     margin-bottom: 10vh;
// `
// const Field = styled.input`
//
// `

const StyledEmail = styled.h2`
    background: ${Theme.colors.accentColor};
    -webkit-background-clip: text;
    ${font({family: 'DM Sans', weight: 700, Fmax: 58, Fmin: 36, color: 'transparent'})}
`
const StyledSectionTitle = styled(SectionTitle)`
    color: ${Theme.colors.fontContact};
    ${font({family: 'DM Sans', weight: 700, Fmax: 58, Fmin: 36, color: Theme.colors.fontContact})}
`
