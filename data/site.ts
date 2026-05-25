// Central content constants — edit here, never in JSX

export const site = {
  name: 'Arion',
  fullName: 'Arion AI Solutions',
  url: 'https://arionaisolutions.com',

  // TODO: Shreyas rewrite
  tagline: 'Engineered for speed. Built to scale.',

  // TODO: Shreyas rewrite
  description:
    'Arion builds purpose-built AI automation that eliminates operational drag — so your team can focus on what actually moves the needle.',

  contact: {
    email: 'hello@arionaisolutions.com',
    linkedin: 'https://linkedin.com/company/arion-ai-solutions',
    calendly: 'https://cal.com/arion-ai-solutions-a8krcs/30min',
  },

  nav: {
    links: [
      { label: 'Approach', href: '/approach' },
    ],
    cta: { label: 'Contact', href: '/contact' },
  },

  footer: {
    copy: 'AI automation for businesses that mean it.',
    year: new Date().getFullYear().toString(),
  },

  meta: {
    titleTemplate: '%s — Arion',
    defaultTitle: 'Arion — AI Automation That Ships',
    defaultDescription:
      'Arion builds AI automation that eliminates the operational drag slowing your team down. Real outcomes. Real timelines.',
  },
}
