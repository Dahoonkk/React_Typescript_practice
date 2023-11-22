import React from "react";
import loadingLottie from "../assets/loadingLottie.json"
import { styled } from 'styled-components';
import Lottie from "lottie-react";

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;



export default function LoadingScreen() {
    return (
        <Wrapper className="bg-blue-300">
            <Lottie animationData={loadingLottie} />
        </Wrapper>
    )
}