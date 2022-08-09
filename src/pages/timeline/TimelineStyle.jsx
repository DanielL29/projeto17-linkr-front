import styled from 'styled-components'

export const TimelineWrapper = styled.div`
    margin: 0 auto;
    width: 611px;
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
`

export const PostCardWrapper = styled.div`
    display: flex;

    height: 276px;
    background-color: #171717;
    border-radius: 16px;
    padding: 18px;

    img {
        min-width: 50px;
        height: 50px;
        border-radius: 26px;
        margin-right: 18px;
        object-fit: cover;
    }

    div {
        display: flex;
        flex-direction: column;
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
`