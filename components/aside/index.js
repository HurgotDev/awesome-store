import { faFacebookF, faGooglePlusG, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { SearchInput } from '../relevant'

import { Menu, MenuContact, MenuNav, MenuPhone, MenuSearch, MenuSearchButton, MenuSearchForm, MenuSocial, MenuSocialList } from './styled'

export default function aside({ active }) {
    return <Menu active={active}>
        <MenuSearch>
            <MenuSearchForm id='menu_search_form'>
                <SearchInput type='text' placeholder='Buscar productos' />
                <MenuSearchButton><img src='/images/search.png' alt='' /></MenuSearchButton>
            </MenuSearchForm>
        </MenuSearch>
        <MenuNav>
            <ul>
                <li>
                    <Link href='/'><a>Women</a></Link>
                </li>
                <li>
                    <Link href='/'><a>Men</a></Link>
                </li>
                <li>
                    <Link href='/'><a>kids</a></Link>
                </li>
                <li>
                    <Link href='/'><a>home Deco</a></Link>
                </li>
                <li>
                    <Link href='/'><a>Contact</a></Link>
                </li>
            </ul>
        </MenuNav>
        <MenuContact>
            <MenuPhone className='d-flex flex-row align-items-center justify-content-start'>
                <div><div><img src='/images/phone.svg' alt='https://www.flaticon.com/authors/freepik'/></div></div>
                <div>+57 (301) 3587711</div>
            </MenuPhone>
            <MenuSocial>
                <MenuSocialList className='d-flex flex-row align-items-start justify-content-start'>
                    <li>
                        <a href='/'><FontAwesomeIcon icon={faFacebookF} size='xs'/></a>
                    </li>
                    <li>
                        <a href='/'><FontAwesomeIcon icon={faYoutube} size='xs'/></a>
                    </li>
                    <li>
                        <a href='/'><FontAwesomeIcon icon={faGooglePlusG} size='xs'/></a>
                    </li>
                    <li>
                        <a href='/'><FontAwesomeIcon icon={faInstagram} size='xs'/></a>
                    </li>
                </MenuSocialList>
            </MenuSocial>
        </MenuContact>
    </Menu>
}