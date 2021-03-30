import Head from 'next/head'

import { SuperContainer, SuperContainerInner, SuperOverlay } from '../relevant'
import { HeaderContainer } from '../../containers/header'
import Aside from '../aside'
import { FooterComponent } from '../footer'

export default function layout({ children, activeMenu, onActiveMenu = () => undefined }) {
    return <>
        <Head>
            <title>Awesome Store</title>
            <link rel='icon' href='/favicon.ico' />
            <meta charSet='utf-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE-edge' />
            <meta name='description' content='Awesome Store' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <link rel='preconnect' href='https://fonts.gstatic.com' />
            <link href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap' rel='stylesheet' />
        </Head>
        <SuperContainer>
            <Aside active={activeMenu}/>
            <HeaderContainer onActiveMenu={onActiveMenu} />
            <SuperContainerInner active={activeMenu}>
                <SuperOverlay id='super_overlay'/>
                {children}
                <FooterComponent />
            </SuperContainerInner>
        </SuperContainer>
    </>
}