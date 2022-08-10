import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const PresentationContainer = styled.div`
    height: 100%;
    width: 60%;
    background-color: #151515;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 11rem;
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
`;

export { Container ,PresentationContainer, SignupContainer };