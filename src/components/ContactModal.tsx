import { X, Send, CheckCircle, AlertCircle, Loader2, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { REGIONS } from '../constants/regions';

const SERVICES = [
  'Career Counselling',
  'Visa Assistance',
  'University Selection',
  'Course Selection',
  'Education Loan Support',
  'Pre-Departure Orientation',
];

const ENQUIRY_BY = [
  ['student', 'Student (18+)'],
  ['parent', 'Parent or guardian'],
] as const;

const INTAKES = ['January 2025', 'September 2025', 'January 2026', 'September 2026', 'January 2027', 'Not sure yet'];
const LEVELS = ['Undergraduate (Bachelor\'s)', 'Postgraduate (Master\'s)', 'PhD / Doctoral', 'Diploma / Foundation', 'Not sure yet'];

interface FormData {
  enquiryBy: typeof ENQUIRY_BY[number][0] | '';
  name: string;
  email: string;
  phone: string;
  country: string;
  intake: string;
  level: string;
  services: string[];
  message: string;
  _honey: string; // honeypot — must stay empty
}

const EMPTY_FORM: FormData = {
  enquiryBy: '',
  name: '',
  email: '',
  phone: '',
  country: '',
  intake: '',
  level: '',
  services: [],
  message: '',
  _honey: '',
};

async function submitToSheet(data: FormData) {
  const url = import.meta.env.VITE_SHEETS_WEBHOOK_URL;
  if (!url || url.includes('YOUR_DEPLOYMENT_ID')) return;
  await fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, enquiryBy: data.enquiryBy, services: data.services.join(', '), submittedAt: new Date().toISOString() }),
  });
}

async function sendEmail(data: FormData) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (!serviceId || serviceId === 'your_service_id') return;
  await emailjs.send(
    serviceId,
    templateId,
    {
      enquiry_by: data.enquiryBy,
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      country: data.country,
      service: data.services.join(', '),
      message: data.message,
    },
    publicKey,
  );
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: Props) {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const serviceDropdownRef = useRef<HTMLDivElement>(null);

  // Close service dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (serviceDropdownRef.current && !serviceDropdownRef.current.contains(e.target as Node)) {
        setIsServiceOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Reset on open
  useEffect(() => {
    if (isOpen) { setForm(EMPTY_FORM); setConsent(false); setStatus('idle'); }
  }, [isOpen]);

  if (!isOpen) return null;

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Honeypot check — bots fill hidden fields, humans don't
    if (form._honey) return;
    if (!consent) return;
    setStatus('submitting');
    try {
      await Promise.all([sendEmail(form), submitToSheet(form)]);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-gold focus:outline-none font-medium text-gray-900 bg-white transition-colors';

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white rounded-t-2xl px-8 pt-8 pb-4 border-b border-gray-100 z-10">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="pr-8">
            <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold-dark rounded-full text-xs font-semibold inline-block mb-3">
              Free Consultation
            </span>
            <h2 className="text-2xl font-bold text-gray-900">Schedule Your Free Session</h2>
            <p className="text-gray-500 text-sm mt-1">Fill in your details and our counselor will reach out within 24 hours.</p>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-6">
          {status === 'success' ? (
            <div className="flex flex-col items-center text-center py-8 space-y-4">
              <CheckCircle className="w-16 h-16 text-brand-gold" />
              <h3 className="text-xl font-bold text-gray-900">You're all set!</h3>
              <p className="text-gray-500">We've received your request and will contact you within 24 hours.</p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-gradient-to-r from-brand-navy to-brand-gold text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot — hidden from real users, bots fill this */}
              <input
                type="text"
                name="_honey"
                value={form._honey}
                onChange={set('_honey')}
                aria-hidden="true"
                tabIndex={-1}
                style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0 }}
              />

              {/* Who is completing this enquiry? */}
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">Who is completing this enquiry? <span className="text-red-500">*</span></p>
                <div className="flex gap-6">
                  {ENQUIRY_BY.map(([val, label]) => (
                    <label key={val} className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="radio"
                        name="enquiryBy"
                        value={val}
                        required
                        checked={form.enquiryBy === val}
                        onChange={() => setForm((f) => ({ ...f, enquiryBy: val }))}
                        className="w-4 h-4 accent-brand-gold"
                      />
                      <span className="text-sm font-medium text-gray-700">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="cf-name" className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                  <input
                    id="cf-name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={set('name')}
                    className={inputClass}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="cf-phone" className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                  <input
                    id="cf-phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={set('phone')}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="cf-email" className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                <input
                  id="cf-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={set('email')}
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cf-country" className="block text-sm font-semibold text-gray-700 mb-1.5">Country of Interest</label>
                  <select id="cf-country" value={form.country} onChange={set('country')} className={`${inputClass} pr-10 appearance-none`}>
                    <option value="">Select country</option>
                    {REGIONS.map((r) => (
                      <option key={r.code} value={r.name}>{r.flag} {r.name}</option>
                    ))}
                  </select>
                </div>

                {/* Multi-select for services */}
                <div ref={serviceDropdownRef} className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service Needed</label>
                  <button
                    type="button"
                    onClick={() => setIsServiceOpen((v) => !v)}
                    className={`${inputClass} flex items-center justify-between text-left`}
                  >
                    <span className={form.services.length === 0 ? 'text-gray-400 font-normal' : ''}>
                      {form.services.length === 0
                        ? 'Select services'
                        : `${form.services.length} selected`}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${isServiceOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServiceOpen && (
                    <div className="absolute z-20 left-0 right-0 mt-1 bg-white border-2 border-brand-gold rounded-lg shadow-lg overflow-hidden">
                      {/* Select All row */}
                      <label className="flex items-center space-x-3 px-4 py-2.5 hover:bg-brand-cream cursor-pointer transition-colors border-b border-brand-light">
                        <input
                          type="checkbox"
                          checked={form.services.length === SERVICES.length}
                          ref={(el) => { if (el) el.indeterminate = form.services.length > 0 && form.services.length < SERVICES.length; }}
                          onChange={() =>
                            setForm((f) => ({
                              ...f,
                              services: f.services.length === SERVICES.length ? [] : [...SERVICES],
                            }))
                          }
                          className="w-4 h-4 accent-brand-gold rounded"
                        />
                        <span className="text-sm font-semibold text-brand-navy">Select All</span>
                      </label>
                      {SERVICES.map((s) => {
                        const checked = form.services.includes(s);
                        return (
                          <label
                            key={s}
                            className="flex items-center space-x-3 px-4 py-2.5 hover:bg-brand-cream cursor-pointer transition-colors"
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() =>
                                setForm((f) => ({
                                  ...f,
                                  services: checked
                                    ? f.services.filter((x) => x !== s)
                                    : [...f.services, s],
                                }))
                              }
                              className="w-4 h-4 accent-brand-gold rounded"
                            />
                            <span className="text-sm font-medium text-gray-700">{s}</span>
                          </label>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cf-intake" className="block text-sm font-semibold text-gray-700 mb-1.5">Intended Intake</label>
                  <select id="cf-intake" value={form.intake} onChange={set('intake')} className={`${inputClass} appearance-none`}>
                    <option value="">Select intake</option>
                    {INTAKES.map((i) => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="cf-level" className="block text-sm font-semibold text-gray-700 mb-1.5">Level of Study</label>
                  <select id="cf-level" value={form.level} onChange={set('level')} className={`${inputClass} appearance-none`}>
                    <option value="">Select level</option>
                    {LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="cf-message" className="block text-sm font-semibold text-gray-700 mb-1.5">Message (optional)</label>
                <textarea
                  id="cf-message"
                  rows={3}
                  placeholder="Tell us about your goals or any specific questions…"
                  value={form.message}
                  onChange={set('message')}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Consent checkbox */}
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="w-4 h-4 mt-0.5 accent-brand-gold rounded flex-shrink-0"
                />
                <span className="text-sm text-gray-600 leading-relaxed">
                  I agree to Erudov Global collecting and using my information to contact me about study abroad services. View our{' '}
                  <button
                    type="button"
                    onClick={() => { onClose(); navigate('/privacy-policy'); }}
                    className="text-brand-gold hover:underline font-semibold"
                  >
                    Privacy Policy
                  </button>
                  . <span className="text-red-500">*</span>
                </span>
              </label>

              {status === 'error' && (
                <div className="flex items-center space-x-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Something went wrong. Please try again or contact us directly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting' || !consent}
                className="w-full flex items-center justify-center space-x-2 py-3.5 bg-gradient-to-r from-brand-navy to-brand-gold text-white rounded-xl font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-200 disabled:opacity-70 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /><span>Submitting…</span></>
                ) : (
                  <><Send className="w-5 h-5" /><span>Schedule Free Session</span></>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
