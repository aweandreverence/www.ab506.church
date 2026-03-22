import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import css from '../styles/header.module.scss';

export function Header() {
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = useState(false);

    const links = [
        { href: '/', label: 'Home' },
        { href: '/requirements', label: 'Requirements' },
        { href: '/compliance-checklist', label: 'Checklist' },
        { href: '/resources', label: 'Resources' },
        { href: '/about', label: 'About' },
    ];

    return (
        <header className={css.header}>
            <div className={css.headerInner}>
                <Link href="/">
                    <a className={css.logo}>
                        AB<span>506</span>.church
                    </a>
                </Link>
                <button
                    className={css.mobileToggle}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle navigation"
                >
                    {mobileOpen ? '✕' : '☰'}
                </button>
                <nav className={`${css.nav} ${mobileOpen ? css.navOpen : ''}`}>
                    {links.map((link) => (
                        <Link key={link.href} href={link.href}>
                            <a
                                className={`${css.navLink} ${
                                    router.pathname === link.href ? css.active : ''
                                }`}
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </a>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
