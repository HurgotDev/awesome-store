import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *
    {
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;
        text-shadow: rgba(0,0,0,.01) 0 0 1px;
    }

    body
    {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 400;
        background: #FFFFFF;
        color: #a5a5a5;
    }

    div
    {
        display: block;
        position: relative;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    ul
    {
        list-style: none;
        margin-bottom: 0px;
        padding: 0;
    }

    p
    {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        line-height: 1.5;
        font-weight: 300;
        color: #969696;
        -webkit-font-smoothing: antialiased;
        -webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;
        text-shadow: rgba(0,0,0,.01) 0 0 1px;
    }

    p a
    {
        display: inline;
        position: relative;
        color: inherit;
        border-bottom: solid 1px #ffa07f;
        -webkit-transition: all 200ms ease;
        -moz-transition: all 200ms ease;
        -ms-transition: all 200ms ease;
        -o-transition: all 200ms ease;
        transition: all 200ms ease;
    }
    p:last-of-type
    {
        margin-bottom: 0;
    }
    a
    {
        -webkit-transition: all 200ms ease;
        -moz-transition: all 200ms ease;
        -ms-transition: all 200ms ease;
        -o-transition: all 200ms ease;
        transition: all 200ms ease;
    }
    a, a:hover, a:visited, a:active, a:link
    {
        text-decoration: none;
        -webkit-font-smoothing: antialiased;
        -webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;
        text-shadow: rgba(0,0,0,.01) 0 0 1px;
    }
    p a:active
    {
        position: relative;
        color: #FF6347;
    }
    p a:hover
    {
        color: #FFFFFF;
        background: #ffa07f;
    }
    p a:hover::after
    {
        opacity: 0.2;
    }
    ::selection
    {
        background: rgba(188,155,155,0.6);
        color: #FFFFFF;
    }
    h1{font-size: 48px;}
    h2{font-size: 36px;}
    h3{font-size: 24px;}
    h4{font-size: 18px;}
    h5{font-size: 14px;}
    h1, h2, h3, h4, h5, h6
    {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;
        text-shadow: rgba(0,0,0,.01) 0 0 1px;
        line-height: 1.2;
    }
    img
    {
        max-width: 100%;
    }
    button:active
    {
        outline: none;
    }
    .svg path, .svg rect, .svg polygon
    {
        fill: #778990;
        -webkit-transition: all 200ms ease;
        -moz-transition: all 200ms ease;
        -ms-transition: all 200ms ease;
        -o-transition: all 200ms ease;
        transition: all 200ms ease;
    }
`