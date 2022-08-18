import styled from 'styled-components'

export const TimelineWrapper = styled.div`
    width: 611px;

    > h1 {
        font-size: 25px;
        color: #fff;
    }

    @media screen and (max-width: 611px) {
        width: 100%;
    }
`

export const Button = styled.button`
    border: none;
    width: 611px;
    height: 61px;
    background-color: #1877F2;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 16px;
    margin-bottom: 20px;
    p {
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
    }
    svg {
        margin-left: 15px;
    }
`;