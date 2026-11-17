// All external links live here. Fill these in before going live.
// An empty string keeps the button visible but without a target.

/** Airtable form for creators who want to take part in the pilot. */
export const APPLY_URL = ''

/** Airtable form for experienced creators who want to mentor. */
export const MENTOR_URL = ''

/** Contact address for partners and funders, e.g. "hello@example.org". */
export const CONTACT_EMAIL = ''

/** Legal pages. The footer links only show up once these are set. */
export const IMPRINT_URL = ''
export const PRIVACY_URL = ''

/** Props for a link that leaves the site. Falls back to "#" while unset. */
export function external(url: string) {
  return url
    ? { href: url, target: '_blank', rel: 'noopener noreferrer' }
    : { href: '#' }
}
