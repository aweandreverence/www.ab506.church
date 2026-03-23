import Link from 'next/link';
import Page from '../components/base_page';
import css from '../styles/page.module.scss';

export default function ComplianceChecklist() {
    return (
        <Page>
            <div className={css.pageHeader}>
                <h1 className={css.pageTitle}>Compliance Checklist</h1>
                <p className={css.pageSubtitle}>
                    A step-by-step guide to help your church meet every AB 506
                    requirement.
                </p>
            </div>

            <div className={css.checklist}>
                {/* Step 1: Inventory */}
                <div className={css.checklistStep}>
                    <div className={css.stepHeader}>
                        <span className={css.stepNumber}>1</span>
                        <h2 className={css.stepTitle}>
                            Inventory Your Team
                        </h2>
                    </div>
                    <div className={css.stepBody}>
                        <p>
                            Before you can comply, you need to know who falls under AB
                            506&rsquo;s requirements.
                        </p>
                        <div className={css.checkItem}>
                            List all paid employees (full-time and part-time)
                        </div>
                        <div className={css.checkItem}>
                            List all administrators and church leadership
                        </div>
                        <div className={css.checkItem}>
                            Identify &ldquo;regular volunteers&rdquo; &mdash; anyone 18+
                            with direct youth contact exceeding 16 hours/month or 32
                            hours/year
                        </div>
                        <div className={css.checkItem}>
                            Document each person&rsquo;s role and level of youth contact
                        </div>
                        <div className={css.tipBox}>
                            <strong>💡 Tip:</strong> Think broadly. Sunday school
                            teachers, youth group leaders, VBS volunteers, nursery
                            workers, children&rsquo;s choir directors, and bus drivers
                            may all qualify as regular volunteers.
                        </div>
                    </div>
                </div>

                {/* Step 2: Training */}
                <div className={css.checklistStep}>
                    <div className={css.stepHeader}>
                        <span className={css.stepNumber}>2</span>
                        <h2 className={css.stepTitle}>
                            Complete Mandated Reporter Training
                        </h2>
                    </div>
                    <div className={css.stepBody}>
                        <p>
                            Every person identified in Step 1 must complete training in
                            child abuse and neglect identification and reporting.
                        </p>
                        <div className={css.checkItem}>
                            Register each person for mandated reporter training
                        </div>
                        <div className={css.checkItem}>
                            Complete the training (typically 2&ndash;4 hours depending on
                            the course)
                        </div>
                        <div className={css.checkItem}>
                            Retain certificates of completion for each trainee
                        </div>
                        <div className={css.checkItem}>
                            Set up annual retraining reminders
                        </div>
                        <h4 style={{ marginTop: '1rem' }}>Free Training Resources:</h4>
                        <ul>
                            <li>
                                <a
                                    href="https://mandatedreporterca.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    California Mandated Reporter Training
                                </a>{' '}
                                &mdash; Free online training from the Office of Child
                                Abuse Prevention (General: 2 hours, Clergy-specific: 3
                                hours)
                            </li>
                            <li>
                                <a
                                    href="https://www.churchhrnetwork.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Church HR Network
                                </a>{' '}
                                &mdash; Ministry-specific training (CSBC member churches
                                may have pre-paid access)
                            </li>
                        </ul>
                        <div className={css.tipBox}>
                            <strong>💡 Tip:</strong> The free state training satisfies
                            the legal requirement, but ministry-specific training (like
                            Church HR Network) may be more applicable to your context.
                            Consider using both.
                        </div>
                    </div>
                </div>

                {/* Step 3: Background Checks */}
                <div className={css.checklistStep}>
                    <div className={css.stepHeader}>
                        <span className={css.stepNumber}>3</span>
                        <h2 className={css.stepTitle}>
                            Conduct Background Checks
                        </h2>
                    </div>
                    <div className={css.stepBody}>
                        <p>
                            AB 506 requires background checks through the California
                            Department of Justice via Live Scan fingerprinting.
                        </p>
                        <div className={css.checkItem}>
                            Register your church as a requesting agency with the CA DOJ
                            (or use an authorized intermediary)
                        </div>
                        <div className={css.checkItem}>
                            Locate an authorized Live Scan service provider near your
                            church
                        </div>
                        <div className={css.checkItem}>
                            Schedule and complete Live Scan fingerprinting for each person
                        </div>
                        <div className={css.checkItem}>
                            Review results and take appropriate action for any flagged
                            records
                        </div>
                        <div className={css.checkItem}>
                            Consider supplementing with an FBI check or national
                            background check for broader coverage
                        </div>
                        <div className={css.warningBox}>
                            <strong>⚠️ Important:</strong> The CA DOJ Live Scan only
                            checks California records. For individuals who have lived in
                            other states, a national background check is strongly
                            recommended. Processing times can vary &mdash; start early.
                        </div>
                        <h4 style={{ marginTop: '1rem' }}>Helpful Links:</h4>
                        <ul>
                            <li>
                                <a
                                    href="https://oag.ca.gov/fingerprints/locations"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Find a Live Scan Location (CA DOJ)
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://csbc.com/resource/ab506/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    CSBC Background Check Guide
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Step 4: Policies */}
                <div className={css.checklistStep}>
                    <div className={css.stepHeader}>
                        <span className={css.stepNumber}>4</span>
                        <h2 className={css.stepTitle}>
                            Develop Child Protection Policies
                        </h2>
                    </div>
                    <div className={css.stepBody}>
                        <p>
                            Written policies and procedures are required. At minimum, your
                            policies must cover:
                        </p>
                        <div className={css.checkItem}>
                            <strong>External reporting procedures</strong> &mdash; Clear
                            steps for reporting suspected child abuse to authorities
                            outside your church (law enforcement, Child Protective
                            Services)
                        </div>
                        <div className={css.checkItem}>
                            <strong>Two-adult rule</strong> &mdash; Require at least two
                            screened, trained adults present whenever children are being
                            supervised
                        </div>
                        <div className={css.checkItem}>
                            <strong>Screening procedures</strong> &mdash; Document your
                            process for training and background-checking all staff and
                            volunteers
                        </div>
                        <div className={css.checkItem}>
                            <strong>Incident response plan</strong> &mdash; What happens
                            when a report is made
                        </div>
                        <div className={css.checkItem}>
                            Have your policy reviewed by qualified legal counsel
                        </div>
                        <div className={css.checkItem}>
                            Distribute the policy to all staff and volunteers
                        </div>
                        <div className={css.checkItem}>
                            Review and update the policy annually
                        </div>
                        <div className={css.tipBox}>
                            <strong>💡 Tip:</strong>{' '}
                            <a
                                href="https://www.churchwest.com/resources/model-child-protection-policy/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ChurchWest offers a free model child protection policy
                                template
                            </a>{' '}
                            that can serve as a starting point. Customize it for your
                            church and have it reviewed by an attorney.
                        </div>
                    </div>
                </div>

                {/* Step 5: Implementation */}
                <div className={css.checklistStep}>
                    <div className={css.stepHeader}>
                        <span className={css.stepNumber}>5</span>
                        <h2 className={css.stepTitle}>
                            Implement &amp; Maintain
                        </h2>
                    </div>
                    <div className={css.stepBody}>
                        <p>
                            Compliance isn&rsquo;t a one-time event. Build systems to
                            maintain ongoing compliance.
                        </p>
                        <div className={css.checkItem}>
                            Create a compliance tracking spreadsheet or system for all
                            staff and volunteers
                        </div>
                        <div className={css.checkItem}>
                            Set calendar reminders for annual training renewals
                        </div>
                        <div className={css.checkItem}>
                            Establish an onboarding process that includes AB 506
                            requirements for new hires and volunteers
                        </div>
                        <div className={css.checkItem}>
                            Schedule annual policy reviews with church leadership
                        </div>
                        <div className={css.checkItem}>
                            Keep all documentation organized and accessible (training
                            certificates, background check results, signed policy
                            acknowledgments)
                        </div>
                        <div className={css.checkItem}>
                            Brief your insurance provider on your compliance status
                        </div>
                        <div className={css.tipBox}>
                            <strong>💡 Tip:</strong> Designate a specific person (or
                            small team) as your church&rsquo;s AB 506 compliance
                            coordinator. Having clear ownership makes ongoing compliance
                            much more manageable.
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Best Practices */}
            <div className={css.reqSection}>
                <h2 style={{ marginBottom: '1rem' }}>Beyond the Minimum: Best Practices</h2>
                <div className={css.reqBody}>
                    <p>
                        AB 506 establishes the <em>minimum</em> standard. Churches
                        should strive to exceed these requirements:
                    </p>
                    <ul>
                        <li>
                            Train <em>all</em> volunteers, not just those meeting the
                            &ldquo;regular volunteer&rdquo; threshold
                        </li>
                        <li>
                            Implement classroom/room design with windows in doors for
                            visibility
                        </li>
                        <li>
                            Establish a child check-in/check-out system for services and
                            events
                        </li>
                        <li>
                            Create a social media and digital communication policy for
                            youth workers
                        </li>
                        <li>
                            Conduct reference checks in addition to background checks
                        </li>
                        <li>
                            Provide annual refresher training, not just initial training
                        </li>
                        <li>
                            Consider installing security cameras in hallways and common
                            areas (not in private areas)
                        </li>
                    </ul>
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
                <strong>Disclaimer:</strong> This checklist provides general guidance and
                is not legal advice. Consult with a qualified attorney to ensure your
                church&rsquo;s specific compliance needs are met.
            </div>

            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <Link href="/resources">
                    <a style={{
                        display: 'inline-block',
                        background: 'var(--color-teal)',
                        color: 'white',
                        padding: '0.75rem 1.75rem',
                        borderRadius: '8px',
                        fontWeight: '600',
                        textDecoration: 'none',
                    }}>
                        View All Resources →
                    </a>
                </Link>
            </div>
        </Page>
    );
}
