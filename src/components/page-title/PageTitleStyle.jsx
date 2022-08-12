import styled from 'styled-components'

export const PageTitleWrapper = styled.div`
    display: flex;

    font-family: 'Oswald';
    font-weight: 700;
    font-size: 43px;
    color: #fff;
    margin-bottom: 43px;
    word-wrap: break-word;

    img {
        margin: 0 18px;
        width: 50px;
        height: 50px;
        border-radius: 26px;
        object-fit: cover;
        margin-bottom: -8px;
    }

    @media screen and (max-width: 611px) {
        margin-bottom: 20px;
        margin-left: 17px;
    }
`