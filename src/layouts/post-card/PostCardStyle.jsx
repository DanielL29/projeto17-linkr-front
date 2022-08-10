import styled from 'styled-components'

export const PostCardWrapper = styled.div`
    display: flex;

    min-height: 276px;
    background-color: #171717;
    border-radius: 16px;
    padding: 18px;
    margin-bottom: 16px;

    img {
        min-width: 50px;
        height: 50px;
        border-radius: 26px;
        margin-right: 18px;
        object-fit: cover;
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
    }

    h1 {
        font-weight: 400;
        font-size: 19px;
        color: #fff;
        margin-bottom: 10px;
    }

    p {
        font-weight: 400;
        font-size: 17px;
        color: #B7B7B7;
        margin-bottom: 10px;
    }

    @media screen and (max-width: 611px) {
        border-radius: 0;
        min-height: 232px;
    }
`

export const UrlMetadataWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    height: 155px;
    border: 1px solid #4D4D4D;
    border-radius: 11px;
    cursor: pointer;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding: 20px;
        height: 100%;
        width: 70%;
    }

    h2 {
        font-weight: 400;
        font-size: 16px;
        color: #CECECE;
        margin-bottom: 5px;
    }

    h3 {
        font-weight: 400;
        font-size: 11px;
        color: #9B9595;
        margin-bottom: 13px;
    }

    h4 {
        font-weight: 400;
        font-size: 11px;
        color: #CECECE;
        margin-bottom: 23px;
    }

    h4:hover {
        text-decoration: underline;
    }

    img {
        width: 153px;
        height: 100%;
        border-radius: 0px 12px 12px 0px;
        margin-right: 0;
    }

    @media screen and (max-width: 611px) {
        min-height: 115px;

        img {
            width: 30%;
        }
    }
`