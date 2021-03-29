import { LayoutContainer } from '../containers/layout'
import 'bootstrap/dist/css/bootstrap.css'

import { GlobalStyles } from '../styles/global'

function App({ Component, pageProps }) {
    return <>
        <GlobalStyles />
        <LayoutContainer>
            <Component {...pageProps} />
        </LayoutContainer></>
}

export default App