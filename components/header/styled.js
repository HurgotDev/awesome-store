import styled, { css } from 'styled-components'

export const HeaderOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.75);
    z-index: 1;
    visibility: hidden;
    opacity: 0;
    transition: all 400ms ease;
`

export const Header = styled.header`
    display: block;
    position: relative;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #FFFFFF;
    z-index: 100;
    transition: all 400ms ease;

    ${({ active }) => active && css`
        transform: translateX(350px);
        & div:first-child {
            visibility: visible;
            opacity: 1;
        }
    `}
    ${({ scrolled }) => scrolled && css`
        box-shadow: 0px 5px 15px rgba(0,0,0,0.08);
    `}
`

export const HeaderContent = styled.div`
    width: 100%;
    height: 79px;
    padding-left: 20px;
    padding-right: 42px;

    @media only screen and (max-width: 575px) {
        height: 59px;
    }

    @media only screen and (max-width: 991px) {
        padding-right: 25px;
    }
`

export const Logo = styled.div`
    & a > div > div:last-child {
        padding-left: 15px;
        font-size: 24px;
        font-weight: 700;
        color: #4a4a4a;
    }

    @media only screen and (max-width: 575px) {
        & a > div > div:last-child {
            font-size: 16px;
            padding-left: 10px;
        }

        & a > div > div:first-child {
            width: 20px;
            margin-top: -3px;
        }
    }
`

export const Hamburger = styled.div`
    display: none;
    margin-left: 25px;
    cursor: pointer;
    margin-top: 4px;
    & > svg {
        width: 24px;
        color: #2e2e2e;
    }
    & > svg:hover {
        color: #2fce98;
        fill: #2fce98;
    }

    @media only screen and (max-width: 575px) {
        margin-top: 2px;
        & > svg {
            width: 20px;
        }
    }

    @media only screen and (max-width: 1440px) {
        display: block;
    }
`

export const MainNav = styled.nav`
    margin-left: 111px;

    & ul li:not(:last-of-type) {
        margin-right: 49px;
    }

    & ul li a {
        font-size: 20px;
        color: #2e2e2e;
        font-weight: 400;
    }

    & ul li.active a, ul li a:hover {
        color: #2fce98;
    }

    @media only screen and (max-width: 1780px) {
        margin-left: 100px;
    }
    @media only screen and (max-width: 1600px) {
        margin-left: 70px;

        & ul li:not(:last-of-type) {
            margin-right: 39px;
        }
    }
    @media only screen and (max-width: 1440px) {
        display: none;
    }
`

export const HeaderSearch = styled.div`
    margin-right: 65px;

    @media only screen and (max-width: 1600px) {
        margin-right: 47px;
    }
    @media only screen and (max-width: 1440px) {
        margin-right: 39px;
    }
    @media only screen and (max-width: 767px) {
        display: none;
    }
`

export const HeaderRight = styled.div`
    margin-left: auto;
`

export const HeaderSearchButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: 44px;
    height: 39px;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;    
`

export const User = styled.div`
    margin-right: 28px;

    & a > div {
        width: 40px;
        height: 40px;
    }

    & a > div > svg {
        max-width: 100%;
        height: auto;
    }

    & a > div > div {
        position: absolute;
        top: -12px;
        right: -4px;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: #2fce98;
        text-align: center;
        line-height: 24px;
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 700;
    }

    @media only screen and (max-width: 1440px) {
        & a > div {
            width: 26px;
            height: 26px;
        }

        & a > div > div {
            width: 18px;
            height: 18px;
            font-size: 11px;
            line-height: 18px;
        }
    }
    @media only screen and (max-width: 575px) {
        & a > div {
            width: 24px;
		    height: 24px;
        }
    }
`

export const Cart = styled.div`
    margin-right: 29px;

    & a > div {
        width: 37px;
        height: 37px;
    }

    & a > div > svg {
        max-width: 100%;
        height: auto;
    }

    @media only screen and (max-width: 1440px) {
        & a > div {
            width: 25px;
		    height: 25px;
        }
    }
    @media only screen and (max-width: 991px) {
        margin-right: 0;
    }
    @media only screen and (max-width: 575px) {
        & a > div {
            width: 24px;
		    height: 24px;
        }
    }
`

export const HeaderPhone = styled.div`
    & > div:first-child > div {
        width: 36px;
        height: 36px;
    }

    & > div:last-child {
        font-size: 18px;
        font-weight: 700;
        color: #4a4a4a;
        padding-left: 26px;
    }
    @media only screen and (max-width: 1440px) {
        & > div:first-child > div {
            width: 24px;
		    height: 24px;
        }
        & > div:last-child {
            font-size: 16px;
        }
    }
    @media only screen and (max-width: 991px) {
        display: none !important;
    }
`