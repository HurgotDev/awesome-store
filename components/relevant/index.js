import styled, { css } from 'styled-components'

export const SuperContainer = styled.div`
    width: 100%;
    overflow: hidden;
`

export const SuperContainerInner = styled.div`
    transition: all 400ms ease;
    ${({ active }) => active && css`
        transform: translateX(350px);
        & > #super_overlay {
            visibility: visible;
	        opacity: 1;
        }
    `}
`

export const SuperOverlay = styled.div`
    position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100%;
	background: rgba(0,0,0,0.75);
	z-index: 101;
	visibility: hidden;
	opacity: 0;
    transition: all 400ms ease;
`

export const SearchInput = styled.input`
    width: 450px;
    height: 39px;
    border: solid 1px #4a4a4a;
    border-radius: 20px;
    outline: none;
    text-align: center;
    font-size: 16px;
    color: #2e2e2e;
    font-weight: 300;
    box-shadow: 0 0 1px 0px #4a4a4a inset, 0 0 1px 0px #4a4a4a;
	transition: all 200ms ease;

    &:focus,:hover{
        border-color: #2fce98;
        box-shadow: 0 0 1px 0px #2fce98 inset, 0 0 1px 0px #2fce98;
    }

    &::placeholder {
        font-family: 'Roboto', sans-serif;
        font-size: 16px !important;
	    font-weight: 300 !important;
	    color: #2e2e2e !important;
    }

    @media only screen and (max-width: 1780px) {
        width: 310px;
    }
    @media only screen and (max-width: 1600px) {
        width: 210px;
    }
    @media only screen and (max-width: 1440px) {
        width: 300px;
    }
    @media only screen and (max-width: 991px) {
        width: 210px;
    }
`