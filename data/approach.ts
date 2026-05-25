export interface ProcessStep {
  number: string
  name: string
  // TODO: Shreyas rewrite — all copy fields below
  tagline: string
  detail: string
}

export interface Principle {
  headline: string
  elaboration: string
}

// TODO: Shreyas rewrite
export const approachThesis =
  "We don't sell AI. We sell business outcomes that happen to use AI."

// TODO: Shreyas rewrite
export const problemCopy = [
  'Most AI automation projects fail before they deliver anything. Vendors show demos, promise transformation, and disappear once the contract is signed. The real problem is that nobody owns the outcome — only the deliverable.',
  'Scope creep, wrong tooling, and a lack of operational accountability turn promising pilots into shelf-ware. Six months later, the team is back to doing things manually, just with a fancier dashboard.',
  'Arion is built differently. We come in with a defined outcome, a fixed timeline, and the technical depth to actually ship — then we measure whether it worked.',
]

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    name: 'Scope the outcome',
    // TODO: Shreyas rewrite
    tagline: 'We define what success looks like before touching code.',
    // TODO: Shreyas rewrite
    detail:
      'Every engagement starts with a single question: what does the business look like when this is working? We map the current process, identify the exact friction point, and agree on the measurable outcome before a single line of code is written.',
  },
  {
    number: '02',
    name: 'Build tight, ship fast',
    // TODO: Shreyas rewrite
    tagline: 'First working version in two weeks, not two quarters.',
    // TODO: Shreyas rewrite
    detail:
      'We build narrow and deep — one high-value workflow automated completely, rather than ten things automated halfway. The first version ships in two weeks. You use it. We learn. Then we expand from a foundation that actually works.',
  },
  {
    number: '03',
    name: 'Measure relentlessly',
    // TODO: Shreyas rewrite
    tagline: "If it can't be measured, it's not done.",
    // TODO: Shreyas rewrite
    detail:
      'Every agent we ship has a scorecard: time saved, errors eliminated, revenue influenced. We review it with you on a defined cadence. If the numbers are right, we scale. If they\'re not, we fix before we move on.',
  },
  {
    number: '04',
    name: 'Transfer, don\'t depend',
    // TODO: Shreyas rewrite
    tagline: "Your team runs it. We don't hold the keys.",
    // TODO: Shreyas rewrite
    detail:
      'The goal is never a retainer. It\'s a system your team owns. Documentation, training, and handoff are built into every engagement. We\'re done when you don\'t need us — and that\'s how we know it worked.',
  },
]

export const principles: Principle[] = [
  {
    // TODO: Shreyas rewrite
    headline: 'Outcomes over outputs.',
    elaboration:
      'A delivered agent that doesn\'t change anything is not a success. We measure what moved, not what was built.',
  },
  {
    // TODO: Shreyas rewrite
    headline: 'Ship in weeks, not quarters.',
    elaboration:
      'Long timelines are a risk transfer to the client. We compress them on purpose. Speed forces clarity.',
  },
  {
    // TODO: Shreyas rewrite
    headline: 'Narrow beats broad.',
    elaboration:
      'One workflow automated completely is worth more than ten automated partially. We resist scope expansion until the core works.',
  },
  {
    // TODO: Shreyas rewrite
    headline: 'No black boxes.',
    elaboration:
      'Every system we build is explainable to the person running it. If your team can\'t understand it, we haven\'t finished.',
  },
]
