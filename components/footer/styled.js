import styled from 'styled-components'

export const Footer = styled.footer`
    display: block;
    width: 100%;
    background: #f8f8f8;
`

export const FooterContent = styled.div`
    padding-bottom: 37px;
`

export const FooterCol = styled.div``

export const FooterAbout = styled.div`
    padding-top: 47px;
`

export const FooterLogo = styled.div`
    margin-left: -71px;
    & a {
        display: block;
    }

    & a > div > div:last-child {
        font-size: 34.46px;
        font-weight: 700;
        color: #4a4a4a;
        padding-left: 22px;
        transform: translateY(3px);
    }
`

export const FooterLogoIcon = styled.div``

export const FooterAboutText = styled.div`
    margin-top: 24px;
	padding-right: 50px;
`

export const FooterMenu = styled.div`
    padding-top: 64px;
`

export const FooterTitle = styled.div`
    font-size: 36px;
	font-weight: 700;
	color: #4a4a4a;
	line-height: 0.75;
`

export const FooterList = styled.ul`
    display: block;
	width: 100%;
	margin-top: 29px;
    & li {
        width: 100%;
        position: relative;
        height: 60px;
    }
    & li:not(:last-of-type) {
        border-bottom: solid 2px #eeeeee;
    }
    & li a {
        display: block;
        position: relative;
        font-size: 18px;
        color: #4a4a4a;
        line-height: 58px;
    }
    & li a:hover {
        color: #2fce98;
    }
    & li a > div::after {
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        content: '>';
        font-size: 22px;
        color: #969696;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
    }
    & li a:hover > div::after {
        color: #2fce98;
    }
    & li a > div {
        display: inline-block;
	    padding-left: 22px;
    }
    & li a > div > div {
        display: block;
        position: absolute;
        top: 0;
        white-space: nowrap;
        font-size: 10px;
        color: #FFFFFF;
        line-height: 0.75;
        text-transform: uppercase;
        padding-top: 2px;
        padding-bottom: 2px;
        padding-left: 4px;
        padding-right: 4px;
        border-radius: 6px;
        margin-top: 10px;
    }
`

export const FooterTag1 = styled.div`
    left: calc(100% + 5px);
	background: #2fce98;
`

export const FooterTag2 = styled.div`
    left: calc(100% + 25px);
	background: #beaf4a;
`

export const FooterContact = styled.div`
    padding-top: 64px;
`

export const Newsletter = styled.div`
    margin-top: 48px;
`

export const NewsletterForm = styled.form`
    width: 100%;
`

export const NewsletterInput = styled.input`
    width: 100%;
	height: 53px;
	background: #FFFFFF;
	padding-left: 28px;
	border: none;
	outline: none;
	color: #4a4a4a;
	border-radius: 27px;
    &::placeholder {
        font-size: 16px !important;
        font-weight: 500 !important;
        color: #4a4a4a !important;
    }
`

export const NewsletterButton = styled.button`
    position: absolute;
	top: 0;
	right: 0;
	width: 53px;
	height: 53px;
	border-radius: 50%;
	background: #2fce98;
	border: none;
	outline: none;
	font-size: 24px;
	font-weight: 500;
	color: #FFFFFF;
	line-height: 53px;
	text-align: center;
	cursor: pointer;
`

export const FooterSocial = styled.div`
    margin-top: 42px;
`

export const FooterSocialList = styled.ul`
    margin-top: 41px;
    & li {
        width: 53px;
        height: 53px;
        border-radius: 50%;
        border: solid 2px #6d6d6d;
        transition: all 400ms ease;
    }
    & li:not(:last-of-type) {
        margin-right: 17px;
    }
    & li a {
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: all 400ms ease;
    }
    & li a svg {
        height: 100%;
        color: #6d6d6d;
        width: 22px;
        transition: all 400ms ease;
    }
    & li:hover {
        border-color: #2fce98;
	    transform: translateY(-5px);
    }
    & li a:hover svg {
        color: #2fce98;
    }
`