import Link from 'next/link';
import Page from '../components/base_page';
import css from '../styles/page.module.scss';

export default function About() {
    return (
        <Page>
            <div className={css.pageHeader}>
                <h1 className={css.pageTitle}>About AB506.church</h1>
                <p className={css.pageSubtitle}>
                    Why we built this resource and who it&rsquo;s for.
                </p>
            </div>

            <div className={css.aboutContent}>
                <div className={css.missionBox}>
                    <h2>Our Mission</h2>
                    <p>
                        To help every California church protect children by making AB 506
                        compliance clear, accessible, and achievable.
                    </p>
                </div>

                <h2>Why This Site Exists</h2>
                <p>
                    When California passed AB 506, it established important minimum
                    standards for child protection in youth-serving organizations. But
                    for many churches&mdash;especially smaller ones without dedicated
                    legal or HR staff&mdash;understanding exactly what&rsquo;s required
                    and how to comply can feel overwhelming.
                </p>
                <p>
                    AB506.church was created to bridge that gap. We&rsquo;ve gathered the
                    key requirements, organized a step-by-step compliance checklist, and
                    compiled the best free resources available&mdash;all in one place,
                    written in plain language.
                </p>

                <h2>What AB 506 Gets Right</h2>
                <p>
                    There&rsquo;s sometimes been a misunderstanding that AB 506 is
                    primarily about regulation. In reality, it does something genuinely
                    valuable: it trains people throughout an organization to recognize
                    abuse and neglect&mdash;not just in church settings, but anywhere in
                    a child&rsquo;s life. It broadens the circle of protection to include
                    everyone, not just those who directly work with youth.
                </p>
                <p>
                    As people who care about the well-being of children, we see this as a
                    welcome step. Churches should be the safest places for children, and
                    AB 506 gives us a clear framework to make that real.
                </p>

                <h2>Who We Are</h2>
                <p>
                    This site is built and maintained by{' '}
                    <a
                        href="https://aweandreverence.net"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Awe &amp; Reverence
                    </a>
                    , a Christian software company building tools for worship and faith.
                    We believe technology can serve the Church, and we&rsquo;re passionate
                    about creating resources that help ministries thrive.
                </p>

                <h2>Important Disclaimer</h2>
                <p>
                    This website provides general information about California AB 506
                    requirements. It is <strong>not legal advice</strong>. Every
                    church&rsquo;s situation is unique, and we strongly recommend
                    consulting with a qualified attorney to ensure your ministry&rsquo;s
                    full compliance with all applicable laws.
                </p>
                <p>
                    We do our best to keep this information accurate and up-to-date, but
                    laws can change. Always verify requirements with{' '}
                    <a
                        href="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202120220AB506"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        the official bill text
                    </a>{' '}
                    and consult legal counsel for your specific circumstances.
                </p>

                <h2>Get in Touch</h2>
                <p>
                    Have a question, suggestion, or correction? We&rsquo;d love to hear
                    from you. Reach out through{' '}
                    <a
                        href="https://aweandreverence.net"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Awe &amp; Reverence
                    </a>
                    .
                </p>

                <div style={{ textAlign: 'center', margin: '3rem 0 1rem' }}>
                    <Link href="/compliance-checklist">
                        <a style={{
                            display: 'inline-block',
                            background: 'var(--color-teal)',
                            color: 'white',
                            padding: '0.75rem 1.75rem',
                            borderRadius: '8px',
                            fontWeight: '600',
                            textDecoration: 'none',
                        }}>
                            Get Started with Compliance →
                        </a>
                    </Link>
                </div>
            </div>
        </Page>
    );
}
