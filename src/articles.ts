export type Article = {
  slug: string
  date: string
  category: string
  title: string
  excerpt: string
  image: 'towersUpward' | 'officeInterior' | 'teamAtWork'
  body: string[]
}

export const articles: Article[] = [
  {
    slug: 'innovative-strategies-for-outstanding-results',
    date: '06 Feb 2026',
    category: 'Business / Research',
    title: 'Making innovative strategies for outstanding future results',
    excerpt:
      'How pairing AI-driven screening with senior judgment is changing the pace at which we identify and act on opportunity.',
    image: 'towersUpward',
    body: [
      'Over the past two years, our screening desk has surfaced more than $1.5M in opportunities that would not have crossed a traditional analyst’s radar in the same window — not because the opportunities were hidden, but because the volume of signal in public and private markets has outgrown what any desk can review by hand.',
      'The shift wasn’t about replacing judgment with automation. It was about changing what judgment gets spent on. Our models handle the first pass: screening filings, tracking sentiment, flagging structural shifts across sectors. What reaches a senior advisor is already a shortlist, which means the time that used to go into finding a candidate now goes into stress-testing one.',
      'The strategies that have performed best under this model share a common trait: they were revised early and often. A position taken in January rarely survives to December unchanged, and the firms that treat a thesis as fixed tend to hold it two quarters past its useful life. We build review points into every mandate from the outset, not as a formality but because the market doesn’t wait for a scheduled check-in.',
      'None of this replaces the relationships that source the introductions our AI screening can’t reach — the ones that come from twenty years of sitting across the table from founders and operators. The two approaches aren’t in competition. The strongest results we’ve seen come from opportunities that were flagged by one and confirmed by the other.',
    ],
  },
  {
    slug: 'business-thrives-global-initiatives',
    date: '06 Feb 2026',
    category: 'Business / Economy',
    title: 'Our business thrives to contribute to global initiatives',
    excerpt:
      'Why a Los Angeles-based firm keeps its research desk trained on markets well outside the United States — and what that’s meant for client portfolios.',
    image: 'teamAtWork',
    body: [
      'A portfolio built entirely on domestic signal is a portfolio that moves in lockstep with domestic risk. That’s the starting premise behind why our data studio tracks macro indicators across more markets than most firms our size bother to cover — not for breadth’s sake, but because correlation is the thing that quietly erodes a diversification strategy nobody thought to re-check.',
      'Clients who came to us managing assets across borders — founders scaling startups internationally, investors with holdings in multiple regions — consistently cite the same need: a partner who treats their non-U.S. exposure as a first-class part of the strategy, not a footnote handled by a generalist.',
      'That means our research covers regulatory shifts in markets we don’t have an office in, and it means our advisors are expected to speak to a client’s Southeast Asian manufacturing exposure with the same fluency as their Los Angeles real estate position. It also means slower, more deliberate underwriting on cross-border deals, because the risks that sink an international position are rarely the ones visible from a single jurisdiction’s filings.',
      'The businesses we’ve helped develop reflect the same instinct. Several of the five-plus ventures we’ve built out started as a domestic idea and only became investable once we’d mapped a realistic path to a second or third market — done early, not bolted on after the first raise.',
    ],
  },
  {
    slug: 'redefining-company-goals',
    date: '06 Feb 2026',
    category: 'Business / Investment',
    title: 'Discover a better way of redefining company goals',
    excerpt:
      'Inside our venture incubation process: why we staff a company before we scale it, and what that discipline has meant for the ventures we’ve backed.',
    image: 'officeInterior',
    body: [
      'Most early-stage capital buys a founder runway. Ours buys that too, but the distinction we’ve built our venture practice around is that capital alone doesn’t fix the gap between a good idea and an operating company — people do, and that gap is where most of the ventures we’ve watched fail actually failed.',
      'Our development teams — more than a hundred specialists who rotate through partner companies — exist because a founder who is exceptional at product is rarely also exceptional at finance operations, compliance, or the unglamorous mechanics of scaling a team past twenty people. Rather than advise from the outside, we embed people who do those functions directly, on the same footing as the founder’s own hires.',
      'That’s the discipline behind our two active incubation programs: we don’t fund a plan and check back at the next board meeting. We help set the goals a young company should actually be chasing in its first eighteen months — which are almost never the goals in the original deck — and then staff toward them.',
      'It’s a slower way to deploy venture capital than writing a check and stepping back. It’s also, in our experience, the difference between a company that survives its Series A conversation and one that’s still explaining what changed since seed.',
    ],
  },
]

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug)
}
