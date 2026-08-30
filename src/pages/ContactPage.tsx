import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  ChevronLeft,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { whatsappUrl } from '../utils/whatsapp';

// ─── Help form ────────────────────────────────────────────────────────────────

interface HelpForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  _honey: string;
}

const EMPTY: HelpForm = { name: '', email: '', phone: '', subject: '', message: '', _honey: '' };

async function sendHelpEmail(data: HelpForm) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (!serviceId || serviceId === 'your_service_id') return;
  await emailjs.send(
    serviceId,
    templateId,
    {
      // Keep this payload's keys in sync with ContactModal.tsx so a single
      // EmailJS template renders every placeholder for both forms.
      enquiry_by: '',
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      country: '',
      service: '',
      subject: data.subject || 'Help Enquiry',
      message: data.message,
    },
    publicKey,
  );
}

async function submitHelpToSheet(data: HelpForm) {
  const res = await fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: 'help-enquiry',
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      _honey: data._honey,
    }),
  });
  // 404 = endpoint not deployed (e.g. `npm run dev` without `vercel dev`) — skip silently.
  if (res.status === 404) return;
  if (!res.ok) throw new Error(`lead submission failed (${res.status})`);
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ContactPage() {
  const [form, setForm] = useState<HelpForm>(EMPTY);
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const set = (field: keyof HelpForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form._honey) return; // honeypot
    if (!consent) return;
    setStatus('submitting');
    try {
      // Email is the primary channel — only its failure blocks the user.
      await sendHelpEmail(form);
      // Spreadsheet log is best-effort; never let it fail the submission.
      submitHelpToSheet(form).catch((err) => console.error('sheet log failed', err));
      setStatus('success');
      setForm(EMPTY);
      setConsent(false);
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-gold focus:outline-none font-medium text-gray-900 bg-white transition-colors';

  return (
    <>
      <Helmet>
        <title>Contact Us — Erudov Global</title>
        <meta
          name="description"
          content="Get in touch with Erudov Global. Reach us by email, phone, or send a message — our counsellors are here to help with your study abroad questions."
        />
        <meta property="og:title" content="Contact Us — Erudov Global" />
        <meta property="og:description" content="Reach out to Erudov Global for study abroad guidance. Email, phone, or WhatsApp — we respond within 24 hours." />
        <meta property="og:url" content="https://www.erudov.com/contact" />
        <link rel="canonical" href="https://www.erudov.com/contact" />
      </Helmet>

      <div className="min-h-screen bg-white">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-brand-cream via-white to-brand-gold/5 pt-28 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Link
              to="/"
              className="flex items-center space-x-2 text-brand-gray hover:text-brand-navy transition-colors mb-6 font-semibold"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="text-xs font-bold tracking-widest uppercase text-brand-gold mb-2">Get in Touch</div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy leading-tight mb-3">
              Contact Us
            </h1>
            <p className="text-lg text-brand-gray max-w-2xl leading-relaxed">
              Have a question about studying abroad? Our counsellors are here to help. Reach out through any of the channels below — we typically respond within 24 hours.
            </p>
          </div>
        </section>

        {/* ── Breadcrumb ────────────────────────────────────────────────────── */}
        <section className="border-b border-brand-light bg-white sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-3 py-4 text-sm font-semibold text-brand-gray">
              <Link to="/" className="hover:text-brand-navy transition-colors">Home</Link>
              <span className="text-brand-light text-lg">›</span>
              <span className="text-brand-gold">Contact</span>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-2 gap-14">

            {/* ── Contact info ──────────────────────────────────────────────── */}
            <div className="space-y-10">

              {/* Contact cards */}
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-brand-gold mb-5">Contact Details</p>
                <div className="space-y-4">

                  <a
                    href="mailto:info@erudov.com"
                    className="flex items-start gap-4 p-5 rounded-2xl border border-brand-light hover:border-brand-gold hover:bg-brand-cream/40 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-brand-navy flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <div className="text-xs font-bold tracking-widest uppercase text-brand-gray mb-0.5">Email</div>
                      <div className="font-semibold text-brand-navy group-hover:text-brand-gold transition-colors">
                        info@erudov.com
                      </div>
                      <div className="text-sm text-brand-gray mt-0.5">We reply within 24 hours</div>
                    </div>
                  </a>

                  <a
                    href="tel:+919988838388"
                    className="flex items-start gap-4 p-5 rounded-2xl border border-brand-light hover:border-brand-gold hover:bg-brand-cream/40 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-brand-navy flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <div className="text-xs font-bold tracking-widest uppercase text-brand-gray mb-0.5">Phone</div>
                      <div className="font-semibold text-brand-navy group-hover:text-brand-gold transition-colors">
                        +91 99888 38388
                      </div>
                      <div className="text-sm text-brand-gray mt-0.5">Monday – Saturday, 9 am – 7 pm IST</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-5 rounded-2xl border border-brand-light bg-white">
                    <div className="w-11 h-11 rounded-xl bg-brand-navy flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <div className="text-xs font-bold tracking-widest uppercase text-brand-gray mb-0.5">Location</div>
                      <div className="font-semibold text-brand-navy">Pan India</div>
                      <div className="text-sm text-brand-gray mt-0.5">Online consultations — available from anywhere in India</div>
                    </div>
                  </div>

                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                  <span className="font-bold text-green-800">Prefer WhatsApp?</span>
                </div>
                <p className="text-sm text-green-700 mb-4 leading-relaxed">
                  Message us directly on WhatsApp for a quick response. Many students find it the easiest way to get started.
                </p>
                <a
                  href={whatsappUrl('Hi! I have a question about studying abroad with Erudov.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Free consultation CTA */}
              <div className="p-6 rounded-2xl bg-brand-navy text-white">
                <p className="text-xs font-bold tracking-widest uppercase text-brand-gold mb-3">Free Consultation</p>
                <h2 className="text-xl font-bold mb-2">Ready to plan your study abroad journey?</h2>
                <p className="text-white/75 text-sm leading-relaxed mb-5">
                  Book a free one-on-one session with our counsellors. We'll walk you through destinations, eligibility, timelines, and costs — no commitment required.
                </p>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))}
                  className="px-6 py-2.5 bg-brand-gold hover:bg-brand-gold-dark text-white rounded-xl font-semibold transition-colors text-sm"
                >
                  Book a Free Session
                </button>
              </div>
            </div>

            {/* ── Help form ─────────────────────────────────────────────────── */}
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-brand-gold mb-2">Send a Message</p>
              <h2 className="text-2xl font-extrabold text-brand-navy mb-2">We're Here to Help</h2>
              <p className="text-brand-gray text-sm mb-8 leading-relaxed">
                Fill in the form below and one of our counsellors will get back to you within 24 hours.
              </p>

              {status === 'success' ? (
                <div className="flex flex-col items-center text-center py-16 space-y-4 border-2 border-brand-gold/20 rounded-2xl bg-brand-cream/30">
                  <CheckCircle className="w-14 h-14 text-brand-gold" />
                  <h3 className="text-xl font-bold text-brand-navy">Message Received!</h3>
                  <p className="text-brand-gray max-w-sm">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 px-6 py-2.5 bg-gradient-to-r from-brand-navy to-brand-gold text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="_honey"
                    value={form._honey}
                    onChange={set('_honey')}
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0 }}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="hp-name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="hp-name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={form.name}
                        onChange={set('name')}
                        className={inputClass}
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="hp-phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="hp-phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={set('phone')}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="hp-email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="hp-email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={set('email')}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="hp-subject" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Subject
                    </label>
                    <select
                      id="hp-subject"
                      value={form.subject}
                      onChange={set('subject')}
                      className={`${inputClass} appearance-none`}
                    >
                      <option value="">Select a topic</option>
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Destinations & Universities">Destinations &amp; Universities</option>
                      <option value="Visa Assistance">Visa Assistance</option>
                      <option value="Scholarships & Funding">Scholarships &amp; Funding</option>
                      <option value="Education Loan Guidance">Education Loan Guidance</option>
                      <option value="Pre-Departure Preparation">Pre-Departure Preparation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="hp-message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="hp-message"
                      required
                      rows={5}
                      placeholder="Tell us how we can help — what country are you interested in, what's your timeline, and any specific questions you have…"
                      value={form.message}
                      onChange={set('message')}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Consent */}
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="w-4 h-4 mt-0.5 accent-brand-gold rounded flex-shrink-0"
                    />
                    <span className="text-sm text-gray-600 leading-relaxed">
                      I agree to Erudov Global collecting and using my information to respond to my enquiry. View our{' '}
                      <Link to="/privacy-policy" className="text-brand-gold hover:underline font-semibold">
                        Privacy Policy
                      </Link>
                      . <span className="text-red-500">*</span>
                    </span>
                  </label>

                  {status === 'error' && (
                    <div className="flex items-center space-x-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>Something went wrong. Please try again or contact us directly at info@erudov.com.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting' || !consent}
                    className="w-full flex items-center justify-center space-x-2 py-3.5 bg-gradient-to-r from-brand-navy to-brand-gold text-white rounded-xl font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-200 disabled:opacity-70 disabled:scale-100 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /><span>Sending…</span></>
                    ) : (
                      <><Send className="w-5 h-5" /><span>Send Message</span></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
