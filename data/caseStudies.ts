export interface CaseStudy {
  slug: string
  client: string // "Company Name" or "Confidential — Industry"
  industry: string
  year: string
  // TODO: Shreyas rewrite — all copy fields below
  problem: string       // one-line problem statement
  solution: string      // 2-3 sentences
  metrics: { value: string; label: string }[]  // 2-3 hard numbers
  featured: boolean     // whether to pull forward on home page
  featuredMetric: string // single headline metric for home card
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'brightsharks-hiring',
    client: 'BrightSharks',
    industry: 'Recruiting & HR Tech',
    year: '2024',
    // TODO: Shreyas rewrite
    problem: 'Manual resume screening was adding 3–5 days of lag to every hiring cycle.',
    // TODO: Shreyas rewrite
    solution:
      'We built a resume intelligence agent that ingests, scores, and surfaces candidates against role-specific criteria in real time. The system integrates directly with their ATS, eliminating all manual triage. Hiring managers now see a ranked shortlist within minutes of a resume arriving.',
    metrics: [
      { value: '94%', label: 'Reduction in screening time' },
      { value: '3 days', label: 'Hiring cycle cut to 2 hours' },
      { value: '40+', label: 'Roles processed per month' },
    ],
    featured: true,
    // TODO: Shreyas rewrite
    featuredMetric: 'Hiring pipeline from 3 days to 2 hours.',
  },
  {
    slug: 'teklabs-ops',
    client: 'TekLabs',
    industry: 'B2B SaaS',
    year: '2024',
    // TODO: Shreyas rewrite
    problem: 'Customer onboarding required 12+ manual touchpoints across 3 teams.',
    // TODO: Shreyas rewrite
    solution:
      'We designed an onboarding orchestration agent that coordinates between sales, engineering, and customer success automatically. It handles provisioning, sends contextual emails at the right moment, and flags edge cases for human review. The team went from managing onboarding to overseeing it.',
    metrics: [
      { value: '80%', label: 'Fewer manual touchpoints' },
      { value: '2 days', label: 'Average onboarding time (was 11)' },
      { value: '6-figure', label: 'Revenue protected from churn in Q1' },
    ],
    featured: false,
    // TODO: Shreyas rewrite
    featuredMetric: '80% fewer manual touchpoints in customer onboarding.',
  },
  {
    slug: 'revived-handwash',
    client: 'Revived Handwash',
    industry: 'eCommerce / DTC',
    year: '2025',
    // TODO: Shreyas rewrite
    problem: 'Post-purchase follow-up was inconsistent, leaving repeat revenue on the table.',
    // TODO: Shreyas rewrite
    solution:
      'We built a retention agent that monitors purchase patterns and triggers personalized follow-up sequences based on product type, time since last order, and engagement signals. No templates — every message is generated to match the customer\'s context. Repeat order rate increased within the first 60 days.',
    metrics: [
      { value: '34%', label: 'Increase in repeat order rate' },
      { value: '60 days', label: 'Time to measurable impact' },
      { value: '100%', label: 'Automated — zero manual sends' },
    ],
    featured: false,
    // TODO: Shreyas rewrite
    featuredMetric: '34% increase in repeat order rate within 60 days.',
  },
]

export const featuredCaseStudy = caseStudies.find((c) => c.featured) ?? caseStudies[0]
