import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import { Cart, Hamburger, Header, HeaderContent, HeaderOverlay, HeaderPhone, HeaderRight, Logo, MainNav, User } from './styled'
import Search from './header-search'

export default function header({ active, scrolled, handleMenu = () => undefined }) {
    return <Header active={active} scrolled={scrolled}>
        <HeaderOverlay />
        <HeaderContent className='d-flex flex-row align-items-center justify-content-start'>
            <Logo>
                <Link href='/'>
                    <a>
                        <div className='d-flex flex-row align-items-center justify-content-start'>
                            <div><img src='/images/logo_1.png' alt='' /></div>
                            <div>Awesome Store</div>
                        </div>
                    </a>
                </Link>
            </Logo>
            <Hamburger onClick={handleMenu}><FontAwesomeIcon icon={faBars} /></Hamburger>
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
                <Search />
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
                <Cart>
                    <Link href='/'>
                        <a>
                            <div>
                                <img className='svg' src='/images/cart.svg' alt='https://www.flaticon.com/authors/freepik' />
                            </div>
                        </a>
                    </Link>
                </Cart>
                <HeaderPhone className='d-flex flex-row align-items-center justify-content-center'>
                    <div><div><img src='/images/phone.svg' alt='https://www.flaticon.com/authors/freepik' /></div></div>
                    <div>+57 (301) 3587711</div>
                </HeaderPhone>
            </HeaderRight>
        </HeaderContent>
    </Header>
}