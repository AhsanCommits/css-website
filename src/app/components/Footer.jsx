import React from 'react';
import footerStyles from '@/app/styles/footer.module.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import styles from "@/app/styles/navbar.module.css";


export const metadata = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
}

const Footer = () => {
    return (
        <>

            <footer className={footerStyles.footer}>
                <div className={footerStyles.content}>
                    <div className={footerStyles.top}>
                        <div className={footerStyles['logo-details']}>
                            {/*<i className={footerStyles.fab fa-slack]></i>*/}
                            <span className={footerStyles.logo_name}>COMSATS Science Society</span>
                        </div>
                        <div className={footerStyles[`media-icons`]}>
                            <Link href="#"><i > <FaFacebookF /> </i></Link>
                            <Link href="#"><i > <FaTwitter /> </i> </Link>
                            <Link href="#"><i > <FaInstagram />  </i></Link>
                            <Link href="#"><i > <FaLinkedinIn /> </i></Link>
                            <Link href="#"><i > <FaYoutube />  </i></Link>
                        </div>
                    </div>
                    <div className={footerStyles['link-boxes']}>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Domains</li>
                            <li><a href="#">Tech</a></li>
                            <li><a href="#">Graphics</a></li>
                            <li><a href="#">Media</a></li>
                            <li><a href="#">Content</a></li>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Event Management</a></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>News</li>
                            <li><a href="#">Techno meet up</a></li>
                            <li><a href="#">Starting into techno</a></li>
                            <li><a href="#">Current plans</a></li>
                            <li><a href="#">Start up</a></li>
                            <li><a href="#">New ideas</a></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Market</li>
                            <li><a href="#">Techno meet up</a></li>
                            <li><a href="#">Starting into techno</a></li>
                            <li><a href="#">Current plans</a></li>
                            <li><a href="#">Start up</a></li>
                            <li><a href="#">New ideas</a></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Contact</li>
                            <li><a href="#">Email</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">Github</a></li>
                            <li><a href="#">Twitter</a></li>
                        </ul>
                        <ul className={`${footerStyles.box} ${footerStyles['input-box']}`}>
                            <li className={footerStyles.link_name}>Join our newsletter</li>
                            <li><input type="text" placeholder="Email Address" /></li>
                            <li><input type="button" value="Subscribe" /></li>
                        </ul>
                    </div>
                </div>
                <div className={footerStyles['bottom-details']}>
                    <div className={footerStyles.bottom_text}>
                        <span className={footerStyles.copyright_text}> Copyright © 2023
                            <Link href="/>"> Computer Science Society</Link> All rights reserved </span>
                        <span className={footerStyles.policy_terms}>
                            <Link href="/">Privacy Policy</Link>
                            <Link href="/">Terms & Condition</Link>
                        </span>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;