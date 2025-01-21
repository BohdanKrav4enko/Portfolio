import styled from "styled-components";
import {Theme} from "../../../../styles/Theme.tsx";
import {font} from "../../../../styles/Common.tsx";


type workPropsType = {
    position: string;
    button: string;
    date: string;
    placeOfWork: string;
    location?: string;
}

export const Work = (props: workPropsType) => {
    return (
        <StyledWork>
            <TopCardItem>
                <TextPosition>{props.position}</TextPosition>
                <TextButton>{props.button}</TextButton>
            </TopCardItem>
            <BotCardItems>
                <BotCardText>{props.placeOfWork}</BotCardText>
                <BotCardText>{props.location}</BotCardText>
                <BotCardText>{props.date}</BotCardText>
            </BotCardItems>
            <hr/>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    hr {
        border-color: ${Theme.colors.aboutLine};
    }
`

const TopCardItem = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 15px;
`
const BotCardItems = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 15px;
    margin-top: 5px;
    margin-bottom: 25px;
`
const TextPosition = styled.p`
    ${font({color: Theme.colors.fontSubtitle, weight: 400, Fmax: 20, Fmin: 14,})}
    letter-spacing: 1px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

`
const TextButton = styled.p`
    ${font({weight: 600, Fmax: 9, Fmin: 8, color: Theme.colors.fontButton})}
    width: 84px;
    height: 24px;
    min-width: 84px;
    min-height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Theme.colors.buttonBg};
    border-radius: 15px;

`
const BotCardText = styled.p`
    ${font({color: Theme.colors.fontProjectText, weight: 500, lineHeight: 1.8, Fmax: 12, Fmin: 9})}
    letter-spacing: 1px;
    flex: 1;

    &:first-child {
        white-space: nowrap;
    }

    &:nth-child(2) {
        @media ${Theme.media.mobile} {
            text-align: right;
        }
    }

    &:last-child {
        display: flex;
        justify-content: flex-end;
        white-space: nowrap;
    }

`
