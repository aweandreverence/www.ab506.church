import Link from 'next/link';
import css from '../styles/footer.module.scss';

export function Footer() {
    const CURRENT_YEAR = new Date().getFullYear();

    return (
        <footer className={css.footer}>
            <div className={css.footerInner}>
                <div className={css.footerSection}>
                    <h4>AB506.church</h4>
                    <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: 0 }}>
                        Helping California churches understand and comply with AB 506
                        child protection requirements.
                    </p>
                </div>
                <div className={css.footerSection}>
                    <h4>Pages</h4>
                    <ul>
                        <li>
                            <Link href="/requirements">
                                <a>Requirements</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/compliance-checklist">
                                <a>Compliance Checklist</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/resources">
                                <a>Resources</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={css.footerSection}>
                    <h4>Key Resources</h4>
                    <ul>
                        <li>
                            <a
                                href="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202120220AB506"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Full Bill Text
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://mandatedreporterca.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Mandated Reporter Training
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://csbc.com/resource/ab506/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                CSBC Resources
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={css.divider} />
            <div className={css.bottomBar}>
                <span>&copy; {CURRENT_YEAR} AB506.church</span>
                <span>
                    Built by{' '}
                    <a
                        href="https://aweandreverence.net"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Awe &amp; Reverence
                    </a>
                </span>
            </div>
        </footer>
    );
}
