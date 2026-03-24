import Link from 'next/link';
import Page from '../components/base_page';
import css from '../styles/page.module.scss';

export default function Requirements() {
    return (
        <Page>
            <div className={css.pageHeader}>
                <h1 className={css.pageTitle}>AB 506 Requirements</h1>
                <p className={css.pageSubtitle}>
                    A detailed breakdown of what California law requires from churches
                    and youth-serving organizations.
                </p>
            </div>

            {/* Requirement 1: Training */}
            <div className={css.reqSection}>
                <h2 className={css.reqTitle}>
                    <span className={css.reqNumber}>1</span>
                    Training in Child Abuse &amp; Neglect
                </h2>
                <div className={css.reqBody}>
                    <p>
                        Every administrator, employee, and regular volunteer of a youth
                        service organization must complete training in:
                    </p>
                    <ul>
                        <li>
                            <strong>Child abuse and neglect identification</strong> &mdash;
                            learning to recognize the signs of physical abuse, emotional
                            abuse, sexual abuse, and neglect
                        </li>
                        <li>
                            <strong>Child abuse and neglect reporting</strong> &mdash;
                            understanding when and how to report suspected abuse to the
                            proper authorities
                        </li>
                    </ul>
                    <p>
                        The training requirement can be met by completing the{' '}
                        <strong>free online mandated reporter training</strong> provided
                        by the Office of Child Abuse Prevention through the California
                        Department of Social Services.
                    </p>
                    <div className={css.defBox}>
                        <h4>💡 Key Point</h4>
                        <p>
                            Before AB 506, many churches only trained staff who directly
                            worked with youth. Now, <em>all</em> employees must be
                            trained&mdash;broadening the circle of protection so more
                            people can identify abuse happening in any area of a
                            child&rsquo;s life.
                        </p>
                    </div>
                </div>
            </div>

            {/* Requirement 2: Background Checks */}
            <div className={css.reqSection}>
                <h2 className={css.reqTitle}>
                    <span className={css.reqNumber}>2</span>
                    Background Checks
                </h2>
                <div className={css.reqBody}>
                    <p>
                        All administrators, employees, and regular volunteers must undergo
                        a background check pursuant to{' '}
                        <strong>Section 11105.3 of the Penal Code</strong>. This is done
                        through the California Department of Justice using{' '}
                        <strong>Live Scan fingerprinting</strong>.
                    </p>
                    <p>The purpose is to identify and exclude any persons with a history of child abuse.</p>
                    <div className={css.defBox}>
                        <h4>⚠️ Important</h4>
                        <p>
                            The CA DOJ check only covers California records. It&rsquo;s
                            strongly recommended to also run an FBI background check or a
                            robust check from a reputable third-party provider for
                            nationwide coverage.
                        </p>
                    </div>
                    <p>
                        <strong>Live Scan process:</strong> Individuals visit an
                        authorized Live Scan location, get fingerprinted electronically,
                        and results are sent directly to the requesting organization. The
                        state system can have processing delays, so plan accordingly.
                    </p>
                </div>
            </div>

            {/* Requirement 3: Policies */}
            <div className={css.reqSection}>
                <h2 className={css.reqTitle}>
                    <span className={css.reqNumber}>3</span>
                    Child Abuse Prevention Policies
                </h2>
                <div className={css.reqBody}>
                    <p>
                        Churches must develop and implement written child abuse prevention
                        policies and procedures that include, at minimum:
                    </p>
                    <ul>
                        <li>
                            <strong>External reporting:</strong> Policies to ensure the
                            reporting of suspected incidents of child abuse to persons or
                            entities <em>outside</em> of the organization, including
                            reports required under Penal Code Section 11165.9
                        </li>
                        <li>
                            <strong>Two-adult rule:</strong> Policies requiring, to the
                            greatest extent possible, the presence of at least{' '}
                            <strong>two screened and trained adults</strong> whenever
                            administrators, employees, or volunteers are in contact with
                            or supervising children
                        </li>
                    </ul>
                    <div className={css.defBox}>
                        <h4>Best Practice</h4>
                        <p>
                            AB 506 sets the <em>minimum</em> standard. Churches should go
                            beyond these requirements with comprehensive child protection
                            policies tailored to their specific ministry context. Model
                            policies are available from organizations like ChurchWest and
                            Church HR Network.
                        </p>
                    </div>
                </div>
            </div>

            {/* Requirement 4: Insurance */}
            <div className={css.reqSection}>
                <h2 className={css.reqTitle}>
                    <span className={css.reqNumber}>4</span>
                    Insurance Implications
                </h2>
                <div className={css.reqBody}>
                    <p>
                        Before writing liability insurance for a youth service
                        organization in California, an insurer{' '}
                        <strong>may request information</strong> demonstrating compliance
                        with AB 506 as part of the insurer&rsquo;s loss control program.
                    </p>
                    <p>
                        This means non-compliance could affect your ability to obtain or
                        maintain adequate liability insurance coverage for your church.
                    </p>
                </div>
            </div>

            {/* Definitions */}
            <div className={css.reqSection}>
                <h2 className={css.reqTitle}>
                    <span className={css.reqNumber}>§</span>
                    Key Definitions
                </h2>
                <div className={css.reqBody}>
                    <div className={css.defBox}>
                        <h4>Regular Volunteer</h4>
                        <p>
                            A volunteer with the youth service organization who is{' '}
                            <strong>18 years of age or older</strong> and who has direct
                            contact with, or supervision of, children for more than{' '}
                            <strong>16 hours per month</strong> or{' '}
                            <strong>32 hours per year</strong>.
                        </p>
                    </div>
                    <div className={css.defBox}>
                        <h4>Youth Service Organization</h4>
                        <p>
                            An organization that employs or utilizes the services of
                            persons who, due to their relationship with the organization,
                            are mandated reporters pursuant to Penal Code Section
                            11165.7(a)(7). This includes churches with youth programs.
                        </p>
                    </div>
                    <div className={css.defBox}>
                        <h4>Mandated Reporter</h4>
                        <p>
                            Under California law, certain professionals and volunteers are
                            legally required to report suspected child abuse or neglect.
                            AB 506 ensures everyone in a youth service organization is
                            trained to fulfill this role.
                        </p>
                    </div>
                </div>
            </div>

            {/* Legal Reference */}
            <div style={{
                background: 'var(--color-bg-alt)',
                borderLeft: '4px solid var(--color-teal)',
                padding: '1.25rem 1.5rem',
                borderRadius: '0 8px 8px 0',
                margin: '2rem 0',
                fontSize: '0.9rem',
                color: 'var(--color-text-muted)',
            }}>
                <strong>Legal Reference:</strong> AB 506 adds Chapter 2.9 (commencing
                with Section 18975) to Division 8 of the Business and Professions Code.{' '}
                <a
                    href="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202120220AB506"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Read the full bill text →
                </a>
            </div>

            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
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
                        View Compliance Checklist →
                    </a>
                </Link>
            </div>
        </Page>
    );
}
