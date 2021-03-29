import styled, { css } from 'styled-components'

export const Menu = styled.div`
    position: fixed;
	top: 0;
	left: -350px;
	width: 350px;
	height: 100vh;
	background: #f8f8f8;
	padding-left: 40px;
	padding-top: 79px;
	padding-right: 45px;
	z-index: 101;
    transition: all 400ms ease;

    ${({ active }) => active && css`
        left: 0;
    `}
`

export const MenuSearch = styled.div`
    display: none;
    margin-bottom: 48px;

    @media only screen and (max-width: 767px) {
        display: block;
    }
`

export const MenuSearchForm = styled.form`
    position: relative;
    & > input {
        width: 100%;
        text-align: left;
        padding-left: 25px;
    }
`

export const MenuSearchButton = styled.button`
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

export const MenuNav = styled.div`
    & ul li a {
        position: relative;
        font-size: 20px;
        color: #2e2e2e;
        font-weight: 400;
    }
    & ul li a:hover {
        color: #2fce98;
    }
    & ul li a:after {
        display: block;
        position: absolute;
        top: 50%;
        left: 0;
        width: 0%;
        height: 2px;
        background: #2fce98;
        transition: all 400ms ease;
	    content: '';
    }
    & ul li a:hover:after {
        width: 100%;
    }
`

export const MenuContact = styled.div`
    position: absolute;
	left: 40px;
	bottom: 25px;
`

export const MenuPhone = styled.div`
    & > div:first-child > div {
        width: 18px;
	    height: 18px;
    }
    & > div:last-child {
        font-size: 14px;
        font-weight: 700;
        color: #4a4a4a;
        padding-left: 16px;
    }
`

export const MenuSocial = styled.div`
    margin-top: 20px;
`

export const MenuSocialList = styled.ul`
    & li {
        width: 33px;
        height: 33px;
        border-radius: 50%;
        border: solid 2px #6d6d6d;
        transition: all 400ms ease;
    }
    & li:not(:last-of-type) {
        margin-right: 12px;
    }
    & li a {
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: all 400ms ease; 
    }
    & li a svg {
        width: 14px;
        height: 100%;
        color: #6d6d6d;
        fill: #6d6d6d;
    }
`