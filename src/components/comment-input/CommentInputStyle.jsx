import styled from 'styled-components'

export const CommentInputWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-top: 16px;

    img {
        min-width: 39px;
        height: 39px;
        object-fit: cover;
        border-radius: 100%;
        margin-right: 14px;
    }

    div {
        display: flex;
        align-items: center;

        height: 39px;
        background-color: #252525;
        border-radius: 8px;
        padding: 0 15px;
        width: 100%;
    }

    input {
        background-color: #252525;
        width: 100%;
        outline: none;
        border: none;
        height: 100%;  
        font-style: italic;
        font-weight: 400;
        font-size: 14px; 
        color: #575757;
    }
`