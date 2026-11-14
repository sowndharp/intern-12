import { type CSSProperties } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

const GOLD_PARTICLES = [
  { left: '8%', top: '76%', size: 2, duration: '11s', delay: '0s' },
  { left: '16%', top: '52%', size: 3, duration: '13s', delay: '2s' },
  { left: '24%', top: '84%', size: 2, duration: '9.5s', delay: '1.2s' },
  { left: '34%', top: '38%', size: 2, duration: '12s', delay: '3.5s' },
  { left: '43%', top: '70%', size: 3, duration: '10.5s', delay: '0.8s' },
  { left: '54%', top: '26%', size: 2, duration: '14s', delay: '2.6s' },
  { left: '63%', top: '82%', size: 2, duration: '11.5s', delay: '1.8s' },
  { left: '74%', top: '46%', size: 3, duration: '12.5s', delay: '0.4s' },
  { left: '85%', top: '68%', size: 2, duration: '10s', delay: '2.9s' },
  { left: '92%', top: '32%', size: 2, duration: '13.5s', delay: '1.4s' },
];

export function Hero() {
  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[620px] items-center overflow-hidden border-b border-[#c79c4b]/25 bg-[#070707] pt-16 pb-20 sm:min-h-[680px] sm:pt-20 sm:pb-24 lg:min-h-[760px] lg:py-28"
    >
      {/* Full-Width CSS Background Image (/assets/black-wolf-hero.png) */}
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
        <div className="hero-bg-layer absolute inset-0 opacity-80" />
      </div>

      {/* Balanced Directional & Vertical Scrim + Subtle Gold Atmospheric Lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        {/* Mobile & Tablet readability scrim */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(7,7,7,0.84) 0%, rgba(7,7,7,0.72) 55%, rgba(7,7,7,0.92) 100%)',
          }}
        />
        {/* Desktop directional scrim: preserves dark readable text on left while keeping wolf emblem & studio clear on right */}
        <div
          className="hidden md:block absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, #070707 0%, rgba(7,7,7,0.94) 30%, rgba(7,7,7,0.68) 54%, rgba(7,7,7,0.22) 100%), linear-gradient(0deg, #080808 0%, transparent 22%, rgba(7,7,7,0.35) 100%)',
          }}
        />

        {/* Subtle warm gold ambient light */}
        <div
          className="animate-ambient-drift absolute -top-24 right-[10%] h-[420px] w-[420px] rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(215,170,80,0.16) 0%, rgba(185,130,46,0.04) 50%, transparent 74%)',
          }}
        />

        {/* Subtle gold dust particles */}
        {GOLD_PARTICLES.map((particle, idx) => (
          <span
            key={idx}
            className="animate-particle absolute rounded-full bg-[#edd07c]/60"
            style={
              {
                left: particle.left,
                top: particle.top,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                '--particle-duration': particle.duration,
                '--particle-delay': particle.delay,
              } as CSSProperties
            }
          />
        ))}
      </div>

      {/* Hero Foreground Content */}
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="animate-hero-enter max-w-2xl">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-[#e2b75d]">
            <span className="h-px w-8 bg-[#d8aa4d]" aria-hidden="true" />
            <span>DREAM · DESIGN · DEVELOP</span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.0] tracking-tight text-[#f6f3ec] text-balance sm:text-6xl lg:text-[68px]">
            BLACK WOLF
            <span className="mt-1.5 block bg-gradient-to-r from-[#d7a84e] via-[#f1d17e] to-[#c9953b] bg-clip-text text-transparent">
              DIGITAL STUDIO
            </span>
          </h1>

          <p className="mt-6 text-lg font-medium leading-snug text-[#f4efe6] sm:text-xl">
            Turning your ideas into{' '}
            <span className="font-serif text-2xl italic text-[#e9bd67]">
              powerful digital experiences.
            </span>
          </p>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#ccc5b8] sm:text-base">
            We are an independent web design and frontend development studio
            building modern, responsive websites that give businesses,
            institutions, and creators a confident online presence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#projects');
              }}
              className="inline-flex min-h-[48px] items-center gap-3 border border-[#e7b94e] bg-gradient-to-r from-[#c38b33] to-[#edd07c] px-6 py-3 text-xs font-bold tracking-wider text-[#150f06] shadow-[0_8px_28px_rgba(215,170,80,0.22)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e7b94e]"
            >
              <span>Explore Our Work</span>
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="inline-flex min-h-[48px] items-center gap-3 border border-[#d5a94d]/65 bg-[#080808]/75 px-6 py-3 text-xs font-bold tracking-wider text-[#f0c56c] backdrop-blur-sm transition-colors duration-200 hover:border-[#e7b94e] hover:bg-[#d5a94d]/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e7b94e]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#c79c4b]/25 pt-5 text-xs tracking-wider text-[#bfb6a6]">
            <span>Independent Web Design &amp; Development Studio</span>
            <span aria-hidden="true" className="text-[#c79c4b]">
              ·
            </span>
            <span>Responsive Desktop &amp; Mobile Architecture</span>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Anchor */}
      <div className="mx-auto hidden w-full max-w-[1440px] justify-between px-5 sm:px-8 lg:absolute lg:inset-x-0 lg:bottom-6 lg:flex lg:px-14">
        <button
          type="button"
          onClick={() => scrollToSection('#about')}
          className="inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] text-[#cbbd9f] transition-colors hover:text-[#e7b94e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e7b94e]"
        >
          <span>SCROLL TO EXPLORE</span>
          <span className="h-px w-12 bg-[#d1a54e]" aria-hidden="true" />
        </button>
        <span className="text-[11px] tracking-[0.2em] text-[#cbb07b]">
          BW / STUDIO
        </span>
      </div>
    </section>
  );
}
