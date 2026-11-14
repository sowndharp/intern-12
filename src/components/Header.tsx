import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const sectionIds = NAV_LINKS.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string, id: string) => {
    setMenuOpen(false);
    setActiveSection(id);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 h-20 border-b border-[#c79c4b]/25 bg-[#070707]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between gap-8 px-5 sm:px-8 lg:px-14">
        {/* Zone 1: Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home', 'home');
          }}
          className="flex shrink-0 items-center gap-3 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e7b94e]"
        >
          <span className="grid h-10 w-10 place-items-center border border-[#d7aa50] bg-[#120f09] font-serif text-lg tracking-tight text-[#e7bd69]">
            BW
          </span>
          <span className="font-display text-sm font-bold tracking-[0.18em] text-[#f6f3ec]">
            BLACK WOLF
          </span>
        </a>

        {/* Zone 2: Desktop Navigation */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex lg:gap-9">
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href, item.id);
                }}
                className={`relative whitespace-nowrap shrink-0 py-1.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e7b94e] ${
                  isActive ? 'text-[#e9bd67]' : 'text-[#d0cbc0] hover:text-[#e9bd67]'
                }`}
              >
                <span>{item.label}</span>
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-[1.5px] bg-[#e7b94e] transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary CTA + Mobile Toggle */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact', 'contact');
            }}
            className="hidden shrink-0 items-center gap-2 whitespace-nowrap border border-[#d3a64e] bg-[#d3a64e]/10 px-4 py-2.5 text-xs font-semibold tracking-wider text-[#f2c96f] transition-colors duration-200 hover:bg-[#d3a64e] hover:text-[#120d05] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e7b94e] sm:inline-flex"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center border border-[#d3a64e]/45 bg-[#12100c] text-[#e9bd67] transition-colors hover:border-[#d3a64e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e7b94e] md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-b border-[#c79c4b]/35 bg-[#0b0b0a]/98 px-5 py-5 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, item.id);
                  }}
                  className={`flex min-h-[44px] items-center justify-between border-b border-white/5 px-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-[#e9bd67]' : 'text-[#e5dfd2] hover:text-[#e9bd67]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="h-1.5 w-1.5 bg-[#e7b94e]" aria-hidden="true" />}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact', 'contact');
              }}
              className="mt-4 flex min-h-[46px] items-center justify-center gap-2 border border-[#d3a64e] bg-gradient-to-r from-[#c38b33] to-[#edd07c] px-4 text-xs font-bold tracking-wider text-[#150f06]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
