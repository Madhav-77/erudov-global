import { useState } from 'react';
import {
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  FileCheck,
  School,
  BookOpen,
  BadgeDollarSign,
  MapPin,
  CheckCircle,
  MessageCircle,
  Home,
} from 'lucide-react';
import { SERVICES_CONTENT } from '../constants/services';
import { whatsappUrl } from '../utils/whatsapp';

interface ServiceDetailProps {
  serviceId: string;
}

// ─── Service nav config ───────────────────────────────────────────────────────

const SERVICE_NAV = [
  { id: 'career-counselling',       label: 'Career Counselling',       Icon: GraduationCap },
  { id: 'visa-assistance',          label: 'Visa Assistance',           Icon: FileCheck },
  { id: 'university-selection',     label: 'University Selection',      Icon: School },
  { id: 'course-selection',         label: 'Course Selection',          Icon: BookOpen },
  { id: 'education-loan-support',   label: 'Education Loan Support',    Icon: BadgeDollarSign },
  { id: 'pre-departure-orientation',label: 'Pre-Departure Orientation', Icon: MapPin },
];

// ─── Helper components ────────────────────────────────────────────────────────

function QuickStatBar({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border border-brand-light rounded-xl overflow-hidden mt-8">
      {stats.map((s, i) => (
        <div
          key={i}
          className={`px-6 py-5 bg-white ${i < stats.length - 1 ? 'border-r border-b md:border-b-0 border-brand-light' : ''}`}
        >
          <div className="text-xl font-extrabold text-brand-navy leading-tight">{s.value}</div>
          <div className="text-xs text-brand-gray font-medium mt-1 tracking-wide uppercase">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

function FAQAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-brand-light">
      {faqs.map((faq, i) => (
        <div key={i} className="py-5">
          <button
            className="w-full flex items-start justify-between text-left gap-4"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-semibold text-brand-dark text-base leading-snug">{faq.question}</span>
            {open === i ? (
              <ChevronUp className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
            ) : (
              <ChevronDown className="w-5 h-5 text-brand-gray flex-shrink-0 mt-0.5" />
            )}
          </button>
          {open === i && (
            <p className="mt-3 text-sm text-brand-gray leading-relaxed">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold tracking-widest uppercase text-brand-gold mb-2">{children}</p>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ServiceDetail({ serviceId }: ServiceDetailProps) {
  const service = SERVICES_CONTENT[serviceId];

  const goHome = () => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'home' } }));
    window.scrollTo({ top: 0 });
  };

  const goToService = (id: string) => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'service', serviceId: id } }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-brand-gray text-lg">Service not found.</p>
          <button onClick={goHome} className="mt-4 text-brand-navy font-semibold underline">
            Back to home
          </button>
        </div>
      </div>
    );
  }

  const activeNav = SERVICE_NAV.find(s => s.id === serviceId)!;
  const ActiveIcon = activeNav?.Icon ?? GraduationCap;

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-brand-cream via-white to-brand-gold/5 pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={goHome}
            className="flex items-center space-x-2 text-brand-gray hover:text-brand-navy transition-colors mb-6 font-semibold"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-start space-x-5">
            <div className="w-16 h-16 rounded-2xl bg-brand-navy flex items-center justify-center flex-shrink-0 mt-1">
              <ActiveIcon className="w-8 h-8 text-brand-gold" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-bold tracking-widest uppercase text-brand-gold mb-1">Our Services</div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy leading-tight">
                {service.title}
              </h1>
              <p className="text-lg text-brand-gray mt-2 max-w-2xl leading-relaxed">
                {service.tagline}
              </p>
              <QuickStatBar stats={service.quickStats} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Services nav bar ────────────────────────────────────────────────── */}
      <section className="border-b border-brand-light bg-white sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-1 overflow-x-auto">
            {/* Home link */}
            <button
              onClick={goHome}
              className="py-4 px-3 flex items-center gap-1.5 font-semibold border-b-2 border-transparent text-brand-gray hover:text-brand-dark transition-colors whitespace-nowrap text-sm flex-shrink-0"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <span className="text-brand-light text-lg flex-shrink-0">›</span>
            {SERVICE_NAV.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => goToService(id)}
                className={`py-4 px-3 flex items-center gap-1.5 font-semibold border-b-2 transition-colors whitespace-nowrap text-sm flex-shrink-0 ${
                  id === serviceId
                    ? 'border-brand-gold text-brand-gold'
                    : 'border-transparent text-brand-gray hover:text-brand-dark'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Content ────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 min-h-[60vh]">

        {/* Intro */}
        <div className="max-w-3xl">
          <SectionLabel>Overview</SectionLabel>
          <p className="text-brand-gray leading-relaxed text-lg">{service.intro}</p>
        </div>

        {/* Sections */}
        {service.sections.map((section, idx) => (
          <div key={idx} className="max-w-3xl">
            <h2 className="text-2xl font-extrabold text-brand-navy mb-4">{section.heading}</h2>
            {section.paragraphs.map((p, pi) => (
              <p key={pi} className="text-brand-gray leading-relaxed mb-4">{p}</p>
            ))}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="mt-2 space-y-2">
                {section.bullets.map((b, bi) => (
                  <li key={bi} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0 mt-1" />
                    <span className="text-brand-gray text-sm leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Divider */}
        <hr className="border-brand-light" />

        {/* FAQs */}
        <div className="max-w-3xl">
          <SectionLabel>Frequently Asked Questions</SectionLabel>
          <h2 className="text-3xl font-extrabold text-brand-navy mb-8">Common Questions</h2>
          <FAQAccordion faqs={service.faqs} />
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-brand-navy to-brand-navy-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <SectionLabel>Get Started</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 mt-2">{service.title}</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">{service.cta}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))}
              className="px-8 py-3.5 bg-brand-gold text-white font-semibold rounded-xl hover:bg-brand-gold-dark transition-colors"
            >
              Book Free Consultation
            </button>
            <a
              href={whatsappUrl('Hi! I\'d like to know more about your ' + service.title + ' service.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
