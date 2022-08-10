import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    margin: 0 auto;
    margin-top: 155px;
    width: 937px;

    @media screen and (max-width: 611px) {
        margin-top: 97px;
    }
`

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

export const TrendingWrapper = styled.div`
    width: 301px;

    > div {
        width: 301px;
        height: 406px;
        background-color: #171717;
        border-radius: 16px;
        margin-top: 85px;
        padding: 16px 0;
    
        position: fixed;
    }

    h1 {
        font-weight: 700;
        font-size: 27px;
        color: #FFFFFF;
        margin-bottom: 18px;
        font-family: 'Oswald';
    }

    .line {
        background-color: #484848;
        height: 1px;
    }

    .hashtags {
        margin-top: 22px;
    }

    p {
        font-weight: 700;
        font-size: 19px;
        color: #fff;
        margin-bottom: 15px;
        cursor: pointer;
    }

    p:hover {
        text-decoration: underline;
    }

    h1, p {
        margin-left: 16px;
    }
`

export const PublishCardWrapper = styled.div`
    display: flex;

    height: 209px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    background-color: #fff;
    padding: 18px;
    margin-bottom: 30px;

    img {
        min-width: 50px;
        height: 50px;
        border-radius: 26px;
        margin-right: 18px;
        object-fit: cover;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    h1 {
        font-weight: 300;
        font-size: 20px;    
        color: #707070;
        margin-bottom: 15px;
    }

    input, textarea {
        background: #EFEFEF;
        border-radius: 5px;
        outline: none;
        border: none;
        padding: 0 13px;
        color: #949494;
        font-weight: 300;
        font-size: 15px;
        margin-bottom: 5px;
    }

    input {
        height: 30px;
    }

    textarea {
        height: 66px;
        resize: none;
        padding-top: 8px;
    }

    button {
        align-self: flex-end;
        outline: none;
        border: none;
        cursor: pointer;
        width: 112px;
        height: 31px;
        background-color: #1877F2;
        border-radius: 5px;
        font-weight: 700;
        font-size: 14px;
        color: #FFFFFF;
    }

    @media screen and (max-width: 611px) {
        border-radius: 0;
        width: 100%;
        display: flex;
        justify-content: center;

        img {
            display: none;
        }

        h1 {
            text-align: center;
        }
    }
`