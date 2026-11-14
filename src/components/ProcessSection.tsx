import { PROCESS_STEPS } from '../data/studioData';
import { useReveal } from '../hooks/useReveal';

export function ProcessSection() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id="process"
      ref={ref}
      className={`reveal-section relative border-b border-[#c79c4b]/15 bg-[#100f0c] py-20 lg:py-28 ${
        visible ? 'is-visible' : ''
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#e2b75d]">
              04. HOW WE WORK
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-[#f6f3ec] text-balance sm:text-5xl">
              A clear process.{' '}
              <span className="block font-serif font-normal italic text-[#d9ad5d]">
                A better outcome.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-[#aba397]">
            From initial discovery to responsive engineering and final QA, every
            website moves through four structured stages.
          </p>
        </div>

        {/* Desktop Horizontal Connected Timeline / Mobile Vertical Timeline */}
        <div className="relative mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {/* Desktop horizontal connector line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-5 right-8 left-8 hidden h-px bg-gradient-to-r from-[#d7aa56]/60 via-[#d7aa56]/35 to-[#d7aa56]/60 lg:block"
          />

          {PROCESS_STEPS.map((step, index) => (
            <article
              key={step.number}
              className={`relative border-l border-[#caa04b]/35 pl-6 lg:border-t-0 lg:border-l-0 lg:pt-0 lg:pr-8 lg:pl-0 ${
                index > 0 ? 'lg:pl-6' : ''
              }`}
            >
              {/* Step Node */}
              <div className="relative z-10 inline-flex h-10 items-center gap-2.5 border border-[#d7aa56]/50 bg-[#17140d] px-3.5">
                <span className="font-mono text-xs font-semibold tabular-nums text-[#e7b94e]">
                  {step.number}
                </span>
                <span className="text-[10px] tracking-[0.16em] text-[#b4a88e] uppercase">
                  {step.phase}
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl font-bold text-[#f6f3ec]">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#aaa194]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
