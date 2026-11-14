import { useMemo, useState } from 'react';
import { ArrowUpRight, Image as ImageIcon } from 'lucide-react';
import {
  PROJECT_FILTERS,
  PROJECTS,
  type ProjectFilterId,
  type ProjectItem,
} from '../data/studioData';
import { useReveal } from '../hooks/useReveal';

function ProjectCard({ project }: { project: ProjectItem }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="group flex h-full flex-col border border-[#c79c4b]/25 bg-[#0e0d0b] transition-colors duration-200 hover:border-[#e7b94e]/75">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} live concept demo in a new tab`}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-[#171511] focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#e7b94e]"
      >
        {!imageFailed ? (
          <img
            src={project.image}
            alt={project.alt}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#191610] to-[#0a0908] p-6 text-center">
            <ImageIcon className="h-7 w-7 text-[#d7aa50]/70" aria-hidden="true" />
            <span className="font-display text-sm font-semibold text-[#e7bd69]">
              {project.title}
            </span>
          </div>
        )}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/25 to-transparent"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
          <span className="text-[10px] font-semibold tracking-[0.18em] text-[#edd07c] uppercase">
            {project.categoryLabel}
          </span>
          <span className="font-mono text-xs tabular-nums text-[#d8c49a]">
            {project.number}
          </span>
        </div>
      </a>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <h3 className="font-display text-lg font-bold tracking-tight text-[#f6f3ec]">
            {project.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-[#a69f91]">
            {project.subtitle}
          </p>
        </div>

        <div className="mt-5 border-t border-[#c79c4b]/15 pt-4">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[42px] w-full items-center justify-between border border-[#d3a64e]/55 bg-[#15130f] px-4 py-2 text-xs font-semibold tracking-wider text-[#f2c96f] transition-colors duration-200 hover:border-[#e7b94e] hover:bg-[#d3a64e] hover:text-[#120d05] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e7b94e]"
          >
            <span>View Project</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterId>('all');
  const { ref, visible } = useReveal<HTMLElement>();

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return PROJECTS;
    return PROJECTS.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section
      id="projects"
      ref={ref}
      className={`reveal-section relative border-b border-[#c79c4b]/15 bg-[#080808] py-20 lg:py-28 ${
        visible ? 'is-visible' : ''
      }`}
    >
      {/* Compatibility anchor for #work */}
      <div id="work" className="-mt-20 pt-20" aria-hidden="true" />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#e2b75d]">
              03. SELECTED BUILDS
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-[#f6f3ec] text-balance sm:text-5xl">
              Ideas brought{' '}
              <span className="block font-serif font-normal italic text-[#d9ad5d]">
                to the screen.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#aba397]">
            Browse our interactive website concepts and live demo builds across
            e-commerce, hospitality, fitness, education, photography, travel, and
            analytics interfaces.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div
          role="group"
          aria-label="Filter projects by category"
          className="mt-10 flex flex-wrap items-center gap-2"
        >
          {PROJECT_FILTERS.map((filter) => {
            const filterId = filter.id;
            const isActive = activeFilter === filterId;
            const count =
              filterId === 'all'
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.categories.includes(filterId)).length;

            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter.id)}
                className={`inline-flex min-h-[40px] shrink-0 items-center gap-2 whitespace-nowrap border px-3.5 py-2 text-xs font-semibold tracking-wider transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e7b94e] ${
                  isActive
                    ? 'border-[#d3a54b] bg-[#d3a54b] text-[#100d08]'
                    : 'border-[#b88d41]/35 bg-[#0e0d0b] text-[#c8c0b2] hover:border-[#d3a54b] hover:text-[#f2c96f]'
                }`}
              >
                <span>{filter.label}</span>
                <span
                  className={`font-mono text-[11px] tabular-nums ${
                    isActive ? 'text-[#100d08]/80' : 'text-[#9b8f79]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <p className="mt-10 border-t border-[#c79c4b]/15 pt-6 text-xs leading-relaxed text-[#8d8578]">
          All showcased entries are studio concept builds and interactive demo
          websites created to demonstrate design and frontend capabilities.
          Each card opens its live demo safely in a new tab.
        </p>
      </div>
    </section>
  );
}
