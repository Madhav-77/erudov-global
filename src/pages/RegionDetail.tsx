import { useState } from 'react';
import {
  ChevronLeft,
  Users,
  GraduationCap,
  Globe,
  FileText,
  Phone,
  BookOpen,
  MapPin,
  Languages,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { REGIONS, REGION_DETAILS, REGION_RICH_CONTENT, LIVING_COSTS } from '../constants/regions';
import { whatsappUrl } from '../utils/whatsapp';

interface RegionDetailProps {
  regionCode?: string;
}

// ─── Small helper components ──────────────────────────────────────────────────

function QuickStatBar({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border border-brand-light rounded-xl overflow-hidden mt-8">
      {stats.map((s, i) => (
        <div
          key={i}
          className={`px-6 py-5 bg-white ${i < stats.length - 1 ? 'border-r border-b md:border-b-0 border-brand-light' : ''}`}
        >
          <div className="text-2xl font-extrabold text-brand-navy leading-tight">{s.value}</div>
          <div className="text-xs text-brand-gray font-medium mt-1 tracking-wide uppercase">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

function Callout({ children, type = 'default' }: { children: React.ReactNode; type?: 'default' | 'teal' | 'gold' }) {
  const styles = {
    default: 'border-brand-navy/40 bg-brand-navy/5 text-brand-dark',
    teal: 'border-emerald-600 bg-emerald-50 text-emerald-900',
    gold: 'border-brand-gold bg-brand-gold/10 text-amber-900',
  };
  return (
    <div className={`border-l-4 rounded-r-lg px-5 py-4 my-6 text-sm leading-relaxed ${styles[type]}`}>
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold tracking-widest uppercase text-brand-gold mb-2">{children}</p>
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

// ─── Main component ───────────────────────────────────────────────────────────

export default function RegionDetail({ regionCode = 'KR' }: RegionDetailProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const region = REGIONS.find(r => r.code === regionCode);
  const details = REGION_DETAILS[region?.name || 'Korea'];
  const rich = region ? REGION_RICH_CONTENT[region.name] : undefined;

  if (!region || !details) {
    return (
      <div className="min-h-screen bg-brand-cream pt-20 flex items-center justify-center text-brand-dark">
        Region not found
      </div>
    );
  }

  const tabs = rich
    ? ['overview', 'universities', 'finance', 'visa', 'practical']
    : ['overview', 'finance', 'education', 'career', 'practical'];

  const tabLabels: Record<string, string> = {
    overview: 'Overview',
    universities: 'Universities',
    finance: 'Finance & Aid',
    visa: 'Visa Process',
    practical: 'Practical Info',
    education: 'Education',
    career: 'Career',
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-cream via-white to-brand-gold/5 pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'home' } }))}
            className="flex items-center space-x-2 text-brand-gray hover:text-brand-navy transition-colors mb-6 font-semibold"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-start space-x-5">
            <span className="text-6xl leading-none">{region.flag}</span>
            <div className="flex-1">
              <div className="text-xs font-bold tracking-widest uppercase text-brand-gold mb-1">Destination Guide</div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy leading-tight">
                Study in {details.name}
              </h1>
              <p className="text-lg text-brand-gray mt-2 max-w-2xl leading-relaxed">
                {rich ? rich.heroTagline : details.description}
              </p>
              {rich && <QuickStatBar stats={rich.quickStats} />}
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="border-b border-brand-light bg-white sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-4 font-semibold border-b-2 transition-colors whitespace-nowrap text-sm ${
                  activeTab === tab
                    ? 'border-brand-gold text-brand-gold'
                    : 'border-transparent text-brand-gray hover:text-brand-dark'
                }`}
              >
                {tabLabels[tab] ?? tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 min-h-[60vh]">
        <div className="max-w-7xl mx-auto">

          {/* ── OVERVIEW ── */}
          {activeTab === 'overview' && (
            <div className="max-w-3xl">
              {rich ? (
                <>
                  <SectionLabel>Why {details.name}</SectionLabel>
                  <h2 className="text-3xl font-extrabold text-brand-navy mb-6">{rich.whyTitle}</h2>
                  <div className="space-y-4">
                    {rich.whyParagraphs.map((p, i) => (
                      <p key={i} className="text-brand-gray leading-relaxed">{p}</p>
                    ))}
                  </div>
                  {rich.whyCallout && (
                    <Callout type={rich.whyCalloutType ?? 'default'}>
                      {rich.whyCallout}
                    </Callout>
                  )}

                  {/* Key facts */}
                  <div className="mt-10 grid sm:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-brand-cream to-brand-light rounded-2xl p-6">
                      <h3 className="text-base font-bold text-brand-navy mb-4 flex items-center space-x-2">
                        <Globe className="w-5 h-5" />
                        <span>Location Details</span>
                      </h3>
                      <dl className="space-y-3 text-sm">
                        <div><dt className="font-semibold text-brand-gray">Capital</dt><dd className="text-brand-dark">{details.capital}</dd></div>
                        <div><dt className="font-semibold text-brand-gray">Languages</dt><dd className="text-brand-dark">{details.languages.join(', ')}</dd></div>
                        <div><dt className="font-semibold text-brand-gray">Currency</dt><dd className="text-brand-dark">{details.currency}</dd></div>
                        <div><dt className="font-semibold text-brand-gray">Timezone</dt><dd className="text-brand-dark">{details.timezone}</dd></div>
                      </dl>
                    </div>
                    <div className="bg-gradient-to-br from-brand-gold/10 to-brand-gold/20 rounded-2xl p-6">
                      <h3 className="text-base font-bold text-brand-navy mb-4 flex items-center space-x-2">
                        <FileText className="w-5 h-5 text-brand-gold" />
                        <span>Visa & Admission</span>
                      </h3>
                      <dl className="space-y-3 text-sm">
                        <div><dt className="font-semibold text-brand-gray">Visa Type</dt><dd className="text-brand-dark">{details.visaType}</dd></div>
                        <div><dt className="font-semibold text-brand-gray">Application Deadline</dt><dd className="text-brand-dark">{details.applicationDeadline}</dd></div>
                        <div><dt className="font-semibold text-brand-gray">Est. Living Cost</dt><dd className="font-bold text-brand-gold">${details.livingCostPerMonth}/month</dd></div>
                        <div><dt className="font-semibold text-brand-gray">Counselors Available</dt><dd className="text-brand-dark">{details.counselorsAvailable} experts</dd></div>
                      </dl>
                    </div>
                  </div>
                </>
              ) : (
                /* Fallback for countries without rich content */
                <div className="space-y-12">
                  <h2 className="text-3xl font-extrabold text-brand-navy mb-8">Key Information</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-brand-cream to-brand-light rounded-2xl p-8">
                      <h3 className="text-lg font-bold text-brand-navy mb-4 flex items-center space-x-2">
                        <Globe className="w-5 h-5 text-brand-navy" />
                        <span>Location Details</span>
                      </h3>
                      <dl className="space-y-4">
                        <div><dt className="text-sm font-semibold text-brand-gray">Capital</dt><dd className="text-lg text-brand-dark">{details.capital}</dd></div>
                        <div><dt className="text-sm font-semibold text-brand-gray">Languages</dt><dd className="text-lg text-brand-dark">{details.languages.join(', ')}</dd></div>
                        <div><dt className="text-sm font-semibold text-brand-gray">Currency</dt><dd className="text-lg text-brand-dark">{details.currency}</dd></div>
                        <div><dt className="text-sm font-semibold text-brand-gray">Timezone</dt><dd className="text-lg text-brand-dark">{details.timezone}</dd></div>
                      </dl>
                    </div>
                    <div className="bg-gradient-to-br from-brand-gold/10 to-brand-gold/20 rounded-2xl p-8">
                      <h3 className="text-lg font-bold text-brand-navy mb-4 flex items-center space-x-2">
                        <FileText className="w-5 h-5 text-brand-gold" />
                        <span>Visa & Admission</span>
                      </h3>
                      <dl className="space-y-4">
                        <div><dt className="text-sm font-semibold text-brand-gray">Visa Type</dt><dd className="text-lg text-brand-dark">{details.visaType}</dd></div>
                        <div><dt className="text-sm font-semibold text-brand-gray">Application Deadline</dt><dd className="text-lg text-brand-dark">{details.applicationDeadline}</dd></div>
                        <div><dt className="text-sm font-semibold text-brand-gray">Living Cost/Month</dt><dd className="text-lg font-bold text-brand-gold">${details.livingCostPerMonth}</dd></div>
                        <div><dt className="text-sm font-semibold text-brand-gray">Counselors Available</dt><dd className="text-lg text-brand-dark">{details.counselorsAvailable} experts</dd></div>
                      </dl>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── UNIVERSITIES (rich) ── */}
          {activeTab === 'universities' && rich && (
            <div>
              <SectionLabel>Where to Study</SectionLabel>
              <h2 className="text-3xl font-extrabold text-brand-navy mb-3">The universities worth knowing about</h2>
              <p className="text-brand-gray mb-8 max-w-2xl leading-relaxed">{rich.universitiesIntro}</p>
              <div className="grid md:grid-cols-2 gap-5">
                {rich.universitiesDetailed.map((uni, idx) => (
                  <div
                    key={idx}
                    className={`bg-white rounded-xl p-6 border-2 transition-shadow hover:shadow-lg ${
                      uni.featured ? 'border-brand-gold' : 'border-brand-light'
                    }`}
                  >
                    <p className="text-xs font-semibold tracking-widest uppercase text-brand-gray mb-2">{uni.rank}</p>
                    <h3 className="text-xl font-bold text-brand-navy mb-1">{uni.name}</h3>
                    <p className="text-sm text-brand-gray mb-3">{uni.location}</p>
                    {uni.fees && (
                      <p className="text-sm text-brand-dark mb-3">
                        <span className="text-brand-gray">Fees: </span>
                        <span className="font-semibold">{uni.fees}</span>
                      </p>
                    )}
                    <p className="text-sm text-brand-gray leading-relaxed mb-4">{uni.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {uni.tags.map((tag, ti) => (
                        <span
                          key={ti}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-brand-cream border border-brand-light text-brand-dark"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── FINANCE (rich) ── */}
          {activeTab === 'finance' && rich && (
            <div className="max-w-4xl space-y-14">

              {/* Costs */}
              <div>
                <SectionLabel>Money Matters</SectionLabel>
                <h2 className="text-3xl font-extrabold text-brand-navy mb-3">What it actually costs to study here</h2>
                <p className="text-brand-gray leading-relaxed mb-6">{rich.costsIntro}</p>

                <div className="border border-brand-light rounded-xl overflow-hidden">
                  {/* Header row */}
                  <div className="grid grid-cols-2 bg-brand-navy text-white text-xs font-semibold tracking-wider uppercase">
                    <div className="px-5 py-3">Expense</div>
                    <div className="px-5 py-3">Estimated Range</div>
                  </div>
                  {rich.costs.map((row, i) => (
                    <div
                      key={i}
                      className={`grid grid-cols-1 sm:grid-cols-2 border-t border-brand-light ${i % 2 === 0 ? 'bg-white' : 'bg-brand-cream/40'}`}
                    >
                      <div className="px-5 py-4 border-b sm:border-b-0 sm:border-r border-brand-light">
                        <p className="text-sm text-brand-gray">{row.label}</p>
                        <p className="font-bold text-brand-navy mt-1">{row.amount}</p>
                      </div>
                      <div className="px-5 py-4">
                        <p className="text-sm text-brand-gray leading-relaxed">{row.note}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {rich.costCallout && (
                  <Callout type="gold">
                    <strong>Work rights:</strong> {rich.costCallout}
                  </Callout>
                )}
                {rich.postGradInfo && (
                  <p className="text-brand-gray text-sm leading-relaxed mt-2">{rich.postGradInfo}</p>
                )}
              </div>

              {/* Scholarships */}
              <div>
                <SectionLabel>Financial Aid</SectionLabel>
                <h2 className="text-3xl font-extrabold text-brand-navy mb-3">Scholarships Indian students can actually get</h2>
                <p className="text-brand-gray leading-relaxed mb-6">{rich.scholarshipsIntro}</p>
                <div className="divide-y divide-brand-light">
                  {rich.scholarships.map((s, i) => (
                    <div key={i} className="py-6 flex gap-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-gold flex-shrink-0 mt-2" />
                      <div>
                        <h4 className="font-semibold text-brand-dark mb-2">{s.name}</h4>
                        <p className="text-sm text-brand-gray leading-relaxed mb-3">{s.description}</p>
                        <span className="inline-block text-xs font-semibold px-2 py-1 bg-emerald-50 text-emerald-700 rounded">
                          {s.coverage}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── VISA (rich) ── */}
          {activeTab === 'visa' && rich && (
            <div className="max-w-3xl">
              <SectionLabel>The Visa Process</SectionLabel>
              <h2 className="text-3xl font-extrabold text-brand-navy mb-3">How the student visa works — step by step</h2>
              <p className="text-brand-gray leading-relaxed mb-2">{rich.visaIntro}</p>
              {rich.visaNote && (
                <Callout type="default">
                  <strong>Important:</strong> {rich.visaNote}
                </Callout>
              )}
              <div className="mt-6 space-y-7">
                {rich.visaSteps.map((step, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-9 h-9 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-1">{step.title}</h4>
                      <p className="text-sm text-brand-gray leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              {rich.visaWarning && (
                <div className="mt-8 bg-brand-navy rounded-xl p-6 text-white">
                  <h4 className="font-bold text-lg mb-3">{rich.visaWarning.title}</h4>
                  {rich.visaWarning.paragraphs.map((p, i) => (
                    <p key={i} className="text-sm text-white/75 leading-relaxed mb-2 last:mb-0">{p}</p>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── PRACTICAL (rich) ── */}
          {activeTab === 'practical' && rich && (
            <div className="space-y-14">

              {/* UK: Cities */}
              {rich.cities && (
                <div>
                  <SectionLabel>Where You Will Live</SectionLabel>
                  <h2 className="text-3xl font-extrabold text-brand-navy mb-3">Choosing the right city makes a real difference</h2>
                  {rich.citiesIntro && <p className="text-brand-gray leading-relaxed mb-6 max-w-2xl">{rich.citiesIntro}</p>}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {rich.cities.map((city, i) => (
                      <div key={i} className="bg-white border border-brand-light rounded-xl p-5 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-2 mb-1">
                          <MapPin className="w-4 h-4 text-brand-gold" />
                          <h3 className="font-bold text-brand-navy">{city.name}</h3>
                        </div>
                        <p className="text-xs font-semibold text-brand-gold mb-3 tracking-wide">{city.monthlyCost}</p>
                        <p className="text-sm text-brand-gray leading-relaxed">{city.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Language */}
              {rich.language && (
                <div className="max-w-3xl">
                  <SectionLabel>Language</SectionLabel>
                  <h2 className="text-3xl font-extrabold text-brand-navy mb-4 flex items-center gap-3">
                    <Languages className="w-7 h-7 text-brand-gold" />
                    {rich.language.question}
                  </h2>
                  <div className="space-y-4">
                    {rich.language.paragraphs.map((p, i) => (
                      <p key={i} className="text-brand-gray leading-relaxed">{p}</p>
                    ))}
                  </div>
                  {rich.language.callout && (
                    <Callout type="teal">
                      {rich.language.callout}
                    </Callout>
                  )}
                </div>
              )}

              {/* FAQ */}
              <div className="max-w-3xl">
                <SectionLabel>Common Questions</SectionLabel>
                <h2 className="text-3xl font-extrabold text-brand-navy mb-6">What students ask us most</h2>
                <FAQAccordion faqs={rich.faqs} />
              </div>

              {/* Connect */}
              <div className="max-w-3xl">
                <div className="bg-white border-2 border-brand-light rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-brand-navy mb-2 flex items-center space-x-2">
                    <Phone className="w-6 h-6 text-brand-gold" />
                    <span>Connect with Us</span>
                  </h3>
                  <p className="text-brand-gray mb-6">
                    Have questions about studying in {details.name}? Our expert counselors are here to guide you through every step.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-brand-navy to-brand-gold text-white rounded-lg hover:shadow-lg transition-all font-semibold"
                    >
                      Schedule Free Consultation
                    </button>
                    <a
                      href={whatsappUrl(`Hi! I'm interested in studying in ${region?.name ?? 'your destination'}. Can Erudov Global help me with the process?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors font-semibold text-center"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ── FALLBACK TABS (non-rich countries) ── */}

          {activeTab === 'finance' && !rich && (
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-extrabold text-brand-navy mb-8">Financial Overview</h2>
                <div className="bg-gradient-to-br from-brand-cream to-brand-gold/10 rounded-2xl p-8 border border-brand-gold/20">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <dt className="text-sm font-semibold text-brand-gray mb-1">Monthly Living Cost</dt>
                      <dd className="text-4xl font-extrabold text-brand-navy">
                        ${LIVING_COSTS[details.name] ?? details.livingCostPerMonth}
                        <span className="text-lg font-medium text-brand-gray ml-2">/ month</span>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-brand-gray mb-1">Currency</dt>
                      <dd className="text-2xl font-bold text-brand-dark">{details.currency}</dd>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'education' && !rich && (
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-extrabold text-brand-navy mb-8 flex items-center space-x-2">
                  <GraduationCap className="w-8 h-8 text-brand-navy" />
                  <span>Top Universities</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {details.universities.map((uni, idx) => (
                    <div key={idx} className="bg-white border-2 border-brand-light rounded-xl p-6 hover:border-brand-gold/50 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-navy to-brand-gold rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-lg font-bold text-white">{idx + 1}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-brand-dark">{uni}</h3>
                          <p className="text-sm text-brand-gray mt-2">World-class institution offering diverse programs</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'career' && !rich && (
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-extrabold text-brand-navy mb-8 flex items-center space-x-2">
                  <BookOpen className="w-8 h-8 text-brand-gold" />
                  <span>Industry Opportunities</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {details.industries.map((industry, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-brand-cream to-brand-gold/10 rounded-xl p-6 border border-brand-gold/30 hover:shadow-lg transition-all duration-300">
                      <h3 className="text-lg font-semibold text-brand-dark">{industry}</h3>
                      <p className="text-sm text-brand-gray mt-2">Growing sector with excellent career prospects</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'practical' && !rich && (
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border-2 border-brand-light rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-brand-navy mb-6 flex items-center space-x-2">
                    <Users className="w-6 h-6 text-brand-navy" />
                    <span>Student Community</span>
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Active student support groups and networks',
                      'Cultural exchange programs and events',
                      'Internship and placement assistance',
                      'Affordable accommodation options',
                    ].map((item) => (
                      <li key={item} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-brand-gold/15 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-sm font-bold text-brand-gold">✓</span>
                        </div>
                        <span className="text-brand-dark">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white border-2 border-brand-light rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-brand-navy mb-6 flex items-center space-x-2">
                    <Phone className="w-6 h-6 text-brand-gold" />
                    <span>Connect with Us</span>
                  </h3>
                  <p className="text-brand-gray mb-6">
                    Have questions about studying in {details.name}? Our expert counselors are here to help.
                  </p>
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))}
                    className="w-full px-6 py-3 bg-gradient-to-r from-brand-navy to-brand-gold text-white rounded-lg hover:shadow-lg transition-all font-semibold mb-4"
                  >
                    Schedule Consultation
                  </button>
                  <a
                    href={whatsappUrl(`Hi! I'm interested in studying in ${region?.name ?? 'your destination'}. Can Erudov Global help me with the process?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors font-semibold text-center"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
