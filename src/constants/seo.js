export const SITE_TITLE =
    'AB506.church — California Child Protection Compliance for Churches';
export const SITE_URL = 'https://www.ab506.church';
export const SITE_DESCRIPTION =
    'A practical AB 506 compliance guide for California churches, ministries, and youth-serving organizations implementing child safety training, background checks, and policies.';

export const PAGE_TITLES = {
    '/': 'Home',
    '/requirements': 'Requirements',
    '/compliance-checklist': 'Compliance Checklist',
    '/resources': 'Resources',
    '/about': 'About',
};

export const PAGE_DESCRIPTIONS = {
    '/': SITE_DESCRIPTION,
    '/requirements':
        'Understand the core AB 506 requirements for California churches, including mandated reporter training, Live Scan background checks, child safety policies, and insurance expectations.',
    '/compliance-checklist':
        'Use this step-by-step AB 506 compliance checklist to help your church organize training, screening, safety policies, documentation, and annual review.',
    '/resources':
        'Find AB 506 resources for churches, including state training links, background check guidance, policy templates, and child protection references.',
    '/about':
        'Learn why AB506.church exists: helping California churches understand child protection requirements and pursue safe, faithful ministry practices.',
};

export const SITEMAP_PATHS = Object.keys(PAGE_TITLES);

export function canonicalUrl(path = '/') {
    const normalizedPath = path === '/' ? '/' : `${path.replace(/\/$/, '')}/`;
    return `${SITE_URL}${normalizedPath}`;
}
