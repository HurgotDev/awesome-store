import { faFacebookF, faGooglePlusG, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import { Footer as FooterStyled, FooterAbout, FooterAboutText, FooterCol, FooterContact, FooterContent, FooterList, FooterLogo, FooterLogoIcon, FooterMenu, FooterSocial, FooterSocialList, FooterTag1, FooterTag2, FooterTitle, Newsletter, NewsletterButton, NewsletterForm, NewsletterInput } from './styled'

export function Footer() {
    return <FooterStyled>
        <FooterContent>
            <div className='container'>
                <div className='row'>
                    <FooterCol className='col-lg-4'>
                        <FooterAbout>
                            <FooterLogo>
                                <Link href='/'>
                                    <a>
                                        <div className='d-flex flex-row align-items-center justify-content-start'>
                                            <FooterLogoIcon><img src='/images/logo_2.png' alt='' /></FooterLogoIcon>
                                            <div>Awesome Store</div>
                                        </div>
                                    </a>
                                </Link>
                            </FooterLogo>
                            <FooterAboutText>
                                <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Fusce venenatis vel velit vel euismod.</p>
                            </FooterAboutText>
                        </FooterAbout>
                    </FooterCol>
                    <FooterCol className='col-lg-4'>
                        <FooterMenu>
                            <FooterTitle>Support</FooterTitle>
                            <FooterList>
                                <li>
                                    <Link href='/'>
                                        <a><div>Customer Service<FooterTag1>online now</FooterTag1></div></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a><div>Return Policy</div></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a><div>Size Guide<FooterTag2>recommended</FooterTag2></div></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a><div>Terms and Conditions</div></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a><div>Contact</div></a>
                                    </Link>
                                </li>
                            </FooterList>
                        </FooterMenu>
                    </FooterCol>
                    <FooterCol className='col-lg-4'>
                        <FooterContact>
                            <FooterTitle>Stay in Touch</FooterTitle>
                            <Newsletter>
                                <NewsletterForm>
                                    <NewsletterInput type='email' placeholder='Subscribe to our Newsletter' />
                                    <NewsletterButton>+</NewsletterButton>
                                </NewsletterForm>
                            </Newsletter>
                            <FooterSocial>
                                <FooterTitle>Social</FooterTitle>
                                <FooterSocialList className='d-flex flex-row align-items-start justify-content-start'>
                                    <li><a href='/'><FontAwesomeIcon icon={faFacebookF} size='xs' /></a></li>
                                    <li><a href='/'><FontAwesomeIcon icon={faYoutube} size='xs' /></a></li>
                                    <li><a href='/'><FontAwesomeIcon icon={faGooglePlusG} size='xs' /></a></li>
                                    <li><a href='/'><FontAwesomeIcon icon={faInstagram} size='xs' /></a></li>
                                </FooterSocialList>
                            </FooterSocial>
                        </FooterContact>
                    </FooterCol>
                </div>
            </div>
        </FooterContent>
    </FooterStyled>
}