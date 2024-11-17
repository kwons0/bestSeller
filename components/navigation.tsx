"use client"

import Link from "next/link"
import style from '../css/nav.module.css'
import { usePathname } from "next/navigation"

export default function Navigation(){
    const path = usePathname();
    const isListPage = path.startsWith('/list/');
    return(
        <nav className={style.nav}>
            <ul>
                <li><Link href='/' className={path === '/' || isListPage ? style.active : ''}>Home</Link></li>
                <li><Link href='/about' className={path === '/about' ? style.active : ''}>About</Link></li>
            </ul>
        </nav>
    )
}