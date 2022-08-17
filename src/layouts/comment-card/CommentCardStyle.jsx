import styled from 'styled-components'

export const CommentCardWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 16px 0;
    border-bottom: 1px solid #353535;
    font-size: 14px;
    z-index: -1;

    > div > div {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
    }

    img {
        height: 39px;
        width: 39px;
        object-fit: cover;
        border-radius: 100%;
        margin-right: 18px;
    }

    h1 {
        font-weight: 700;
        color: #f3f3f3;
        margin-right: 5px;
        cursor: pointer;
    }

    span, h2 {
        font-weight: 400;
        color: #565656;
        margin-right: 5px;
    }

    p {
        font-weight: 400;
        color: #acacac;
    }

`