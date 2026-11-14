import { useEffect, useState, type FormEvent } from 'react';
import { ArrowUpRight, CheckCircle2, Copy, MessageSquare } from 'lucide-react';
import { PRICING_PLANS, SERVICES, TEAM_MEMBERS } from '../data/studioData';
import { useReveal } from '../hooks/useReveal';

interface ContactSectionProps {
  selectedService: string;
  selectionVersion?: number;
}

interface FormValues {
  name: string;
  email: string;
  type: string;
  details: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  type?: string;
  details?: string;
}

const SERVICE_OPTIONS = Array.from(
  new Set([
    ...PRICING_PLANS.map((p) => p.formOption),
    ...SERVICES.map((s) => s.formOption),
    'Other',
  ]),
);

export function ContactSection({
  selectedService,
  selectionVersion = 0,
}: ContactSectionProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    type: selectedService || '',
    details: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [preparedEnquiry, setPreparedEnquiry] = useState<FormValues | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setValues((prev) => ({ ...prev, type: selectedService }));
      setErrors((prev) => ({ ...prev, type: undefined }));
      setPreparedEnquiry(null);
    }
  }, [selectedService, selectionVersion]);

  const validate = (form: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};
    if (form.name.trim().length < 2) {
      nextErrors.name = 'Please enter your name (at least 2 characters).';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!form.type.trim()) {
      nextErrors.type = 'Please select a project type.';
    }
    if (form.details.trim().length < 10) {
      nextErrors.details =
        'Please describe your project (at least 10 characters).';
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setPreparedEnquiry({
      name: values.name.trim(),
      email: values.email.trim(),
      type: values.type,
      details: values.details.trim(),
    });
    setCopied(false);
  };

  const buildSummaryText = (enquiry: FormValues) =>
    [
      'Black Wolf Digital Studio — Project Enquiry',
      `Name: ${enquiry.name}`,
      `Email: ${enquiry.email}`,
      `Project Type: ${enquiry.type}`,
      `Details: ${enquiry.details}`,
    ].join('\n');

  const buildWhatsappHref = (baseUrl: string, enquiry: FormValues) =>
    `${baseUrl}?text=${encodeURIComponent(buildSummaryText(enquiry))}`;

  const handleCopyEnquiry = async () => {
    if (!preparedEnquiry) return;
    try {
      await navigator.clipboard.writeText(buildSummaryText(preparedEnquiry));
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const handleReset = () => {
    setPreparedEnquiry(null);
    setValues({ name: '', email: '', type: '', details: '' });
    setErrors({});
    setCopied(false);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`reveal-section relative bg-[radial-gradient(ellipse_at_5%_100%,#2b1f14_0%,#090807_52%)] py-20 lg:py-28 ${
        visible ? 'is-visible' : ''
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#e2b75d]">
          06. START A PROJECT
        </p>

        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Studio Team & WhatsApp Contacts */}
          <div className="lg:col-span-6">
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-[#f6f3ec] text-balance sm:text-5xl">
              Let&apos;s build something{' '}
              <span className="font-serif font-normal italic text-[#d9ad5d]">
                remarkable.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#b7b0a4] sm:text-base">
              Have a business website, storefront, or custom frontend idea in
              mind? Reach out directly via WhatsApp or prepare a structured
              enquiry brief using the form.
            </p>

            {/* Studio Team */}
            <div className="mt-10">
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#d9ad5d]">
                MEET THE STUDIO TEAM
              </p>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {TEAM_MEMBERS.map((member) => (
                  <div
                    key={member.name}
                    className="border border-[#d1a24b]/35 bg-[#12100d] p-4"
                  >
                    <span className="font-mono text-[10px] tracking-widest text-[#9f9278]">
                      {member.index} · STUDIO TEAM
                    </span>
                    <strong className="mt-2 block font-display text-sm font-bold tracking-wider text-[#f3e8d2]">
                      {member.name}
                    </strong>
                    <p className="mt-1 text-xs text-[#9e9585]">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp Contact */}
            <div className="mt-8">
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#d9ad5d]">
                WHATSAPP CONTACT
              </p>
              <div className="mt-3 space-y-2.5">
                {TEAM_MEMBERS.map((member) => (
                  <a
                    key={`wa-${member.name}`}
                    href={member.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-[56px] items-center justify-between gap-4 border border-[#b99a58]/35 bg-[#11120e] px-4 py-3 transition-colors duration-200 hover:border-[#d5b66b] hover:bg-[#192016] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e7b94e]"
                  >
                    <div className="flex items-center gap-3">
                      <MessageSquare
                        className="h-4 w-4 shrink-0 text-[#d7b967]"
                        aria-hidden="true"
                      />
                      <div>
                        <span className="block font-display text-xs font-bold tracking-wider text-[#f6f3ec]">
                          {member.name}
                        </span>
                        <span className="block text-xs text-[#a9a08e]">
                          WhatsApp direct enquiry
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#d7b967]">
                      <span>CHAT</span>
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 text-xs font-medium tracking-[0.22em] text-[#8e7954]">
              BLACK WOLF <span className="mx-2 text-[#d7ad5b]">·</span> DIGITAL STUDIO
            </div>
          </div>

          {/* Right Column: Validated Enquiry Builder */}
          <div className="lg:col-span-6">
            {preparedEnquiry ? (
              <div
                role="status"
                aria-live="polite"
                className="border border-[#d3a64e]/55 bg-[#12100d] p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 text-[#e7b94e]">
                  <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <h3 className="font-display text-xl font-bold text-[#f6f3ec]">
                    Enquiry Brief Prepared
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#b7b0a4]">
                  Your enquiry has been validated and formatted locally. Because
                  this static portfolio does not store or auto-send form data on
                  a backend server, send your brief directly via WhatsApp or copy
                  it below.
                </p>

                <dl className="mt-5 space-y-2.5 border-y border-[#c79c4b]/20 py-4 text-xs sm:text-sm">
                  <div className="flex flex-wrap justify-between gap-2">
                    <dt className="text-[#9e9585]">Name</dt>
                    <dd className="text-[#f6f3ec]">{preparedEnquiry.name}</dd>
                  </div>
                  <div className="flex flex-wrap justify-between gap-2">
                    <dt className="text-[#9e9585]">Reply Email</dt>
                    <dd className="text-[#f6f3ec]">{preparedEnquiry.email}</dd>
                  </div>
                  <div className="flex flex-wrap justify-between gap-2">
                    <dt className="text-[#9e9585]">Project Type</dt>
                    <dd className="text-[#e7b94e]">{preparedEnquiry.type}</dd>
                  </div>
                  <div>
                    <dt className="text-[#9e9585]">Project Description</dt>
                    <dd className="mt-1 leading-relaxed text-[#d9d2c5]">
                      {preparedEnquiry.details}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-wrap gap-3">
                  {TEAM_MEMBERS.map((member) => (
                    <a
                      key={`send-${member.name}`}
                      href={buildWhatsappHref(member.whatsappUrl, preparedEnquiry)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-2 border border-[#e7b94e] bg-gradient-to-r from-[#c38b33] to-[#edd07c] px-4 py-2.5 text-xs font-bold tracking-wider text-[#150f06] transition-transform hover:-translate-y-0.5"
                    >
                      <MessageSquare className="h-4 w-4" aria-hidden="true" />
                      <span>Send to {member.name}</span>
                    </a>
                  ))}

                  <button
                    type="button"
                    onClick={handleCopyEnquiry}
                    className="inline-flex min-h-[44px] items-center gap-2 border border-[#d3a64e]/55 bg-[#161410] px-4 py-2.5 text-xs font-semibold tracking-wider text-[#f2c96f] transition-colors hover:bg-[#d3a64e]/15"
                  >
                    <Copy className="h-4 w-4" aria-hidden="true" />
                    <span>{copied ? 'Copied Brief' : 'Copy Enquiry Text'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex min-h-[44px] items-center border border-white/15 px-4 py-2.5 text-xs font-medium text-[#c2bcb0] transition-colors hover:border-white/35 hover:text-[#f6f3ec]"
                  >
                    Edit Brief
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="grid gap-5 border border-[#c79c4b]/30 bg-[#0e0d0b]/95 p-6 backdrop-blur-sm sm:p-8"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium tracking-wider text-[#d3c8b4]"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={values.name}
                    onChange={(e) => {
                      setValues((prev) => ({ ...prev, name: e.target.value }));
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    className="mt-2 min-h-[46px] w-full border border-[#d1a24b]/30 bg-[#141310] px-4 py-3 text-sm text-[#f2ede3] placeholder-[#7d7668] outline-none transition-colors focus:border-[#e0b55f]"
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="mt-1.5 text-xs text-[#f29b7e]">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium tracking-wider text-[#d3c8b4]"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={values.email}
                    onChange={(e) => {
                      setValues((prev) => ({ ...prev, email: e.target.value }));
                      if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    className="mt-2 min-h-[46px] w-full border border-[#d1a24b]/30 bg-[#141310] px-4 py-3 text-sm text-[#f2ede3] placeholder-[#7d7668] outline-none transition-colors focus:border-[#e0b55f]"
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="mt-1.5 text-xs text-[#f29b7e]">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-type"
                    className="block text-xs font-medium tracking-wider text-[#d3c8b4]"
                  >
                    Project Type
                  </label>
                  <select
                    id="contact-type"
                    name="type"
                    required
                    value={values.type}
                    onChange={(e) => {
                      setValues((prev) => ({ ...prev, type: e.target.value }));
                      if (errors.type) setErrors((prev) => ({ ...prev, type: undefined }));
                    }}
                    aria-invalid={Boolean(errors.type)}
                    aria-describedby={errors.type ? 'contact-type-error' : undefined}
                    className="mt-2 min-h-[46px] w-full border border-[#d1a24b]/30 bg-[#141310] px-4 py-3 text-sm text-[#f2ede3] outline-none transition-colors focus:border-[#e0b55f]"
                  >
                    <option value="">Select a service</option>
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.type && (
                    <p id="contact-type-error" className="mt-1.5 text-xs text-[#f29b7e]">
                      {errors.type}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-details"
                    className="block text-xs font-medium tracking-wider text-[#d3c8b4]"
                  >
                    Project Description
                  </label>
                  <textarea
                    id="contact-details"
                    name="details"
                    rows={4}
                    required
                    value={values.details}
                    onChange={(e) => {
                      setValues((prev) => ({ ...prev, details: e.target.value }));
                      if (errors.details) setErrors((prev) => ({ ...prev, details: undefined }));
                    }}
                    placeholder="Share your goals, key pages, or desired timeline..."
                    aria-invalid={Boolean(errors.details)}
                    aria-describedby={errors.details ? 'contact-details-error' : undefined}
                    className="mt-2 w-full resize-y border border-[#d1a24b]/30 bg-[#141310] px-4 py-3 text-sm text-[#f2ede3] placeholder-[#7d7668] outline-none transition-colors focus:border-[#e0b55f]"
                  />
                  {errors.details && (
                    <p id="contact-details-error" className="mt-1.5 text-xs text-[#f29b7e]">
                      {errors.details}
                    </p>
                  )}
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    className="inline-flex min-h-[48px] items-center gap-3 border border-[#e7b94e] bg-gradient-to-r from-[#c38b33] to-[#edd07c] px-6 py-3 text-xs font-bold tracking-wider text-[#150f06] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e7b94e]"
                  >
                    <span>Prepare Enquiry</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>

                <p className="text-xs leading-relaxed text-[#8b8273]">
                  Note: This form prepares your enquiry brief locally for
                  WhatsApp or clipboard sharing. It does not store or transmit
                  submissions automatically.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
