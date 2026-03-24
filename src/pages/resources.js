import Link from 'next/link';
import Page from '../components/base_page';
import css from '../styles/page.module.scss';

export default function Resources() {
    return (
        <Page>
            <div className={css.pageHeader}>
                <h1 className={css.pageTitle}>Resources</h1>
                <p className={css.pageSubtitle}>
                    Tools, links, and organizations to help your church comply with AB
                    506 and protect children.
                </p>
            </div>

            {/* Official / Legal */}
            <h2 style={{ marginTop: '2rem' }}>Official &amp; Legal</h2>
            <div className={css.resourceGrid}>
                <div className={css.resourceCard}>
                    <h3>Full Text of AB 506</h3>
                    <p>
                        Read the complete text of California Assembly Bill 506 (Chapter
                        169) as signed into law on September 16, 2021.
                    </p>
                    <a
                        href="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202120220AB506"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={css.resourceLink}
                    >
                        Read on CA Legislature →
                    </a>
                </div>
                <div className={css.resourceCard}>
                    <h3>California Penal Code § 11165.7</h3>
                    <p>
                        The section defining mandated reporters, including those in youth
                        service organizations referenced by AB 506.
                    </p>
                    <a
                        href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=11165.7&lawCode=PEN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={css.resourceLink}
                    >
                        View Penal Code →
                    </a>
                </div>
                <div className={css.resourceCard}>
                    <h3>CA DOJ Live Scan Locations</h3>
                    <p>
                        Find authorized Live Scan fingerprinting locations near you for
                        the required background checks.
                    </p>
                    <a
                        href="https://oag.ca.gov/fingerprints/locations"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={css.resourceLink}
                    >
                        Find Locations →
                    </a>
                </div>
            </div>

            {/* Training */}
            <h2 style={{ marginTop: '2.5rem' }}>Training</h2>
            <div className={css.resourceGrid}>
                <div className={css.resourceCard}>
                    <h3>California Mandated Reporter Training</h3>
                    <p>
                        Free online training provided by the Office of Child Abuse
                        Prevention. Courses available for general audiences, clergy,
                        volunteers, and more (2&ndash;4 hours).
                    </p>
                    <a
                        href="https://mandatedreporterca.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={css.resourceLink}
                    >
                        Start Free Training →
                    </a>
                </div>
                <div className={css.resourceCard}>
                    <h3>Church HR Network</h3>
                    <p>
                        Ministry-specific HR training and resources, including AB 506
                        compliance tools. CSBC member churches may have pre-paid access.
                    </p>
                    <a
                        href="https://www.churchhrnetwork.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={css.resourceLink}
                    >
                        Learn More →
                    </a>
                </div>
            </div>

            {/* Policies & Tools */}
            <h2 style={{ marginTop: '2.5rem' }}>Policies &amp; Tools</h2>
            <div className={css.resourceGrid}>
                <div className={css.resourceCard}>
                    <h3>Model Child Protection Policy</h3>
                    <p>
                        A free policy template from ChurchWest aligned with underwriting
                        requirements for ministry sexual misconduct coverage. Customize
                        for your church and review with legal counsel.
                    </p>
                    <a
                        href="https://www.churchwest.com/resources/model-child-protection-policy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={css.resourceLink}
                    >
                        Download Template →
                    </a>
                </div>
                <div className={css.resourceCard}>
                    <h3>CSBC AB 506 Compliance Resources</h3>
                    <p>
                        The California Southern Baptist Convention&rsquo;s comprehensive
                        resource hub for AB 506 compliance, including background check
                        guides and training partnerships.
                    </p>
                    <a
                        href="https://csbc.com/resource/ab506/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={css.resourceLink}
                    >
                        Visit CSBC →
                    </a>
                </div>
                <div className={css.resourceCard}>
                    <h3>CSBC Legal Assist Program</h3>
                    <p>
                        Free legal assistance for CSBC member ministries. Get your child
                        protection policy reviewed by an attorney at no cost.
                    </p>
                    <a
                        href="https://csbc.com/resource/legalassist/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={css.resourceLink}
                    >
                        Get Legal Help →
                    </a>
                </div>
            </div>

            {/* Insurance */}
            <h2 style={{ marginTop: '2.5rem' }}>Insurance</h2>
            <div className={css.resourceGrid}>
                <div className={css.resourceCard}>
                    <h3>ChurchWest Insurance</h3>
                    <p>
                        Specialized ministry insurance and risk advisory. Over 4,400
                        ministries served with 50+ years of experience in church
                        coverage.
                    </p>
                    <a
                        href="https://www.churchwest.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={css.resourceLink}
                    >
                        Visit ChurchWest →
                    </a>
                </div>
            </div>

            {/* Reporting */}
            <h2 style={{ marginTop: '2.5rem' }}>Reporting Abuse</h2>
            <div className={css.resourceGrid}>
                <div className={css.resourceCard}>
                    <h3>Report Child Abuse</h3>
                    <p>
                        If you suspect a child is in danger of abuse or neglect, report
                        it immediately to Child Protective Services.
                    </p>
                    <a
                        href="https://www.cdss.ca.gov/reporting/report-abuse/child-protective-services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={css.resourceLink}
                    >
                        Report Now →
                    </a>
                </div>
                <div className={css.resourceCard}>
                    <h3>Childhelp National Hotline</h3>
                    <p>
                        24/7 hotline for child abuse reporting and support. Available in
                        170+ languages.
                    </p>
                    <p style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-navy)' }}>
                        1-800-422-4453
                    </p>
                    <a
                        href="https://www.childhelp.org/hotline/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={css.resourceLink}
                    >
                        Learn More →
                    </a>
                </div>
            </div>

            {/* FAQ */}
            <div className={css.faqSection}>
                <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    Frequently Asked Questions
                </h2>

                <div className={css.faqItem}>
                    <h3>Does AB 506 apply to my church?</h3>
                    <p>
                        If your church employs or uses volunteers who work with children
                        and youth, it very likely qualifies as a &ldquo;youth service
                        organization&rdquo; under AB 506. This includes Sunday schools,
                        youth groups, VBS programs, nursery care, and similar ministries.
                    </p>
                </div>

                <div className={css.faqItem}>
                    <h3>What about occasional or one-time volunteers?</h3>
                    <p>
                        AB 506 specifically defines &ldquo;regular volunteers&rdquo; as
                        those 18+ with direct youth contact exceeding 16 hours per month
                        or 32 hours per year. Occasional helpers below those thresholds
                        are not legally required to comply, but it&rsquo;s a best
                        practice to include them.
                    </p>
                </div>

                <div className={css.faqItem}>
                    <h3>How much do background checks cost?</h3>
                    <p>
                        Live Scan fingerprinting fees vary by location but typically
                        range from $25&ndash;$75 per person. The CA DOJ processing fee
                        is separate from the rolling (fingerprint) fee charged by the
                        Live Scan operator. Some churches budget this as a ministry
                        expense.
                    </p>
                </div>

                <div className={css.faqItem}>
                    <h3>How often does training need to be renewed?</h3>
                    <p>
                        AB 506 does not specify a renewal schedule, but annual
                        retraining is strongly recommended as a best practice. Some
                        insurance providers may require it. Check with your insurer and
                        legal counsel.
                    </p>
                </div>

                <div className={css.faqItem}>
                    <h3>Are there penalties for non-compliance?</h3>
                    <p>
                        AB 506 itself does not specify criminal penalties for
                        non-compliance. However, non-compliance may affect your ability
                        to obtain liability insurance, and failure to report suspected
                        abuse (as a mandated reporter) carries separate legal
                        consequences under existing law.
                    </p>
                </div>

                <div className={css.faqItem}>
                    <h3>
                        Can we use a background check service other than Live Scan?
                    </h3>
                    <p>
                        AB 506 specifically requires background checks &ldquo;pursuant to
                        Section 11105.3 of the Penal Code,&rdquo; which means the
                        California DOJ Live Scan process. You can (and should)
                        supplement with additional checks, but the DOJ check is the
                        baseline legal requirement.
                    </p>
                </div>

                <div className={css.faqItem}>
                    <h3>Where can I get free help with compliance?</h3>
                    <p>
                        Several organizations offer free resources: the state provides
                        free mandated reporter training at{' '}
                        <a
                            href="https://mandatedreporterca.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            mandatedreporterca.com
                        </a>
                        , CSBC member churches get access to Church HR Network tools at no
                        cost, and ChurchWest offers a free model policy template. See our{' '}
                        <Link href="/compliance-checklist">
                            <a>compliance checklist</a>
                        </Link>{' '}
                        for a complete walkthrough.
                    </p>
                </div>
            </div>

            <div style={{
                background: 'var(--color-bg-alt)',
                borderLeft: '4px solid var(--color-teal)',
                padding: '1.25rem 1.5rem',
                borderRadius: '0 8px 8px 0',
                margin: '2rem 0',
                fontSize: '0.9rem',
                color: 'var(--color-text-muted)',
            }}>
                <strong>Note:</strong> External links are provided as helpful resources
                and do not constitute endorsement. Always verify information with primary
                sources and consult with qualified legal counsel for your specific
                situation.
            </div>
        </Page>
    );
}
