import { ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#d1a24b]/25 bg-[#070707] py-12">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="inline-flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e7b94e]"
          >
            <span className="grid h-10 w-10 place-items-center border border-[#d7aa50] bg-[#120f09] font-serif text-lg tracking-tight text-[#e7bd69]">
              BW
            </span>
            <span>
              <strong className="block font-display text-xs tracking-[0.2em] text-[#f6f3ec]">
                BLACK WOLF
              </strong>
              <small className="block text-[10px] tracking-[0.25em] text-[#d5a84e]">
                DIGITAL STUDIO
              </small>
            </span>
          </a>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-6 text-xs text-[#aba397]">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="transition-colors hover:text-[#e9bd67]"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#about');
              }}
              className="transition-colors hover:text-[#e9bd67]"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#services');
              }}
              className="transition-colors hover:text-[#e9bd67]"
            >
              Services
            </a>
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#pricing');
              }}
              className="transition-colors hover:text-[#e9bd67]"
            >
              Pricing
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#projects');
              }}
              className="transition-colors hover:text-[#e9bd67]"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="transition-colors hover:text-[#e9bd67]"
            >
              Contact
            </a>
          </nav>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex min-h-[42px] items-center gap-2 self-start border border-[#d1a24b]/35 bg-[#100f0c] px-4 py-2 text-xs font-semibold tracking-wider text-[#e0b65e] transition-colors hover:border-[#e0b65e] hover:bg-[#e0b65e]/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e7b94e] sm:self-auto"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-2 border-t border-white/10 pt-5 text-xs text-[#80796c] sm:flex-row sm:items-center">
          <span>
            © {currentYear} Black Wolf Digital Studio. Independent web design &amp; development.
          </span>
          <span className="tracking-widest text-[#948a78]">DESIGNED WITH INTENT</span>
        </div>
      </div>
    </footer>
  );
}
