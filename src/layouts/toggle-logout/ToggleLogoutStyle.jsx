import styled from 'styled-components'

export const ToggleLogoutWrapper = styled.div`
    .logout {
        display: ${({ toggle }) => toggle ? 'flex' : 'none'};
        align-items: center;
        justify-content: center;

        font-weight: 700;
        font-size: 17px;
        width: 150px;
        height: 47px;
        background-color: #171717;
        border-bottom-left-radius: 20px;
        position: absolute;
        right: 0;
        top: 72px;
        cursor: pointer;
        z-index: 1;
    }

    img {
        width: 53px;
        height: 53px;
        border-radius: 26px;
        object-fit: cover;
    }

    @media screen and (max-width: 611px) {
        img {
            width: 44px;
            height: 44px;
        }
    }
`