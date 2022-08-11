import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
`;

const PresentationContainer = styled.div`
    height: 100%;
    width: 60%;
    background-color: #151515;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 11rem;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
    h1 {
        font-family: "Passion One";
        font-size: 106px;
    }
    h2 {
        font-family: "Oswald";
        font-size: 43px;
        line-height: 64px;
    }
    h1, h2 {
        color: #FFFFFF;
        font-weight: 700;
    }
`;

const SignupContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 48%;
    width: 40%;
    input, button {
        width: calc(45% + 150px);
        height: 65px;
        background-color: #FFFFFF;
        border-radius: 6px;
        font-family: "Oswald";
        font-size: 27px;
        color: #9F9F9F;
        padding-left: 15px;
        opacity: ${props => props.load ? 0.6 : 1};
    }
    button {
        background-color: #1877F2;
        border: none;
        padding-left: 0;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    a {
        color: #FFFFFF;
        font-size: 20px;
        opacity: ${props => props.load ? 0.6 : 1};
    }
`;


export { Container, PresentationContainer, SignupContainer};