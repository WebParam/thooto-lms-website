'use client'
import './header.css';
import Link from "next/link";
// import Image from 'next/image';
import { usePathname } from "next/navigation";
import { useEffect, useState } from 'react';
import MobileHeader from '../mobileHeader/MobileHeader';
export default function Header() {
    const [open, setOpen] = useState(false);
const pathname = usePathname();

useEffect(() => {
    if (open) setOpen(false);
},[pathname])

    return (
        <>
        <header
            id="header"
            className="navbar navbar-expand-lg navbar-end navbar-absolute-top navbar-light navbar-show-hide navbar-scrolled"
            style={{justifyContent:'space-between', zIndex: '1000'}}
            data-hs-header-options='{
                "fixMoment": 1000,
                "fixEffect": "slide"
                }'
            >
            {/* End Topbar */}
            <div className="container">
                <nav className="js-mega-menu navbar-nav-wrap hs-menu-initialized hs-menu-horizontal">
                {/* Default Logo */}
                <a className="navbar-brand" href="./index.html" aria-label="Front">
                    <img
                    className="navbar-brand-logo"
                    src="./paramlogo.svg"
                    alt="Logo"
                    />
                </a>
                <ul className="navbar-nav desktop-nav">
                    <li className="nav-item">
                        <Link className={`nav-link ${pathname == '/' && 'active'}`} href="/">
                        home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${pathname == '/dev' && 'active'}`} href="/dev">
                        dev
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${pathname == '/lms' && 'active'}`} href="/lms">
                        lms
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className={`nav-link ${pathname == '/avatar' && 'active'}`} href="/avatar">
                        avatar
                        </Link>
                    </li>
                </ul>

                <div onClick={() => setOpen(prev => !prev)} className={`hamburger-menu ${open &&"open"}`}>
                </div>

                </nav>
            </div>
        </header>
        {open && <MobileHeader />}
        
        </>
    )
}