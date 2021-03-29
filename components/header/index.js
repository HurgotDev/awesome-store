import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import { Hamburger, Header, HeaderContent, HeaderOverlay, HeaderRight, HeaderSearch, Logo, MainNav, User } from './styled'
import Search from './header-search'

export default function header() {
    return <Header /* active */ scrolled> {/* [active, scrolled] */}
        <HeaderOverlay />
        <HeaderContent className='d-flex flex-row align-items-center justify-content-start'>
            <Logo>
                <Link href='/'>
                    <a>
                        <div className='d-flex flex-row align-items-center justify-content-start'>
                            <div><img src='/images/logo_1.png' alt='' /></div>
                            <div>Little closet</div>
                        </div>
                    </a>
                </Link>
            </Logo>
            <Hamburger><FontAwesomeIcon icon={faBars} /></Hamburger>
            <MainNav>
                <ul className='d-flex flex-row align-items-start justify-content-start'>
                    <li className='active'><Link href='/'><a>Women</a></Link></li>
                    <li><Link href='/'><a>Men</a></Link></li>
                    <li><Link href='/'><a>Kids</a></Link></li>
                    <li><Link href='/'><a>Home Deco</a></Link></li>
                    <li><Link href='/'><a>Contact</a></Link></li>
                </ul>
            </MainNav>
            <HeaderRight className='d-flex flex-row align-items-center justify-content-start'>
                <HeaderSearch>
                    <Search />
                </HeaderSearch>
                <User>
                    <Link href='/'>
                        <a>
                            <div>
                                <img src='/images/user.svg' alt='https://www.flaticon.com/authors/freepik' />
                                <div>1</div>
                            </div>
                        </a>
                    </Link>
                </User>
            </HeaderRight>
        </HeaderContent>
    </Header>
}