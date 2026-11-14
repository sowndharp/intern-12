import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const CAPABILITIES = [
  'Web Design',
  'Frontend Development',
  'E-Commerce Storefronts',
  'Responsive UI Systems',
  'Hospitality & Education',
  'Interactive Portfolios',
];

const APPROACH_PILLARS = [
  {
    number: '01',
    title: 'Clear Hierarchy',
    text: 'Every layout leads the visitor effortlessly from headline proposition to action without visual clutter.',
  },
  {
    number: '02',
    title: 'Responsive Precision',
    text: 'Deliberately structured grids and touch-friendly controls across widescreen desktops, tablets, and mobile phones.',
  },
  {
    number: '03',
    title: 'Maintainable Code',
    text: 'Semantic markup, accessible contrast, and lightweight interactions built for smooth performance.',
  },
];

export function AboutSection() {
  const { ref, visible } = useReveal<HTMLElement>();

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Studio Capabilities Strip */}
      <div
        aria-label="Studio capabilities"
        className="border-b border-[#d0a14a]/25 bg-[#0e0d0a] py-3.5"
      >
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-6 gap-y-2 px-5 text-[11px] font-medium tracking-[0.2em] text-[#d4c29e] sm:px-8 lg:px-14">
          {CAPABILITIES.map((cap, index) => (
            <span key={cap} className="inline-flex items-center gap-6">
              <span className="uppercase">{cap}</span>
              {index < CAPABILITIES.length - 1 && (
                <span className="text-[#e7b84f]" aria-hidden="true">
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Section 01: About the Studio */}
      <section
        id="about"
        ref={ref}
        className={`reveal-section relative border-b border-[#c79c4b]/15 bg-[#090908] py-20 lg:py-28 ${
          visible ? 'is-visible' : ''
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#e2b75d]">
                01. THE STUDIO
              </p>
              <p className="mt-4 text-xs leading-relaxed text-[#958d7f]">
                Led by Soundhar P &amp; Raghul M
              </p>
            </div>

            <div className="lg:col-span-9">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-6">
                  <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-[#f6f3ec] text-balance sm:text-5xl">
                    We make your online presence{' '}
                    <span className="font-serif font-normal italic text-[#d9ad5d]">
                      matter.
                    </span>
                  </h2>
                </div>

                <div className="flex flex-col justify-between gap-6 lg:col-span-6">
                  <div className="space-y-4 text-sm leading-relaxed text-[#b7b0a4] sm:text-base">
                    <p>
                      Black Wolf Digital Studio is an independent web design and
                      development studio focused on clear, engaging, and
                      responsive digital experiences.
                    </p>
                    <p>
                      We combine structured layouts, thoughtful visual direction,
                      and practical frontend engineering so businesses, creators,
                      and institutions present their ideas with confidence.
                    </p>
                  </div>

                  <div>
                    <a
                      href="#contact"
                      onClick={handleScrollToContact}
                      className="inline-flex items-center gap-3 border-b border-[#d6a74a]/60 pb-2 text-xs font-semibold tracking-wider text-[#e0b65e] transition-colors hover:border-[#e7b94e] hover:text-[#f5d588] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e7b94e]"
                    >
                      <span>Let&apos;s create something meaningful</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Design & Engineering Approach Pillars */}
              <div className="mt-14 grid grid-cols-1 gap-4 border-t border-[#c79c4b]/20 pt-10 sm:grid-cols-3">
                {APPROACH_PILLARS.map((pillar) => (
                  <div
                    key={pillar.number}
                    className="border border-[#c79c4b]/20 bg-[#100f0c]/80 p-6 transition-colors duration-200 hover:border-[#d9ad5d]/45"
                  >
                    <span className="font-mono text-xs tabular-nums text-[#d7aa56]">
                      {pillar.number}
                    </span>
                    <h3 className="mt-3 font-display text-base font-bold text-[#f6f3ec]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#a69f91] sm:text-sm">
                      {pillar.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
