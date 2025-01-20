import styled from "styled-components";
import {Theme} from "../styles/Theme.tsx";
import {font} from "../styles/Common.tsx";

export const SectionTitle = styled.h2`
    ${font({Fmin: 36, Fmax: 48, color: Theme.colors.fontTitle, weight: 700, lineHeight: 1.1})}
    text-align: center;
    margin: 0 0 50px;
    `