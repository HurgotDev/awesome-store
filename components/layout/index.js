import Head from 'next/head'

import { SuperContainer } from '../relevant'
import Header from '../header'

export default function layout({ children }) {
    return <>
        <Head>
            <title>Awesome Store</title>
            <link rel='icon' href='/favicon.ico' />
            <meta charSet='utf-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE-edge' />
            <meta name='description' content='Awesome Store' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <SuperContainer>
            <Header />
            {children}
        </SuperContainer>
    </>
}