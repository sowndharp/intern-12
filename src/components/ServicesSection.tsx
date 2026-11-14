import {
  ArrowUpRight,
  Briefcase,
  Camera,
  Code2,
  GraduationCap,
  LayoutGrid,
  ShoppingBag,
  Sparkles,
  Utensils,
} from 'lucide-react';
import { SERVICES, type ServiceItem } from '../data/studioData';
import { useReveal } from '../hooks/useReveal';

interface ServicesSectionProps {
  onSelectService: (serviceFormOption: string) => void;
}

function ServiceIcon({ name }: { name: ServiceItem['iconName'] }) {
  const iconClass = 'h-5 w-5 text-[#e0b35b]';
  switch (name) {
    case 'briefcase':
      return <Briefcase className={iconClass} aria-hidden="true" />;
    case 'shopping-bag':
      return <ShoppingBag className={iconClass} aria-hidden="true" />;
    case 'layout':
      return <LayoutGrid className={iconClass} aria-hidden="true" />;
    case 'camera':
      return <Camera className={iconClass} aria-hidden="true" />;
    case 'utensils':
      return <Utensils className={iconClass} aria-hidden="true" />;
    case 'graduation-cap':
      return <GraduationCap className={iconClass} aria-hidden="true" />;
    case 'code':
      return <Code2 className={iconClass} aria-hidden="true" />;
    case 'sparkles':
      return <Sparkles className={iconClass} aria-hidden="true" />;
  }
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  const handleCardClick = (formOption: string) => {
    onSelectService(formOption);
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="services"
      ref={ref}
      className={`reveal-section relative border-b border-[#c79c4b]/15 bg-gradient-to-b from-[#11100d] via-[#0c0b09] to-[#080808] py-20 lg:py-28 ${
        visible ? 'is-visible' : ''
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#e2b75d]">
              02. WHAT WE DO
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-[#f6f3ec] text-balance sm:text-5xl">
              Digital solutions.{' '}
              <span className="block font-serif font-normal italic text-[#d9ad5d]">
                Built around you.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#aba397]">
            Eight focused web design and development services built to take your
            business or creative project from initial concept to launch.
          </p>
        </div>

        <div className="grid grid-cols-1 border-t border-l border-[#c9a04c]/30 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => handleCardClick(service.formOption)}
              className="group relative flex min-h-[240px] flex-col justify-between border-r border-b border-[#c9a04c]/30 bg-gradient-to-br from-[#15140f]/95 to-[#0b0b0a] p-6 text-left transition-colors duration-200 hover:from-[#241d12] hover:to-[#11100c] focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#e7b94e]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tabular-nums text-[#cba153]">
                    {service.number}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-[#dcb45e] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>

                <div className="mt-5 inline-flex h-10 w-10 items-center justify-center border border-[#d7aa50]/30 bg-[#17140d]">
                  <ServiceIcon name={service.iconName} />
                </div>

                <h3 className="mt-4 font-display text-base font-bold leading-snug text-[#f6f3ec]">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#a69f91] sm:text-sm">
                  {service.description}
                </p>
              </div>

              <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-[#d9ad5d] transition-colors group-hover:text-[#f2cf78]">
                <span>Request this service</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
