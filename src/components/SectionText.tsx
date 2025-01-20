import styled from "styled-components";
import {Theme} from "../styles/Theme.tsx";
import {font} from "../styles/Common.tsx";

export const SectionText = styled.p`
    ${font({color: Theme.colors.fontSubtitle, Fmin: 24, Fmax: 32, lineHeight: 1.25, weight: 400})}
    text-align: center;
    margin: 0 0 124px;
`