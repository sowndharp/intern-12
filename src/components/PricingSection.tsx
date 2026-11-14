import { ArrowUpRight, Check } from 'lucide-react';
import { PRICING_PLANS } from '../data/studioData';
import { useReveal } from '../hooks/useReveal';

interface PricingSectionProps {
  onSelectService: (serviceFormOption: string) => void;
}

export function PricingSection({ onSelectService }: PricingSectionProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  const handleGetQuote = (formOption: string) => {
    onSelectService(formOption);
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="pricing"
      ref={ref}
      className={`reveal-section relative border-b border-[#c79c4b]/15 bg-[#090908] py-20 lg:py-28 ${
        visible ? 'is-visible' : ''
      }`}
    >
      {/* Subtle layered radial warmth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_15%,rgba(215,170,80,0.06)_0%,transparent_55%)]"
      />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#e2b75d]">
              03. INVESTMENT &amp; PACKAGES
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-[#f6f3ec] text-balance sm:text-5xl">
              OUR SERVICES &amp;{' '}
              <span className="font-serif font-normal italic text-[#d9ad5d]">
                PRICING
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#aba397] sm:text-base">
            Transparent starting prices for professional website solutions.
          </p>
        </div>

        {/* 8-Card Pricing Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRICING_PLANS.map((plan) => {
            const isCustom = Boolean(plan.featured);

            return (
              <article
                key={plan.id}
                className={`group relative flex h-full flex-col justify-between border p-6 transition-all duration-200 hover:-translate-y-1 ${
                  isCustom
                    ? 'border-[#d7aa50]/70 bg-gradient-to-br from-[#1b160c] via-[#13100a] to-[#0b0a08] shadow-[0_14px_40px_rgba(215,170,80,0.08)]'
                    : 'border-[#c79c4b]/25 bg-[#0f0e0c] hover:border-[#d7aa50]/60'
                }`}
              >
                {isCustom && (
                  <>
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute top-0 right-0 h-5 w-5 border-t border-r border-[#e7b94e]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-0 left-0 h-5 w-5 border-b border-l border-[#e7b94e]"
                    />
                  </>
                )}

                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs tabular-nums text-[#cba153]">
                      {plan.number}
                    </span>
                    <span className="text-[10px] font-semibold tracking-[0.18em] text-[#d9ad5d] uppercase">
                      {isCustom ? 'Bespoke Scope' : 'Website Package'}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold leading-snug text-[#f6f3ec]">
                    {plan.title}
                  </h3>

                  <div className="mt-4 border-y border-[#c79c4b]/20 py-4">
                    <p className="text-[11px] font-medium tracking-wider text-[#a69c8a] uppercase">
                      {plan.priceLabel}
                    </p>
                    <p
                      className={`mt-1 font-display font-extrabold tracking-tight tabular-nums ${
                        isCustom
                          ? 'text-2xl text-[#e7b94e]'
                          : 'text-3xl text-[#f3e3bd]'
                      }`}
                    >
                      {plan.priceValue}
                    </p>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-[#aca496] sm:text-sm">
                    {plan.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-xs leading-relaxed text-[#d8d1c4]"
                      >
                        <Check
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#e2b75d]"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 pt-2">
                  <button
                    type="button"
                    onClick={() => handleGetQuote(plan.formOption)}
                    className={`inline-flex min-h-[44px] w-full items-center justify-between border px-4 py-2.5 text-xs font-bold tracking-wider transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e7b94e] ${
                      isCustom
                        ? 'border-[#e7b94e] bg-gradient-to-r from-[#c38b33] to-[#edd07c] text-[#150f06] hover:brightness-105'
                        : 'border-[#d3a64e]/55 bg-[#15130f] text-[#f2c96f] hover:border-[#e7b94e] hover:bg-[#d3a64e] hover:text-[#120d05]'
                    }`}
                  >
                    <span>Get a Quote</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Pricing Conditions & Review Note */}
        <div className="mt-10 border border-[#c79c4b]/20 bg-[#0d0c0a] p-5 sm:p-6">
          <p className="text-xs leading-relaxed text-[#a8a092] sm:text-sm">
            All prices are starting estimates. Final pricing depends on project
            requirements, number of pages, features, integrations and content.
            Domain, hosting, paid third-party services and other external
            charges may be additional.
          </p>
          <p className="mt-2.5 text-xs font-medium leading-relaxed text-[#d9ad5d] sm:text-sm">
            Every project is individually reviewed before a final quotation is
            provided.
          </p>
        </div>
      </div>
    </section>
  );
}
