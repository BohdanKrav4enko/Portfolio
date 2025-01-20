import photo from '../../../assets/images/50353683 1.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {Theme} from "../../../styles/Theme.tsx";
import {font} from "../../../styles/Common.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <StyledFlexWrapper align="start" justify="space-between" wrap={'wrap'}>
                    <BlockTextStyle>
                        <SmallText>Hi 👋, </SmallText>
                        <SmallText>My name is</SmallText>
                        <MainTitle>Pavan</MainTitle>
                        <SmallText>I build things for web</SmallText>
                    </BlockTextStyle>
                    <PhotoWrapper>
                        <Photo src={photo} alt='My photo'/>
                    </PhotoWrapper>
                </StyledFlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledFlexWrapper = styled(FlexWrapper)`
    @media ${Theme.media.tablet} {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
    @media ${Theme.media.mobile} {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
`

const Photo = styled.img`
    width: 350px;
    height: 350px;
    object-fit: cover;
    
    @media ${Theme.media.mobile} {
        width: 310px;
        height: 310px;
    }
`
const PhotoWrapper = styled.div`
    @media ${Theme.media.mobile} {
        margin-top: 15px;
    }
    @media ${Theme.media.tablet} {
        margin-top: 20px;
    }
`


const StyledMain = styled.div`
    display: flex;
    align-items: center;
    min-height: 100vh;
`

const BlockTextStyle = styled.div`
    @media ${Theme.media.mobile} {
        margin-top: 20vh;
    },
`

const MainTitle = styled.h2`
    background: ${Theme.colors.accentColor};
    -webkit-background-clip: text;
    ${font({weight: 700, Fmax: 58, Fmin: 36, color: 'transparent'})}

`
const SmallText = styled.h2`
    ${font({lineHeight: 1.6, weight: 700, Fmax: 58, Fmin: 36, color: Theme.colors.fontTitle})}
    line-height: 1.6;

`

