import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Target,
  Eye,
  Users,
  Globe,
  ShieldCheck,
  Layers,
  MessageCircle,
} from 'lucide-react';
import { REGIONS } from '../constants/regions';
import { whatsappUrl } from '../utils/whatsapp';

// ─── Helper components ────────────────────────────────────────────────────────

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
            {open === i
              ? <ChevronUp className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
              : <ChevronDown className="w-5 h-5 text-brand-gray flex-shrink-0 mt-0.5" />}
          </button>
          {open === i && (
            <p className="mt-3 text-sm text-brand-gray leading-relaxed">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    question: 'Why does Erudov focus on emerging destinations?',
    answer: 'Because many of these countries offer exceptional education, research opportunities, scholarships, and career pathways while remaining underserved in terms of reliable guidance. Our specialization allows us to provide deeper expertise where students need it most.',
  },
  {
    question: 'Do you only work with students from major cities?',
    answer: 'No. We operate online and support students from across India, ensuring the same level of guidance and accessibility regardless of location.',
  },
  {
    question: 'Can parents be involved in the planning process?',
    answer: 'Absolutely. We encourage parent participation and provide dedicated guidance on financial planning, timelines, safety, and important decision-making throughout the study abroad journey.',
  },
  {
    question: 'Do you help beyond university admissions?',
    answer: 'Yes. We support students with university selection, applications, visa assistance, education loan guidance, scholarship planning, documentation, and pre-departure preparation, offering an end-to-end experience.',
  },
  {
    question: 'What makes Erudov different?',
    answer: 'Our specialist focus, structured processes, personalized recommendations, and commitment to transparency set us apart. We aim to help students make informed decisions based on research and long-term outcomes rather than trends or assumptions.',
  },
];

const PILLARS = [
  {
    icon: Target,
    title: 'Student-Centric by Design',
    body: 'Every recommendation we make begins with the student — not the institution. We take the time to understand your academic background, career aspirations, financial considerations, personal interests, preferred learning environment, and long-term professional goals. Only then do we recommend destinations, universities, and courses that genuinely align with your profile.',
  },
  {
    icon: Layers,
    title: 'Structure in an Unstructured Space',
    body: "One of the biggest challenges students face when considering emerging destinations is the lack of consistent and reliable guidance. Information is often fragmented, outdated, or difficult to verify. At Erudov, we've built standardised processes to bring clarity to this complexity — from the first counselling session through university selection, applications, visa preparation, education loan assistance, and pre-departure orientation.",
  },
  {
    icon: ShieldCheck,
    title: 'Honest Advice Over Easy Answers',
    body: "We believe trust is earned through transparency. That means we do not make unrealistic claims or rely on guarantees that no consultancy can genuinely control. Instead, we focus on research-backed recommendations, accurate and up-to-date information, careful documentation, thorough preparation, clear communication, and realistic expectations.",
  },
  {
    icon: Users,
    title: 'Reducing Uncertainty for Students and Parents',
    body: 'Studying abroad is one of the most significant investments a family can make. Our role is to replace uncertainty with preparation. Through detailed counselling, transparent communication, practical planning, and continuous support, we help students and parents navigate each stage with greater clarity and confidence. Parents are an integral part of this journey.',
  },
];

// ─── Main component ───────────────────────────────────────────────────────────

export default function AboutPage() {
  const navigate = useNavigate();
  const goHome = () => navigate('/');

  return (
    <>
      <Helmet>
        <title>About Us — Erudov Global</title>
        <meta name="description" content="Learn about Erudov Global — who we are, our mission, and how we help Indian students navigate international university admissions." />
        <meta property="og:title" content="About Us — Erudov Global" />
        <meta property="og:description" content="Learn about Erudov Global — who we are, our mission, and how we help Indian students navigate international university admissions." />
        <meta property="og:url" content="https://www.erudov.com/about" />
        <link rel="canonical" href="https://www.erudov.com/about" />
      </Helmet>
    <div className="min-h-screen bg-white">

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
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
              <Globe className="w-8 h-8 text-brand-gold" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-bold tracking-widest uppercase text-brand-gold mb-1">Who We Are</div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy leading-tight">
                About Erudov
              </h1>
              <p className="text-lg text-brand-gray mt-2 max-w-2xl leading-relaxed">
                India's specialist study abroad consultancy for emerging destinations — founded in 2020 to bring structure, transparency, and depth to opportunities most consultancies overlook.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 border border-brand-light rounded-xl overflow-hidden mt-8">
                {[
                  { value: '2020', label: 'Founded' },
                  { value: '11+', label: 'Destinations covered' },
                  { value: 'Pan-India', label: 'Online consultations' },
                  { value: 'End-to-end', label: 'Student support' },
                ].map((s, i, arr) => (
                  <div
                    key={i}
                    className={`px-6 py-5 bg-white ${i < arr.length - 1 ? 'border-r border-b md:border-b-0 border-brand-light' : ''}`}
                  >
                    <div className="text-2xl font-extrabold text-brand-navy leading-tight">{s.value}</div>
                    <div className="text-xs text-brand-gray font-medium mt-1 tracking-wide uppercase">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Breadcrumb nav ──────────────────────────────────────────────────── */}
      <section className="border-b border-brand-light bg-white sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 py-4 text-sm font-semibold text-brand-gray overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-brand-navy transition-colors">Home</Link>
            <span className="text-brand-light text-lg">›</span>
            <span className="text-brand-gold">About Erudov</span>
          </div>
        </div>
      </section>

      {/* ── Body ────────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[60vh]">

        {/* Opening story */}
        <div className="max-w-3xl space-y-6 mb-16">
          <SectionLabel>Our Story</SectionLabel>
          <h2 className="text-3xl font-extrabold text-brand-navy">
            We Believe the Best Opportunities Aren't Always the Most Popular Ones
          </h2>
          <p className="text-brand-gray leading-relaxed">
            For years, the study abroad conversation in India has revolved around a limited set of destinations and familiar university names. Yet beyond these well-known choices lies a world of exceptional opportunities — countries with globally respected universities, innovative research ecosystems, generous scholarship programs, affordable education, and strong career prospects.
          </p>
          <p className="text-brand-gray leading-relaxed">
            Unfortunately, these destinations often receive little attention and even less structured guidance.
          </p>
          <p className="text-brand-gray leading-relaxed">
            Erudov was founded in 2020 to change that. We exist to help ambitious students discover and pursue international education opportunities that are frequently overlooked, while providing the level of planning, transparency, and professional support they deserve.
          </p>
        </div>

        {/* Who we are */}
        <div className="max-w-3xl space-y-4 mb-16">
          <SectionLabel>Who We Are</SectionLabel>
          <h2 className="text-3xl font-extrabold text-brand-navy">A Joint Initiative Built on Honest Guidance</h2>
          <p className="text-brand-gray leading-relaxed">
            Erudov is a joint initiative led by experienced education counsellors and industry professionals who share a common goal: helping students make informed international education decisions through honest advice and well-structured processes.
          </p>
          <p className="text-brand-gray leading-relaxed">
            Operating entirely online, we serve students and families across India, making specialist guidance accessible regardless of geography. Whether you're in a metropolitan city or a smaller town, you receive the same level of personalised attention, strategic planning, and dedicated support.
          </p>
          <p className="text-brand-gray leading-relaxed">
            Our work combines academic research, admission planning, visa guidance, financial awareness, and practical preparation into a single, student-focused experience.
          </p>
        </div>

        {/* Destinations */}
        <div className="mb-16">
          <div className="max-w-3xl mb-8">
            <SectionLabel>Our Specialisation</SectionLabel>
            <h2 className="text-3xl font-extrabold text-brand-navy mb-4">
              Specialists in Destinations That Deserve More Attention
            </h2>
            <p className="text-brand-gray leading-relaxed">
              Our expertise lies in destinations that offer outstanding educational value but remain underrepresented in the Indian study abroad market. By specialising rather than trying to cover every country in the world, we are able to provide students with deeper insights and more thoughtful guidance.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {REGIONS.map((region) => (
              <button
                key={region.code}
                onClick={() => navigate(`/destinations/${region.slug}`)}
                className="flex items-center gap-2.5 px-4 py-3 bg-white border border-brand-light rounded-xl hover:border-brand-gold hover:bg-brand-cream transition-all text-sm font-medium text-brand-dark group"
              >
                <span className="text-xl">{region.flag}</span>
                <span className="group-hover:text-brand-navy">{region.name}</span>
              </button>
            ))}
          </div>
        </div>

        <hr className="border-brand-light mb-16" />

        {/* Four pillars */}
        <div className="mb-16">
          <div className="max-w-3xl mb-10">
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="text-3xl font-extrabold text-brand-navy">What Sets Our Approach Apart</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {PILLARS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-5 p-6 rounded-2xl border border-brand-light hover:border-brand-gold/40 hover:bg-brand-cream/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">{title}</h3>
                  <p className="text-sm text-brand-gray leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services overview */}
        <div className="max-w-3xl mb-16">
          <SectionLabel>More Than Admissions</SectionLabel>
          <h2 className="text-3xl font-extrabold text-brand-navy mb-4">End-to-End Guidance Under One Roof</h2>
          <p className="text-brand-gray leading-relaxed mb-6">
            Our relationship with students extends well beyond helping them secure a university offer. We provide end-to-end guidance that can include:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Career counselling and academic planning',
              'Country and university selection',
              'Course evaluation',
              'Application preparation',
              'Scholarship guidance',
              'Education loan assistance',
              'Student visa support',
              'Document review',
              'Pre-departure orientation',
              'Practical settlement guidance for life abroad',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 py-2.5 border-b border-brand-light last:border-0">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                <span className="text-sm text-brand-gray">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vision + Mission */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="p-8 rounded-2xl bg-brand-navy text-white">
            <div className="w-10 h-10 rounded-xl bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center mb-5">
              <Eye className="w-5 h-5 text-brand-gold" />
            </div>
            <SectionLabel>Our Vision</SectionLabel>
            <p className="text-white/90 leading-relaxed mt-3">
              To become India's most trusted specialist consultancy for emerging study destinations by helping students make informed decisions, access global opportunities, and pursue meaningful international careers with confidence.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-cream to-brand-gold/10 border border-brand-gold/20">
            <div className="w-10 h-10 rounded-xl bg-brand-navy flex items-center justify-center mb-5">
              <Target className="w-5 h-5 text-brand-gold" />
            </div>
            <SectionLabel>Our Mission</SectionLabel>
            <p className="text-brand-gray leading-relaxed mt-3">
              To deliver personalised, research-backed, and transparent study abroad guidance that empowers students to explore opportunities beyond conventional choices while receiving comprehensive support at every stage of their journey.
            </p>
          </div>
        </div>

        <hr className="border-brand-light mb-16" />

        {/* FAQs */}
        <div className="max-w-3xl mb-16">
          <SectionLabel>Frequently Asked Questions</SectionLabel>
          <h2 className="text-3xl font-extrabold text-brand-navy mb-8">Common Questions</h2>
          <FAQAccordion faqs={FAQS} />
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-brand-navy to-brand-navy-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <SectionLabel>Get Started</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 mt-2">Begin Your Journey with Confidence</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Whether you're just starting to explore international education or are ready to submit your applications, the first step is understanding your options. We combine research, planning, and personalised support to help you navigate the process with clarity and purpose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))}
              className="px-8 py-3.5 bg-brand-gold text-white font-semibold rounded-xl hover:bg-brand-gold-dark transition-colors"
            >
              Book a Free Consultation
            </button>
            <a
              href={whatsappUrl('Hi! I\'d like to know more about Erudov\'s services.')}
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
    </>
  );
}
