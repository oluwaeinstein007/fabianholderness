import { Monogram } from './Monogram'

const TEAM = [
  { name: 'Anne Reid', role: 'Chief Operating Officer', initials: 'AR' },
  { name: 'Mark Hagne', role: 'Lawyer', initials: 'MH' },
  { name: 'Diane Miller', role: 'Business Manager', initials: 'DM' },
  { name: 'Sophie White', role: 'Head of Consulting', initials: 'SW' },
  { name: 'Paul Goto', role: 'Manager', initials: 'PG' },
  { name: 'Toby Young', role: 'Legal Officer', initials: 'TY' },
]

export function Team() {
  return (
    <section id="team" className="py-24 lg:py-32" style={{ background: 'var(--bg-sunken)' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 max-w-xl">
          <div className="mb-6 font-mono text-xs tracking-[0.18em]" style={{ color: 'var(--gold)' }}>
            OUR TEAM
          </div>
          <h2 className="text-3xl lg:text-[2.6rem] lg:leading-[1.12]">The people setting the course.</h2>
        </div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <div key={m.name} className="flex items-center gap-5">
              <Monogram initials={m.initials} />
              <div>
                <div className="text-lg">{m.name}</div>
                <div className="mt-0.5 text-sm" style={{ color: 'var(--gold)' }}>
                  {m.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
