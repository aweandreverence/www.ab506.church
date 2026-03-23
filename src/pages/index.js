import Link from 'next/link';
import Page from '../components/base_page';
import css from '../styles/home.module.scss';

export default function Home() {
    return (
        <Page>
            {/* Hero Section */}
            <div className={css.hero}>
                <div className={css.heroInner}>
                    <h1 className={css.heroTitle}>
                        Protect the Children in Your Church
                    </h1>
                    <p className={css.heroSubtitle}>
                        California&rsquo;s AB 506 requires churches and youth-serving
                        organizations to implement child abuse prevention training,
                        background checks, and safety policies. We&rsquo;ll help you
                        understand what&rsquo;s required and how to comply.
                    </p>
                    <Link href="/compliance-checklist">
                        <a className={css.heroCta}>Get Your Compliance Checklist →</a>
                    </Link>
                </div>
            </div>

            {/* What is AB 506 */}
            <section className={css.section}>
                <h2 className={css.sectionTitle}>What is AB 506?</h2>
                <p className={css.sectionSubtitle}>
                    Assembly Bill 506 is a California law (Chapter 169, signed
                    September 16, 2021) that establishes minimum child protection
                    standards for youth service organizations&mdash;including churches.
                </p>
            </section>

            {/* Key Requirements */}
            <section className={css.section}>
                <h2 className={css.sectionTitle}>Key Requirements</h2>
                <p className={css.sectionSubtitle}>
                    AB 506 focuses on four areas every church needs to address.
                </p>
                <div className={css.cardGrid}>
                    <div className={css.card}>
                        <h3>
                            <span className={css.cardIcon}>📚</span>
                            Training
                        </h3>
                        <p>
                            All administrators, employees, and regular volunteers must
                            complete child abuse and neglect identification and reporting
                            training. Free training is available through the state.
                        </p>
                    </div>
                    <div className={css.card}>
                        <h3>
                            <span className={css.cardIcon}>🔍</span>
                            Background Checks
                        </h3>
                        <p>
                            Everyone working with youth must undergo a background check
                            through the California Department of Justice (Live Scan
                            fingerprinting).
                        </p>
                    </div>
                    <div className={css.card}>
                        <h3>
                            <span className={css.cardIcon}>📋</span>
                            Policies &amp; Procedures
                        </h3>
                        <p>
                            Churches must develop written child abuse prevention policies,
                            including mandatory external reporting and maintaining at
                            least two trained adults with children at all times.
                        </p>
                    </div>
                    <div className={css.card}>
                        <h3>
                            <span className={css.cardIcon}>🛡️</span>
                            Insurance Compliance
                        </h3>
                        <p>
                            Insurers may request proof of AB 506 compliance before writing
                            liability insurance for your church. Being compliant protects
                            your coverage.
                        </p>
                    </div>
                </div>
            </section>

            {/* Who Does This Apply To */}
            <section className={css.section}>
                <h2 className={css.sectionTitle}>Who Does This Apply To?</h2>
                <div className={css.cardGrid}>
                    <div className={css.card}>
                        <h3>
                            <span className={css.cardIcon}>⛪</span>
                            Churches &amp; Ministries
                        </h3>
                        <p>
                            Any California church or ministry that provides youth
                            programs, Sunday school, VBS, youth groups, or childcare
                            during services.
                        </p>
                    </div>
                    <div className={css.card}>
                        <h3>
                            <span className={css.cardIcon}>👥</span>
                            Employees &amp; Volunteers
                        </h3>
                        <p>
                            All employees, plus &ldquo;regular volunteers&rdquo;&mdash;anyone
                            18+ who has direct contact with children for more than 16
                            hours per month or 32 hours per year.
                        </p>
                    </div>
                    <div className={css.card}>
                        <h3>
                            <span className={css.cardIcon}>👔</span>
                            Administrators
                        </h3>
                        <p>
                            Church administrators and leadership are included in all
                            training and background check requirements, even if they
                            don&rsquo;t directly supervise youth.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={css.ctaSection}>
                <h2>Ready to Get Compliant?</h2>
                <p>
                    Our step-by-step checklist makes AB 506 compliance straightforward.
                    We&rsquo;ve gathered all the resources you need in one place.
                </p>
                <Link href="/compliance-checklist">
                    <a className={css.ctaButton}>View Compliance Checklist</a>
                </Link>{' '}
                <Link href="/resources">
                    <a className={css.ctaButton}>Browse Resources</a>
                </Link>
            </section>

            {/* Legal Note */}
            <div className={css.legalNote}>
                <strong>Disclaimer:</strong> This website provides general information
                about California AB 506 requirements. It is not legal advice. Every
                church&rsquo;s situation is unique. We recommend consulting with a
                qualified attorney to ensure your ministry&rsquo;s full compliance with
                all applicable laws.
            </div>
        </Page>
    );
}
