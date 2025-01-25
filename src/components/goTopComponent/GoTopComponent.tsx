import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {animateScroll as scroll} from "react-scroll";
import {useEffect, useState} from "react";


export const GoTopComponent = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])

    return (
        <>
            {showBtn && (
                <StyledGoTopComponent onClick={scroll.scrollToTop}>
                    <Icon iconId={"goToBtn"} height={'16px'} width={'16px'} viewBox={"0 0 16 16"}/>
                </StyledGoTopComponent>)}
        </>
    );
};

const StyledGoTopComponent = styled.button`
    background-color: rgba(128, 128, 128, 0.19);
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    cursor: pointer;
`