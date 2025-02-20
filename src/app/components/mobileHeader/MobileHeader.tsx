import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileHeader() {
    const path = usePathname()

    return (
    <div className="nav nav-vertical" style={{height:'100vh', paddingTop:'70px', paddingLeft:'20px'}}>
    {/* Navbar */}
    <ul className="navbar-nav navbar-nav-lg nav-tabs">
        <li className="nav-item">
        <Link className={`nav-link ${path == "/" && 'active'}`} href="/">
            home
        </Link>
        </li>
        <li className="nav-item">
        <Link className={`nav-link ${path == "/dev" && 'active'}`} href="/dev">
            dev
        </Link>
        </li>
        <li className="nav-item">
        <Link className={`nav-link ${path == "/lms" && 'active'}`} href="/lms">
            lms
        </Link>
        </li>
        <li className="nav-item">
        <Link className={`nav-link ${path == "/avatar" && 'active'}`} href="/avatar">
            avatar
        </Link>
        </li>
    </ul>
    {/* End Navbar */}
    </div>
)}