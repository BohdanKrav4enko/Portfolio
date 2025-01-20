import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string;

}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon viewBox={"0 0 125 125"} iconId={props.iconId} width={"100px"} height={"100px"}/>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
`

