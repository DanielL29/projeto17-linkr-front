import styled from 'styled-components'

export const TimelineWrapper = styled.div`
    width: 611px;

    > h1 {
        font-size: 25px;
        color: #fff;
    }

    .follow {
        display: flex;
        justify-content: space-between;
        width: 937px;
    }
    
    @media screen and (max-width: 937px) {
        .follow {
            width: 100%;
        }
    }

    ::-webkit-scrollbar {
        display: none;
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

export const FollowButton = styled.button`
    margin-top: 10px;
    width: 112px;
    height: 31px;
    outline: none;
    border: none;
    position: relative;
    cursor: pointer;
    border-radius: 5px;
    font-weight: 700;
    font-size: 14px;
    background-color: ${({ userFollow }) => userFollow ? '#fff' : '#1877F2'};
    color: ${({ userFollow }) => userFollow ? '#1877F2' : '#fff'};
    transition: all 200ms ease-in-out;

    :hover {
        transform: scale(1.05);
        font-size: 15px;
    }
`
