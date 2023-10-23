import classNames from 'classnames';

import Nav from 'react-bootstrap/Nav';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { NAV_LINKS } from '../constants/nav_links.js';
import css from '../styles/header.module.scss';

export function Header({ children }) {
    const router = useRouter();
    const navItemsJSX = NAV_LINKS.map((link, index) => {
        const classes = classNames({
            [css.active]: link.url === router.pathname,
        });
        const target = link.url.substring(0, 4) === 'http' ? '_blank' : null;
        return (
            <Nav.Item key={`link-${index}`}>
                <Link href={link.url} passHref>
                    <Nav.Link className={classes}>{link.name}</Nav.Link>
                </Link>
            </Nav.Item>
        );
    });
    return (
        <div className={css.header}>
            <Nav>{navItemsJSX}</Nav>
        </div>
    );
}
