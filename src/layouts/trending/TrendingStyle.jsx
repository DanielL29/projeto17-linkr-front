import styled from 'styled-components'

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
        font-family: 'Oswald';
        margin-bottom: 20px;
    }

    .line {
        background-color: #484848;
        height: 1px;
    }

    .hashtags {
        margin-top: 15px;
        height: 308px;
        overflow-y: scroll;
    }

    .hashtags::-webkit-scrollbar {
        display: none;
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

    @media screen and (max-width: 937px) {
        display: none;
    }
`