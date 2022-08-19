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

    @media screen and (max-width: 611px) {
        width: 100%;
    }
`

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