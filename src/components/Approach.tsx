import { images } from '../images'

const POINTS = [
  {
    title: 'Adaptability',
    copy: 'Markets shift; mandates don’t. We revise strategy continuously against new data while holding firm to each client’s underlying objectives and risk tolerance.',
  },
  {
    title: 'New Strategy',
    copy: 'AI screening surfaces opportunity at a scale no analyst desk can match; our people still make every final call, weighing what the model can’t see.',
  },
  {
    title: 'Client Service',
    copy: 'Every client works directly with a senior advisor who knows their portfolio and their goals — not a rotating desk or an automated dashboard.',
  },
  {
    title: 'Data Studio',
    copy: 'Our in-house data studio tracks global market trends and macro signals continuously, giving every recommendation a documented, testable basis.',
  },
]

export function Approach() {
  return (
    <section id="approach" className="py-24 lg:py-32" style={{ background: 'var(--bg-sunken)' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative order-2 aspect-[4/5] overflow-hidden lg:order-1">
            <img
              src={images.officeInterior}
              alt="Minimalist glass-walled office interior"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-6 font-mono text-xs tracking-[0.18em]" style={{ color: 'var(--gold)' }}>
              OUR APPROACH
            </div>
            <h2 className="text-3xl lg:text-[2.6rem] lg:leading-[1.12]">
              Four principles behind every engagement.
            </h2>

            <dl className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2">
              {POINTS.map((p) => (
                <div key={p.title} className="border-l-2 pl-5" style={{ borderColor: 'var(--gold)' }}>
                  <dt className="text-lg">{p.title}</dt>
                  <dd className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--ink-dim)' }}>
                    {p.copy}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
