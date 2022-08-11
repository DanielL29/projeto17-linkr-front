import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 72px;
    background-color: #151515;
    font-size: 49px;
    color: #fff;
    padding-left: 28px;
    padding-right: 17px;
    z-index: 1;

    h1 {
        font-family: 'Passion One';
        cursor: pointer;
    }
`

export const PageNotFound = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;

    h1 {
        margin-top: 20px;
        font-family: 'Passion One';
        font-size: 49px;
        color: #fff;
        align-items: center;
    }

    img {
        height: 200px;
        width: 200px;
    }
`